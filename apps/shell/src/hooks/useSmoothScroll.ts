"use client";

import { useEffect, useRef } from "react";

/**
 * Smooth scroll hook that mimics Apple trackpad behavior
 * Works with both mouse wheel and trackpad for fluid scrolling
 */
export function useSmoothScroll() {
  const isScrollingRef = useRef(false);
  const targetScrollYRef = useRef(0);
  const currentScrollYRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const velocityRef = useRef(0);
  const lastWheelTimeRef = useRef(0);
  const lastWheelEventRef = useRef<WheelEvent | null>(null);
  const momentumTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  /**
   * Easing function similar to Apple's trackpad momentum
   * Uses exponential decay for natural deceleration
   */
  const easeOutExpo = (t: number): number => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  /**
   * Smooth scroll animation using requestAnimationFrame
   * Uses momentum-based easing similar to Apple trackpad
   */
  const animateScroll = () => {
    const current = currentScrollYRef.current;
    const target = targetScrollYRef.current;
    const diff = target - current;

    // If difference is very small, snap to target and stop
    if (Math.abs(diff) < 0.1) {
      window.scrollTo(0, target);
      currentScrollYRef.current = target;
      isScrollingRef.current = false;
      velocityRef.current = 0;
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      return;
    }

    // Apply momentum with dynamic easing based on velocity
    // Faster scrolling = more momentum, slower = less
    const baseEasing = 0.12; // Base smoothing factor
    const velocityFactor = Math.min(1, Math.abs(velocityRef.current) / 100);
    const easing = baseEasing + (0.08 * velocityFactor); // 0.12 to 0.20 range
    
    const newScroll = current + diff * easing;
    
    window.scrollTo(0, newScroll);
    currentScrollYRef.current = newScroll;

    // Decay velocity for momentum effect
    velocityRef.current *= 0.92;

    // Continue animation
    rafIdRef.current = requestAnimationFrame(animateScroll);
  };

  /**
   * Handle wheel events (mouse wheel and trackpad)
   * Detects input type and applies appropriate smoothing
   */
  const handleWheel = (e: WheelEvent) => {
    // Prevent default scroll behavior
    e.preventDefault();

    const now = performance.now();
    const deltaTime = now - lastWheelTimeRef.current;
    lastWheelTimeRef.current = now;

    // Calculate scroll delta
    const delta = e.deltaY;
    
    // Detect input type: trackpad has smaller, more frequent deltas
    // Mouse wheel typically has larger deltas in discrete steps
    const isTrackpad = 
      Math.abs(delta) < 50 || // Small delta
      deltaTime < 50 || // Frequent events
      (e.deltaMode === 0 && Math.abs(delta) < 100); // Pixel mode with small delta
    
    // Adjust sensitivity based on input type
    // Trackpad: less smoothing needed (already smooth)
    // Mouse: more smoothing for fluid feel
    const baseSensitivity = isTrackpad ? 1.0 : 0.5;
    
    // Apply fine-tuning based on delta size
    // Larger deltas (fast scrolling) get slightly reduced sensitivity
    const deltaFactor = Math.min(1, 100 / Math.max(1, Math.abs(delta)));
    const sensitivity = baseSensitivity * (0.7 + 0.3 * deltaFactor);
    
    // Calculate new target scroll position
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    const scrollDelta = delta * sensitivity;
    const newTarget = currentScroll + scrollDelta;

    // Clamp to valid scroll range
    const maxScroll = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight
    );
    targetScrollYRef.current = Math.max(0, Math.min(newTarget, maxScroll));
    currentScrollYRef.current = currentScroll;

    // Calculate velocity for momentum scrolling (pixels per millisecond)
    if (deltaTime > 0 && deltaTime < 100) {
      velocityRef.current = scrollDelta / deltaTime;
    } else {
      // Reset velocity if too much time passed
      velocityRef.current = 0;
    }

    // Store last wheel event for momentum calculation
    lastWheelEventRef.current = e;

    // Clear any existing momentum timeout
    if (momentumTimeoutRef.current) {
      clearTimeout(momentumTimeoutRef.current);
    }

    // Start smooth scroll animation if not already running
    if (!isScrollingRef.current) {
      isScrollingRef.current = true;
      rafIdRef.current = requestAnimationFrame(animateScroll);
    }

    // Apply momentum scrolling after user stops scrolling
    // Similar to Apple trackpad behavior
    momentumTimeoutRef.current = setTimeout(() => {
      if (Math.abs(velocityRef.current) > 0.1) {
        // Apply momentum: continue scrolling with decreasing velocity
        const momentum = velocityRef.current * 200; // Convert to pixels
        const currentScroll = window.scrollY || document.documentElement.scrollTop;
        const maxScroll = Math.max(
          0,
          document.documentElement.scrollHeight - window.innerHeight
        );
        
        targetScrollYRef.current = Math.max(
          0,
          Math.min(currentScroll + momentum, maxScroll)
        );

        // Decay velocity for natural deceleration
        velocityRef.current *= 0.85;

        // Continue animation with momentum
        if (!isScrollingRef.current) {
          isScrollingRef.current = true;
          rafIdRef.current = requestAnimationFrame(animateScroll);
        }
      }
    }, 50); // Wait 50ms after last wheel event
  };

  useEffect(() => {
    // Initialize scroll position
    currentScrollYRef.current = window.scrollY || document.documentElement.scrollTop;
    targetScrollYRef.current = currentScrollYRef.current;

    // Add wheel event listener with passive: false to allow preventDefault
    window.addEventListener("wheel", handleWheel, { passive: false });

    // Cleanup
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (momentumTimeoutRef.current) {
        clearTimeout(momentumTimeoutRef.current);
      }
    };
  }, []);
}

