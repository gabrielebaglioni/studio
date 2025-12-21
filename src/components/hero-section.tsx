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
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import {
  sequenceCache,
  initSequenceCache,
  getAdaptiveConcurrency,
  getAdaptiveDpr,
} from "@/lib/sequence/sequenceCache";

/**
 * UI timings
 */
const SWITCH_FADE_MS = 220;

/**
 * Each program can have a different parallax "feel".
 * Best practice: Different scroll heights and easing functions for visual variety.
 * Optimized for performance with modern CSS and JavaScript.
 * 
 * Three distinct parallax effects:
 * 1. easeOut (260vh) - Smooth, elegant deceleration
 * 2. linear (300vh) - Consistent, predictable motion
 * 3. easeInOut (340vh) - Dynamic acceleration and deceleration
 */
const PARALLAX = [
  { scrollVh: 260, easing: "easeOut" as const },
  { scrollVh: 300, easing: "linear" as const },
  { scrollVh: 340, easing: "easeInOut" as const },
] as const;

/**
 * Frames that must NEVER be evicted (instant switching).
 * (We pin a small range starting from frame 0)
 */
const PINNED_WINDOW = {
  CLIMATE: 26,
  FOOD: 32,
  SOCIAL: 40,
} as const;

/**
 * ---------- Small helpers (SRP) ----------
 */

/** Wait N animation frames. */
function raf() {
  return new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
}

/**
 * HARD reset to PAGE TOP (what you asked).
 * - window.scrollTo(0,0) alone sometimes doesn't stick due to layout/sticky/paint timing.
 * - We also set scrollTop on documentElement/body and repeat after 2 RAFs.
 */
