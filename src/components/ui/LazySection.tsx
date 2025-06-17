'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

const LazySection = ({ 
  children, 
  threshold = 0.1, 
  rootMargin = '50px',
  className = ''
}: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, hasLoaded]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <div className="animate-in fade-in duration-700">
          {children}
        </div>
      ) : (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="animate-pulse bg-gray-200 rounded-lg h-32 w-full max-w-md"></div>
        </div>
      )}
    </div>
  );
};

export default LazySection; 