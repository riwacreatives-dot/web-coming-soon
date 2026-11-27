import { useEffect, useState, RefObject } from 'react';

/**
 * Single-run below-the-fold IntersectionObserver hook (`Blueprint-3` p. 68).
 * Content starts visible unless verified below the fold on mount with IO + motion enabled,
 * ensuring elements never stay stuck hidden when JS/IO is unavailable or reduced motion is on.
 */
export function useRevealOnScroll(ref: RefObject<HTMLElement | null>): boolean {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = ref.current;
    if (reducedMotion || !el) {
      setIsVisible(true);
      return;
    }

    // Reveal immediately if already inside or above initial viewport (avoid fold-edge flicker)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setIsVisible(true);
      return;
    }

    setIsVisible(false);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
}
