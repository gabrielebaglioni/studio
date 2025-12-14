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
  const [currentFrame, setCurrentFrame] = useState(0); // This will be the index (0 to 191)
  const imageFrames = useRef<HTMLImageElement[]>([]);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    if (!program) return;

    console.log(`[QIA] Starting image sequence load for: ${program.name}`);
    setIsLoaded(false);
    setLoadingProgress(0);
    setCurrentFrame(0);
    imageFrames.current = []; // Clear previous frames
    
    const { sequence } = program;
    const totalFrames = sequence.frameCount;
    
    if (totalFrames === 0) {
        setIsLoaded(true);
        setLoadingProgress(100);
        return;
    }
    
    let loadedCount = 0;
    const frames: HTMLImageElement[] = [];
    let loadInitiated = false;

    const handleLoad = () => {
        loadedCount++;
        const progress = (loadedCount / totalFrames) * 100;
        setLoadingProgress(progress);
        if (loadedCount === totalFrames) {
          console.log('[QIA] All frames finished loading. Setting isLoaded to true.');
          imageFrames.current = frames;
          setIsLoaded(true);
        }
    };
    
    const loadImages = () => {
      if (loadInitiated) return;
      loadInitiated = true;
      
      let allCached = true;
      // Loop from 1 to 192 (inclusive) as requested
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(sequence.padLength, "0");
        img.src = `${sequence.baseUrl}${frameNumber}${sequence.fileExtension}`;
        frames.push(img);
        
        if (img.complete) {
          handleLoad();
        } else {
          allCached = false;
          img.onload = handleLoad;
          img.onerror = () => console.error(`[QIA] Error loading image: ${img.src}`);
        }
      }

      if (allCached) {
        console.log('[QIA] All frames were already cached.');
        if (imageFrames.current.length !== totalFrames) {
          imageFrames.current = frames;
        }
        setIsLoaded(true);
        setLoadingProgress(100);
      }
    };

    // Use a small timeout to allow the browser to check the cache
    const timeoutId = setTimeout(loadImages, 100);

    return () => clearTimeout(timeoutId);

  }, [program]);

  const handleScroll = useCallback(() => {
    if (!heroRef.current || !program || program.sequence.frameCount === 0) return;

    const { top, height } = heroRef.current.getBoundingClientRect();
    const scrollableHeight = height - window.innerHeight;
    const scrollDistance = -top;
    
    let scrollFraction = 0;
    if (scrollDistance > 0 && scrollableHeight > 0) {
      scrollFraction = Math.min(1, Math.max(0, scrollDistance / scrollableHeight));
    }
    
    const frameCount = program.sequence.frameCount; // This will be 192
    // Calculate index from 0 to 191
    const frameIndex = Math.floor(scrollFraction * (frameCount - 1));
    
    setCurrentFrame(frameIndex);

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
