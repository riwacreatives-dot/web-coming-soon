import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { SparkElement } from '../common/SparkElement';

interface WorkbenchItem {
  code: string;
  targetChapterId: string;
  title: string;
  tag: string;
  subline: string;
}

const MOBILE_WORKBENCH_ITEMS: WorkbenchItem[] = [
  {
    code: 'BRAND / 01',
    targetChapterId: 'chapter-point-of-view',
    title: 'Brand Identity System',
    tag: 'JUMP TO CH.02 ↓',
    subline: 'Guidelines · Construction · Voice',
  },
  {
    code: 'CAMPAIGN / 02',
    targetChapterId: 'chapter-attention',
    title: 'Solanas Key Visual',
    tag: 'JUMP TO CH.03 ↓',
    subline: '+420% Weekend Orders · 6.2% CTR',
  },
  {
    code: 'DIGITAL / 03',
    targetChapterId: 'chapter-world',
    title: 'Interactive Web & UX',
    tag: 'JUMP TO CH.04 ↓',
    subline: 'Custom Code · Growth Architecture',
  },
  {
    code: 'LIVE / 04',
    targetChapterId: 'chapter-real-world',
    title: 'Riwa Live Pass EXP—005',
    tag: 'JUMP TO CH.05 ↓',
    subline: 'Events · Hackathons · Summits',
  },
];

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const reduced = useReducedMotion();

  const scrollToTarget = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="chapter-spark"
      className="relative w-full bg-[#F7F6F2] dark:bg-[#0B0B0F] text-[#111116] dark:text-white pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-10 sm:pb-14 px-4 sm:px-8 md:px-12 overflow-hidden transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main 2-Column Editorial Studio Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* LEFT COLUMN: Editorial Thesis & Primary Actions */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-7 relative z-20">
            {/* Eyebrow featuring THE SPARK Origin Point */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-start gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#52525B] dark:text-white/65 select-none"
            >
              <SparkElement chapter={0} size={18} className="mt-0.5" />
              <div className="leading-snug">
                <span className="text-[#111116] dark:text-white font-bold block">RIWA CREATIVES</span>
                <span>01 // STUDIO WORKBENCH · INDEPENDENT STUDIO</span>
              </div>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(2.45rem,5.4vw,4.55rem)] font-black uppercase tracking-tighter text-[#111116] dark:text-white leading-[0.93] select-none"
            >
              <span className="block">IDEAS, MADE</span>
              <span className="block font-serif italic font-normal tracking-tight text-[#EA1E4D] text-[1.12em] uppercase mt-0.5">
                UNREASONABLE.
              </span>
            </motion.h1>

            {/* Supporting Positioning */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="space-y-2.5 max-w-md font-sans text-sm sm:text-base text-[#52525B] dark:text-white/75 leading-relaxed"
            >
              <p className="font-semibold text-[#111116] dark:text-white/95">
                We build brands, campaigns and experiences that move people.
              </p>
              <p>
                Seven connected chapters showing how one spark becomes brand conviction, commercial attention, digital craft, and live rooms.
              </p>
            </motion.div>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="flex flex-wrap items-center gap-4 sm:gap-7 pt-1 font-mono text-xs uppercase tracking-[0.16em]"
            >
              <button
                type="button"
                onClick={() => navigate('/work')}
                data-cursor-text="WORK"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#EA1E4D] text-white font-bold hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-sm"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowUpRight size={14} />
              </button>

              <button
                type="button"
                onClick={() => scrollToTarget('chapter-next-idea')}
                data-cursor-text="COMMISSION"
                className="group inline-flex items-center gap-2 pb-1.5 border-b border-[#111116] dark:border-white text-[#111116] dark:text-white font-bold hover:text-[#EA1E4D] hover:border-[#EA1E4D] transition-colors cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Production Spec Swatch Strip (Workbench grounding detail) */}
            <div className="hidden sm:flex items-center gap-4 pt-3 border-t border-[#111116]/15 dark:border-white/15 font-mono text-[10px] text-[#52525B] dark:text-white/50 uppercase tracking-widest">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#EA1E4D] inline-block" /> #EA1E4D
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#FD7D3C] inline-block" /> #FD7D3C
              </span>
              <span>WORKTABLE SPEC · CLICK ARTEFACT TO JUMP</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Grounded Creative Studio Workbench */}
          <div className="lg:col-span-7 relative">

            {/* DESKTOP WORKBENCH COLLAGE (>= 1024px) — Grounded objects, zero idle bobbing */}
            <div className="hidden lg:block relative w-full h-[565px] xl:h-[600px] select-none border border-[#111116]/10 dark:border-white/10 bg-[#EFECE6]/55 dark:bg-[#121218]">
              {/* Cutting Mat & Registration Markings */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.06] dark:opacity-[0.09]"
                style={{
                  backgroundImage:
                    'linear-gradient(#111116 1px, transparent 1px), linear-gradient(90deg, #111116 1px, transparent 1px)',
                  backgroundSize: '44px 44px',
                }}
                aria-hidden="true"
              />
              <span className="absolute top-3 left-4 font-mono text-[9px] text-[#52525B] dark:text-white/40 uppercase tracking-[0.22em]">
                STUDIO TABLE // 01:1 SCALE
              </span>
              <span className="absolute bottom-3 left-4 font-mono text-[9px] text-[#52525B] dark:text-white/40 uppercase tracking-[0.22em]">
                CROPS · PRESS PROOFS · INTERFACES · PASSES
              </span>

              {/* Registration Corner Crosshairs */}
              <div className="absolute top-3 right-4 font-mono text-[11px] text-[#EA1E4D]/60 font-bold" aria-hidden="true">+</div>
              <div className="absolute bottom-3 right-4 font-mono text-[11px] text-[#EA1E4D]/60 font-bold" aria-hidden="true">+</div>

              {/* --- ARTEFACT 01: BRAND IDENTITY SYSTEM MONOGRAPH -> Jumps to Ch02 --- */}
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 18, rotate: -5.5 }}
                animate={{ opacity: 1, y: 0, rotate: -5.5 }}
                whileHover={reduced ? undefined : { rotate: -2.5, y: -6, zIndex: 40, transition: { duration: 0.22 } }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-[54px] left-[32px] xl:left-[48px] w-[260px] xl:w-[285px] z-10"
              >
                <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] font-bold tracking-[0.18em] text-[#52525B] dark:text-white/60 uppercase">
                  <span>BRAND / 01</span>
                  <span className="text-[#EA1E4D]">CH.02</span>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToTarget('chapter-point-of-view')}
                  data-cursor-text="CH.02 BRAND"
                  aria-label="Inspect Brand Identity System in Chapter 02"
                  className="block w-full text-left aspect-[4/4.7] bg-[#111116] text-white border border-white/15 shadow-[12px_18px_36px_rgba(17,17,22,0.28)] dark:shadow-[12px_18px_40px_rgba(0,0,0,0.7)] relative overflow-hidden group cursor-pointer"
                >
                  {/* Tactile Book Spine */}
                  <div className="absolute inset-y-0 left-0 w-3.5 bg-gradient-to-r from-white/15 via-white/5 to-transparent border-r border-black/50" />
                  <svg viewBox="0 0 240 300" aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none">
                    <path
                      d="M 190 10 C 120 75, 110 155, 235 195 L 240 295 L 95 295 C 105 225, 165 180, 120 150 C 90 130, 145 75, 215 10 Z"
                      fill="#EA1E4D"
                    />
                  </svg>
                  <div className="relative z-10 h-full p-5 pl-7 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <img src="/brand/riwa-logo-official.png" alt="Riwa" className="h-7 w-auto object-contain" loading="eager" />
                      <span className="font-mono text-[9px] tracking-[0.2em] text-white/60 uppercase">SPEC 01</span>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] text-[#EA1E4D] font-bold tracking-widest uppercase block">
                        GUIDELINES // POSITION
                      </span>
                      <p className="font-mono text-xs tracking-[0.14em] uppercase text-white/95 font-semibold leading-tight">
                        BRAND<br />IDENTITY<br />SYSTEM
                      </p>
                      <span className="inline-block font-mono text-[9px] text-white/50 group-hover:text-white transition-colors pt-1">
                        EXPLORE CHAPTER 02 ↓
                      </span>
                    </div>
                  </div>
                </button>
              </motion.div>

              {/* --- ARTEFACT 02: PRINTED SOLANAS CAMPAIGN PROOF -> Jumps to Ch03 --- */}
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 18, rotate: 5 }}
                animate={{ opacity: 1, y: 0, rotate: 5 }}
                whileHover={reduced ? undefined : { rotate: 2, y: -6, zIndex: 40, transition: { duration: 0.22 } }}
                transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-[42px] right-[26px] xl:right-[36px] w-[236px] xl:w-[258px] z-[12]"
              >
                {/* Grounded Studio Masking Tape Detail */}
                <div className="mx-auto -mb-2 w-14 h-4 bg-[#E6DFD1] dark:bg-white/25 opacity-85 border border-black/10 relative z-20 -rotate-2" aria-hidden="true" />

                <button
                  type="button"
                  onClick={() => scrollToTarget('chapter-attention')}
                  data-cursor-text="CH.03 CAMPAIGN"
                  aria-label="Inspect Solanas Commercial Campaign in Chapter 03"
                  className="block w-full text-left bg-[#FFFFFF] p-2.5 pb-3.5 border border-[#111116]/20 shadow-[10px_18px_36px_rgba(17,17,22,0.2)] dark:shadow-[10px_18px_40px_rgba(0,0,0,0.65)] group cursor-pointer"
                >
                  <div className="flex items-center justify-between font-mono text-[9px] font-bold text-[#52525B] uppercase tracking-wider pb-1.5">
                    <span>CAMPAIGN / 02</span>
                    <span className="text-[#EA1E4D]">DROP 01</span>
                  </div>
                  <div className="aspect-[4/4.4] w-full overflow-hidden bg-[#111116]">
                    <img
                      src="/work/solanas-chilli-chicken.jpg"
                      alt="Solanas Commercial Poster Print Proof"
                      className="h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                      loading="eager"
                    />
                  </div>
                  <div className="pt-2.5 px-0.5 flex items-center justify-between font-mono text-[9px] text-[#52525B] uppercase tracking-wider">
                    <span className="font-bold text-[#111116]">SOLANAS · PRINT PROOF</span>
                    <span className="text-[#EA1E4D] font-bold">CH.03 ↓</span>
                  </div>
                </button>
              </motion.div>

              {/* --- ARTEFACT 03: REAL WEBSITE / UI INTERFACE TABLET -> Jumps to Ch04 --- */}
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 20, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                whileHover={reduced ? undefined : { rotate: 0, y: -6, zIndex: 40, transition: { duration: 0.22 } }}
                transition={{ duration: 0.55, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-[48px] left-[76px] xl:left-[98px] w-[334px] xl:w-[366px] z-20"
              >
                <button
                  type="button"
                  onClick={() => scrollToTarget('chapter-world')}
                  data-cursor-text="CH.04 DIGITAL"
                  aria-label="Inspect Digital Experiences in Chapter 04"
                  className="block w-full text-left rounded-[16px] bg-[#16161B] p-2.5 border border-white/15 shadow-[14px_22px_48px_rgba(17,17,22,0.34)] dark:shadow-[14px_22px_48px_rgba(0,0,0,0.75)] group cursor-pointer"
                >
                  <div className="relative aspect-[16/10] rounded-[10px] overflow-hidden bg-[#0D0E12] text-white p-4 sm:p-5 flex flex-col justify-between border border-white/10">
                    {/* Actual Campaign Backdrop Inside Browser Preview */}
                    <div aria-hidden="true" className="absolute inset-y-0 right-0 w-[52%] opacity-45 pointer-events-none overflow-hidden">
                      <img src="/work/solanas-poster.jpg" alt="" className="h-full w-full object-cover object-center contrast-110" loading="eager" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0E12] via-[#0D0E12]/65 to-transparent" />
                      <div className="absolute top-4 right-4 w-14 h-14 border border-[#EA1E4D]/75" />
                    </div>

                    <div className="relative z-10 flex items-center justify-between font-mono text-[9px] text-white/60">
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        riwacreatives.in // build
                      </span>
                      <span className="text-[#EA1E4D] font-bold">DIGITAL / 03</span>
                    </div>

                    <div className="relative z-10 space-y-2 max-w-[74%]">
                      <p className="font-display text-base xl:text-lg font-black uppercase leading-[1.04] tracking-tight">
                        EXPERIENCE THAT CONNECTS<span className="text-[#EA1E4D]">.</span>
                      </p>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#EA1E4D] text-white font-mono text-[9px] font-bold uppercase tracking-wider group-hover:bg-white group-hover:text-[#111116] transition-colors">
                        TEST SANDBOX CH.04 ↓
                      </span>
                    </div>
                  </div>
                </button>
              </motion.div>

              {/* --- ARTEFACT 04: GROUNDED LIVE EVENTS PASS -> Jumps to Ch05 --- */}
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 20, rotate: 8 }}
                animate={{ opacity: 1, y: 0, rotate: 8 }}
                whileHover={reduced ? undefined : { rotate: 4, y: -6, zIndex: 40, transition: { duration: 0.22 } }}
                transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-[40px] right-[26px] xl:right-[34px] w-[144px] xl:w-[158px] z-30"
              >
                {/* Grounded Lanyard Strap + Hardware Clip */}
                <svg viewBox="0 0 120 110" aria-hidden="true" className="absolute -top-20 -right-10 w-28 h-28 pointer-events-none overflow-visible">
                  <path d="M 55 104 C 60 66, 86 24, 118 -14" stroke="#18181D" strokeWidth="10" fill="none" strokeLinecap="round" />
                  <rect x="47" y="94" width="16" height="13" rx="2" fill="#A1A1AA" stroke="#111116" strokeWidth="1.5" />
                </svg>

                <button
                  type="button"
                  onClick={() => scrollToTarget('chapter-real-world')}
                  data-cursor-text="CH.05 LIVE"
                  aria-label="Inspect Events and Activations in Chapter 05"
                  className="block w-full text-left rounded-[10px] bg-[#FD7D3C] text-[#111116] p-4 pt-5 border border-[#111116]/30 shadow-[10px_18px_34px_rgba(17,17,22,0.28)] relative overflow-hidden group cursor-pointer"
                >
                  <div className="mx-auto w-7 h-1.5 rounded-full bg-[#111116]/30 mb-3" />
                  <span className="font-mono text-[8px] font-bold uppercase tracking-widest block mb-2 text-[#111116]/70">
                    LIVE / 04 · EXP—005
                  </span>
                  <p className="font-display text-xl xl:text-2xl font-black uppercase leading-[0.94] tracking-tight mb-3">
                    RIWA<br />LIVE<br />PASS
                  </p>
                  <div className="pt-2 border-t border-[#111116]/25 flex items-center justify-between font-mono text-[8px] uppercase font-bold text-[#111116]/85">
                    <span>EVENTS</span>
                    <span className="group-hover:translate-y-0.5 transition-transform">CH.05 ↓</span>
                  </div>
                </button>
              </motion.div>
            </div>

            {/* MOBILE WORKBENCH (< 1024px): Horizontal Tactile Swipe Deck */}
            <div className="lg:hidden space-y-2.5 pt-1">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[#52525B] dark:text-white/55">
                <span>STUDIO WORKBENCH SPEC</span>
                <span className="text-[#EA1E4D] font-bold">SWIPE ARCHIVE →</span>
              </div>

              <div className="mobile-snap-track flex gap-3.5 overflow-x-auto no-scrollbar pb-3 -mx-4 px-4">
                {MOBILE_WORKBENCH_ITEMS.map((item, idx) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => scrollToTarget(item.targetChapterId)}
                    className="snap-start shrink-0 w-[76vw] max-w-[275px] text-left border border-[#111116]/15 dark:border-white/15 bg-white dark:bg-[#14141A] p-3.5 shadow-md flex flex-col justify-between cursor-pointer active:scale-[0.98] transition-transform"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-wider pb-2 mb-2.5 border-b border-[#111116]/10 dark:border-white/10">
                      <span className="text-[#EA1E4D]">{item.code}</span>
                      <span className="text-[#52525B] dark:text-white/55">{item.tag}</span>
                    </div>

                    <div className="aspect-[16/10] w-full overflow-hidden mb-3 bg-[#111116] relative">
                      {idx === 0 && (
                        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#111116] text-white">
                          <img src="/brand/riwa-logo-official.png" alt="Riwa" className="h-7 w-fit object-contain" />
                          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#EA1E4D]">IDENTITY SYSTEM 01</span>
                        </div>
                      )}
                      {idx === 1 && (
                        <img src="/work/solanas-chilli-chicken.jpg" alt="Solanas Key Visual" className="w-full h-full object-cover" />
                      )}
                      {idx === 2 && (
                        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0D0E12] text-white relative">
                          <img src="/work/solanas-poster.jpg" alt="Digital Interface" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                          <span className="relative z-10 font-mono text-[9px] text-emerald-400">● riwacreatives.in</span>
                          <span className="relative z-10 font-display text-sm font-black uppercase">INTERACTIVE WEB &amp; UX</span>
                        </div>
                      )}
                      {idx === 3 && (
                        <div className="w-full h-full p-4 flex flex-col justify-between bg-[#FD7D3C] text-[#111116]">
                          <span className="font-mono text-[9px] font-bold uppercase">PASS // EXP—005</span>
                          <span className="font-display text-xl font-black uppercase leading-none">RIWA LIVE PASS</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <p className="font-display text-base font-black uppercase tracking-tight text-[#111116] dark:text-white leading-snug">
                        {item.title}
                      </p>
                      <span className="font-mono text-[10px] text-[#52525B] dark:text-white/55 block mt-0.5">
                        {item.subline}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Visual Datum Strip */}
        <div className="mt-10 sm:mt-14 pt-5 border-t border-[#111116]/15 dark:border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#52525B] dark:text-white/60 select-none">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[#111116] dark:text-white/85 font-semibold">
            <span>STRATEGY</span>
            <span className="text-[#EA1E4D]">—</span>
            <span>IDENTITY</span>
            <span className="text-[#EA1E4D]">—</span>
            <span>CAMPAIGNS</span>
            <span className="text-[#EA1E4D]">—</span>
            <span>DIGITAL</span>
            <span className="text-[#EA1E4D]">—</span>
            <span className="text-[#FD7D3C] font-bold">EXPERIENCES</span>
          </div>

          <button
            type="button"
            onClick={() => scrollToTarget('chapter-point-of-view')}
            className="inline-flex items-center gap-2 sm:pl-6 sm:border-l border-[#111116]/20 dark:border-white/20 text-[#111116] dark:text-white hover:text-[#EA1E4D] font-bold transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>ENTER CHAPTER 02</span>
            <ArrowDown size={13} className="text-[#EA1E4D]" />
          </button>
        </div>
      </div>
    </section>
  );
};
