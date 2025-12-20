"use client";

import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { agencyConfig } from "@/lib/data";

interface LoadingScreenProps {
  progress: number; // 0..100
}

/**
 * Smooth display progress so it doesn't jump.
 * The real progress is controlled by preloadAll().
 */
export function LoadingScreen({ progress }: LoadingScreenProps) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const target = Math.max(0, Math.min(100, progress));

    const tick = () => {
      setDisplay((prev) => {
        const next = prev + (target - prev) * 0.12;
        return Math.abs(target - next) < 0.2 ? target : next;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [progress]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-headline text-6xl font-black tracking-tighter text-foreground">
          {agencyConfig.name}
        </h1>

        <div className="w-64">
          <Progress value={display} className="h-2" />
          <p className="mt-2 text-sm text-muted-foreground">Loading {Math.round(display)}%</p>
        </div>
      </div>
    </div>
  );
}