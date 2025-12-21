"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

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
        {/* Logo instead of QIA text - using same approach as Logo component */}
        <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden flex items-center justify-center">
          <div
            className="relative w-full h-full"
            style={{
              // Same zoom approach as Logo component to hide borders (bottom and right)
              transform: 'scale(1.25)',
              transformOrigin: 'center center',
            }}
          >
            <Image
              src="/Whisk_796ac715016ef35a10040fe533c014b2dr_preview_rev_1.svg"
              alt="Quick Impact Agency Logo"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>

        <div className="w-64">
          <Progress value={display} className="h-2" />
          <p className="mt-2 text-sm font-medium text-foreground">Loading {Math.round(display)}%</p>
        </div>
      </div>
    </div>
  );
}