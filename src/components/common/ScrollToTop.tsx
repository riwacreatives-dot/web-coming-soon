import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Native immediate window scroll reset
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // 2. Lenis virtual scroll synchronization
    const win = window as unknown as {
      __lenis?: { scrollTo: (target: number, opts?: { immediate?: boolean }) => void };
    };
    if (win.__lenis) {
      win.__lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
};

