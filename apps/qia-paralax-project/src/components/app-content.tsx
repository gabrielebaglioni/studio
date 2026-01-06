/**
 * App Content Component
 * Contains all the main app content that needs React context
 * This ensures all components are in the same React tree
 * Note: "use client" is not needed in Astro - client directives handle hydration
 * 
 * Single scrollable page with:
 * 1. Loading screen (while booting parallax app)
 * 2. Video Mask app (first section, full height)
 * 3. Parallax app (second section, scrollable)
 */
import { useState, useEffect } from 'react';
import { HeroSection } from './hero-section';
import { VideoMaskSection } from './video-mask-section';
import { LoadingScreen } from './loading-screen';
import { useHeroBoot } from '@/hooks/useHeroBoot.hook';

export function AppContent() {
  const [showLoader, setShowLoader] = useState(true);
  const { bootReady, bootProgress } = useHeroBoot();

  // Wait for boot to complete, then hide loader and show content
  useEffect(() => {
    if (bootReady) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [bootReady]);

  return (
    <div className="relative w-full">
      {/* Loading Screen - shown first */}
      {showLoader && (
        <div className="fixed inset-0 z-[100]">
          <LoadingScreen progress={bootProgress} />
        </div>
      )}

      {/* Main Content - single scrollable page */}
      <div className="relative w-full">
        {/* Section 1: Video Mask App - Full viewport height */}
        <section id="video-mask-section" className="relative w-full min-h-screen">
          <VideoMaskSection />
        </section>

        {/* Section 2: Parallax App - Scrollable section */}
        <section id="parallax-section" className="relative w-full">
          <main className="flex-1 relative">
            <HeroSection />
          </main>
        </section>
      </div>
    </div>
  );
}
