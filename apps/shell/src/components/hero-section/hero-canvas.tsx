"use client";

import { memo } from 'react';
import { CANVAS_CONFIG } from '@/domain/constants/hero.constants';

interface HeroCanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}

/**
 * Hero Canvas Component
 * Single Responsibility: Canvas rendering container
 * Memoized for performance
 */
export const HeroCanvas = memo(function HeroCanvas({ canvasRef }: HeroCanvasProps) {
  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{
          willChange: 'contents',
          imageRendering: 'auto',
          backgroundColor: CANVAS_CONFIG.BACKGROUND_COLOR,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-black/30" />
    </>
  );
});

