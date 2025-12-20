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
 * Scroll-driven frame index with a "switch lock".
 * During program switching we:
 * - lock to frame 0
 * - force state immediately
 * - unlock only when Hero is ready
 */
export function useScrollSequence({ program, heroRef, easing = "linear" }: UseScrollSequenceProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const currentFrameRef = useRef(0);

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
   */
  const computeFrameIndex = useCallback(() => {
    const el = heroRef.current;
    if (!el || !program) return;

    if (lockFrame0Ref.current) {
      if (currentFrameRef.current !== 0) setFrameImmediate(0);
      return;
    }

    const { top, height } = el.getBoundingClientRect();
    const scrollable = Math.max(1, height - window.innerHeight);

    if (top > window.innerHeight || top + height < 0) return;

    const distance = clamp(-top, 0, scrollable);
    const fraction = distance / scrollable;

    const mapped = ease(easing, fraction);
    const next = Math.round(mapped * (program.sequence.frameCount - 1));

    if (next !== currentFrameRef.current) {
      setFrameImmediate(next);
    }
  }, [heroRef, program, easing, setFrameImmediate]);

  /**
   * RAF-throttled scroll listener.
   */
  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(computeFrameIndex);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
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