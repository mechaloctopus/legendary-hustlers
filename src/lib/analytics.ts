// Analytics and performance monitoring utilities

// Google Analytics 4 integration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log custom events
export const event = (action: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, parameters);
  }
};

// Performance monitoring
interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
}

export const reportWebVitals = (metric: WebVitalMetric) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  event('form_submit', {
    form_name: formName,
    success: success,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  event('scroll_depth', {
    depth_percentage: depth,
  });
};

// Track section views
export const trackSectionView = (sectionName: string) => {
  event('section_view', {
    section_name: sectionName,
  });
};

// Performance observer for Core Web Vitals
export const initPerformanceObserver = () => {
  if (typeof window === 'undefined') return;

  // Observe Largest Contentful Paint
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            reportWebVitals({
              name: 'LCP',
              value: entry.startTime,
              id: 'lcp',
            });
          }
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('Performance observer not supported:', error);
    }
  }
};

// Error tracking
export const trackError = (error: Error, errorInfo?: Record<string, unknown>) => {
  event('exception', {
    description: error.message,
    fatal: false,
    error_info: errorInfo,
  });
};

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
} 