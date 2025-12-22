"use client";

import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { trackButtonClick } from '@/lib/analytics';
import type { Program } from '@/lib/data';
import type { HeroColors } from '@/domain/types/hero.types';

interface HeroContentProps {
  program: Program;
  heroColors: HeroColors;
  isSwitching: boolean;
}

/**
 * Hero Content Component
 * Single Responsibility: Display hero program content
 * Memoized for performance
 */
export const HeroContent = memo(function HeroContent({
  program,
  heroColors,
  isSwitching,
}: HeroContentProps) {
  return (
    <div className="w-full max-w-xl">
      <div
        className={cn(
          'space-y-4 transition-opacity duration-200',
          isSwitching ? 'opacity-0' : 'opacity-100'
        )}
      >
        <h1 className="font-headline text-5xl font-black uppercase tracking-tighter sm:text-6xl md:text-9xl">
          {program.name}
        </h1>

        <p className="font-body text-base font-light tracking-widest sm:text-lg md:text-2xl">
          {program.subtitle}
        </p>

        <p className="max-w-md font-body text-sm sm:text-base md:text-lg">
          {program.description}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-2 bg-transparent/10 backdrop-blur-sm text-white transition-all"
            style={{
              borderColor: `${heroColors.primary}80`,
              color: 'white',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = heroColors.primary;
              e.currentTarget.style.color = '#022D2B';
              e.currentTarget.style.borderColor = heroColors.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.borderColor = `${heroColors.primary}80`;
            }}
            onClick={() => trackButtonClick(program.ctas.secondary, 'hero')}
          >
            {program.ctas.secondary}
          </Button>

          <Button
            size="lg"
            className="rounded-full text-white transition-all"
            style={{
              backgroundColor: heroColors.accent,
              color: '#022D2B',
              boxShadow: `0 10px 15px -3px ${heroColors.accent}40`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            onClick={() => trackButtonClick(program.ctas.primary, 'hero')}
          >
            {program.ctas.primary}
          </Button>
        </div>
      </div>
    </div>
  );
});

