/**
 * Hero Section Constants
 * Single Responsibility: Centralized configuration values
 */

export const UI_TIMINGS = {
  SWITCH_FADE_MS: 220,
} as const;

/**
 * Parallax configuration for each program
 * Strategy Pattern: Different easing strategies for visual variety
 */
export const PARALLAX_CONFIG = [
  { scrollVh: 260, easing: "easeOut" as const },
  { scrollVh: 300, easing: "linear" as const },
  { scrollVh: 340, easing: "easeInOut" as const },
] as const;

/**
 * Pinned window sizes for instant program switching
 * These frames are never evicted from cache
 */
export const PINNED_WINDOW_SIZES = {
  CLIMATE: 26,
  FOOD: 32,
  SOCIAL: 40,
} as const;

/**
 * Mobile preload window configuration
 * Optimized for low-RAM devices
 */
export const MOBILE_PRELOAD_WINDOWS = {
  CLIMATE: { ahead: 14, behind: 6 },
  FOOD: { ahead: 20, behind: 8 },
  SOCIAL: { ahead: 26, behind: 10 },
} as const;

/**
 * Canvas rendering constants
 */
export const CANVAS_CONFIG = {
  ZOOM_FACTOR: 1.05,
  BACKGROUND_COLOR: 'hsl(175, 85%, 9%)',
} as const;

