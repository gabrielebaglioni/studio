'use client';

import { lazy, Suspense } from 'react';
import { Header, HeaderHeroProvider } from '@qia/ui';
import { HeroSection } from '@/components/hero-section';
import { useHero } from '@/contexts/hero-context';

// Lazy load Footer for better initial page load performance
const Footer = lazy(() => import('@/components/footer').then(module => ({ default: module.Footer })));

export default function Home() {
  const { activeHero } = useHero();
  
  return (
    <HeaderHeroProvider value={{ activeHero }}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 relative">
          <HeroSection />
        </main>
        {/* <Suspense fallback={null}> 
          <Footer />
        </Suspense>*/}
      </div>
    </HeaderHeroProvider>
  );
}
