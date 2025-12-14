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
    
    if (imageFrames.current.length > 0 && !imageFrames.current[0].src.includes(sequence.baseUrl)) {
        console.log('[QIA] Program changed, clearing old frames.');
        imageFrames.current = [];
    }

    if (imageFrames.current.length === totalFrames) {
        console.log('[QIA] Frames array already populated. Checking status...');
        
        let loadedCount = 0;
        imageFrames.current.forEach(img => {
            if (img.complete) {
                loadedCount++;
            }
        });

        const progress = (loadedCount / totalFrames) * 100;
        setLoadingProgress(progress);

        if (loadedCount === totalFrames) {
            console.log('[QIA] All frames are already loaded from cache. Setting isLoaded to true.');
            setIsLoaded(true);
            return;
        } else {
             console.log(`[QIA] ${loadedCount}/${totalFrames} frames are complete. Re-attaching load listeners.`);
        }
    }


    let loadedCount = 0;
    const frames: HTMLImageElement[] = [];

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

    console.log(`[QIA] Loading ${totalFrames} frames...`);
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const frameNumber = (i + 1).toString().padStart(sequence.padLength, "0");
      img.src = `${sequence.baseUrl}${frameNumber}${sequence.fileExtension}`;
      frames[i] = img;

      if (img.complete) {
        handleLoad();
      } else {
        img.onload = handleLoad;
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
    
    const frameCount = program.sequence.frameCount;
    // Ensure frameIndex is always within the valid range [0, frameCount - 1]
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(scrollFraction * frameCount)
    );
    
    // Set currentFrame to be 1-based index [1, frameCount]
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
