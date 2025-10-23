'use client';

import { useEffect } from 'react';
import { trackError } from '@/lib/analytics';

export default function GlobalErrorHandler() {
  useEffect(() => {
    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      try {
        const reason = event.reason;
        if (reason instanceof Error) {
          console.error('Unhandled promise rejection:', reason);
          trackError(reason, { source: 'unhandledrejection' });
          // allow Next.js overlay for real Errors
        } else {
          const message = typeof reason === 'string' ? reason : String(reason);
          console.error('Unhandled promise rejection (non-Error):', message);
          trackError(new Error(message), { source: 'unhandledrejection' });
          // prevent overlay only for non-Error reasons like [object Event]
          event.preventDefault();
        }
      } catch {
        // no-op
      }
    };

    const onError = (event: ErrorEvent) => {
      try {
        const errorObj = event.error instanceof Error ? event.error : new Error(event.message);
        console.error('Global error:', errorObj);
        trackError(errorObj, {
          source: 'error',
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        });
      } catch {
        // no-op
      }
      // let the default handler run as well
    };

    window.addEventListener('unhandledrejection', onUnhandledRejection);
    window.addEventListener('error', onError);

    return () => {
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
      window.removeEventListener('error', onError);
    };
  }, []);

  return null;
}

