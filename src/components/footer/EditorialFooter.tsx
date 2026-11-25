import React, { useState } from 'react';
import { motion, type Variants, type Transition } from 'framer-motion';
import { RegionalHubModal } from './RegionalHubModal';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

const LETTERS = ['R', 'I', 'W', 'A'];

const logoContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const dotVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
    y: 10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.35,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

const letterHoverTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 25,
};

export const EditorialFooter: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'brand-dalal' | 'portal' | 'careers' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative w-full pt-12 md:pt-16 pb-32 md:pb-28 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-line-border">
        {/* Hub Quick Links Bar (Mobile: Full-width Hairline Rows; Desktop: Horizontal Ribbon) */}
        <div className="py-4 md:py-8 border-b border-line-border flex flex-col md:flex-row md:flex-wrap md:items-center justify-between gap-2 md:gap-6 font-mono text-xs sm:text-sm">
          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-0 md:gap-8 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setActiveModal('brand-dalal')}
              className="group w-full md:w-auto min-h-[48px] md:min-h-0 flex items-center justify-between md:justify-start gap-2 py-3 md:py-0 border-b border-line-border md:border-none text-text-primary hover:text-[#F5B31B] font-bold cursor-pointer transition-colors touch-manipulation"
            >
              <span>Brand Dalal Division</span>
              <ArrowUpRight
                size={15}
                className="text-[#F5B31B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>

            <button
              type="button"
              onClick={() => setActiveModal('careers')}
              className="group w-full md:w-auto min-h-[48px] md:min-h-0 flex items-center justify-between md:justify-start gap-2 py-3 md:py-0 border-b border-line-border md:border-none text-text-primary hover:text-brand-red font-bold cursor-pointer transition-colors touch-manipulation"
            >
              <span>Careers: Founder's Office</span>
              <ArrowUpRight
                size={15}
                className="text-brand-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>

            <button
              type="button"
              onClick={() => setActiveModal('portal')}
              className="group w-full md:w-auto min-h-[48px] md:min-h-0 flex items-center justify-between md:justify-start gap-2 py-3 md:py-0 border-b border-line-border md:border-none text-text-primary hover:text-emerald-400 font-bold cursor-pointer transition-colors touch-manipulation"
            >
              <span>Client Portal Demo</span>
              <ArrowUpRight
                size={15}
                className="text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            data-cursor-text="TOP"
            className="w-full md:w-auto min-h-[44px] md:min-h-0 text-text-secondary hover:text-text-primary uppercase tracking-wider text-xs sm:text-sm font-bold cursor-pointer touch-manipulation text-center md:text-right pt-2 md:pt-0"
          >
            [ Back To Top ↑ ]
          </button>
        </div>

        {/* Cinematic Monumental "RIWA." Logo */}
        <div className="group relative py-12 sm:py-24 select-none overflow-visible flex items-end justify-center">
          {/* Ambient Glow behind the logo */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
            <div className="w-3/4 max-w-4xl h-24 sm:h-36 bg-brand-red/10 filter blur-[70px] sm:blur-[90px] rounded-full transition-opacity duration-500 opacity-60 group-hover:opacity-100" />
          </div>

          <motion.h2
            data-no-spotlight="true"
            variants={logoContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full font-display text-[clamp(3.5rem,14vw,12.5rem)] font-black uppercase text-text-primary leading-[0.85] tracking-tight whitespace-nowrap text-center flex items-baseline justify-center select-none"
          >
            {LETTERS.map((char, idx) => (
              <motion.span
                key={idx}
                variants={letterVariants}
                whileHover={{
                  y: -6,
                  color: 'var(--accent-red)',
                  textShadow: '0 10px 30px rgba(255, 42, 85, 0.35)',
                }}
                transition={letterHoverTransition}
                className="inline-block cursor-pointer transition-colors duration-200"
              >
                {char}
              </motion.span>
            ))}

            <motion.span
              variants={dotVariants}
              whileHover={{
                scale: 1.25,
                rotate: 45,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 20,
              }}
              className="inline-block text-brand-red cursor-pointer select-none ml-1 sm:ml-2"
            >
              .
            </motion.span>
          </motion.h2>
        </div>

        {/* Bottom Accreditation & Legal Bar with Upgraded Font Size */}
        <div className="pt-6 border-t border-line-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs sm:text-sm text-text-secondary">
          <div className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-brand-red shrink-0" />
            <span className="uppercase tracking-wider font-medium">
              Government of India MSME Registered Enterprise
            </span>
          </div>

          <div className="flex items-center gap-4 uppercase tracking-wider font-medium">
            <span>RIWA CREATIVES © 2026</span>
          </div>
        </div>
      </footer>

      {/* Slide-over Modals */}
      <RegionalHubModal
        type={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </>
  );
};
