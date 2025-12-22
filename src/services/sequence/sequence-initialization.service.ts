/**
 * Sequence Initialization Service
 * Single Responsibility: Sequence cache initialization logic
 * Separation of Concerns: Isolated initialization operations
 */

import type { Program } from '@/lib/data';
import { PINNED_WINDOW_SIZES } from '@/domain/constants/hero.constants';
import {
  sequenceCache,
  initSequenceCache,
  getAdaptiveConcurrency,
  getAdaptiveDpr,
} from '@/lib/sequence/sequenceCache';

export interface InitializationOptions {
  isMobile: boolean;
  programs: Program[];
  onProgress?: (progress: number) => void;
  signal?: AbortSignal;
}

/**
 * Initialize sequence cache for all programs
 * Single Responsibility: Cache initialization
 */
export async function initializeSequenceCache(
  options: InitializationOptions
): Promise<void> {
  const { isMobile, programs, onProgress, signal } = options;

  // Configure cache for device type
  sequenceCache.configureForDevice(isMobile);

  // Register sequences and precompute URLs
  initSequenceCache(programs);

  // Pin critical windows for instant switching
  for (const program of programs) {
    const pinnedSize = getPinnedWindowSize(program.name);
    const maxFrame = Math.min(
      program.sequence.frameCount - 1,
      pinnedSize
    );

    sequenceCache.pinRange(program.name, 0, maxFrame);
  }

  // Preload all frames
  const concurrency = getAdaptiveConcurrency(isMobile);
  await sequenceCache.preloadAll({
    concurrency,
    signal,
    onProgress,
  });
}

/**
 * Get pinned window size for program
 * Factory pattern: Centralized configuration retrieval
 */
function getPinnedWindowSize(programName: string): number {
  switch (programName) {
    case 'CLIMATE':
      return PINNED_WINDOW_SIZES.CLIMATE;
    case 'FOOD':
      return PINNED_WINDOW_SIZES.FOOD;
    case 'SOCIAL':
      return PINNED_WINDOW_SIZES.SOCIAL;
    default:
      return PINNED_WINDOW_SIZES.CLIMATE;
  }
}

/**
 * Get mobile preload window configuration
 */
export function getMobilePreloadWindow(programName: string): {
  ahead: number;
  behind: number;
} {
  switch (programName) {
    case 'CLIMATE':
      return { ahead: 14, behind: 6 };
    case 'FOOD':
      return { ahead: 20, behind: 8 };
    case 'SOCIAL':
      return { ahead: 26, behind: 10 };
    default:
      return { ahead: 14, behind: 6 };
  }
}

