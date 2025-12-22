"use client";

import { memo } from 'react';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ProgramDirection } from '@/domain/types/hero.types';

interface HeroNavigationProps {
  programIndex: number;
  isSwitching: boolean;
  indexPulse: number;
  onSwitch: (direction: ProgramDirection) => void;
}

/**
 * Desktop Navigation Component
 * Single Responsibility: Desktop program navigation
 */
const DesktopNavigation = memo(function DesktopNavigation({
  programIndex,
  isSwitching,
  onSwitch,
}: Omit<HeroNavigationProps, 'indexPulse'>) {
  return (
    <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 items-center gap-4 md:flex md:right-10">
      <div className="relative text-center">
        <h2 className="font-headline text-6xl font-black sm:text-7xl md:text-9xl">
          {(programIndex + 1).toString().padStart(2, '0')}
        </h2>
      </div>

      <div className="flex flex-col items-center gap-2">
        <button
          onClick={() => void onSwitch(-1)}
          disabled={isSwitching}
          className={cn(isSwitching && 'opacity-60')}
          aria-label="Previous Program"
        >
          <ChevronUp className="h-6 w-6 transition-transform hover:scale-125" />
          <span className="text-xs font-bold uppercase">Prev</span>
        </button>

        <div className="h-16 w-px bg-white/50" />

        <button
          onClick={() => void onSwitch(1)}
          disabled={isSwitching}
          className={cn(isSwitching && 'opacity-60')}
          aria-label="Next Program"
        >
          <span className="text-xs font-bold uppercase">Next</span>
          <ChevronDown className="h-6 w-6 transition-transform hover:scale-125" />
        </button>
      </div>
    </div>
  );
});

/**
 * Mobile Navigation Component
 * Single Responsibility: Mobile program navigation
 */
const MobileNavigation = memo(function MobileNavigation({
  programIndex,
  isSwitching,
  indexPulse,
  onSwitch,
}: HeroNavigationProps) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-20 z-20 md:hidden">
      <div className="pointer-events-auto mx-auto w-full max-w-sm px-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => void onSwitch(-1)}
            disabled={isSwitching}
            aria-label="Previous Program"
            className={cn(
              'group inline-flex min-h-[44px] items-center gap-2',
              'touch-manipulation select-none',
              'text-white/80 transition',
              'active:scale-[0.98] active:text-white',
              'disabled:opacity-40 disabled:active:scale-100'
            )}
          >
            <ChevronLeft className="h-5 w-5 transition-transform group-active:-translate-x-0.5" />
            <span className="text-xs font-bold uppercase tracking-[0.18em]">
              Prev
            </span>
          </button>

          <div className="flex min-h-[44px] items-center justify-center px-3">
            <span
              key={indexPulse}
              className={cn(
                'font-headline text-3xl font-black tabular-nums',
                'text-white/90',
                'animate-[pulse_260ms_ease-out_1]'
              )}
            >
              {(programIndex + 1).toString().padStart(2, '0')}
            </span>
          </div>

          <button
            onClick={() => void onSwitch(1)}
            disabled={isSwitching}
            aria-label="Next Program"
            className={cn(
              'group inline-flex min-h-[44px] items-center gap-2',
              'touch-manipulation select-none',
              'text-white/80 transition',
              'active:scale-[0.98] active:text-white',
              'disabled:opacity-40 disabled:active:scale-100'
            )}
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em]">
              Next
            </span>
            <ChevronRight className="h-5 w-5 transition-transform group-active:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
});

/**
 * Hero Navigation Component
 * Single Responsibility: Program navigation UI
 * Composition Pattern: Combines desktop and mobile navigation
 */
export const HeroNavigation = memo(function HeroNavigation(
  props: HeroNavigationProps
) {
  return (
    <>
      <DesktopNavigation {...props} />
      <MobileNavigation {...props} />
    </>
  );
});