async function scrollToPageTopHard() {
  // 1) immediate attempt
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // 2) after paint/layout settles
  await raf();
  await raf();

  // 3) final force
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/**
 * Mobile hot-window sizes.
 * Even with boot preload, this helps on low-RAM devices where LRU might evict.
 */
function windowForMobile(programName: string) {
  if (programName === "CLIMATE") return { ahead: 14, behind: 6 };
  if (programName === "FOOD") return { ahead: 20, behind: 8 };
  return { ahead: 26, behind: 10 };
}

/**
 * ---------- Component ----------
 */
export function HeroSection() {
  const isMobile = useIsMobile();

  /**
   * Boot / preload state
   */
  const [bootReady, setBootReady] = useState(false);
  const [bootProgress, setBootProgress] = useState(0);

  /**
   * UI state
   */
  const [programIndex, setProgramIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);

  /** Micro animation key for the "index pulse" */
  const [indexPulse, setIndexPulse] = useState(0);

  /**
   * DOM refs
   */
  const heroRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  /**
   * Prevent any auto-draw while we do an atomic switch.
   */
  const freezeDrawRef = useRef(false);

  /**
   * Cancels outdated async switch sequences (spam clicks).
   */
  const switchTokenRef = useRef(0);

  /**
   * Cache subscription: when a frame arrives, we redraw without needing scroll.
   */
  const cacheVersion = useSyncExternalStore(
    sequenceCache.subscribe,
    sequenceCache.getVersion,
    sequenceCache.getVersion
  );

  const program = programs[programIndex];
  const parallax = PARALLAX[programIndex % PARALLAX.length];

  /**
   * Device-tuned DPR for canvas.
   */
  const dpr = useMemo(() => {
    // keep SSR safe; this component is client-only but still fine
    if (typeof window === "undefined") return 1;
    return getAdaptiveDpr(isMobile);
  }, [isMobile]);

  /**
   * Scroll-driven frame index (optimized hook with Intersection Observer).
   * We control the switch via:
   * - forceFrame0Lock()
   * - setFrameImmediate(0)
   * - unlockAfterSwitch()
   * 
   * Best practice: Use memoized easing to prevent hook re-creation
   */
  const easingMode = useMemo(() => parallax.easing, [parallax.easing]);
  const { currentFrame, setFrameImmediate, forceFrame0Lock, unlockAfterSwitch } =
    useScrollSequence({
      program,
      heroRef,
      easing: easingMode,
    });

  /**
   * ---------- BOOT: init cache + pin hot windows + preload all frames ----------
   */
  useEffect(() => {
    const abort = new AbortController();

    // Configure memory/concurrency policies per device.
    sequenceCache.configureForDevice(isMobile);

    // Register sequences and precompute URLs.
    initSequenceCache(programs);

    // Pin critical window per program so switching is always instant.
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
   * ---------- Canvas drawing (SRP) ----------
   * Draw a specific program + frame index.
   */
  const drawFrame = useCallback(
    (programName: string, frameIndex0: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Pull decoded frame from cache (instant).
      const frame = sequenceCache.getFrame(programName, frameIndex0);
      if (!frame) return;

      const w = window.innerWidth;
      const h = window.innerHeight;

      // DPR backing store
      const targetW = Math.floor(w * dpr);
      const targetH = Math.floor(h * dpr);

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Cover-fit with zoom to ensure full coverage (no green borders)
      // Apply a slight zoom factor (1.05) to ensure frame always covers entire canvas
      const zoomFactor = 1.05;
      const imgAspect = frame.width / frame.height;
      const canvasAspect = w / h;

      let rw: number, rh: number, x: number, y: number;

      if (imgAspect > canvasAspect) {
        // Image is wider - scale to cover height with zoom, extend beyond width
        rh = h * zoomFactor;
        rw = rh * imgAspect;
        x = (w - rw) / 2;
        y = (h - rh) / 2;
      } else {
        // Image is taller - scale to cover width with zoom, extend beyond height
        rw = w * zoomFactor;
        rh = rw / imgAspect;
        x = (w - rw) / 2;
        y = (h - rh) / 2;
      }

      // Fill entire canvas with background color first (prevents any visible margins)
      ctx.fillStyle = 'hsl(175, 85%, 9%)';
      ctx.fillRect(0, 0, w, h);
      
      // Draw the frame with zoom to ensure complete coverage
      ctx.drawImage(frame, x, y, rw, rh);
    },
    [dpr]
  );

  /**
   * Auto-draw current frame for current program.
   */
  const drawAuto = useCallback(() => {
    if (!bootReady) return;
    if (freezeDrawRef.current) return;
    drawFrame(program.name, currentFrame);
  }, [bootReady, drawFrame, program.name, currentFrame]);

  /**
   * Redraw when:
   * - frame index changes
   * - cache receives new frames
   */
  useEffect(() => {
    drawAuto();
  }, [drawAuto, cacheVersion]);

  /**
   * Redraw on resize.
   */
  useEffect(() => {
    const onResize = () => drawAuto();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [drawAuto]);

  /**
   * Mobile: keep hot window warm around current frame.
   */
  useEffect(() => {
    if (!bootReady || !isMobile) return;
    const { ahead, behind } = windowForMobile(program.name);
    sequenceCache.preloadAround(program.name, currentFrame, ahead, behind);
  }, [bootReady, isMobile, program.name, currentFrame]);

  /**
   * ---------- Atomic switch (SRP) ----------
   * Goals:
   * - ALWAYS jump to PAGE TOP (0)
   * - NEVER show reverse or mid-frame flash
   * - Frame 0 of the new program is drawn immediately (no need to scroll)
   */
  const switchProgram = useCallback(
    async (dir: -1 | 1) => {
      if (!bootReady || isSwitching) return;

      const token = ++switchTokenRef.current;

      const nextIndex =
        (programIndex + dir + programs.length) % programs.length;
      const nextProgram = programs[nextIndex];

      setIsSwitching(true);
      freezeDrawRef.current = true;

      // 1) Lock frame 0 immediately so the scroll hook can't emit mid-frame.
      forceFrame0Lock();
      setFrameImmediate(0);

      // 2) Ensure next frame 0 exists (should already be in cache, but bulletproof).
      const ensure0 = sequenceCache
        .ensureFrame(nextProgram.name, 0)
        .catch(() => null);

      // 3) HARD reset to PAGE TOP (0) and wait for paint settle.
      await scrollToPageTopHard();

      if (token !== switchTokenRef.current) return;

      // 4) Commit the new program.
      setProgramIndex(nextIndex);

      // 5) Wait React commit.
      await raf();
      if (token !== switchTokenRef.current) return;

      // 6) Wait for frame0 (just in case).
      await ensure0;

      // 7) Draw frame0 NOW (switch does not depend on scroll).
      drawFrame(nextProgram.name, 0);

      // micro pulse on index
      setIndexPulse((v) => v + 1);

      // 8) Unlock only after frame0 has been drawn.
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
      drawFrame,
      unlockAfterSwitch,
    ]
  );

  /**
   * ---------- Render ----------
   */
  if (!bootReady) return <LoadingScreen progress={bootProgress} />;

  return (
    <div
      ref={heroRef}
      className="relative w-full parallax-container"
      style={{ 
        height: `${parallax.scrollVh}vh`,
      }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 h-full w-full"
          // Best practice: Optimize canvas rendering for parallax animations
          style={{
            willChange: 'contents',
            imageRendering: 'auto',
            backgroundColor: 'hsl(175, 85%, 9%)', // Anchor Green background to prevent margins
          }}
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
                  className="rounded-full border-2 border-white/80 bg-transparent/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary hover:border-white transition-all"
                >
                  {program.ctas.secondary}
                </Button>

                <Button
                  size="lg"
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all"
                >
                  {program.ctas.primary}
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop nav (right) */}
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

          {/* Mobile switcher (no bg, no borders) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-20 z-20 md:hidden">
            <div className="pointer-events-auto mx-auto w-full max-w-sm px-4">
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
                  <span className="text-xs font-bold uppercase tracking-[0.18em]">
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
                  <span className="text-xs font-bold uppercase tracking-[0.18em]">
                    Next
                  </span>
                  <ChevronRight className="h-5 w-5 transition-transform group-active:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Social Icons */}
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