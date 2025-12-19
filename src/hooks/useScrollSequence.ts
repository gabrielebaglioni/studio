'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { Program } from '@/lib/data';
import { sequenceCache } from '@/lib/sequence/sequenceCache';
import { buildFrameUrl } from '@/lib/sequence/sequenceUrl';

interface UseScrollSequenceProps {
  program: Program | null;
  heroRef: React.RefObject<HTMLDivElement>;
}

type Frame = ImageBitmap | HTMLImageElement;

const PREFETCH_RADIUS = 8; // Number of frames to prefetch around the current frame

export const useScrollSequence = ({ program, heroRef }: UseScrollSequenceProps) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [loadedFrameCount, setLoadedFrameCount] = useState(0);
  const frames = useRef<Map<string, Frame>>(new Map());
  const abortController = useRef<AbortController | null>(null);

  // Effect to handle program changes: reset state, load critical frame, and prefetch.
  useEffect(() => {
    if (!program) return;

    // Abort any ongoing operations from the previous program
    if (abortController.current) {
      abortController.current.abort();
    }
    abortController.current = new AbortController();
    const signal = abortController.current.signal;

    setIsReady(false);
    setCurrentFrame(0);
    setLoadedFrameCount(0);
    frames.current.clear();
    
    let initialLoads = 0;

    const loadCriticalFrame = async () => {
        try {
            const url = await buildFrameUrl(program.sequence, 0, signal);
            const frame = await sequenceCache.load(url, signal);
            frames.current.set(url, frame);
            if (!signal.aborted) {
                setIsReady(true);
                initialLoads++;
                setLoadedFrameCount(initialLoads);
            }
        } catch (error) {
            if (!signal.aborted) {
              console.error("Failed to load critical frame 0:", error);
            }
        }
    };
    
    loadCriticalFrame();
    prefetchAround(0); // Prefetch around the initial frame

    // Prefetch all frames in background
    const preloadAll = async () => {
        const urlsToPreload = [];
        for (let i = 0; i < program.sequence.frameCount; i++) {
            const url = await buildFrameUrl(program.sequence, i, signal);
            urlsToPreload.push(url);
        }
        if (!signal.aborted) {
             sequenceCache.preload(urlsToPreload);
        }
    }
    // Delay full preload to prioritize initial interaction
    setTimeout(preloadAll, 1000);


    return () => {
      if (abortController.current) {
        abortController.current.abort();
      }
    };
  }, [program]);
  
  const prefetchAround = useCallback(async (frameIndex: number) => {
      if (!program) return;
      const { frameCount, ...seq } = program.sequence;
      const urlsToPrefetch = [];

      for (let i = -PREFETCH_RADIUS; i <= PREFETCH_RADIUS; i++) {
          const targetIndex = frameIndex + i;
          if (targetIndex >= 0 && targetIndex < frameCount) {
             const url = await buildFrameUrl(seq, targetIndex);
             urlsToPrefetch.push(url);
          }
      }
      sequenceCache.preload(urlsToPrefetch);
  }, [program]);

  // Effect to handle scroll events and update the current frame.
  const handleScroll = useCallback(() => {
    if (!heroRef.current || !program) return;

    const { top, height } = heroRef.current.getBoundingClientRect();
    const scrollableHeight = height - window.innerHeight;
    
    // If the element is not in view or scrollable height is zero, do nothing.
    if (scrollableHeight <= 0 || top > window.innerHeight || top + height < 0) {
        return;
    }
    
    const scrollDistance = -top;
    
    const scrollFraction = Math.min(1, Math.max(0, scrollDistance / scrollableHeight));
    
    const frameCount = program.sequence.frameCount;
    const newFrameIndex = Math.round(scrollFraction * (frameCount - 1));

    if (newFrameIndex !== currentFrame) {
        setCurrentFrame(newFrameIndex);
        prefetchAround(newFrameIndex);
    }
  }, [heroRef, program, currentFrame, prefetchAround]);
  
  useEffect(() => {
    const animFrameId = { id: 0 };
    const onScroll = () => {
        cancelAnimationFrame(animFrameId.id);
        animFrameId.id = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animFrameId.id);
    };
  }, [handleScroll]);

  const getFrame = useCallback(async (frameIndex: number): Promise<Frame | undefined> => {
    if (!program) return undefined;
    
    const url = await buildFrameUrl(program.sequence, frameIndex);
    
    if (frames.current.has(url)) {
        return frames.current.get(url);
    }
    
    const cachedFrame = sequenceCache.get(url);
    if(cachedFrame) {
      frames.current.set(url, cachedFrame);
      return cachedFrame;
    }
    
    // If not in local or global cache, it might be loading, or we need to load it.
    try {
        const frame = await sequenceCache.load(url);
        frames.current.set(url, frame);
        return frame;
    } catch (e) {
        // console.error(`Could not get frame ${frameIndex}`, e);
        return undefined;
    }
  }, [program]);
  
  const loadingProgress = program ? (frames.current.size / program.sequence.frameCount) * 100 : 0;

  return { loadingProgress, isReady, currentFrame, getFrame };
};
