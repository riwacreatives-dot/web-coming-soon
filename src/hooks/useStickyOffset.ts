import { useEffect, RefObject } from 'react';

/**
 * Observes a sticky bar's live height and syncs the matching CSS custom property
 * (`--header-height` or `--subnav-height`) so `--sticky-offset` stays accurate
 * across breakpoints and stacked navigation bars (WCAG 2.2 SC 2.4.11).
 */
export function useObserveStickyHeight(
  ref: RefObject<HTMLElement | null>,
  cssVarName: '--header-height' | '--subnav-height',
  fallbackPx = 0
) {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const root = document.documentElement;
    const updateHeight = () => {
      const el = ref.current;
      const height = el ? Math.ceil(el.getBoundingClientRect().height) : fallbackPx;
      root.style.setProperty(cssVarName, `${height}px`);
    };

    updateHeight();

    const el = ref.current;
    let observer: ResizeObserver | null = null;
    if (el && typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => {
        updateHeight();
      });
      observer.observe(el);
    }

    window.addEventListener('resize', updateHeight, { passive: true });
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('resize', updateHeight);
      if (cssVarName === '--subnav-height') {
        root.style.setProperty('--subnav-height', '0px');
      }
    };
  }, [ref, cssVarName, fallbackPx]);
}

/**
 * Global sticky offset initializer for root shell when no sticky subnav is mounted.
 */
export function useStickyOffset() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    if (!root.style.getPropertyValue('--header-height')) {
      root.style.setProperty('--header-height', window.innerWidth >= 768 ? '72px' : '64px');
    }
    if (!root.style.getPropertyValue('--subnav-height')) {
      root.style.setProperty('--subnav-height', '0px');
    }
  }, []);
}
