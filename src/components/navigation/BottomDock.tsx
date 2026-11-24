import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutGrid, Menu, Sparkles, X } from 'lucide-react';
import { usePageTransition } from '../../contexts/TransitionContext';
import { useIsMobile, useScrollDirection } from '../../hooks/useIsMobile';

interface BottomDockProps {
  isMenuOpen?: boolean;
  onOpenMenu?: () => void;
  onCloseMenu?: () => void;
}

const ROUTE_SECTIONS = [
  { path: '/', code: '01', label: 'HERO' },
  { path: '/work', code: '02', label: 'WORK' },
  { path: '/about', code: '03', label: 'ABOUT' },
  { path: '/services', code: '04', label: 'SCOPE' },
  { path: '/leadership', code: '05', label: 'LEAD' },
  { path: '/contact', code: '06', label: 'BRIEF' },
] as const;

export const BottomDock: React.FC<BottomDockProps> = ({
  isMenuOpen = false,
  onOpenMenu,
  onCloseMenu,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { replayIntro } = usePageTransition();
  const isMobile = useIsMobile();
  const { direction, isAtTop } = useScrollDirection(isMobile, 12);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Desktop bottom detector & scroll cue state
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      setIsAtBottom(scrollY + windowHeight >= docHeight - 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const activeSection =
    ROUTE_SECTIONS.find((s) => s.path === location.pathname) || ROUTE_SECTIONS[0];
  const isCompacted = isMobile && !isAtTop && direction === 'down' && !isMenuOpen;

  return (
    <>
      {/* Desktop / Laptop Full-Width Bottom Bar (>= 768px — 100% Preserved) */}
      <footer className="hidden md:block fixed bottom-0 left-0 w-full z-40 px-3.5 py-2 sm:px-8 sm:py-3 md:px-12 bg-canvas/85 backdrop-blur-md border-t border-line-border transition-colors duration-300 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center justify-between font-mono text-[11px] sm:text-xs tracking-wider uppercase select-none">
          {/* Left: Brand Philosophy & Intro Replay */}
          <div className="flex items-center gap-2 sm:gap-3 text-text-secondary font-medium">
            <button
              type="button"
              onClick={replayIntro}
              data-cursor-text="INTRO"
              className="hover:text-brand-red flex items-center gap-1.5 transition-colors cursor-pointer text-text-primary font-bold"
            >
              <span className="text-brand-red">✦</span>
              <span className="hidden sm:inline">REPLAY INTRO</span>
              <span className="sm:hidden">REPLAY</span>
            </button>
            <span className="hidden sm:inline text-line-border">|</span>
            <span className="hidden sm:inline text-text-secondary">
              MAKING <span className="font-serif italic text-brand-red font-normal text-xs lowercase">unreasonable</span> BRANDS HAPPEN
            </span>
          </div>

          {/* Center: Scroll Cue & Bottom Return */}
          <button
            type="button"
            onClick={() => {
              if (isAtBottom) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' });
              }
            }}
            data-cursor-text={isAtBottom ? 'TOP' : 'EXPLORE'}
            className="hidden md:flex items-center gap-1.5 text-text-primary hover:text-brand-red font-bold transition-colors cursor-pointer select-none"
          >
            <span>{isAtBottom ? '[ BACK TO TOP ↑ ]' : '[ SCROLL TO EXPLORE ↓ ]'}</span>
          </button>

          {/* Right: Live Agency Status (Static Luxury Dot — No Cheesy Ping) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="relative flex h-2 w-2 shrink-0 items-center justify-center">
              <span className="inline-block rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            </span>
            <span className="hidden md:inline text-text-secondary font-bold">
              ACCEPTING CLIENTS · Q1/Q2 SPRINT
            </span>
            <span className="hidden sm:inline md:hidden text-text-secondary font-bold">
              ACCEPTING SPRINT
            </span>
            <span className="sm:hidden text-text-secondary font-bold text-[10px]">
              ACCEPTING
            </span>
          </div>
        </div>
      </footer>

      {/* Mobile-Only Floating Dynamic Thumb Capsule (< 768px) */}
      <nav
        aria-label="Mobile Thumb Navigation"
        className={`md:hidden fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pointer-events-none transition-all duration-300 ease-out ${
          isMenuOpen ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        <div
          style={{
            backgroundColor: 'color-mix(in srgb, var(--bg-surface) 92%, transparent)',
          }}
          className={`pointer-events-auto flex items-center justify-between gap-1.5 p-1.5 rounded-full bg-surface backdrop-blur-2xl border border-line-border shadow-[0_14px_38px_rgba(0,0,0,0.18)] dark:shadow-[0_14px_40px_rgba(0,0,0,0.65)] w-full max-w-[374px] transition-all duration-300 ${
            isCompacted ? 'scale-[0.95] opacity-95' : 'scale-100 opacity-100'
          }`}
        >
          {/* Left: Menu Trigger + Live Section Context */}
          <button
            type="button"
            onClick={() => (isMenuOpen ? onCloseMenu?.() : onOpenMenu?.())}
            aria-label="Open Studio Menu"
            className="min-h-[44px] flex-1 min-w-0 px-3.5 rounded-full bg-canvas border border-line-border/80 text-text-primary flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider active:scale-95 transition-all touch-manipulation cursor-pointer"
          >
            <span className="text-brand-red shrink-0">
              {isMenuOpen ? <X size={15} /> : <Menu size={15} />}
            </span>
            <span className="truncate font-bold">
              {activeSection.code}{' '}
              <span className="text-text-secondary font-medium">{activeSection.label}</span>
            </span>
          </button>

          {/* Center: Quick Selected Work Jump to /work */}
          <button
            type="button"
            onClick={() => navigate('/work')}
            aria-label="Jump to Selected Works"
            className="min-w-[44px] min-h-[44px] rounded-full border border-line-border/80 bg-canvas text-text-primary hover:text-brand-red flex items-center justify-center active:scale-95 transition-all touch-manipulation cursor-pointer shrink-0"
          >
            <LayoutGrid size={16} />
          </button>

          {/* Right: Primary Thumb-Zone CTA to /contact */}
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="min-h-[44px] px-4 rounded-full bg-brand-red text-white font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-brand-red/30 active:scale-95 transition-all touch-manipulation cursor-pointer shrink-0"
          >
            <Sparkles size={12} />
            <span>Commission</span>
          </button>
        </div>
      </nav>
    </>
  );
};
