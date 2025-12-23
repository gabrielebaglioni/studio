/**
 * Route Helpers - URL generation for microfrontends
 * Source of truth for routing paths
 * 
 * Supports two development modes:
 * - Gateway mode: Single URL (3024), relative links
 * - Standalone mode: Separate ports (3000/3001/3002), absolute links with ports
 */

import type { ProjectId } from '@qia/types';

/**
 * Development mode: 'gateway' | 'standalone' | undefined (auto-detect)
 * Set via NEXT_PUBLIC_DEV_MODE env var
 */
type DevMode = 'gateway' | 'standalone' | undefined;

/**
 * Get the origin for a specific app
 * Used in standalone mode to generate absolute URLs with correct ports
 */
function getAppOrigin(appName: 'shell' | 'details' | 'checkout'): string {
  const envVar = {
    shell: process.env.NEXT_PUBLIC_SHELL_ORIGIN,
    details: process.env.NEXT_PUBLIC_DETAILS_ORIGIN,
    checkout: process.env.NEXT_PUBLIC_CHECKOUT_ORIGIN,
  }[appName];

  // Default ports if env var not set
  const defaultPorts = {
    shell: '3000',
    details: '3001',
    checkout: '3002',
  }[appName];

  if (envVar) {
    return envVar;
  }

  // Fallback to default localhost with default port
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.hostname}:${defaultPorts}`;
  }

  return `http://localhost:${defaultPorts}`;
}

/**
 * Get the base URL for cross-app navigation
 * Determines whether to use relative paths (gateway/prod) or absolute URLs (standalone)
 */
function getBaseUrl(targetApp: 'details' | 'checkout'): string {
  // Client-side detection
  if (typeof window !== 'undefined') {
    const devMode = (process.env.NEXT_PUBLIC_DEV_MODE as DevMode) || undefined;
    const currentPort = window.location.port;

    // Explicit standalone mode: use absolute URLs with app-specific ports
    if (devMode === 'standalone') {
      return getAppOrigin(targetApp);
    }

    // Explicit gateway mode: use relative URLs (proxy handles routing)
    if (devMode === 'gateway') {
      return '';
    }

    // Auto-detect mode based on current port
    // If we're on the gateway port (3024), use relative URLs
    if (currentPort === '3024') {
      return '';
    }
    
    // If we're on a direct app port (3000, 3001, 3002), use standalone mode
    if (['3000', '3001', '3002'].includes(currentPort)) {
      // In standalone mode, we need to change port when navigating to another app
      // Shell (3000) → Details (3001) or Checkout (3002)
      // Details (3001) → Checkout (3002) or Shell (3000)
      // Checkout (3002) → Details (3001) or Shell (3000)
      return getAppOrigin(targetApp);
    }
    
    // Unknown port or production: use relative URLs
    return '';
  }
  
  // Server-side: check env vars
  const devMode = (process.env.NEXT_PUBLIC_DEV_MODE as DevMode) || undefined;
  const nodeEnv = process.env.NODE_ENV;

  // Production: always use relative URLs
  if (nodeEnv === 'production') {
    return '';
  }

  // In standalone mode server-side, we still generate absolute URLs
  // (Next.js Link will handle them correctly)
  if (devMode === 'standalone') {
    return getAppOrigin(targetApp);
  }

  // Gateway mode or auto: use relative URLs (client will handle routing)
  return '';
}

/**
 * Get details page URL for a project
 * @param projectId - Project ID (slug)
 * @returns URL path to details page
 * 
 * In gateway mode: `/projects/${projectId}` (relative)
 * In standalone mode: `http://localhost:3001/projects/${projectId}` (absolute with port)
 * In production: `/projects/${projectId}` (relative)
 */
export function getDetailsHref(projectId: ProjectId): string {
  const baseUrl = getBaseUrl('details');
  return `${baseUrl}/projects/${projectId}`;
}

/**
 * Get support/checkout page URL for a project
 * @param projectId - Project ID (slug)
 * @returns URL path to support page
 * 
 * In gateway mode: `/support/${projectId}` (relative)
 * In standalone mode: `http://localhost:3002/support/${projectId}` (absolute with port)
 * In production: `/support/${projectId}` (relative)
 */
export function getSupportHref(projectId: ProjectId): string {
  const baseUrl = getBaseUrl('checkout');
  return `${baseUrl}/support/${projectId}`;
}

/**
 * Get success page URL
 * @returns URL path to success page
 * Note: Success page is in checkout app, so in standalone mode it needs the checkout origin
 */
export function getSuccessHref(): string {
  const baseUrl = getBaseUrl('checkout');
  return `${baseUrl}/support/success`;
}

/**
 * Get cancel page URL
 * @returns URL path to cancel page
 * Note: Cancel page is in checkout app, so in standalone mode it needs the checkout origin
 */
export function getCancelHref(): string {
  const baseUrl = getBaseUrl('checkout');
  return `${baseUrl}/support/cancel`;
}

/**
 * Get the current development mode
 * @returns 'gateway' | 'standalone' | 'auto' | 'production'
 */
export function getDevMode(): 'gateway' | 'standalone' | 'auto' | 'production' {
  if (process.env.NODE_ENV === 'production') {
    return 'production';
  }

  const devMode = process.env.NEXT_PUBLIC_DEV_MODE as DevMode;
  if (devMode === 'gateway' || devMode === 'standalone') {
    return devMode;
  }

  return 'auto';
}

