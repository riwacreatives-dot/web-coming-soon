import React, { useRef, RefObject } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useIsMobile, useScrollDirection } from '../../hooks/useIsMobile';
import { useObserveStickyHeight } from '../../hooks/useStickyOffset';
import { STUDIO_IDENTITY } from '../../data/studioData';

interface HeaderHUDProps {
  isMenuOpen: boolean;
  onOpenMenu: () => void;
  onCloseMenu: () => void;
  menuTriggerRef?: RefObject<HTMLButtonElement | null>;
}

const DESKTOP_NAV_ITEMS = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Leadership', to: '/leadership', xlOnly: true },
  { label: 'Connect With Us', to: '/contact', accent: true },
];

export const HeaderHUD: React.FC<HeaderHUDProps> = ({
  isMenuOpen,
  onOpenMenu,
  onCloseMenu,
  menuTriggerRef,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { direction, isAtTop } = useScrollDirection(isMobile, 12);
  const hideMobileHeader = isMobile && !isAtTop && direction === 'down' && !isMenuOpen;
  const { pathname } = useLocation();

  useObserveStickyHeight(wrapperRef, '--header-height', 72);

  const BrandMark = () => (
    <img
      src="/brand/riwa-logo-official.png"
      alt="Riwa Creatives Logo"
      className="h-11 sm:h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
    />
  );

  return (
    <div
      ref={wrapperRef}
      data-sticky-header="true"
      className="fixed top-0 inset-x-0 z-50 pointer-events-none"
    >
      {/* Desktop / Tablet Centered Frosted Floating Pill */}
      <header className="hidden md:flex items-center justify-center pt-3 sm:pt-5 px-3 sm:px-4">
        <nav
          aria-label="Primary Navigation"
          className="pointer-events-auto inline-flex items-center gap-3 sm:gap-5 px-4 sm:px-5 py-2 rounded-2xl bg-[#FFFFFF]/95 dark:bg-[#111116]/95 backdrop-blur-xl border border-[#111116]/15 dark:border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.22)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.65)] text-[#111116] dark:text-white transition-all max-w-[calc(100vw-1.5rem)]"
        >
          <Link
            to="/"
            aria-label={`${STUDIO_IDENTITY.name} — Home`}
            className="group inline-flex items-center min-h-[44px] pr-1 cursor-pointer select-none shrink-0"
          >
            <BrandMark />
          </Link>

          <div className="h-4 w-px bg-[#111116]/15 dark:bg-white/20 shrink-0" aria-hidden="true" />

          <div className="flex items-center gap-3 lg:gap-5 font-mono text-xs sm:text-[13px] tracking-wide shrink-0">
            {DESKTOP_NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.to ||
                (item.to === '/about' && pathname === '/vision') ||
                pathname.startsWith(`${item.to}/`);

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={isActive ? 'page' : undefined}
                  className={`${item.xlOnly ? 'hidden xl:inline-flex' : 'inline-flex'} items-center min-h-[40px] px-1 transition-colors whitespace-nowrap ${
                    item.accent
                      ? isActive
                        ? 'text-[#111116] dark:text-white font-bold underline decoration-[#EA1E4D] decoration-2 underline-offset-4'
                        : 'text-[#111116] dark:text-white font-semibold hover:underline decoration-[#EA1E4D] decoration-2 underline-offset-4'
                      : isActive
                        ? 'text-[#111116] dark:text-white font-bold underline decoration-[#EA1E4D] decoration-2 underline-offset-4'
                        : 'text-[#52525B] dark:text-[#D4D4DD] hover:text-[#111116] dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="h-4 w-px bg-[#111116]/15 dark:bg-white/20 shrink-0" aria-hidden="true" />

          <div className="flex items-center gap-2 shrink-0">
            <ThemeToggle />

            <button
              ref={menuTriggerRef}
              type="button"
              onClick={isMenuOpen ? onCloseMenu : onOpenMenu}
              aria-expanded={isMenuOpen}
              aria-controls="riwa-navigation-drawer"
              aria-label={isMenuOpen ? 'Close Studio Menu' : 'Open Studio Menu'}
              className="min-h-[38px] min-w-[38px] flex items-center justify-center px-3 py-1.5 rounded-full border border-[#111116]/20 dark:border-white/25 bg-[#F5F4F0] dark:bg-[#1B1B22] text-[#111116] dark:text-white hover:border-[#EA1E4D] font-mono text-xs uppercase tracking-wider transition-all cursor-pointer gap-1.5 touch-manipulation"
            >
              {isMenuOpen ? <X size={13} aria-hidden="true" /> : <Menu size={13} aria-hidden="true" />}
              <span className="font-bold text-[11px]">{isMenuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Slim Floating Bar (< 768px) */}
      <header
        className={`md:hidden px-3 pt-[max(0.65rem,env(safe-area-inset-top))] transition-all duration-300 ease-out ${
          hideMobileHeader ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="pointer-events-auto flex items-center justify-between w-full px-3.5 py-1.5 rounded-2xl bg-[#FFFFFF]/95 dark:bg-[#111116]/95 backdrop-blur-xl border border-[#111116]/15 dark:border-white/20 shadow-[0_8px_28px_rgba(0,0,0,0.16)] dark:shadow-[0_8px_28px_rgba(0,0,0,0.65)]">
          <Link
            to="/"
            aria-label={`${STUDIO_IDENTITY.name} — Home`}
            className="flex items-center min-h-[44px] pr-2 select-none touch-manipulation"
          >
            <BrandMark />
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              onClick={isMenuOpen ? onCloseMenu : onOpenMenu}
              aria-expanded={isMenuOpen}
              aria-controls="riwa-navigation-drawer"
              aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-full border border-[#111116]/20 dark:border-white/25 bg-[#F5F4F0] dark:bg-[#1B1B22] text-[#111116] dark:text-white hover:border-[#EA1E4D] font-mono text-xs uppercase tracking-wider transition-all cursor-pointer touch-manipulation"
            >
              {isMenuOpen ? <X size={15} aria-hidden="true" /> : <Menu size={15} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
