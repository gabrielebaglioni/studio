import { lazy, Suspense } from 'react';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';

// Lazy load Footer for better initial page load performance
const Footer = lazy(() => import('@/components/footer').then(module => ({ default: module.Footer })));

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 relative">
        <HeroSection />
      </main>
      {/* <Suspense fallback={null}> 
        <Footer />
      </Suspense>*/}
    </div>
  );
}
