"use client";

import Image from 'next/image';

/**
 * Quick Impact Agency Logo Component
 * Logo displayed with original colors from SVG
 */
export function Logo({ className }: { className?: string }) {
  return (
    <div className={`relative h-16 w-16 flex-shrink-0 ${className || ''}`}>
      <Image
        src="/png2svg/Whisk_f3725ea2aa626e8a15545e2000cf3014dr_preview_rev_1.png"
        alt="Quick Impact Agency Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}

