/**
 * HeroSection Component
 * 
 * Clean Code Principles Applied:
 * - Single Responsibility: Orchestrates hero section UI
 * - Separation of Concerns: Business logic in hooks/services
 * - Dependency Inversion: Uses abstractions (hooks, services)
 * - Composition: Uses smaller components
 * 
 * Design Patterns Applied:
 * - Strategy Pattern: Parallax effects via services
 * - Factory Pattern: Color/model retrieval
 * - Observer Pattern: Cache subscription
 */

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { programs, PROJECTS } from '@/lib/data';
import { sequenceCache } from '@/lib/sequence/sequenceCache';
import { useScrollSequence } from '@/hooks/useScrollSequence';
import { useHeroBoot } from '@/hooks/useHeroBoot.hook';
import { useCanvasRenderer } from '@/hooks/useCanvasRenderer.hook';
import { useProgramSwitch } from '@/hooks/useProgramSwitch.hook';
import { useHero } from '@/contexts/hero-context';
import { trackProgramSwitch } from '@/lib/analytics';
import { getHeroColors } from '@/domain/models/hero-colors.model';
import { PARALLAX_CONFIG } from '@/domain/constants/hero.constants';
import { getMobilePreloadWindow } from '@/services/sequence/sequence-initialization.service';
// Removed CrossAppLink - using React routing instead
import { emitProjectChanged } from '@/packages/utils/eventBus';
import { LoadingScreen } from './loading-screen';
import { HeroCanvas } from './hero-section/hero-canvas';
import { HeroContent } from './hero-section/hero-content';
import { HeroNavigation } from './hero-section/hero-navigation';
import { SocialLinks } from './hero-section/social-links';
import { Button } from '@/packages/ui';
import { trackButtonClick } from '@/lib/analytics';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const { setActiveHero } = useHero();

  // Boot/preload state management
  const { bootReady, bootProgress } = useHeroBoot();

  // Program state
  const [programIndex, setProgramIndex] = useState(0);
  const [indexPulse, setIndexPulse] = useState(0);

  // DOM refs
  const heroRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Cache subscription for redraws
  const cacheVersion = useSyncExternalStore(
    sequenceCache.subscribe,
    sequenceCache.getVersion,
    sequenceCache.getVersion
  );

  // Current program and parallax config
  const program = programs[programIndex];
  const project = PROJECTS[programIndex];
  const projectId = project?.id || ('climate' as const);
  const parallax = PARALLAX_CONFIG[programIndex % PARALLAX_CONFIG.length];

  // Hero colors (memoized)
  const heroColors = useMemo(
    () => getHeroColors(program.name as 'CLIMATE' | 'FOOD' | 'SOCIAL'),
    [program.name]
  );

  // Update active hero in context, track analytics, and emit event
  useEffect(() => {
    const previousProjectId = programIndex > 0 ? PROJECTS[programIndex - 1]?.id : undefined;
    setActiveHero(program.name as 'CLIMATE' | 'FOOD' | 'SOCIAL');
    trackProgramSwitch(program.name);
    // Emit project changed event for cross-app communication (optional, URL is source of truth)
    if (projectId) {
      emitProjectChanged(projectId, previousProjectId);
    }
  }, [program.name, programIndex, projectId, setActiveHero]);

  // Scroll sequence management
  const easingMode = useMemo(() => parallax.easing, [parallax.easing]);
  const {
    currentFrame,
    setFrameImmediate,
    forceFrame0Lock,
    unlockAfterSwitch,
  } = useScrollSequence({
    program,
    heroRef,
    easing: easingMode,
  });

  // Freeze draw ref for program switching
  const freezeDrawRef = useRef(false);

  // Canvas rendering
  const { drawFrame, drawAuto } = useCanvasRenderer({
    canvasRef,
    programName: program.name,
    currentFrame,
    bootReady,
    freezeDraw: freezeDrawRef.current,
  });

  // Program switching
  const { isSwitching, switchProgram } = useProgramSwitch({
    bootReady,
    programIndex,
    setProgramIndex,
    forceFrame0Lock,
    setFrameImmediate,
    unlockAfterSwitch,
    drawFrame,
    setIndexPulse,
    freezeDrawRef,
  });

  // Auto-draw on frame/cache changes
  useEffect(() => {
    drawAuto();
  }, [drawAuto, cacheVersion]);

  // Redraw on resize
  useEffect(() => {
    const handleResize = () => drawAuto();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [drawAuto]);

  // Mobile preload window management
  useEffect(() => {
    if (!bootReady) return;
    const { ahead, behind } = getMobilePreloadWindow(program.name);
    sequenceCache.preloadAround(program.name, currentFrame, ahead, behind);
  }, [bootReady, program.name, currentFrame]);

  // Loading state
  if (!bootReady) {
    return <LoadingScreen progress={bootProgress} />;
  }

  return (
    <div
      ref={heroRef}
      className="relative w-full parallax-container"
      style={{ height: `${parallax.scrollVh}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <HeroCanvas canvasRef={canvasRef} />

        {/* Responsive Layout: Mobile-first with Tailwind breakpoints (sm, md, lg, xl) */}
        <div className="relative z-10 h-full w-full text-white">
          {/* Mobile & Tablet Layout (< md): Vertical stack - Text → Canvas → Switcher + Buttons */}
          {/* Using md:hidden to hide on desktop (>= 768px) */}
          <div className="flex h-full flex-col gap-4 overflow-hidden md:hidden sm:gap-6">
            {/* Section 1: Project Title and Description */}
            {/* Responsive padding: more space on tablet (600px-959px) to prevent text overlap with canvas frames */}
            {/* pb-6 on mobile, pb-8 on sm (640px+), pb-12 on md (768px+) to ensure no overlap */}
            <section className="flex-shrink-0 pt-4 pb-6 px-4 sm:px-6 sm:pb-8 md:pb-12">
              <div
                className={cn(
                  'space-y-2 transition-opacity duration-200',
                  isSwitching ? 'opacity-0' : 'opacity-100'
                )}
              >
                <h1 className="font-headline text-3xl font-black uppercase tracking-tighter leading-tight sm:text-4xl">
                  {program.name}
                </h1>
                <p className="font-body text-xs font-light tracking-widest sm:text-sm">
                  {program.subtitle}
                </p>
                <p className="font-body text-xs leading-relaxed sm:text-sm">
                  {program.description}
                </p>
              </div>
            </section>

            {/* Section 2: Canvas Area - matches frame dimensions exactly */}
            {/* Canvas is absolute positioned, this spacer defines the exact frame area for inspection */}
            {/* mt-auto ensures proper spacing from text above on mobile/tablet */}
            <section className="flex-1 min-h-0 w-full" aria-label="Canvas frame area" />

            {/* Section 3: Navigation Switcher, Action Buttons, and Social Links */}
            <section className="flex-shrink-0 px-4 pb-4 space-y-3 sm:px-6 sm:pb-6">
              {/* Navigation Switcher */}
              <div
                className={cn(
                  'transition-opacity duration-200',
                  isSwitching ? 'opacity-0' : 'opacity-100'
                )}
              >
                <HeroNavigation
                  programIndex={programIndex}
                  isSwitching={isSwitching}
                  indexPulse={indexPulse}
                  onSwitch={switchProgram}
                />
              </div>

              {/* Action Buttons */}
              <div
                className={cn(
                  'flex flex-col gap-2 transition-opacity duration-200 sm:gap-3',
                  isSwitching ? 'opacity-0' : 'opacity-100'
                )}
              >
                    <Button
                      asChild
                      size="default"
                      variant="outline"
                      className="rounded-full border-2 bg-transparent/10 backdrop-blur-sm text-white transition-all text-xs py-1.5 h-auto sm:text-sm sm:py-2"
                      style={{
                        borderColor: `${heroColors.primary}80`,
                        color: 'white',
                      }}
                      onClick={() => trackButtonClick(program.ctas.secondary, 'hero')}
                    >
                      <a href="/core">
                        {program.ctas.secondary}
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="default"
                      className="rounded-full text-white transition-all text-xs py-1.5 h-auto sm:text-sm sm:py-2"
                      style={{
                        backgroundColor: heroColors.accent,
                        color: '#022D2B',
                        boxShadow: `0 10px 15px -3px ${heroColors.accent}40`,
                      }}
                      onClick={() => trackButtonClick(program.ctas.primary, 'hero')}
                    >
                      <a href="/core">
                        {program.ctas.primary}
                      </a>
                    </Button>
              </div>

              {/* Social Links - Mobile/Tablet: in flow */}
              <div
                className={cn(
                  'transition-opacity duration-200',
                  isSwitching ? 'opacity-0' : 'opacity-100'
                )}
              >
                <SocialLinks />
              </div>
            </section>
          </div>

          {/* Desktop Layout (>= md): Horizontal layout - UNCHANGED from original */}
          {/* Using hidden md:flex to show only on desktop (>= 768px) */}
          <div className="container relative z-10 mx-auto hidden h-full items-center px-4 md:flex md:px-6">
            <HeroContent
              program={program}
              projectId={projectId}
              heroColors={heroColors}
              isSwitching={isSwitching}
            />

            <HeroNavigation
              programIndex={programIndex}
              isSwitching={isSwitching}
              indexPulse={indexPulse}
              onSwitch={switchProgram}
            />

            {/* Social Links - Desktop: absolute positioned at bottom */}
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
