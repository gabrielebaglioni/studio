/**
 * Hero Section Domain Types
 * Single Responsibility: Type definitions for hero domain
 */

export type HeroName = 'CLIMATE' | 'FOOD' | 'SOCIAL';

export type EasingMode = 'linear' | 'easeOut' | 'easeInOut';

export interface ParallaxConfig {
  scrollVh: number;
  easing: EasingMode;
}

export interface HeroColors {
  primary: string;
  accent: string;
  text?: string;
}

export interface PreloadWindow {
  ahead: number;
  behind: number;
}

export type ProgramDirection = -1 | 1;

