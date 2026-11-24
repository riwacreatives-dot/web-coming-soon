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
      className="relative w-full pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-12 md:pb-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      {/* RIWA Minimalist Eyebrow Index */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 sm:gap-3 mb-3 md:mb-5 font-mono text-[11px] sm:text-sm uppercase tracking-[0.18em] md:tracking-[0.2em] text-text-secondary select-none"
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
        <span className="text-text-primary font-semibold">
          RIWA CREATIVES · INDEPENDENT CREATIVE &amp; GROWTH STUDIO
        </span>
      </motion.div>

      {/* Bespoke Editorial Headline with Instrument Serif Italic Accent & Expanding Visual Capsule */}
      <div className="mb-3.5 md:mb-6">
        <h1 className="font-display text-[clamp(2.15rem,8.2vw,5.5rem)] md:text-[clamp(2.4rem,7.2vw,5.5rem)] font-black uppercase tracking-tighter text-text-primary leading-[0.92] md:leading-[0.93] select-none">
          <div className="flex items-center flex-wrap gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2">
            <SplitHeading as="span" delay={0.05} trigger="mount">
              WE MAKE
            </SplitHeading>
            <span className="font-serif italic font-normal tracking-normal text-brand-red text-[1.12em] lowercase select-none">
              unreasonable
            </span>
            <ExpandingVisualPill
              mediaSrc="/work/solanas-poster.jpg"
              alt="Solanas Dim Sum Silk Dynamics"
              targetWidth="6.5rem"
              delay={0.25}
            />
          </div>
          <div className="block mt-0.5 md:mt-1">
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
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-6 md:mb-14"
      >
        {/* Mobile Condensed Editorial Pitch (< 768px — keeps first fold showreel visible) */}
        <p className="md:hidden font-mono text-[13px] text-text-secondary leading-relaxed">
          We turn ambitious ideas into distinctive identities, disruptive campaigns and digital experiences. Strategy, creative thinking and technology brought together.
        </p>

        {/* Desktop / Laptop Full Editorial Statement (>= 768px) */}
        <p className="hidden md:block max-w-xl font-mono text-sm sm:text-base text-text-secondary leading-relaxed">
          We turn ambitious ideas into distinctive identities, disruptive campaigns and digital experiences<span className="text-brand-red font-bold">.</span> From the first spark to the final execution, we bring strategy, creative thinking and technology together to make brands impossible to overlook<span className="text-brand-red font-bold">.</span>
        </p>

        {/* Mobile Streamlined Single Hero CTA */}
        <div className="md:hidden flex items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider">
          <button
            type="button"
            onClick={() => navigate('/work')}
            className="flex-1 min-h-[44px] flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-line-border bg-surface text-text-primary font-semibold active:scale-95 transition-all touch-manipulation cursor-pointer"
          >
            <span>Selected Projects</span>
            <ArrowDownRight size={14} className="text-brand-red" />
          </button>
        </div>

        {/* Desktop Dual Action Pills (>= 768px) */}
        <div className="hidden md:flex flex-col sm:flex-row items-stretch sm:items-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-wider shrink-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => navigate('/work')}
            data-cursor-text="EXPLORE"
            className="group flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border border-line-border hover:border-text-primary transition-all text-text-primary bg-surface/40 backdrop-blur-md cursor-pointer hover:shadow-sm"
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
            className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-brand-red text-white font-bold hover:brightness-110 shadow-lg shadow-brand-red/25 transition-all cursor-pointer"
          >
            <Sparkles size={13} />
            <span>Commission a Project ✳</span>
          </button>
        </div>
      </motion.div>

      {/* Embedded Cinematic Showreel Container */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 md:mb-12"
      >
        <ShowreelViewport />
      </motion.div>

      {/* Hero Metadata Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <HeroMeta />
      </motion.div>
    </section>
  );
};
