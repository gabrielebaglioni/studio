"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { programs, socialLinks } from "@/lib/data";
import { useScrollSequence } from "@/hooks/useScrollSequence";
import { useIsMobile } from "@/hooks/use-mobile";
import { LoadingScreen } from "./loading-screen";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  sequenceCache,
  initSequenceCache,
  getAdaptiveConcurrency,
  getAdaptiveDpr,
} from "@/lib/sequence/sequenceCache";

const SWITCH_FADE_MS = 220;

const PARALLAX = [
  { scrollVh: 260, easing: "easeOut" as const },
  { scrollVh: 300, easing: "linear" as const },
  { scrollVh: 340, easing: "easeInOut" as const },
];

const PINNED_WINDOW = {
  CLIMATE: 26,
  FOOD: 32,
  SOCIAL: 40,
} as const;

function raf() {
  return new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
}

function getHeroAbsoluteTop(el: HTMLElement) {
  return window.scrollY + el.getBoundingClientRect().top;
}

async function waitHeroAtStart(
  heroEl: HTMLElement,
  maxFrames = 16,
  tolerancePx = 2
) {
  for (let i = 0; i < maxFrames; i++) {
    const top = heroEl.getBoundingClientRect().top;
    if (Math.abs(top) <= tolerancePx) return;
    await raf();
  }
}

function windowForMobile(programName: string) {
  if (programName === "CLIMATE") return { ahead: 14, behind: 6 };
  if (programName === "FOOD") return { ahead: 20, behind: 8 };
  return { ahead: 26, behind: 10 };
}

