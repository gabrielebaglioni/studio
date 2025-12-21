"use client";

import Image from 'next/image';
import { useHero } from '@/contexts/hero-context';

/**
 * Logo mapping for each hero section
 * Each hero has a different colored logo
 */
const LOGO_MAP = {
  CLIMATE: '/Whisk_f3725ea2aa626e8a15545e2000cf3014dr_preview_rev_1.svg',
  FOOD: '/Whisk_cb0dfa88022716bbd5641ed762889bd0dr_preview_rev_1.svg',
  SOCIAL: '/Whisk_796ac715016ef35a10040fe533c014b2dr_preview_rev_1.svg',
} as const;

/**
 * Quick Impact Agency Logo Component
 * Logo changes color based on active hero section
 */
export function Logo({ className }: { className?: string }) {
  const { activeHero } = useHero();
  const logoPath = LOGO_MAP[activeHero] || LOGO_MAP.CLIMATE;

  return (
    <div 
      className={`relative h-24 w-24 flex-shrink-0 overflow-hidden flex items-center justify-center ${className || ''}`}
    >
      <div
        className="relative w-full h-full"
        style={{
          // Zoom to crop borders (bottom and right) - scale up to hide edges
          transform: 'scale(1.2)',
          transformOrigin: 'center center',
        }}
      >
        <Image
          src={logoPath}
          alt="Quick Impact Agency Logo"
          fill
          className="object-contain transition-opacity duration-500"
          priority
          unoptimized
        />
      </div>
    </div>
  );
}
