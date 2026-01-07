/**
 * App Wrapper Component
 * Wraps all React components to ensure context providers are available
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

