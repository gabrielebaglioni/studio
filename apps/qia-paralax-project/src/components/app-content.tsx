/**
 * App Content Component
 * Contains all the main app content that needs React context
 * This ensures all components are in the same React tree
 * 
 * Parallax app with:
 * 1. Loading screen (while booting parallax app)
 * 2. Parallax app (scrollable)
 */
import { useState, useEffect } from 'react';
import { HeroSection } from './hero-section';
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

      {/* Main Content - Parallax App */}
      <div className="relative w-full">
        <section id="parallax-section" className="relative w-full">
          <main className="flex-1 relative">
            <HeroSection />
          </main>
        </section>
      </div>
    </div>
  );
}
