'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ReactNode } from 'react';

/**
 * Cross-app link component that handles both relative and absolute URLs
 * - Uses Next.js Link for relative URLs (same origin)
 * - Uses native <a> tag for absolute URLs (different ports/origins)
 * 
 * In standalone mode, automatically converts relative URLs to absolute URLs
 * with the correct port when navigating to a different app.
 * 
 * Uses useState initialized with relative URL (server-side value) to avoid hydration errors,
 * then updates on client-side if needed.
 */
interface CrossAppLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  [key: string]: any; // Allow other props to be passed through
}

export function CrossAppLink({ href, children, className, ...props }: CrossAppLinkProps) {
  // Initialize with relative URL (server-side value) to avoid hydration mismatch
  const [resolvedHref, setResolvedHref] = useState(href);
  const [useNativeLink, setUseNativeLink] = useState(false);

  useEffect(() => {
    // Only process on client-side after hydration
    // If already absolute, use as-is with native link
    if (href.startsWith('http://') || href.startsWith('https://')) {
      setResolvedHref(href);
      setUseNativeLink(true);
      return;
    }

    // Check if we're in standalone mode (auto-detect based on port)
    const currentPort = window.location.port;
    const devMode = process.env.NEXT_PUBLIC_DEV_MODE;

    // Check if this is a cross-app link (starts with /projects, /support, or /)
    const isCrossAppLink = href.startsWith('/projects') || href.startsWith('/support') || (href === '/' || href.startsWith('/?'));

    // If explicitly gateway mode, use relative URL but use native <a> for cross-app links
    // to avoid Next.js Link applying basePath from current app
    if (devMode === 'gateway' || currentPort === '3024') {
      setResolvedHref(href);
      // Use native <a> for cross-app links in gateway mode to avoid basePath issues
      setUseNativeLink(isCrossAppLink);
      return;
    }

    // If on standalone ports (3000, 3001, 3002), check if we need to change port
    if (['3000', '3001', '3002'].includes(currentPort)) {
      // Determine target app based on href path
      let targetPort: string | null = null;
      
      if (href === '/' || href.startsWith('/?')) {
        // Home page -> shell (3000)
        targetPort = '3000';
      } else if (href.startsWith('/projects')) {
        // Projects -> details (3001)
        targetPort = '3001';
      } else if (href.startsWith('/support')) {
        // Support -> checkout (3002)
        targetPort = '3002';
      }

      // If target port is different from current, convert to absolute URL
      if (targetPort && targetPort !== currentPort) {
        setResolvedHref(`${window.location.protocol}//${window.location.hostname}:${targetPort}${href}`);
        setUseNativeLink(true);
        return;
      }
    }

    // Default: use relative URL with Next.js Link (same app navigation)
    setResolvedHref(href);
    setUseNativeLink(false);
  }, [href]);

  // Use native <a> tag for absolute URLs or cross-app links in gateway mode
  if (useNativeLink || resolvedHref.startsWith('http://') || resolvedHref.startsWith('https://')) {
    return (
      <a href={resolvedHref} className={className} {...props}>
        {children}
      </a>
    );
  }

  // Use Next.js Link for same-app relative URLs
  return (
    <Link href={resolvedHref} className={className} {...props}>
      {children}
    </Link>
  );
}

