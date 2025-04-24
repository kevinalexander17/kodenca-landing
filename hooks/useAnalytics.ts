'use client';

import { useCallback } from 'react';

// ID fijo de Google Analytics
const GA_ID = 'G-WN7WFB0HLP';

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

export function useAnalytics() {
  const trackEvent = useCallback(({ category, action, label, value }: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }, []);

  const trackPageView = useCallback((path: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_ID, {
        page_path: path,
      });
    }
  }, []);

  const trackConversion = useCallback((conversionId: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
      });
    }
  }, []);

  return {
    trackEvent,
    trackPageView,
    trackConversion,
  };
} 