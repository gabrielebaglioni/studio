/**
 * useCanvasRenderer Hook
 * Single Responsibility: Canvas rendering logic
 * Separation of Concerns: Isolated canvas operations
 */

import { useCallback, useMemo } from 'react';
import { sequenceCache } from '@/lib/sequence/sequenceCache';
import { getAdaptiveDpr } from '@/lib/sequence/sequenceCache';
import { useIsMobile } from './use-mobile';
import {
  drawFrameOnCanvas,
  calculateCanvasDimensions,
} from '@/services/canvas/canvas-renderer.service';

export interface UseCanvasRendererOptions {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  programName: string;
  currentFrame: number;
  bootReady: boolean;
  freezeDraw?: boolean;
}

/**
 * Hook for managing canvas rendering
 * Encapsulates canvas drawing logic
 */
export function useCanvasRenderer(options: UseCanvasRendererOptions) {
  const { canvasRef, programName, currentFrame, bootReady, freezeDraw } = options;
  const isMobile = useIsMobile();

  // Calculate DPR based on device
  const dpr = useMemo(() => {
    if (typeof window === 'undefined') return 1;
    return getAdaptiveDpr(isMobile);
  }, [isMobile]);

  // Draw frame on canvas
  const drawFrame = useCallback(
    (targetProgramName: string, frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const frame = sequenceCache.getFrame(targetProgramName, frameIndex);
      if (!frame) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const dimensions = calculateCanvasDimensions(viewportWidth, viewportHeight, dpr);

      drawFrameOnCanvas(ctx, frame, dimensions.width, dimensions.height, dpr, isMobile);
    },
    [canvasRef, dpr, isMobile]
  );

  // Auto-draw current frame
  const drawAuto = useCallback(() => {
    if (!bootReady || freezeDraw === true) return;
    drawFrame(programName, currentFrame);
  }, [bootReady, freezeDraw, drawFrame, programName, currentFrame]);

  return {
    drawFrame,
    drawAuto,
    dpr,
  };
}

