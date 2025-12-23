"use client";

import { memo, useMemo } from 'react';
import Link from 'next/link';
import { agencyConfig } from '@/lib/data';
import { Logo } from '@/components/logo';
import { useHero } from '@/contexts/hero-context';

/**
 * Color variants for each hero section
 * Based on the 5 brand colors
 */
const HERO_COLORS = {
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
 * Header component - memoized for performance
 * Only re-renders when activeHero changes
 */
export const Header = memo(function Header() {
  const { activeHero } = useHero();
  
  // Memoize colors to prevent recalculation on every render
  const colors = useMemo(() => HERO_COLORS[activeHero], [activeHero]);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div className="w-full flex h-20 items-center justify-center px-4 md:px-6 lg:px-8">
        {/* Logo and Brand Name - Centered */}
        <Link 
          href="/" 
          className="flex items-center gap-4 group transition-opacity hover:opacity-80"
        >
          <Logo />
          <span 
            className="font-headline text-xl font-black tracking-tight md:text-2xl transition-colors duration-500"
            style={{ color: colors.text }}
          >
            {agencyConfig.fullName}
          </span>
        </Link>
      </div>
    </header>
  );
});
