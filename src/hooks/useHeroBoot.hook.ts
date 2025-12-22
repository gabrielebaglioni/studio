/**
 * useHeroBoot Hook
 * Single Responsibility: Hero section boot/preload logic
 * Separation of Concerns: Isolated initialization state management
 */

import { useEffect, useState } from 'react';
import { programs } from '@/lib/data';
import { initializeSequenceCache } from '@/services/sequence/sequence-initialization.service';
import { useIsMobile } from './use-mobile';

export interface UseHeroBootResult {
  bootReady: boolean;
  bootProgress: number;
}

/**
 * Hook for managing hero section boot/preload state
 * Encapsulates initialization logic
 */
export function useHeroBoot(): UseHeroBootResult {
  const isMobile = useIsMobile();
  const [bootReady, setBootReady] = useState(false);
  const [bootProgress, setBootProgress] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();

    const initialize = async () => {
      try {
        await initializeSequenceCache({
          isMobile,
          programs,
          onProgress: setBootProgress,
          signal: abortController.signal,
        });

        if (!abortController.signal.aborted) {
          setBootProgress(100);
          setBootReady(true);
        }
      } catch (error) {
        // Silently handle errors - ensure UI is always shown
        if (!abortController.signal.aborted) {
          setBootProgress(100);
          setBootReady(true);
        }
      }
    };

    void initialize();

    return () => {
      abortController.abort();
    };
  }, [isMobile]);

  return { bootReady, bootProgress };
}

