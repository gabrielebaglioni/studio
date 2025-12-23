/**
 * Canvas Renderer Service
 * Single Responsibility: Canvas drawing logic
 * Separation of Concerns: Isolated rendering logic
 */

import { CANVAS_CONFIG } from '@/domain/constants/hero.constants';

export interface CanvasDimensions {
  width: number;
  height: number;
}

export interface FrameImage {
  width: number;
  height: number;
}

/**
 * Calculate canvas dimensions with DPR
 */
export function calculateCanvasDimensions(
  viewportWidth: number,
  viewportHeight: number,
  dpr: number
): CanvasDimensions {
  return {
    width: Math.floor(viewportWidth * dpr),
    height: Math.floor(viewportHeight * dpr),
  };
}

/**
 * Calculate image positioning for cover-fit with zoom
 * On mobile: uses "contain" strategy to prevent horizontal cropping
 * On desktop: uses "cover" strategy with zoom for full coverage
 */
export function calculateImagePosition(
  frame: FrameImage,
  canvasWidth: number,
  canvasHeight: number,
  isMobile: boolean = false
): {
  x: number;
  y: number;
  width: number;
  height: number;
} {
  const zoomFactor = isMobile 
    ? CANVAS_CONFIG.MOBILE_ZOOM_FACTOR 
    : CANVAS_CONFIG.ZOOM_FACTOR;
  
  const imgAspect = frame.width / frame.height;
  const canvasAspect = canvasWidth / canvasHeight;

  let renderWidth: number;
  let renderHeight: number;
  let x: number;
  let y: number;

  if (isMobile) {
    // Mobile: Scale to full width with slight zoom to eliminate any side gaps
    // Use small zoom to ensure complete coverage
    renderWidth = canvasWidth * 1.02; // 2% zoom to eliminate side gaps
    renderHeight = renderWidth / imgAspect;
    x = (canvasWidth - renderWidth) / 2; // Center horizontally (will be slightly negative to cover edges)
    y = (canvasHeight - renderHeight) / 2; // Center vertically
  } else {
    // Desktop: Use "cover" strategy with zoom for full coverage
    if (imgAspect > canvasAspect) {
      // Image is wider - scale to cover height with zoom
      renderHeight = canvasHeight * zoomFactor;
      renderWidth = renderHeight * imgAspect;
      x = (canvasWidth - renderWidth) / 2;
      y = (canvasHeight - renderHeight) / 2;
    } else {
      // Image is taller - scale to cover width with zoom
      renderWidth = canvasWidth * zoomFactor;
      renderHeight = renderWidth / imgAspect;
      x = (canvasWidth - renderWidth) / 2;
      y = (canvasHeight - renderHeight) / 2;
    }
  }

  return { x, y, width: renderWidth, height: renderHeight };
}

/**
 * Draw frame on canvas
 * Single Responsibility: Canvas drawing operation
 * Optimized for mobile to prevent horizontal cropping
 */
export function drawFrameOnCanvas(
  ctx: CanvasRenderingContext2D,
  frame: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number,
  dpr: number,
  isMobile: boolean = false
): void {
  // Set canvas size if needed
  const canvas = ctx.canvas;
  const viewportWidth = canvasWidth / dpr;
  const viewportHeight = canvasHeight / dpr;

  if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.width = `${viewportWidth}px`;
    canvas.style.height = `${viewportHeight}px`;
  }

  // Set transform for DPR
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  // Calculate position first
  const position = calculateImagePosition(frame, viewportWidth, viewportHeight, isMobile);

  // Fill background - on mobile only fill top/bottom if image doesn't cover full height
  if (isMobile && position.width >= viewportWidth) {
    // Mobile: Image covers full width, only fill top/bottom if needed
    if (position.y > 0) {
      ctx.fillStyle = CANVAS_CONFIG.BACKGROUND_COLOR;
      ctx.fillRect(0, 0, viewportWidth, position.y);
    }
    if (position.y + position.height < viewportHeight) {
      ctx.fillStyle = CANVAS_CONFIG.BACKGROUND_COLOR;
      ctx.fillRect(0, position.y + position.height, viewportWidth, viewportHeight - (position.y + position.height));
    }
  } else {
    // Desktop: fill entire background
    ctx.fillStyle = CANVAS_CONFIG.BACKGROUND_COLOR;
    ctx.fillRect(0, 0, viewportWidth, viewportHeight);
  }

  // Draw image
  ctx.drawImage(frame, position.x, position.y, position.width, position.height);
}

