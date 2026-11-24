import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShowreelViewport } from './ShowreelViewport';
import { HeroMeta } from './HeroMeta';
import { SplitHeading } from '../common/SplitHeading';
import { ExpandingVisualPill } from '../common/ExpandingVisualPill';
import { InteractiveHoverWord } from '../common/InteractiveHoverWord';
import { ArrowDownRight, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative w-full pt-16 sm:pt-20 md:pt-20 pb-8 md:pb-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center"
    >
      {/* RIWA Minimalist Eyebrow Index */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-2 sm:gap-3 mb-2 md:mb-4 font-mono text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.18em] md:tracking-[0.2em] text-text-secondary select-none text-center"
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
        <span className="text-text-primary font-semibold">
          <span className="md:hidden">RIWA CREATIVES · AD ART &amp; SCALE</span>
          <span className="hidden md:inline">
            RIWA CREATIVES · INDEPENDENT COMMERCIAL AD ART &amp; GROWTH LABORATORY
          </span>
        </span>
        <span className="hidden sm:inline-block text-line-border">|</span>
        <span className="hidden sm:inline-block text-brand-red font-bold">COMMERCIAL AD ART</span>
      </motion.div>

      {/* Bespoke Editorial Headline with Instrument Serif Italic Accent & Expanding Visual Capsule */}
      <div className="mb-3 md:mb-5 text-center flex flex-col items-center justify-center w-full">
        <h1 className="font-display text-[clamp(2.15rem,5.8vw,4.5rem)] md:text-[clamp(2.6rem,5.2vw,4.5rem)] lg:text-[clamp(3rem,4.8vw,4.75rem)] font-black uppercase tracking-tighter text-text-primary leading-[0.96] md:leading-[0.96] select-none text-center">
          <div className="flex items-center justify-center flex-wrap sm:flex-nowrap gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-0">
            <SplitHeading as="span" delay={0.05} trigger="mount">
              WE MAKE
            </SplitHeading>
            <span className="font-serif italic font-normal tracking-normal text-brand-red text-[1.14em] lowercase select-none">
              unreasonable
            </span>
            <ExpandingVisualPill
              mediaSrc="/work/solanas-poster.jpg"
              alt="Solanas Dim Sum Silk Dynamics"
              targetWidth="6.5rem"
              delay={0.25}
            />
          </div>
          <div className="block mt-1 sm:mt-2 text-center whitespace-nowrap">
            <SplitHeading as="span" delay={0.22} trigger="mount" accentChar=".">
              BRANDS HAPPEN.
            </SplitHeading>
          </div>
        </h1>
      </div>

      {/* Human Editorial Copywriting & Action Pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto gap-4 md:gap-6 mb-8 md:mb-12 w-full"
      >
        {/* Mobile Condensed Editorial Pitch (< 768px — keeps first fold showreel visible) */}
        <p className="md:hidden font-mono text-xs sm:text-[13px] text-text-secondary leading-relaxed text-center px-2">
          Commercial art competitors screenshot<span className="text-brand-red font-bold">.</span>{' '}
          <InteractiveHoverWord
            previewImage="/work/solanas-chilli-chicken.jpg"
            previewLabel="Hotter Than Baddies"
            tag="ART"
          >
            Museum-grade ad art
          </InteractiveHoverWord>{' '}
          ×{' '}
          <InteractiveHoverWord
            previewImage="/work/solanas-sushi.png"
            previewLabel="Condensed Scale"
            tag="COMMERCE"
          >
            commercial scale
          </InteractiveHoverWord>
          <span className="text-brand-red font-bold">.</span> Direct founder involvement<span className="text-brand-red font-bold">.</span>
        </p>

        {/* Desktop / Laptop Full Editorial Statement (>= 768px — Clean, Human, Balanced) */}
        <p className="hidden md:block max-w-2xl mx-auto font-mono text-sm sm:text-base text-text-secondary leading-relaxed text-center">
          Commercial art so bold competitors screenshot it<span className="text-brand-red font-bold">.</span> Disciplined media where provocative visual craft meets commercial growth<span className="text-brand-red font-bold">.</span> Founder-led sprints. No junior handoffs<span className="text-brand-red font-bold">.</span>
        </p>

        {/* Mobile Streamlined Single Hero CTA */}
        <div className="md:hidden flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-wider w-full max-w-xs">
          <button
            type="button"
            onClick={() => navigate('/work')}
            className="flex-1 min-h-[44px] flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-line-border bg-surface text-text-primary font-semibold active:scale-95 transition-all touch-manipulation cursor-pointer"
          >
            <span>Selected Works</span>
            <ArrowDownRight size={14} className="text-brand-red" />
          </button>
        </div>

        {/* Desktop Dual Action Pills (>= 768px) */}
        <div className="hidden md:flex flex-row items-center justify-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-wider">
          <button
            type="button"
            onClick={() => navigate('/work')}
            data-cursor-text="EXPLORE"
            className="group flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full border border-line-border hover:border-text-primary transition-all text-text-primary bg-surface/40 backdrop-blur-md cursor-pointer hover:shadow-sm"
          >
            <span>Selected Projects</span>
            <ArrowDownRight
              size={13}
              className="text-text-secondary group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all"
            />
          </button>

          <button
            type="button"
            onClick={() => navigate('/contact')}
            data-cursor-text="COMMISSION"
            className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-brand-red text-white font-bold hover:brightness-110 shadow-lg shadow-brand-red/25 transition-all cursor-pointer"
          >
            <Sparkles size={13} />
            <span>Commission Sprint</span>
          </button>
        </div>
      </motion.div>

      {/* Embedded Cinematic Showreel Container */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 md:mb-12 w-full"
      >
        <ShowreelViewport />
      </motion.div>

      {/* Hero Metadata Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="w-full"
      >
        <HeroMeta />
      </motion.div>
    </section>
  );
};
