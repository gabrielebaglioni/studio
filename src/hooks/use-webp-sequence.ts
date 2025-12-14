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
    setIsLoaded(false);
    setLoadingProgress(0);
    
    let loadedCount = 0;
    const { sequence } = program;
    const totalFrames = sequence.frameCount;
    
    // Check if frames are already in the ref and match the current program
    if (imageFrames.current.length === totalFrames && imageFrames.current[0].src.includes(sequence.baseUrl)) {
        // Verify they are actually loaded
        const allCachedAndLoaded = imageFrames.current.every(img => img.complete);
        if (allCachedAndLoaded) {
            setIsLoaded(true);
            setLoadingProgress(100);
            return;
        }
    }

    imageFrames.current = [];
    const frames: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(sequence.padLength, "0");
      img.src = `${sequence.baseUrl}${frameNumber}${sequence.fileExtension}`;
      
      const handleLoad = () => {
        loadedCount++;
        setLoadingProgress((loadedCount / totalFrames) * 100);
        if (loadedCount === totalFrames) {
          imageFrames.current = frames;
          setIsLoaded(true);
        }
      };

      img.onload = handleLoad;
      // If the image is already cached, onload might not fire, so check 'complete' property
      if (img.complete) {
        handleLoad();
      }

      frames[i-1] = img;
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
    
    const onScroll = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      animationFrameId.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isLoaded, handleScroll]);

  return { loadingProgress, isLoaded, currentFrame, imageFrames: imageFrames.current };
};
