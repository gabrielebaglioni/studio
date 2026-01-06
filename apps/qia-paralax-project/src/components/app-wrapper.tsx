/**
 * App Wrapper Component
 * Wraps all React components to ensure context providers are available
 * This is necessary in Astro because client:load creates separate React islands
 * Note: "use client" is not needed in Astro - client directives handle hydration
 */
import { ReactNode } from 'react';
import { HeroProvider } from '@/contexts/hero-context';
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider';
import { AppContent } from '@/components/app-content';

interface AppWrapperProps {
  children?: ReactNode;
}

export function AppWrapper({ children }: AppWrapperProps) {
  return (
    <HeroProvider>
      <SmoothScrollProvider>
        {children || <AppContent />}
      </SmoothScrollProvider>
    </HeroProvider>
  );
}

