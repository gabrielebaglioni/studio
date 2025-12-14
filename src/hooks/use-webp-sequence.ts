"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import type { Program } from "@/lib/data";

interface UseWebpSequenceProps {
  program: Program | null;
  heroRef: React.RefObject<HTMLDivElement>;
}

export const useWebpSequence = ({ program, heroRef }: UseWebpSequenceProps) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(1);
  const imageFrames = useRef<HTMLImageElement[]>([]);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    if (!program) return;
    
    console.log(`[QIA] Starting image sequence load for: ${program.name}`);
    setIsLoaded(false);
    setLoadingProgress(0);
    
    const { sequence } = program;
    const totalFrames = sequence.frameCount;
    
    // Reset if program changes
    if (imageFrames.current.length > 0 && !imageFrames.current[0].src.includes(sequence.baseUrl)) {
        console.log('[QIA] Program changed, clearing old frames.');
        imageFrames.current = [];
    }

    // Pre-check for cached images
    if (imageFrames.current.length === totalFrames) {
        console.log('[QIA] Frames already in memory. Verifying if loaded...');
        const allCachedAndLoaded = imageFrames.current.every(img => img.complete);
        if (allCachedAndLoaded) {
            console.log('[QIA] All frames are already loaded from cache. Setting isLoaded to true.');
            setIsLoaded(true);
            setLoadingProgress(100);
            return;
        } else {
             console.log('[QIA] Not all cached frames are complete. Re-checking status.');
        }
    }


    let loadedCount = 0;
    const frames: HTMLImageElement[] = [];

    const handleLoad = (index: number) => {
        loadedCount++;
        const progress = (loadedCount / totalFrames) * 100;
        setLoadingProgress(progress);
        // console.log(`[QIA] Image ${index + 1}/${totalFrames} loaded. Progress: ${progress.toFixed(2)}%`);
        if (loadedCount === totalFrames) {
          console.log('[QIA] All frames finished loading. Setting isLoaded to true.');
          imageFrames.current = frames;
          setIsLoaded(true);
        }
    };

    console.log(`[QIA] Loading ${totalFrames} frames...`);
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const frameNumber = (i + 1).toString().padStart(sequence.padLength, "0");
      img.src = `${sequence.baseUrl}${frameNumber}${sequence.fileExtension}`;
      frames[i] = img;

      if (img.complete) {
        // If the image is already in cache and complete, trigger load immediately.
        // console.log(`[QIA] Image ${i + 1} was already in cache.`);
        handleLoad(i);
      } else {
        // Otherwise, add the event listener.
        img.onload = () => handleLoad(i);
        img.onerror = () => console.error(`[QIA] Error loading image: ${img.src}`);
      }
    }
  }, [program]);

  const handleScroll = useCallback(() => {
    if (!heroRef.current || !program) return;

    const { top, height } = heroRef.current.getBoundingClientRect();
    const scrollableHeight = height - window.innerHeight;
    const scrollDistance = -top;
    
    let scrollFraction = 0;
    if (scrollDistance > 0 && scrollableHeight > 0) {
      scrollFraction = Math.min(1, Math.max(0, scrollDistance / scrollableHeight));
    }
    
    const frameIndex = Math.floor(scrollFraction * (program.sequence.frameCount - 1));
    setCurrentFrame(frameIndex + 1);

  }, [heroRef, program]);

  useEffect(() => {
    if (!isLoaded) return;
    
    console.log("[QIA] Hook is loaded, attaching scroll listener.");
    const onScroll = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      animationFrameId.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initial call

    return () => {
      console.log("[QIA] Cleaning up scroll listener.");
      window.removeEventListener('scroll', onScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isLoaded, handleScroll]);

  return { loadingProgress, isLoaded, currentFrame, imageFrames: imageFrames.current };
};