export function HeroSection() {
  const isMobile = useIsMobile();

  // Boot preload state
  const [bootReady, setBootReady] = useState(false);
  const [bootProgress, setBootProgress] = useState(0);

  // UI state
  const [programIndex, setProgramIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);

  // Micro-motion pulse on switch
  const [indexPulse, setIndexPulse] = useState(0);

  // Refs
  const heroRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Freeze all auto draws during switch
  const freezeDrawRef = useRef(false);

  // Switch token to cancel outdated async switch operations
  const switchTokenRef = useRef(0);

  // Cache subscription: redraw when frames arrive
  const cacheVersion = useSyncExternalStore(
    sequenceCache.subscribe,
    sequenceCache.getVersion,
    sequenceCache.getVersion
  );

  const program = programs[programIndex];
  const parallax = PARALLAX[programIndex % PARALLAX.length];

  const dpr = useMemo(() => {
    if (typeof window === "undefined") return 1;
    return getAdaptiveDpr(isMobile);
  }, [isMobile]);

  const { currentFrame, setFrameImmediate, forceFrame0Lock, unlockAfterSwitch } =
    useScrollSequence({
      program,
      heroRef,
      easing: parallax.easing,
    });

  /**
   * BOOT: init + configure cache + pin hot windows + preload all
   */
  useEffect(() => {
    const abort = new AbortController();

    sequenceCache.configureForDevice(isMobile);
    initSequenceCache(programs);

    for (const p of programs) {
      const n =
        p.name === "CLIMATE"
          ? PINNED_WINDOW.CLIMATE
          : p.name === "FOOD"
          ? PINNED_WINDOW.FOOD
          : PINNED_WINDOW.SOCIAL;

      sequenceCache.pinRange(p.name, 0, Math.min(p.sequence.frameCount - 1, n));
    }

    const run = async () => {
      try {
        const concurrency = getAdaptiveConcurrency(isMobile);

        await sequenceCache.preloadAll({
          concurrency,
          signal: abort.signal,
          onProgress: (pct) => setBootProgress(pct),
        });

        if (!abort.signal.aborted) {
          setBootProgress(100);
          setBootReady(true);
        }
      } catch {
        if (!abort.signal.aborted) {
          setBootProgress(100);
          setBootReady(true);
        }
      }
    };

    void run();
    return () => abort.abort();
  }, [isMobile]);

  /**
   * Draw a specific frame explicitly (no stale closures).
   */
  const drawFrame = useCallback(
    (programName: string, frameIndex0: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const frame = sequenceCache.getFrame(programName, frameIndex0);
      if (!frame) return;

      const w = window.innerWidth;
      const h = window.innerHeight;

      const targetW = Math.floor(w * dpr);
      const targetH = Math.floor(h * dpr);

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const imgAspect = frame.width / frame.height;
      const canvasAspect = w / h;

      let rw: number, rh: number, x: number, y: number;

      if (imgAspect > canvasAspect) {
        rh = h;
        rw = rh * imgAspect;
        x = (w - rw) / 2;
        y = 0;
      } else {
        rw = w;
        rh = rw / imgAspect;
        x = 0;
        y = (h - rh) / 2;
      }

      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(frame, x, y, rw, rh);
    },
    [dpr]
  );

  /**
   * Auto draw (only when not switching).
   */
  const drawAuto = useCallback(() => {
    if (!bootReady) return;
    if (freezeDrawRef.current) return;
    drawFrame(program.name, currentFrame);
  }, [bootReady, drawFrame, program.name, currentFrame]);

  useEffect(() => {
    drawAuto();
  }, [drawAuto, cacheVersion]);

  useEffect(() => {
    const onResize = () => drawAuto();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [drawAuto]);

  /**
   * Mobile: keep a moving hot window warm
   */
  useEffect(() => {
    if (!bootReady || !isMobile) return;
    const { ahead, behind } = windowForMobile(program.name);
    sequenceCache.preloadAround(program.name, currentFrame, ahead, behind);
  }, [bootReady, isMobile, program.name, currentFrame]);

  /**
   * Deterministic scroll reset: go to HERO start (not page top).
   */
  const scrollHeroToStart = useCallback(() => {
    const el = heroRef.current;
    if (!el) return;

    const top = getHeroAbsoluteTop(el);
    window.scrollTo({ top, behavior: "auto" });
  }, []);

  /**
   * Atomic switch (no reverse, no wait-for-scroll).
   */
  const switchProgram = useCallback(
    async (dir: -1 | 1) => {
      if (!bootReady || isSwitching) return;

      const token = ++switchTokenRef.current;

      const nextIndex = (programIndex + dir + programs.length) % programs.length;
      const nextProgram = programs[nextIndex];

      setIsSwitching(true);
      freezeDrawRef.current = true;

      // lock to frame 0 immediately
      forceFrame0Lock();
      setFrameImmediate(0);

      // ensure next frame0 exists
      const ensure0 = sequenceCache.ensureFrame(nextProgram.name, 0).catch(() => null);

      // reset to hero start
      scrollHeroToStart();

      const heroEl = heroRef.current;
      if (heroEl) {
        await waitHeroAtStart(heroEl, 18, 2);
      } else {
        await raf();
        await raf();
      }

      if (token !== switchTokenRef.current) return;

      // commit program
      setProgramIndex(nextIndex);

      // wait commit
      await raf();
      if (token !== switchTokenRef.current) return;

      await ensure0;

      // draw frame 0 NOW
      drawFrame(nextProgram.name, 0);

      // pulse index
      setIndexPulse((v) => v + 1);

      // unlock only after draw
      freezeDrawRef.current = false;
      unlockAfterSwitch();

      window.setTimeout(() => {
        if (token !== switchTokenRef.current) return;
        setIsSwitching(false);
      }, SWITCH_FADE_MS);
    },
    [
      bootReady,
      isSwitching,
      programIndex,
      forceFrame0Lock,
      setFrameImmediate,
      scrollHeroToStart,
      drawFrame,
      unlockAfterSwitch,
    ]
  );

  if (!bootReady) return <LoadingScreen progress={bootProgress} />;

  return (
    <div
      ref={heroRef}
      className="relative w-full"
      style={{ height: `${parallax.scrollVh}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/30" />

        <div className="container relative z-10 mx-auto flex h-full items-center px-4 text-white md:px-6">
          {/* Main content */}
          <div className="w-full max-w-xl">
            <div
              className={cn(
                "space-y-4 transition-opacity duration-200",
                isSwitching ? "opacity-0" : "opacity-100"
              )}
            >
              <h1 className="font-headline text-5xl font-black uppercase tracking-tighter sm:text-6xl md:text-9xl">
                {program.name}
              </h1>

              <p className="font-body text-base font-light tracking-widest sm:text-lg md:text-2xl">
                {program.subtitle}
              </p>

              <p className="max-w-md font-body text-sm sm:text-base md:text-lg">
                {program.description}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-black"
                >
                  {program.ctas.secondary}
                </Button>

                <Button
                  size="lg"
                  className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  {program.ctas.primary}
                </Button>
              </div>
            </div>
          </div>

          {/* DESKTOP NAV (right side) */}
          <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 items-center gap-4 md:flex md:right-10">
            <div className="relative text-center">
              <h2 className="font-headline text-6xl font-black sm:text-7xl md:text-9xl">
                {(programIndex + 1).toString().padStart(2, "0")}
              </h2>
            </div>

            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => void switchProgram(-1)}
                disabled={isSwitching}
                className={cn(isSwitching && "opacity-60")}
                aria-label="Previous Program"
              >
                <ChevronUp className="h-6 w-6 transition-transform hover:scale-125" />
                <span className="text-xs font-bold uppercase">Prev</span>
              </button>

              <div className="h-16 w-px bg-white/50" />

              <button
                onClick={() => void switchProgram(1)}
                disabled={isSwitching}
                className={cn(isSwitching && "opacity-60")}
                aria-label="Next Program"
              >
                <span className="text-xs font-bold uppercase">Next</span>
                <ChevronDown className="h-6 w-6 transition-transform hover:scale-125" />
              </button>
            </div>
          </div>

          {/* ✅ MOBILE: PREMIUM SWITCHER (NO BG, NO BORDERS) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-20 z-20 md:hidden">
            <div className="pointer-events-auto mx-auto w-full max-w-sm px-4">
              {/* Row */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => void switchProgram(-1)}
                  disabled={isSwitching}
                  aria-label="Previous Program"
                  className={cn(
                    "group inline-flex min-h-[44px] items-center gap-2",
                    "touch-manipulation select-none",
                    "text-white/80 transition",
                    "active:scale-[0.98] active:text-white",
                    "disabled:opacity-40 disabled:active:scale-100"
                  )}
                >
                  <ChevronLeft className="h-5 w-5 transition-transform group-active:-translate-x-0.5" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                    Prev
                  </span>
                </button>

                <div className="flex min-h-[44px] items-center justify-center px-3">
                  <span
                    key={indexPulse}
                    className={cn(
                      "font-headline text-3xl font-black tabular-nums",
                      "text-white/90",
                      "animate-[pulse_260ms_ease-out_1]"
                    )}
                  >
                    {(programIndex + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                <button
                  onClick={() => void switchProgram(1)}
                  disabled={isSwitching}
                  aria-label="Next Program"
                  className={cn(
                    "group inline-flex min-h-[44px] items-center gap-2",
                    "touch-manipulation select-none",
                    "text-white/80 transition",
                    "active:scale-[0.98] active:text-white",
                    "disabled:opacity-40 disabled:active:scale-100"
                  )}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                    Next
                  </span>
                  <ChevronRight className="h-5 w-5 transition-transform group-active:translate-x-0.5" />
                </button>
              </div>

              {/* Tiny label (no bg, no border) */}
              <div className="mt-2 flex items-center justify-center">
                <span className="text-[10px] font-medium tracking-[0.22em] text-white/55">
                  PROGRAM SWITCHER
                </span>
              </div>
            </div>
          </div>

          {/* Social Icons (below switcher) */}
          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-6 sm:bottom-8">
            {socialLinks.map(({ name, href, Icon }) => (
              <a key={name} href={href} aria-label={`QIA on ${name}`}>
                <Icon className="h-6 w-6 transition-colors hover:text-accent" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}