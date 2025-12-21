"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import type { Program } from "@/lib/data";

type EasingMode = "linear" | "easeOut" | "easeInOut";

interface UseScrollSequenceProps {
  program: Program | null;
  heroRef: RefObject<HTMLDivElement | null>;
  easing?: EasingMode;
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function ease(mode: EasingMode, t: number) {
  const x = clamp(t, 0, 1);
  if (mode === "linear") return x;
  if (mode === "easeOut") return 1 - Math.pow(1 - x, 3);
  return x * x * (3 - 2 * x); // smoothstep
}

/**
 * Best practice: Use Intersection Observer to detect when element is in viewport
 * This reduces unnecessary scroll calculations when element is off-screen
 */
function useIntersectionObserver(
  elementRef: RefObject<HTMLElement | null>,
  callback: (isIntersecting: boolean) => void,
  options?: IntersectionObserverInit
) {
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        callback(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "50%", // Start calculations slightly before element enters viewport
        threshold: [0, 0.25, 0.5, 0.75, 1],
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, callback, options]);
}

/**
 * Scroll-driven frame index with a "switch lock".
 * During program switching we:
 * - lock to frame 0
 * - force state immediately
 * - unlock only when Hero is ready
 * 
 * Best practices implemented:
 * - Intersection Observer for viewport detection (performance)
 * - RAF throttling for scroll events (smooth animations)
 * - Passive event listeners (better scroll performance)
 * - Early returns when element is off-screen
 */
export function useScrollSequence({ program, heroRef, easing = "linear" }: UseScrollSequenceProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const currentFrameRef = useRef(0);
  const [isInViewport, setIsInViewport] = useState(true);

  const lockFrame0Ref = useRef(false);

  /**
   * Set frame immediately (bypasses scroll computation).
   */
  const setFrameImmediate = useCallback((idx: number) => {
    currentFrameRef.current = idx;
    setCurrentFrame(idx);
  }, []);

  /**
   * Force frame 0 and lock it (no mid-frame flash).
   */
  const forceFrame0Lock = useCallback(() => {
    lockFrame0Ref.current = true;
    setFrameImmediate(0);
  }, [setFrameImmediate]);

  /**
   * Unlock scroll-driven updates.
   */
  const unlockAfterSwitch = useCallback(() => {
    lockFrame0Ref.current = false;
  }, []);

  /**
   * Compute frame based on scroll position inside hero.
   * Optimized with early returns and viewport detection.
   */
  const computeFrameIndex = useCallback(() => {
    const el = heroRef.current;
    if (!el || !program) return;

    if (lockFrame0Ref.current) {
      if (currentFrameRef.current !== 0) setFrameImmediate(0);
      return;
    }

    // Early return if element is not in viewport (performance optimization)
    if (!isInViewport) return;

    const { top, height } = el.getBoundingClientRect();
    const scrollable = Math.max(1, height - window.innerHeight);

    // Early return if element is completely off-screen
    if (top > window.innerHeight || top + height < 0) return;

    const distance = clamp(-top, 0, scrollable);
    const fraction = distance / scrollable;

    const mapped = ease(easing, fraction);
    const next = Math.round(mapped * (program.sequence.frameCount - 1));

    if (next !== currentFrameRef.current) {
      setFrameImmediate(next);
    }
  }, [heroRef, program, easing, setFrameImmediate, isInViewport]);

  /**
   * Use Intersection Observer to detect when hero section is in viewport.
   * This prevents unnecessary scroll calculations when off-screen.
   */
  useIntersectionObserver(heroRef, setIsInViewport, {
    rootMargin: "50%", // Start calculations slightly before element enters
  });

  /**
   * RAF-throttled scroll listener with passive event listener for better performance.
   * Best practice: Use passive listeners to improve scroll performance.
   */
  useEffect(() => {
    let raf = 0;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          computeFrameIndex();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", onScroll, { passive: true });
    // Also listen to resize events for responsive behavior
    window.addEventListener("resize", onScroll, { passive: true });
    
    // Initial calculation
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [computeFrameIndex]);

  /**
   * On program change we default to frame 0.
   * (Hero switch logic will also do an atomic frame0 draw.)
   */
  useEffect(() => {
    setFrameImmediate(0);
  }, [program, setFrameImmediate]);

  return { currentFrame, setFrameImmediate, forceFrame0Lock, unlockAfterSwitch };
}