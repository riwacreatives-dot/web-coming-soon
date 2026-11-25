import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollLock } from '../../hooks/useScrollLock';
import { usePageTransition } from '../../contexts/TransitionContext';
import { ArrowUpRight, Mail, Play, X } from 'lucide-react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
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
    subtext: 'We Make Unreasonable Brands Happen',
    path: '/',
  },
  {
    number: '02',
    label: 'WORK',
    subtext: 'Selected Projects & Creative Executions',
    path: '/work',
  },
  {
    number: '03',
    label: 'ABOUT',
    subtext: 'Our Story, Philosophy & Working Style',
    path: '/about',
  },
  {
    number: '04',
    label: 'SERVICES',
    subtext: 'Brand, Advertising, Growth & Technology',
    path: '/services',
  },
  {
    number: '05',
    label: 'LEADERSHIP',
    subtext: 'Meet The Minds Shaping Riwa',
    path: '/leadership',
  },
  {
    number: '06',
    label: 'COMMISSION A PROJECT',
    subtext: 'Start A Conversation',
    path: '/contact',
  },
];

export const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose }) => {
  useScrollLock(isOpen);
  const navigate = useNavigate();
  const { replayIntro } = usePageTransition();

  // Close on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleNavClick = (path: string) => {
    onClose();
    navigate(path);
  };

  const handleReplayIntro = () => {
    onClose();
    replayIntro();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            opacity: 0,
          }}
          animate={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 150%, 0% 100%)',
            opacity: 1,
          }}
          exit={{
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            opacity: 0,
          }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col bg-[#050608] text-white overflow-y-auto overscroll-contain"
        >
          {/* Drawer Top Navigation Bar */}
          <div className="flex items-center justify-between px-4 py-4 sm:px-12 sm:py-8 border-b border-white/10 max-w-7xl mx-auto w-full gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <img
                src="/brand/riwa-logo-official.png"
                alt="Riwa Creatives Official Logo"
                className="h-14 w-auto object-contain shrink-0"
              />
              <span className="font-display font-extrabold text-sm sm:text-lg tracking-tight uppercase whitespace-nowrap">
                RIWA <span className="text-brand-red">CREATIVES</span>
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              data-cursor-text="CLOSE"
              className="flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white px-4 py-2 border border-white/20 rounded-full hover:border-white transition-all cursor-pointer touch-manipulation shrink-0"
            >
              <span>Close</span>
              <X size={14} />
            </button>
          </div>

          {/* Drawer Body Grid */}
          <div className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 px-4 py-5 sm:px-12 sm:py-12 gap-6 sm:gap-10 pb-[max(2rem,env(safe-area-inset-bottom))] md:pb-12">
            {/* Left Column: Primary Navigation with Line Masks */}
            <div className="lg:col-span-8 flex flex-col justify-center space-y-1 md:space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-red mb-2 md:mb-4 block font-semibold">
                ✦ Studio Index / Navigation
              </span>

              {NAV_ITEMS.map((item, idx) => (
                <div key={item.label} className="overflow-hidden border-b border-white/10 md:border-none">
                  <motion.div
                    initial={{ y: '120%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '120%' }}
                    transition={{
                      delay: 0.12 + idx * 0.045,
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.path)}
                      className="group w-full flex items-center md:items-baseline justify-between md:justify-start gap-4 sm:gap-6 min-h-[54px] md:min-h-0 py-2 md:py-1 cursor-pointer transition-transform duration-300 md:hover:translate-x-3 touch-manipulation text-left"
                    >
                      <div className="flex items-baseline gap-2.5 sm:gap-6 min-w-0 pr-2">
                        <span className="font-mono text-xs sm:text-sm text-white/40 group-hover:text-brand-red transition-colors shrink-0">
                          {item.number}
                        </span>

                        <span className="font-display text-[clamp(1rem,4.6vw,1.25rem)] sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white group-hover:text-brand-red transition-colors whitespace-nowrap">
                          {item.label}
                        </span>

                        <span className="hidden md:inline font-mono text-xs text-white/40 group-hover:text-white transition-colors">
                          — {item.subtext}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="opacity-70 md:opacity-0 md:-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-red shrink-0"
                      />
                    </button>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Mobile-Only Thumb Quick Actions Strip (< 768px) */}
            <div className="md:hidden pt-2 flex flex-col justify-end space-y-3 font-mono">
              <button
                type="button"
                onClick={handleReplayIntro}
                className="w-full min-h-[48px] px-4 rounded-xl border border-white/15 bg-white/5 hover:border-brand-red flex items-center justify-between text-xs uppercase tracking-wider text-white active:scale-[0.98] transition-all touch-manipulation cursor-pointer"
              >
                <span className="flex items-center gap-2 font-bold">
                  <Play size={13} className="text-brand-red" />
                  <span>Replay 3D Studio Intro</span>
                </span>
                <span className="text-brand-red text-[10px] font-bold">LAUNCH ✦</span>
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="mailto:riwacreatives@gmail.com"
                  className="min-h-[48px] px-3.5 rounded-xl border border-white/15 bg-white/5 flex items-center gap-2 text-xs text-white/90 hover:text-brand-red active:scale-[0.98] transition-all touch-manipulation"
                >
                  <Mail size={13} className="text-brand-red shrink-0" />
                  <span className="truncate font-semibold">Email Desk</span>
                </a>
                <a
                  href="https://instagram.com/madebyriwa"
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[48px] px-3.5 rounded-xl border border-white/15 bg-white/5 flex items-center justify-between text-xs text-white/90 hover:text-brand-red active:scale-[0.98] transition-all touch-manipulation"
                >
                  <span className="truncate font-semibold">@madebyriwa</span>
                  <ArrowUpRight size={13} className="text-brand-red shrink-0" />
                </a>
              </div>

              <div className="flex items-center justify-between pt-2 text-[10px] uppercase tracking-wider text-white/50">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Accepting Q1/Q2 Sprint
                </span>
                <span>MSME Registered</span>
              </div>
            </div>

            {/* Desktop / Laptop Right Column: Studio Disciplines & Direct Channels (>= 768px — 100% Preserved) */}
            <div className="hidden md:flex lg:col-span-4 flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10 space-y-8">
              {/* Studio Overview */}
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-brand-red block font-semibold">
                  ✦ The RIWA Protocol
                </span>
                <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">
                  Independent commercial ad art direction, 3D fluid dynamics, and disciplined growth strategy for ambitious modern brands.
                </p>
                <div className="grid grid-cols-2 gap-3 font-mono text-xs pt-2">
                  <div className="p-3 rounded-lg border border-white/10 bg-white/5">
                    <span className="text-brand-red font-bold block text-xs">PROVOCATIVE ART</span>
                    <span className="text-white/50 text-[10px]">Posters & CGI Visuals</span>
                  </div>
                  <div className="p-3 rounded-lg border border-white/10 bg-white/5">
                    <span className="text-brand-red font-bold block text-xs">MEASURED SCALE</span>
                    <span className="text-white/50 text-[10px]">Media & Retention</span>
                  </div>
                </div>
              </div>

              {/* Direct Inquiries & Accreditation */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 block">
                  Direct Intake Channel
                </span>
                <a
                  href="mailto:riwacreatives@gmail.com"
                  className="font-mono text-sm sm:text-base text-brand-red font-bold hover:underline block"
                >
                  riwacreatives@gmail.com
                </a>
                <a
                  href="https://instagram.com/madebyriwa"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs sm:text-sm text-white/85 hover:text-white flex items-center gap-1.5"
                >
                  <span>Instagram: @madebyriwa</span>
                  <ArrowUpRight size={14} />
                </a>
                <div className="pt-2 text-xs font-mono text-white/50 uppercase tracking-widest">
                  Government of India MSME Registered Enterprise
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
