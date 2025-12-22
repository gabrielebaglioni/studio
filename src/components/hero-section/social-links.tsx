"use client";

import { memo } from 'react';
import { socialLinks } from '@/lib/data';

/**
 * Social Links component - memoized for performance
 * Only re-renders when socialLinks array changes (rarely)
 */
export const SocialLinks = memo(function SocialLinks() {
  return (
    <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-6 sm:bottom-8">
      {socialLinks.map(({ name, href, Icon }) => (
        <a key={name} href={href} aria-label={`QIA on ${name}`}>
          <Icon className="h-6 w-6 transition-colors hover:text-accent" />
        </a>
      ))}
    </div>
  );
});

