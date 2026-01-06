/**
 * useProgramSwitch Hook
 * Single Responsibility: Program switching logic
 * Separation of Concerns: Isolated program navigation state
 */

import { useCallback, useRef, useState } from 'react';
import { programs } from '@/lib/data';
import { sequenceCache } from '@/lib/sequence/sequenceCache';
import { scrollToPageTop } from '@/utils/animation.utils';
import { waitForAnimationFrame } from '@/utils/animation.utils';
import type { ProgramDirection } from '@/domain/types/hero.types';
import { UI_TIMINGS } from '@/domain/constants/hero.constants';

export interface UseProgramSwitchOptions {
  bootReady: boolean;
  programIndex: number;
  setProgramIndex: (index: number) => void;
  forceFrame0Lock: () => void;
  setFrameImmediate: (frame: number) => void;
  unlockAfterSwitch: () => void;
  drawFrame: (programName: string, frameIndex: number) => void;
  setIndexPulse: React.Dispatch<React.SetStateAction<number>>;
  freezeDrawRef: React.MutableRefObject<boolean>;
}

export interface UseProgramSwitchResult {
  isSwitching: boolean;
  switchProgram: (direction: ProgramDirection) => Promise<void>;
}

/**
 * Hook for managing program switching
 * Encapsulates complex switching logic with race condition protection
 */
export function useProgramSwitch(
  options: UseProgramSwitchOptions
): UseProgramSwitchResult {
  const {
    bootReady,
    programIndex,
    setProgramIndex,
    forceFrame0Lock,
    setFrameImmediate,
    unlockAfterSwitch,
    drawFrame,
    setIndexPulse,
    freezeDrawRef,
  } = options;

  const [isSwitching, setIsSwitching] = useState(false);
  const switchTokenRef = useRef(0);

  const switchProgram = useCallback(
    async (direction: ProgramDirection) => {
      if (!bootReady || isSwitching) return;

      const token = ++switchTokenRef.current;
      const nextIndex =
        (programIndex + direction + programs.length) % programs.length;
      const nextProgram = programs[nextIndex];

      setIsSwitching(true);
      freezeDrawRef.current = true;

      // 1) Lock frame 0 immediately
      forceFrame0Lock();
      setFrameImmediate(0);

      // 2) Ensure next frame 0 exists
      const ensure0 = sequenceCache
        .ensureFrame(nextProgram.name, 0)
        .catch(() => null);

      // 3) Hard reset to page top
      await scrollToPageTop();

      if (token !== switchTokenRef.current) return;

      // 4) Commit the new program
      setProgramIndex(nextIndex);

      // 5) Wait for React commit
      await waitForAnimationFrame();
      if (token !== switchTokenRef.current) return;

      // 6) Wait for frame 0
      await ensure0;

      // 7) Draw frame 0 immediately
      drawFrame(nextProgram.name, 0);

      // 8) Trigger index pulse animation
      setIndexPulse((v) => v + 1);

      // 9) Unlock after frame 0 is drawn
      freezeDrawRef.current = false;
      unlockAfterSwitch();

      // 10) Clear switching state after fade
      window.setTimeout(() => {
        if (token !== switchTokenRef.current) return;
        setIsSwitching(false);
      }, UI_TIMINGS.SWITCH_FADE_MS);
    },
    [
      bootReady,
      isSwitching,
      programIndex,
      setProgramIndex,
      forceFrame0Lock,
      setFrameImmediate,
      unlockAfterSwitch,
      drawFrame,
      setIndexPulse,
    ]
  );

  return {
    isSwitching,
    switchProgram,
  };
}

