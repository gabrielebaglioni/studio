"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useEffect } from "react";

/**
 * Provider component that enables smooth scroll behavior
 * Similar to Apple trackpad momentum scrolling
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useSmoothScroll();

  // Disable default smooth scroll CSS to use our custom implementation
  useEffect(() => {
    // Remove smooth scroll from CSS to avoid conflicts
    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    return () => {
      html.style.scrollBehavior = originalScrollBehavior;
    };
  }, []);

  return <>{children}</>;
}

