import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShowreelViewport } from './ShowreelViewport';
import { HeroMeta } from './HeroMeta';
import { SplitHeading } from '../common/SplitHeading';
import { ExpandingVisualPill } from '../common/ExpandingVisualPill';
import { ArrowDownRight, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative w-full bg-[#FFFFFF] text-[#111116] pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-12 md:pb-20 px-4 sm:px-8 md:px-12 transition-colors overflow-hidden"
    >
      {/* Subtle Swiss Architectural Coordinate Annotation */}
      <div className="max-w-7xl mx-auto relative">
        <div className="hidden lg:flex flex-col items-end absolute top-0 right-0 pointer-events-none select-none text-right">
          <span className="font-mono text-[10px] tracking-[0.26em] text-[#71717A] uppercase">
            CONTROLLED CHAOS · VOL. 03
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#EA1E4D] font-semibold mt-1">
            28°38&apos;N · 77°13&apos;E // STUDIO COVER
          </span>
        </div>

        {/* RIWA Studio Identification Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 sm:gap-3 mb-4 md:mb-6 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#52525B] select-none"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#EA1E4D] shrink-0" />
          <span className="text-[#111116] font-bold">
            RIWA CREATIVES · INDEPENDENT CREATIVE &amp; GROWTH STUDIO
          </span>
        </motion.div>

        {/* Expressive Editorial Headline: Syne + Instrument Serif Italic + Expanding Visual Capsule */}
        <div className="mb-5 md:mb-7">
          <h1 className="font-display text-[clamp(2.25rem,8vw,5.75rem)] font-black uppercase tracking-tighter text-[#111116] leading-[0.92] select-none">
            <div className="flex items-center flex-wrap gap-x-2.5 sm:gap-x-3.5 gap-y-1">
              <SplitHeading as="span" delay={0.05} trigger="mount">
                WE MAKE
              </SplitHeading>
              <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
                unreasonable
              </span>
              <ExpandingVisualPill
                mediaSrc="/work/solanas-poster.jpg"
                alt="Solanas Dim Sum Silk Dynamics"
                targetWidth="6.5rem"
                delay={0.25}
              />
            </div>
            <div className="block mt-1">
              <SplitHeading as="span" delay={0.2} trigger="mount" accentChar=".">
                BRANDS HAPPEN.
              </SplitHeading>
            </div>
          </h1>
        </div>

        {/* Editorial Subcopy & Action Pills */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10 mb-8 md:mb-14"
        >
          <p className="max-w-xl font-sans text-sm sm:text-base md:text-lg text-[#52525B] leading-relaxed">
            We turn ambitious ideas into distinctive identities, disruptive campaigns, digital experiences, and live brand moments<span className="text-[#EA1E4D] font-bold">.</span> Strategy, creative craft, and execution brought together under one roof<span className="text-[#EA1E4D] font-bold">.</span>
          </p>

          {/* Mobile Streamlined Action */}
          <div className="md:hidden flex items-center gap-3 font-mono text-xs uppercase tracking-wider">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('work');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else navigate('/work');
              }}
              className="flex-1 min-h-[46px] flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#111116]/20 bg-[#F5F4F0] text-[#111116] font-semibold active:scale-95 transition-all touch-manipulation cursor-pointer"
            >
              <span>Selected Projects</span>
              <ArrowDownRight size={14} className="text-[#EA1E4D]" />
            </button>
          </div>

          {/* Desktop Action Pills */}
          <div className="hidden md:flex items-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-wider shrink-0">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('work');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else navigate('/work');
              }}
              data-cursor-text="EXPLORE"
              className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#111116]/20 hover:border-[#111116] bg-[#FFFFFF] text-[#111116] transition-all cursor-pointer font-semibold"
            >
              <span>Selected Projects</span>
              <ArrowDownRight
                size={14}
                className="text-[#52525B] group-hover:text-[#111116] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all"
              />
            </button>

            <button
              type="button"
              onClick={() => navigate('/contact')}
              data-cursor-text="COMMISSION"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#EA1E4D] text-white font-bold hover:brightness-110 shadow-lg shadow-[#EA1E4D]/25 transition-all cursor-pointer"
            >
              <Sparkles size={13} />
              <span>Commission a Project ✳</span>
            </button>
          </div>
        </motion.div>

        {/* Preserved Interactive Showreel Viewport */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 md:mb-12"
        >
          <ShowreelViewport />
        </motion.div>

        {/* Hero Metadata Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.7 }}
        >
          <HeroMeta />
        </motion.div>
      </div>
    </section>
  );
};
