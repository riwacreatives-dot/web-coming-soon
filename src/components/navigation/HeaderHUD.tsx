import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { WorldClocks } from './WorldClocks';
import { Menu, X } from 'lucide-react';
import { useIsMobile, useScrollDirection } from '../../hooks/useIsMobile';

interface HeaderHUDProps {
  isMenuOpen: boolean;
  onOpenMenu: () => void;
  onCloseMenu: () => void;
}

export const HeaderHUD: React.FC<HeaderHUDProps> = ({
  isMenuOpen,
  onOpenMenu,
  onCloseMenu,
}) => {
  const isMobile = useIsMobile();
  const { direction, isAtTop } = useScrollDirection(isMobile, 12);
  const hideMobileHeader = isMobile && !isAtTop && direction === 'down' && !isMenuOpen;
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {/* Desktop / Laptop HUD Navigation (>= 768px — 100% Preserved) */}
      <header className="hidden md:flex fixed top-3 sm:top-6 inset-x-0 z-50 items-center justify-center px-3 sm:px-4 pointer-events-none transition-all duration-300">
        <nav className="pointer-events-auto inline-flex items-center gap-2.5 sm:gap-4.5 px-2.5 sm:px-4.5 py-1.5 sm:py-2 rounded-2xl bg-surface/90 backdrop-blur-xl border border-line-border shadow-[0_12px_40px_rgba(0,0,0,0.35)] text-text-primary transition-all max-w-[calc(100vw-1.5rem)]">
          {/* Left: Initial 'R' Monogram */}
          <Link
            to="/"
            data-cursor-text="HOME"
            title="RIWA Creatives Home"
            className="group flex items-center gap-1.5 cursor-pointer select-none shrink-0"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-text-primary text-canvas flex items-center justify-center font-display font-black text-sm sm:text-base tracking-tighter group-hover:bg-brand-red group-hover:text-white transition-all shadow-sm">
              <span>R</span>
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-brand-red" />
            </div>
          </Link>

          {/* Minimal Divider */}
          <div className="h-4 w-[1px] bg-line-border shrink-0" />

          {/* Minimal Navigation Links to Dedicated Routes */}
          <div className="flex items-center gap-2.5 sm:gap-5 font-mono text-xs sm:text-[13px] tracking-wide shrink-0">
            <Link
              to="/work"
              data-cursor-text="WORK"
              className={`transition-colors cursor-pointer ${
                currentPath === '/work'
                  ? 'text-text-primary font-bold'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Work
            </Link>

            <Link
              to="/about"
              data-cursor-text="ABOUT"
              className={`hidden sm:inline-block transition-colors cursor-pointer ${
                currentPath === '/about' || currentPath === '/vision'
                  ? 'text-text-primary font-bold'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              About
            </Link>

            <Link
              to="/services"
              data-cursor-text="SERVICES"
              className={`hidden lg:inline-block transition-colors cursor-pointer ${
                currentPath === '/services'
                  ? 'text-text-primary font-bold'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Services
            </Link>

            <Link
              to="/leadership"
              data-cursor-text="LEADERSHIP"
              className={`hidden xl:inline-block transition-colors cursor-pointer ${
                currentPath === '/leadership'
                  ? 'text-text-primary font-bold'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Leadership
            </Link>

            <Link
              to="/contact"
              data-cursor-text="CONNECT"
              className={`transition-colors cursor-pointer font-semibold whitespace-nowrap ${
                currentPath === '/contact'
                  ? 'text-brand-red font-bold'
                  : 'text-text-secondary hover:text-brand-red'
              }`}
            >
              <span className="sm:hidden">Connect</span>
              <span className="hidden sm:inline">Connect With Us</span>
            </Link>
          </div>
                  ? 'text-brand-red font-bold'
                  : 'text-text-secondary hover:text-brand-red'
              }`}
            >
              <span className="sm:hidden">Connect</span>
              <span className="hidden sm:inline">Connect With Us</span>
            </Link>
          </div>

          {/* Utility Divider */}
          <div className="h-4 w-[1px] bg-line-border shrink-0" />

          {/* World Clocks — lg+ only */}
          <div className="hidden lg:block">
            <WorldClocks />
          </div>

          {/* Clock Divider */}
          <div className="hidden lg:block h-4 w-[1px] bg-line-border shrink-0" />

          {/* Quick Utilities: Theme, Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <ThemeToggle />

            {/* Minimal Menu Trigger */}
            <button
              type="button"
              onClick={isMenuOpen ? onCloseMenu : onOpenMenu}
              data-cursor-text="MENU"
              title="Open Studio Menu"
              className="min-h-[36px] min-w-[36px] flex items-center justify-center p-1.5 sm:px-2.5 sm:py-1.5 rounded-full border border-line-border bg-surface text-text-primary hover:border-brand-red hover:text-brand-red font-mono text-xs uppercase tracking-wider transition-all cursor-pointer gap-1.5 touch-manipulation"
            >
              {isMenuOpen ? <X size={13} /> : <Menu size={13} />}
              <span className="hidden md:inline font-bold text-[11px]">{isMenuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile-Only Slim Identity Header (< 768px): Passive identity & theme, yields on scroll down */}
      <header
        className={`md:hidden fixed top-0 inset-x-0 z-50 px-3 pt-[max(0.65rem,env(safe-area-inset-top))] pointer-events-none transition-all duration-300 ease-out ${
          hideMobileHeader ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <div
          style={{
            backgroundColor: 'color-mix(in srgb, var(--bg-surface) 90%, transparent)',
          }}
          className="pointer-events-auto flex items-center justify-between w-full px-3 py-1.5 rounded-2xl bg-surface backdrop-blur-xl border border-line-border/80 shadow-[0_8px_28px_rgba(0,0,0,0.16)] dark:shadow-[0_8px_28px_rgba(0,0,0,0.45)]"
        >
          {/* Left: Monogram + Studio Wordmark */}
          <Link
            to="/"
            aria-label="RIWA Creatives Home"
            className="flex items-center gap-2 min-h-[40px] pr-2 select-none touch-manipulation"
          >
            <div className="relative w-7 h-7 rounded-lg bg-text-primary text-canvas flex items-center justify-center font-display font-black text-sm tracking-tighter shadow-sm">
              <span>R</span>
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-brand-red" />
            </div>
            <span className="font-display font-black text-xs uppercase tracking-wider text-text-primary">
              RIWA<span className="text-brand-red">.</span>
            </span>
          </Link>

          {/* Right: Live Sprint Indicator + Theme Toggle + Mobile Menu Hamburger */}
          <div className="flex items-center gap-1.5">
            <div className="hidden xs:flex items-center gap-1.5 px-2 py-1 rounded-full border border-line-border/70 bg-canvas/50 font-mono text-[10px] uppercase tracking-wider text-text-secondary">
              <span className="relative flex h-1.5 w-1.5 shrink-0 items-center justify-center">
                <span className="inline-block rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="font-semibold text-text-primary">Q1/Q2 Open</span>
            </div>

            <ThemeToggle />

            <button
              type="button"
              onClick={isMenuOpen ? onCloseMenu : onOpenMenu}
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="min-h-[34px] min-w-[34px] flex items-center justify-center p-1.5 rounded-full border border-line-border bg-surface text-text-primary hover:border-brand-red hover:text-brand-red font-mono text-xs uppercase tracking-wider transition-all cursor-pointer touch-manipulation"
            >
              {isMenuOpen ? <X size={14} /> : <Menu size={14} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
