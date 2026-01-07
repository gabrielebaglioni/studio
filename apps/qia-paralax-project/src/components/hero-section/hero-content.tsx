
import { memo } from 'react';
import { Button } from '@qia/ui';
import { cn } from '@/lib/utils';
import { trackButtonClick } from '@/lib/analytics';
// Removed CrossAppLink - using React routing instead
import type { Program } from '@/lib/data';
import type { ProjectId } from '@qia/types';
import type { HeroColors } from '@/domain/types/hero.types';

interface HeroContentProps {
  program: Program;
  projectId: ProjectId;
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
  projectId,
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
        {/* Mobile: Text above, Desktop: Text on left */}
        <div className="md:hidden space-y-4 mb-4">
          <h1 className="font-headline text-5xl font-black uppercase tracking-tighter">
            {program.name}
          </h1>
          <p className="font-body text-base font-light tracking-widest">
            {program.subtitle}
          </p>
          <p className="font-body text-sm">
            {program.description}
          </p>
        </div>

        {/* Desktop: Text visible */}
        <div className="hidden md:block space-y-4">
          <h1 className="font-headline text-5xl font-black uppercase tracking-tighter sm:text-6xl md:text-9xl">
            {program.name}
          </h1>
          <p className="font-body text-base font-light tracking-widest sm:text-lg md:text-2xl">
            {program.subtitle}
          </p>
          <p className="max-w-md font-body text-sm sm:text-base md:text-lg">
            {program.description}
          </p>
        </div>

        {/* Mobile: Buttons below canvas, Desktop: Buttons inline */}
        <div className="flex flex-col gap-3 md:flex-row md:gap-4 md:mt-0 mt-4">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-2 bg-transparent/10 backdrop-blur-sm text-white transition-all px-8 py-3"
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
            <a href="/core">
              {program.ctas.secondary}
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="rounded-full text-white transition-all px-8 py-3"
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
            <a href="/core">
              {program.ctas.primary}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
});

