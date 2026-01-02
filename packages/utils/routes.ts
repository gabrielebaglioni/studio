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
function getAppOrigin(appName: 'shell' | 'core'): string {
  const envVar = {
    shell: process.env.NEXT_PUBLIC_SHELL_ORIGIN,
    core: process.env.NEXT_PUBLIC_CORE_ORIGIN,
  }[appName];

  // Default ports if env var not set
  const defaultPorts = {
    shell: '3000',
    core: '3001',
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
function getBaseUrl(targetApp: 'shell' | 'core'): string {
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
    
    // If we're on a direct app port (3000, 3001), use standalone mode
    if (['3000', '3001'].includes(currentPort)) {
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
 * Get core page URL (replaces details/checkout)
 * @param projectId - Optional Project ID (slug)
 * @returns URL path to core page
 * 
 * In gateway mode: `/core` or `/core/${projectId}` (relative)
 * In standalone mode: `http://localhost:3001/core` or `http://localhost:3001/core/${projectId}` (absolute with port)
 * In production: `/core` or `/core/${projectId}` (relative)
 */
export function getCoreHref(projectId?: ProjectId): string {
  const baseUrl = getBaseUrl('core');
  const path = projectId ? `/core/${projectId}` : '/core';
  
  // In gateway/production mode, baseUrl is empty, so we use relative path
  if (baseUrl === '') {
    return path;
  }
  
  // Standalone mode: baseUrl is full origin (e.g., http://localhost:3001)
  // Check if we're already on the core app (port 3001)
  if (typeof window !== 'undefined') {
    const currentPort = window.location.port;
    // If we're on the same app (core), use relative path without prefix
    // because Next.js will add basePath automatically
    if (currentPort === '3001') {
      return projectId ? `/${projectId}` : '/';
    }
  }
  
  // Cross-app navigation in standalone mode: use full URL with prefix
  return `${baseUrl}${path}`;
}

/**
 * @deprecated Use getCoreHref instead
 * Get details page URL for a project
 * @param projectId - Project ID (slug)
 * @returns URL path to core page
 */
export function getDetailsHref(projectId: ProjectId): string {
  return getCoreHref(projectId);
}

/**
 * @deprecated Use getCoreHref instead
 * Get support/checkout page URL for a project
 * @param projectId - Project ID (slug)
 * @returns URL path to core page
 */
export function getSupportHref(projectId: ProjectId): string {
  return getCoreHref(projectId);
}

/**
 * Get success page URL
 * @returns URL path to success page
 * Note: Success page is in core app
 */
export function getSuccessHref(): string {
  const baseUrl = getBaseUrl('core');
  // basePath adds /core automatically, so we use relative path
  return `${baseUrl}/success`;
}

/**
 * Get cancel page URL
 * @returns URL path to cancel page
 * Note: Cancel page is in core app
 */
export function getCancelHref(): string {
  const baseUrl = getBaseUrl('core');
  // basePath adds /core automatically, so we use relative path
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
 * Get projects list page URL (now points to core)
 * @returns URL path to core page
 */
export function getProjectsHref(): string {
  return getCoreHref();
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

