import { useEffect, useRef, useState } from 'react';

const MOBILE_MAX_WIDTH = 767;

/**
 * Tracks whether the current viewport matches mobile widths (< 768px).
 * Used to strictly isolate mobile-only UI/UX enhancements from laptop/desktop layouts.
 */
export function useIsMobile(maxWidth: number = MOBILE_MAX_WIDTH): boolean {
  const query = `(max-width: ${maxWidth}px)`;

  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Sync immediately in case viewport changed between initial state and effect
    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return isMobile;
}

/**
 * Detects touch-primary devices (no hover capability & coarse pointer).
 * Leaves fine-pointer laptop/desktop hover interactions completely intact.
 */
export function useIsTouchDevice(): boolean {
  const query = '(hover: none) and (pointer: coarse)';

  const [isTouch, setIsTouch] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsTouch(event.matches);
    };

    setIsTouch(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isTouch;
}

export interface ScrollDirectionState {
  direction: 'up' | 'down';
  scrollY: number;
  isAtTop: boolean;
}

/**
 * Reports rAF-throttled scroll direction with jitter hysteresis.
 * When `enabled` is false (e.g. on desktop), attaches zero scroll listeners.
 */
export function useScrollDirection(
  enabled: boolean = true,
  threshold: number = 10
): ScrollDirectionState {
  const [state, setState] = useState<ScrollDirectionState>(() => ({
    direction: 'up',
    scrollY: typeof window !== 'undefined' ? window.scrollY : 0,
    isAtTop: typeof window !== 'undefined' ? window.scrollY < 48 : true,
  }));

  const lastScrollY = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0);
  const ticking = useRef<boolean>(false);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    lastScrollY.current = window.scrollY;

    const updateDirection = () => {
      const currentY = Math.max(0, window.scrollY);
      const isAtTop = currentY < 48;
      const diff = currentY - lastScrollY.current;

      if (isAtTop) {
        setState((prev) =>
          prev.direction === 'up' && prev.isAtTop && prev.scrollY === currentY
            ? prev
            : { direction: 'up', scrollY: currentY, isAtTop: true }
        );
        lastScrollY.current = currentY;
      } else if (Math.abs(diff) >= threshold) {
        const nextDirection = diff > 0 ? 'down' : 'up';
        setState((prev) =>
          prev.direction === nextDirection && prev.isAtTop === isAtTop && prev.scrollY === currentY
            ? prev
            : { direction: nextDirection, scrollY: currentY, isAtTop }
        );
        lastScrollY.current = currentY;
      }

      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(updateDirection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enabled, threshold]);

  return state;
}

