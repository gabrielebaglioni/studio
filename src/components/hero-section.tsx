"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { programs, socialLinks } from '@/lib/data';
import { useWebpSequence } from '@/hooks/use-webp-sequence';
import { LoadingScreen } from './loading-screen';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ChevronUp, ChevronDown, Loader2 } from 'lucide-react';
import { Progress } from './ui/progress';

export function HeroSection() {
  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const currentProgram = programs[currentProgramIndex];
  const { loadingProgress, isLoaded, currentFrame, imageFrames } = useWebpSequence({ program: currentProgram, heroRef });

  useEffect(() => {
    if (isLoaded) {
      if(isInitialLoad) setIsInitialLoad(false);
      setIsSwitching(false);
    }
  }, [isLoaded, isInitialLoad]);

  const drawImage = useCallback(() => {
    if (!isLoaded || !canvasRef.current || !imageFrames[currentFrame - 1]) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imageFrames[currentFrame - 1];

    if (ctx) {
      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const imgAspectRatio = img.width / img.height;
      const canvasAspectRatio = canvasWidth / canvasHeight;

      let renderWidth, renderHeight, x, y;

      if (imgAspectRatio > canvasAspectRatio) {
        renderHeight = canvasHeight;
        renderWidth = renderHeight * imgAspectRatio;
        x = (canvasWidth - renderWidth) / 2;
        y = 0;
      } else {
        renderWidth = canvasWidth;
        renderHeight = renderWidth / imgAspectRatio;
        x = 0;
        y = (canvasHeight - renderHeight) / 2;
      }
      
      ctx.drawImage(img, x, y, renderWidth, renderHeight);
    }
  }, [isLoaded, currentFrame, imageFrames]);

  useEffect(() => {
    drawImage();
  }, [drawImage]);
  
  useEffect(() => {
    const handleResize = () => drawImage();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawImage]);

  const switchProgram = (newIndex: number) => {
    if (newIndex === currentProgramIndex || isSwitching) return;
    
    setIsSwitching(true);
    setTimeout(() => {
      const nextIndex = (newIndex + programs.length) % programs.length;
      setCurrentProgramIndex(nextIndex);
    }, 300); // Wait for fade out animation
  };

  if (isInitialLoad && !isLoaded) {
    return <LoadingScreen progress={loadingProgress} />;
  }

  return (
    <div ref={heroRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="container relative z-10 mx-auto flex h-full items-center px-4 text-white md:px-6">
          {/* Main Content */}
          <div
            className={cn(
              'max-w-xl space-y-4 transition-opacity duration-300',
              isSwitching ? 'opacity-0' : 'opacity-100'
            )}
          >
            <h1 className="font-headline text-7xl font-black uppercase tracking-tighter md:text-9xl">
              {currentProgram.name}
            </h1>
            <p className="font-body text-xl font-light tracking-widest md:text-2xl">
              {currentProgram.subtitle}
            </p>
            <p className="max-w-md font-body text-base md:text-lg">
              {currentProgram.description}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="outline" className="rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-black">
                {currentProgram.ctas.secondary}
              </Button>
              <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                {currentProgram.ctas.primary}
              </Button>
            </div>
          </div>
          
          {/* Variant Navigation */}
          <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-4 md:right-10">
            <div className="relative text-center">
              <h2 className="font-headline text-7xl font-black md:text-9xl">
                <span className={cn('transition-opacity duration-300', isSwitching ? 'opacity-0' : 'opacity-100')}>
                  {(currentProgramIndex + 1).toString().padStart(2, '0')}
                </span>
              </h2>
              {isSwitching && (
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin" />
                 </div>
              )}
            </div>
            <div className="flex flex-col items-center gap-2">
              <button onClick={() => switchProgram(currentProgramIndex - 1)} aria-label="Previous Program">
                <ChevronUp className="h-6 w-6 transition-transform hover:scale-125" />
                <span className="text-xs font-bold uppercase">Prev</span>
              </button>
              <div className="h-16 w-px bg-white/50"></div>
              <button onClick={() => switchProgram(currentProgramIndex + 1)} aria-label="Next Program">
                <span className="text-xs font-bold uppercase">Next</span>
                <ChevronDown className="h-6 w-6 transition-transform hover:scale-125" />
              </button>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-6">
            {socialLinks.map(({ name, href, Icon }) => (
              <a key={name} href={href} aria-label={`QIA on ${name}`}>
                <Icon className="h-6 w-6 transition-colors hover:text-accent" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
