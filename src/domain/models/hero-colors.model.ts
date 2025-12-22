/**
 * Hero Colors Domain Model
 * Single Responsibility: Hero color mapping and retrieval
 */

import type { HeroName, HeroColors } from '../types/hero.types';

/**
 * Color variants for each hero section
 * Based on the 5 brand colors
 */
const HERO_COLORS_MAP: Record<HeroName, HeroColors> = {
  CLIMATE: {
    primary: '#10B2D7', // Pacific Cyan
    accent: '#175F8F',   // Crayola
    text: '#10B2D7',    // Pacific Cyan
  },
  FOOD: {
    primary: '#BFD380', // Mindaro
    accent: '#9DEE00',  // Spring Bud
    text: '#BFD380',    // Mindaro
  },
  SOCIAL: {
    primary: '#9DEE00', // Spring Bud
    accent: '#10B2D7',  // Pacific Cyan
    text: '#9DEE00',    // Spring Bud
  },
} as const;

/**
 * Get hero colors by name
 * Factory pattern: Centralized color retrieval
 */
export function getHeroColors(heroName: HeroName): HeroColors {
  return HERO_COLORS_MAP[heroName] || HERO_COLORS_MAP.CLIMATE;
}

