import { memo } from 'react';
import Link from 'next/link';
import { agencyConfig, socialLinks } from '@/lib/data';

/**
 * Footer component - memoized for performance
 * Only re-renders when props change (none in this case)
 */
export const Footer = memo(function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="font-headline text-3xl font-black tracking-tighter text-foreground">
              {agencyConfig.name}
            </Link>
            <p className="mt-2 max-w-xs text-sm">
              {agencyConfig.description}
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ name, href, Icon }) => (
              <Link key={name} href={href} aria-label={`QIA on ${name}`}>
                <Icon className="h-6 w-6 transition-colors hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm">
          <p className="italic">{agencyConfig.trustNote}</p>
          <p className="mt-2">{agencyConfig.footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
});
