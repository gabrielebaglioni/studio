/**
 * Google Analytics utility functions
 * Provides type-safe event tracking and Web Vitals reporting
 */

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Track custom events in Google Analytics
 */
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

/**
 * Track page views
 */
export function trackPageView(url: string): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
    page_path: url,
  });
}

/**
 * Track program switch events
 */
export function trackProgramSwitch(programName: string): void {
  trackEvent('program_switch', 'navigation', programName);
}

/**
 * Track button clicks
 */
export function trackButtonClick(buttonLabel: string, location: string): void {
  trackEvent('button_click', 'engagement', `${location}_${buttonLabel}`);
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(depth: number): void {
  trackEvent('scroll_depth', 'engagement', undefined, depth);
}

