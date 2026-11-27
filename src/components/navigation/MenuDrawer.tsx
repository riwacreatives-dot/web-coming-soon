import React, { useEffect, useRef, RefObject } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { CONTACT_CONFIG, STUDIO_IDENTITY } from '../../data/studioData';
import { ArrowUpRight, Mail, X } from 'lucide-react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  returnFocusRef?: RefObject<HTMLButtonElement | null>;
}

interface NavItem {
  number: string;
  label: string;
  subtext: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    number: '01',
    label: 'HOME',
    subtext: 'Selected Work & Capabilities Overview',
    path: '/',
  },
  {
    number: '02',
    label: 'WORK',
    subtext: 'Projects, Studio IP & Creative Archive',
    path: '/work',
  },
  {
    number: '03',
    label: 'SERVICES',
    subtext: 'Five Integrated Brand & Growth Capabilities',
    path: '/services',
  },
  {
    number: '04',
    label: 'ABOUT',
    subtext: 'Studio Philosophy, Founder & Culture',
    path: '/about',
  },
  {
    number: '05',
    label: 'LEADERSHIP',
    subtext: 'Meet The Creative Direction Team',
    path: '/leadership',
  },
  {
    number: '06',
    label: 'CONTACT',
    subtext: 'Start a Project Conversation',
    path: '/contact',
  },
];

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  returnFocusRef,
}) => {
  useScrollLock(isOpen);
  const reduced = useReducedMotion();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  // Move focus inside modal on open and restore to trigger on close (WCAG 2.2)
  useEffect(() => {
    if (isOpen) {
      wasOpenRef.current = true;
      const timer = window.setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 30);
      return () => window.clearTimeout(timer);
    }

    if (wasOpenRef.current) {
      wasOpenRef.current = false;
      returnFocusRef?.current?.focus();
    }
  }, [isOpen, returnFocusRef]);

  // Trap Tab / Shift+Tab inside drawer and close cleanly on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== 'Tab' || !drawerRef.current) return;

      const focusables = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null);

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleNavClick = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="riwa-navigation-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation Drawer"
          initial={
            reduced
              ? { opacity: 0 }
              : {
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                  opacity: 0,
                }
          }
          animate={
            reduced
              ? { opacity: 1 }
              : {
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 150%, 0% 100%)',
                  opacity: 1,
                }
          }
          exit={
            reduced
              ? { opacity: 0 }
              : {
                  clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
                  opacity: 0,
                }
          }
          transition={{ duration: reduced ? 0.01 : 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col bg-[#050608] text-white overflow-y-auto overscroll-contain"
        >
          {/* Drawer Top Bar */}
          <div className="flex items-center justify-between px-4 py-4 sm:px-12 sm:py-8 border-b border-white/10 max-w-7xl mx-auto w-full gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <img
                src="/brand/riwa-logo-official.png"
                alt="Riwa Creatives Official Logo"
                className="h-12 w-auto object-contain shrink-0"
              />
              <span className="font-display font-extrabold text-sm sm:text-lg tracking-tight uppercase whitespace-nowrap">
                RIWA <span className="text-[#EA1E4D]">CREATIVES</span>
              </span>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] font-mono text-xs uppercase tracking-widest text-white/80 hover:text-white px-4 py-2 border border-white/25 rounded-full hover:border-white transition-all cursor-pointer touch-manipulation shrink-0"
            >
              <span>Close</span>
              <X size={14} aria-hidden="true" />
            </button>
          </div>

          {/* Drawer Body Grid */}
          <div className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 px-4 py-6 sm:px-12 sm:py-12 gap-6 sm:gap-10 pb-[max(2rem,env(safe-area-inset-bottom))] md:pb-12">
            {/* Left Column: Primary Navigation */}
            <nav
              aria-label="Full Site Navigation"
              className="lg:col-span-8 flex flex-col justify-center space-y-1 md:space-y-4"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#FD7D3C] mb-2 md:mb-4 block font-semibold">
                ✦ Studio Index / Navigation
              </span>

              {NAV_ITEMS.map((item, idx) => {
                const isActive =
                  item.path === '/'
                    ? pathname === '/'
                    : pathname === item.path || pathname.startsWith(`${item.path}/`);

                return (
                  <div
                    key={item.label}
                    className="overflow-hidden border-b border-white/10 md:border-none"
                  >
                    <motion.div
                      initial={reduced ? false : { y: '115%' }}
                      animate={{ y: '0%' }}
                      exit={reduced ? undefined : { y: '115%' }}
                      transition={{
                        delay: reduced ? 0 : 0.08 + idx * 0.04,
                        duration: reduced ? 0.01 : 0.55,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.path)}
                        className="group w-full flex items-center md:items-baseline justify-between md:justify-start gap-4 sm:gap-6 min-h-[54px] md:min-h-0 py-2 md:py-1.5 cursor-pointer transition-transform duration-300 md:hover:translate-x-3 touch-manipulation text-left"
                      >
                        <div className="flex items-baseline gap-2.5 sm:gap-6 min-w-0 pr-2">
                          <span className="font-mono text-xs sm:text-sm text-[#B4B4BE] group-hover:text-[#FD7D3C] transition-colors shrink-0">
                            {item.number}
                          </span>

                          <span
                            className={`font-display text-lg sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase transition-colors whitespace-nowrap ${
                              isActive
                                ? 'text-[#FD7D3C]'
                                : 'text-white group-hover:text-[#EA1E4D]'
                            }`}
                          >
                            {item.label}
                          </span>

                          <span className="hidden md:inline font-mono text-xs text-[#B4B4BE] group-hover:text-white transition-colors">
                            — {item.subtext}
                          </span>
                        </div>

                        <ArrowUpRight
                          size={18}
                          aria-hidden="true"
                          className="opacity-70 md:opacity-0 md:-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#EA1E4D] shrink-0"
                        />
                      </button>
                    </motion.div>
                  </div>
                );
              })}
            </nav>

            {/* Mobile Quick Enquiry Action */}
            <div className="md:hidden pt-4 flex flex-col justify-end space-y-3 font-mono">
              <button
                type="button"
                onClick={() => handleNavClick('/contact')}
                className="w-full min-h-[48px] px-5 rounded-full bg-[#EA1E4D] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
              >
                <span>Start a Project</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </button>

              {(CONTACT_CONFIG.publicEmail || CONTACT_CONFIG.instagramUrl) && (
                <div className="grid grid-cols-2 gap-2.5">
                  {CONTACT_CONFIG.publicEmail && (
                    <a
                      href={`mailto:${CONTACT_CONFIG.publicEmail}`}
                      className="min-h-[46px] px-3.5 rounded-xl border border-white/15 bg-white/5 flex items-center gap-2 text-xs text-white/90 hover:text-[#FD7D3C] transition-all"
                    >
                      <Mail size={13} className="text-[#EA1E4D] shrink-0" aria-hidden="true" />
                      <span className="truncate font-semibold">Email Desk</span>
                    </a>
                  )}
                  {CONTACT_CONFIG.instagramUrl && (
                    <a
                      href={CONTACT_CONFIG.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[46px] px-3.5 rounded-xl border border-white/15 bg-white/5 flex items-center justify-between text-xs text-white/90 hover:text-[#FD7D3C] transition-all"
                    >
                      <span className="truncate font-semibold">Instagram</span>
                      <ArrowUpRight size={13} className="text-[#EA1E4D] shrink-0" aria-hidden="true" />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Desktop Studio Column */}
            <div className="hidden md:flex lg:col-span-4 flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10 space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#FD7D3C] block font-semibold">
                  ✦ {STUDIO_IDENTITY.name}
                </span>
                <p className="font-sans text-sm text-[#B4B4BE] leading-relaxed">
                  {STUDIO_IDENTITY.descriptor} Strategy, brand systems, commercial creative, interactive web builds, and live room experiences under one roof.
                </p>
                <div className="grid grid-cols-2 gap-3 font-mono text-xs pt-2">
                  <div className="p-3 rounded-lg border border-white/10 bg-white/5">
                    <span className="text-[#FD7D3C] font-bold block text-xs">SELECTED WORK</span>
                    <span className="text-[#B4B4BE] text-[11px]">Case Studies &amp; IP</span>
                  </div>
                  <div className="p-3 rounded-lg border border-white/10 bg-white/5">
                    <span className="text-[#FD7D3C] font-bold block text-xs">5 DISCIPLINES</span>
                    <span className="text-[#B4B4BE] text-[11px]">Brand to Live Rooms</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#B4B4BE] block">
                  Project Enquiries
                </span>
                <button
                  type="button"
                  onClick={() => handleNavClick('/contact')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#EA1E4D] text-white font-mono text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </button>

                {CONTACT_CONFIG.publicEmail && (
                  <a
                    href={`mailto:${CONTACT_CONFIG.publicEmail}`}
                    className="font-mono text-sm text-[#FD7D3C] font-bold hover:underline block pt-2"
                  >
                    {CONTACT_CONFIG.publicEmail}
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
