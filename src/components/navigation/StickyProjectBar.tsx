import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface StickyProjectBarProps {
  isMenuOpen?: boolean;
}

/**
 * Sticky floating action footer bar with a persistent "Start a Project" CTA.
 * - Hidden at top / over the Hero (where "START A PROJECT" is already visible).
 * - Appears smoothly once scrolled down through page content.
 * - Automatically hides when reaching FinalCTASection / Footer, on /contact, or when MenuDrawer is open.
 */
export const StickyProjectBar: React.FC<StickyProjectBarProps> = ({ isMenuOpen = false }) => {
  const { pathname } = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const isExcludedRoute = pathname === '/contact' || pathname === '/brief';

  useEffect(() => {
    if (isExcludedRoute || typeof window === 'undefined') {
      setIsVisible(false);
      return;
    }

    let rafId: number | null = null;

    const evaluateVisibility = () => {
      rafId = null;
      const heroEl = document.getElementById('hero');
      const pastHero = heroEl
        ? heroEl.getBoundingClientRect().bottom < window.innerHeight * 0.45
        : window.scrollY > 280;

      const footerEls = document.querySelectorAll('#final-cta, footer');
      const footerInView = Array.from(footerEls).some((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight - 32 && rect.bottom > 0;
      });

      const nextVisible = pastHero && !footerInView;
      setIsVisible((prev) => (prev === nextVisible ? prev : nextVisible));
    };

    const scheduleEval = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(evaluateVisibility);
      }
    };

    evaluateVisibility();
    window.addEventListener('scroll', scheduleEval, { passive: true });
    window.addEventListener('resize', scheduleEval, { passive: true });

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', scheduleEval);
      window.removeEventListener('resize', scheduleEval);
    };
  }, [pathname, isExcludedRoute]);

  const shouldShow = isVisible && !isMenuOpen && !isExcludedRoute;

  useEffect(() => {
    const el = containerRef.current as (HTMLDivElement & { inert?: boolean }) | null;
    if (el) {
      el.inert = !shouldShow;
    }
  }, [shouldShow]);

  if (isExcludedRoute) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden={!shouldShow}
      className={`fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 sm:px-6 pb-[max(0.85rem,env(safe-area-inset-bottom))] pointer-events-none ${
        prefersReducedMotion ? '' : 'transition-all duration-300 ease-out'
      } ${shouldShow ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
    >
      <div
        role="region"
        aria-label="Quick Project Action"
        className={`w-full max-w-[390px] sm:w-auto sm:max-w-none flex items-center justify-between gap-3 sm:gap-5 pl-4 pr-1.5 py-1.5 rounded-full bg-[#111116]/95 dark:bg-[#1E1E28]/95 backdrop-blur-xl text-white border border-white/20 dark:border-white/35 shadow-[0_16px_42px_rgba(0,0,0,0.34)] dark:shadow-[0_16px_44px_rgba(0,0,0,0.75)] ${
          shouldShow ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0 font-mono text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.16em]">
          <span
            aria-hidden="true"
            className="w-2 h-2 rounded-full bg-[#EA1E4D] shrink-0"
          />
          <span className="sm:hidden text-white font-semibold tracking-[0.1em] whitespace-nowrap">
            GOT A BRIEF?
          </span>
          <span className="hidden sm:inline text-[#B4B4BE] whitespace-nowrap">
            RIWA CREATIVES <span className="text-white/35 mx-1.5">·</span>{' '}
            <span className="text-white font-semibold">HAVE A PROJECT IN MIND?</span>
          </span>
        </div>

        <Link
          to="/contact"
          tabIndex={shouldShow ? 0 : -1}
          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full bg-[#C4123D] hover:bg-[#EA1E4D] text-white font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] transition-colors shrink-0 touch-manipulation"
        >
          <span>START A PROJECT</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};
