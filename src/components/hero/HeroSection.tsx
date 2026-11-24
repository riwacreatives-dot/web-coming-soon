import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShowreelViewport } from './ShowreelViewport';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleScrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/work');
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-[#F4F1EA] text-[#171719] pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-12 md:pb-20 px-4 sm:px-8 md:px-12 transition-colors overflow-hidden"
    >
      {/* Swiss Architectural Coordinate Overlay & Geometric Crow Watermark */}
      <div className="absolute top-24 right-4 sm:right-12 hidden lg:flex flex-col items-end pointer-events-none select-none opacity-40">
        <span className="font-mono text-[10px] tracking-[0.28em] text-[#767571] uppercase">
          INDEX 01 / EDITORIAL COVER
        </span>
        <span className="font-mono text-[10px] tracking-[0.2em] text-[#767571] mt-1">
          28°38'N · 77°13'E // DEL
        </span>
        <div className="w-16 h-[1px] bg-[#171719]/20 mt-3" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* RIWA Studio Identification Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 sm:gap-3 mb-4 md:mb-6 font-mono text-[11px] sm:text-xs uppercase tracking-[0.24em] text-[#767571] select-none"
        >
          <span className="inline-block w-2 h-2 bg-[#FD7D3C] shrink-0" />
          <span className="text-[#171719] font-bold">
            RIWA CREATIVES · INDEPENDENT CREATIVE &amp; GROWTH STUDIO
          </span>
        </motion.div>

        {/* Master Editorial Headline: Syne ExtraBold + Instrument Serif Italic Accent */}
        <div className="mb-6 md:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.5rem,8.5vw,6.5rem)] font-extrabold uppercase tracking-tight text-[#171719] leading-[0.92] select-none"
          >
            <div className="block">WE MAKE</div>
            <div className="flex items-center flex-wrap gap-x-3 sm:gap-x-4 gap-y-1">
              <span className="font-serif italic font-normal tracking-normal text-[#FD7D3C] text-[1.16em] lowercase select-none">
                unreasonable
              </span>
              <span className="text-[#171719]">BRANDS</span>
            </div>
            <div className="block mt-0.5">
              HAPPEN<span className="text-[#FD7D3C]">.</span>
            </div>
          </motion.h1>
        </div>

        {/* Supporting Editorial Rationale & High-Conviction CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10 mb-8 md:mb-14 pb-8 border-b border-[#171719]/15"
        >
          {/* Editorial Description */}
          <p className="max-w-xl font-sans text-sm sm:text-base md:text-lg text-[#605F5B] leading-relaxed">
            An independent creative &amp; growth studio turning ambitious ideas into brands, experiences and meaningful momentum<span className="text-[#FD7D3C] font-bold">.</span> From strategy and visual craft to digital execution and live activations.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-wider shrink-0">
            <button
              type="button"
              onClick={handleScrollToWork}
              className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#171719]/25 hover:border-[#171719] bg-white/70 hover:bg-white text-[#171719] font-semibold transition-all cursor-pointer shadow-sm hover:shadow"
            >
              <span>Explore Our Work</span>
              <ArrowDownRight
                size={14}
                className="text-[#767571] group-hover:text-[#171719] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all"
              />
            </button>

            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FD7D3C] text-[#171719] font-bold hover:brightness-105 active:scale-95 transition-all cursor-pointer shadow-md shadow-[#FD7D3C]/20"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </motion.div>

        {/* Cinematic Showreel Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <ShowreelViewport />
        </motion.div>

        {/* Restrained Editorial Scroll Indicator & Studio Metric Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#171719]/10 font-mono text-[11px] sm:text-xs text-[#767571] uppercase tracking-[0.2em] select-none">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FD7D3C] animate-pulse" />
            <span className="font-semibold text-[#171719]">ACCEPTING CLIENTS</span>
            <span>· Q1/Q2 SPRINTS</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <span>[ 01 BRAND STRATEGY ]</span>
            <span>[ 02 CREATIVE CAMPAIGNS ]</span>
            <span>[ 03 DIGITAL ]</span>
            <span>[ 04 EXPERIENCES ]</span>
          </div>

          <div
            onClick={handleScrollToWork}
            className="flex items-center gap-1 hover:text-[#171719] cursor-pointer transition-colors"
          >
            <span>[ SCROLL TO EXPLORE ↓ ]</span>
          </div>
        </div>
      </div>
    </section>
  );
};
