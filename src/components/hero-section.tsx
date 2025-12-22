"use client";

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
import { programs } from '@/lib/data';
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
import { LoadingScreen } from './loading-screen';
import { HeroCanvas } from './hero-section/hero-canvas';
import { HeroContent } from './hero-section/hero-content';
import { HeroNavigation } from './hero-section/hero-navigation';
import { SocialLinks } from './hero-section/social-links';

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
  const parallax = PARALLAX_CONFIG[programIndex % PARALLAX_CONFIG.length];

  // Hero colors (memoized)
  const heroColors = useMemo(
    () => getHeroColors(program.name as 'CLIMATE' | 'FOOD' | 'SOCIAL'),
    [program.name]
  );

  // Update active hero in context and track analytics
  useEffect(() => {
    setActiveHero(program.name as 'CLIMATE' | 'FOOD' | 'SOCIAL');
    trackProgramSwitch(program.name);
  }, [program.name, setActiveHero]);

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

        <div className="container relative z-10 mx-auto flex h-full items-center px-4 text-white md:px-6">
          <HeroContent
            program={program}
            heroColors={heroColors}
            isSwitching={isSwitching}
          />

          <HeroNavigation
            programIndex={programIndex}
            isSwitching={isSwitching}
            indexPulse={indexPulse}
            onSwitch={switchProgram}
          />

          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
