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
 * 
 * IMPORTANT: Always returns absolute URLs in standalone mode to ensure port changes work correctly
 */
function getBaseUrl(targetApp: 'shell' | 'details' | 'checkout'): string {
  const devMode = (process.env.NEXT_PUBLIC_DEV_MODE as DevMode) || undefined;
  const nodeEnv = process.env.NODE_ENV;

  // Production: always use relative URLs
  if (nodeEnv === 'production') {
    return '';
  }

  // Explicit gateway mode: use relative URLs (proxy handles routing)
  if (devMode === 'gateway') {
    return '';
  }

  // Client-side detection for auto mode
  if (typeof window !== 'undefined') {
    const currentPort = window.location.port;
    
    // Explicit standalone mode: use absolute URLs with app-specific ports
    if (devMode === 'standalone') {
      return getAppOrigin(targetApp);
    }

    // Auto-detect mode based on current port
    // If we're on the gateway port (3024), use relative URLs
    if (currentPort === '3024') {
      return '';
    }
    
    // If we're on a direct app port (3000, 3001, 3002), use standalone mode
    if (['3000', '3001', '3002'].includes(currentPort)) {
      // In standalone mode, we need to change port when navigating to another app
      // Always return absolute URL to ensure port change
      return getAppOrigin(targetApp);
    }
    
    // Unknown port: use relative URLs
    return '';
  }
  
  // Server-side: check env vars
  // In standalone mode server-side, generate absolute URLs
  // Client-side will handle the actual navigation
  if (devMode === 'standalone') {
    return getAppOrigin(targetApp);
  }

  // Server-side auto mode: assume gateway (will be corrected client-side)
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
  // In gateway/production mode, baseUrl is empty, so we need to add /projects prefix manually
  if (baseUrl === '') {
    // Gateway/production mode: add /projects prefix
    return `/projects/${projectId}`;
  }
  // Standalone mode: baseUrl is full origin (e.g., http://localhost:3001)
  // Check if we're already on the details app (port 3001)
  if (typeof window !== 'undefined') {
    const currentPort = window.location.port;
    // If we're on the same app (details), use relative path without prefix
    // because Next.js will add basePath automatically
    if (currentPort === '3001') {
      return `/${projectId}`;
    }
  }
  // Cross-app navigation in standalone mode: use full URL with prefix
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
  // In gateway/production mode, baseUrl is empty, so we need to add /support prefix manually
  if (baseUrl === '') {
    // Gateway/production mode: add /support prefix
    return `/support/${projectId}`;
  }
  // Standalone mode: baseUrl is full origin (e.g., http://localhost:3002)
  // Check if we're already on the checkout app (port 3002)
  if (typeof window !== 'undefined') {
    const currentPort = window.location.port;
    // If we're on the same app (checkout), use relative path without prefix
    // because Next.js will add basePath automatically
    if (currentPort === '3002') {
      return `/${projectId}`;
    }
  }
  // Cross-app navigation in standalone mode: use full URL with prefix
  return `${baseUrl}/support/${projectId}`;
}

/**
 * Get success page URL
 * @returns URL path to success page
 * Note: Success page is in checkout app, so in standalone mode it needs the checkout origin
 */
export function getSuccessHref(): string {
  const baseUrl = getBaseUrl('checkout');
  // basePath adds /support automatically, so we use relative path
  return `${baseUrl}/success`;
}

/**
 * Get cancel page URL
 * @returns URL path to cancel page
 * Note: Cancel page is in checkout app, so in standalone mode it needs the checkout origin
 */
export function getCancelHref(): string {
  const baseUrl = getBaseUrl('checkout');
  // basePath adds /support automatically, so we use relative path
  return `${baseUrl}/cancel`;
}

/**
 * Get shell/home page URL
 * @returns URL path to home/landing page
 * 
 * In gateway mode: `/` (relative)
 * In standalone mode: `http://localhost:3000/` (absolute with port)
 * In production: `/` (relative)
 */
export function getShellHref(): string {
  const baseUrl = getBaseUrl('shell');
  return `${baseUrl}/`;
}

/**
 * Get projects list page URL
 * @returns URL path to projects list page
 * 
 * In gateway mode: `/projects` (relative)
 * In standalone mode: `http://localhost:3001/projects` (absolute with port)
 * In production: `/projects` (relative)
 */
export function getProjectsHref(): string {
  const baseUrl = getBaseUrl('details');
  // basePath adds /projects automatically, so we use root path
  return `${baseUrl}/`;
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

