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
 * Ensures full canvas coverage without visible margins
 */
export function calculateImagePosition(
  frame: FrameImage,
  canvasWidth: number,
  canvasHeight: number
): {
  x: number;
  y: number;
  width: number;
  height: number;
} {
  const { ZOOM_FACTOR } = CANVAS_CONFIG;
  const imgAspect = frame.width / frame.height;
  const canvasAspect = canvasWidth / canvasHeight;

  let renderWidth: number;
  let renderHeight: number;
  let x: number;
  let y: number;

  if (imgAspect > canvasAspect) {
    // Image is wider - scale to cover height with zoom
    renderHeight = canvasHeight * ZOOM_FACTOR;
    renderWidth = renderHeight * imgAspect;
    x = (canvasWidth - renderWidth) / 2;
    y = (canvasHeight - renderHeight) / 2;
  } else {
    // Image is taller - scale to cover width with zoom
    renderWidth = canvasWidth * ZOOM_FACTOR;
    renderHeight = renderWidth / imgAspect;
    x = (canvasWidth - renderWidth) / 2;
    y = (canvasHeight - renderHeight) / 2;
  }

  return { x, y, width: renderWidth, height: renderHeight };
}

/**
 * Draw frame on canvas
 * Single Responsibility: Canvas drawing operation
 */
export function drawFrameOnCanvas(
  ctx: CanvasRenderingContext2D,
  frame: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number,
  dpr: number
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

  // Fill background first (prevents visible margins)
  ctx.fillStyle = CANVAS_CONFIG.BACKGROUND_COLOR;
  ctx.fillRect(0, 0, viewportWidth, viewportHeight);

  // Calculate and draw image
  const position = calculateImagePosition(frame, viewportWidth, viewportHeight);
  ctx.drawImage(frame, position.x, position.y, position.width, position.height);
}

