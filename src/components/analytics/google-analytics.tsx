"use client";

import { GoogleAnalytics } from '@next/third-parties/google';
import { useReportWebVitals } from 'next/web-vitals';

/**
 * Google Analytics component with Web Vitals reporting
 * Best practice: Load analytics after interactive to not block initial render
 */
export function GoogleAnalyticsComponent() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // Report Web Vitals to Google Analytics
  useReportWebVitals((metric) => {
    if (typeof window === 'undefined' || !window.gtag) return;

    // Send Web Vitals as events to Google Analytics
    window.gtag('event', metric.name, {
      value: Math.round(
        metric.name === 'CLS' ? metric.value * 1000 : metric.value
      ), // values must be integers
      event_label: metric.id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate
    });
  });

  if (!gaId) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Google Analytics ID not found. Set NEXT_PUBLIC_GA_ID environment variable.');
    }
    return null;
  }

  return <GoogleAnalytics gaId={gaId} />;
}

