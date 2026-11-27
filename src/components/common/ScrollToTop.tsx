import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Native browser scroll restoration on route transitions (zero Lenis / scroll hijacking).
 * Retries briefly when a lazy-loaded route mounts with a hash target.
 */
export const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    const targetId = hash.replace(/^#/, '');
    const tryScroll = (): boolean => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
        return true;
      }
      return false;
    };

    if (tryScroll()) return;

    const timer1 = window.setTimeout(tryScroll, 80);
    const timer2 = window.setTimeout(tryScroll, 260);
    return () => {
      window.clearTimeout(timer1);
      window.clearTimeout(timer2);
    };
  }, [pathname, hash]);

  return null;
};
