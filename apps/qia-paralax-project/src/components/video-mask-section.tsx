/**
 * Video Mask Section Component
 * Integrates the video-mask-landing Showcase component directly
 * This allows GSAP ScrollTrigger to work correctly with parent scroll
 */
import { useEffect } from 'react';
// Import Showcase component directly from video-mask-landing app
// Note: This component is no longer used after app separation
// import Showcase from '@video-mask/components/Showcase.jsx';
// Import isolated styles for video-mask (without Tailwind base to avoid conflicts)
import './video-mask-styles.css';

interface VideoMaskSectionProps {
  onComplete?: () => void;
}

export function VideoMaskSection({ onComplete }: VideoMaskSectionProps) {
  useEffect(() => {
    // Listen for completion event from Showcase component
    // Showcase will dispatch a custom event when scroll animation is complete
    const handleVideoMaskComplete = (event: CustomEvent) => {
      if (event.type === 'video-mask-complete') {
        if (onComplete) {
          onComplete();
        }
      }
    };

    window.addEventListener('video-mask-complete', handleVideoMaskComplete as EventListener);

    return () => {
      window.removeEventListener('video-mask-complete', handleVideoMaskComplete as EventListener);
    };
  }, [onComplete]);

  return (
    <div className="relative w-full">
      <Showcase />
    </div>
  );
}
