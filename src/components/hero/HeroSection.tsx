import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  const handleScrollDown = () => {
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-[#F7F6F2] dark:bg-[#0B0B0F] text-[#111116] dark:text-white pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-10 sm:pb-14 px-4 sm:px-8 md:px-12 overflow-hidden transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main 2-Column Composition: ~44% Left Editorial / ~56% Right Creative Worktable */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ========================================================== */}
          {/* LEFT COLUMN (~44% -> lg:col-span-5): Editorial Positioning   */}
          {/* ========================================================== */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7 relative z-20">
            {/* Eyebrow */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-start gap-2.5 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#52525B] dark:text-white/65 select-none"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-[#EA1E4D] shrink-0 mt-1" />
              <div className="leading-snug">
                <span className="text-[#111116] dark:text-white font-bold block">RIWA CREATIVES</span>
                <span>INDEPENDENT CREATIVE &amp; GROWTH STUDIO</span>
              </div>
            </motion.div>

            {/* Headline: Syne Display + Instrument Serif Italic */}
            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(2.5rem,5.2vw,4.35rem)] font-black uppercase tracking-tighter text-[#111116] dark:text-white leading-[0.94] select-none"
            >
              <span className="block">IDEAS, MADE</span>
              <span className="block font-serif italic font-normal tracking-tight text-[#EA1E4D] text-[1.14em] uppercase mt-0.5">
                UNREASONABLE.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="space-y-2.5 max-w-md font-sans text-sm sm:text-base text-[#52525B] dark:text-white/75 leading-relaxed"
            >
              <p className="font-medium text-[#111116] dark:text-white/95">
                We build brands, campaigns and experiences that move people.
              </p>
              <p>
                We bring creative thinking, strategy and execution together to turn ambitious ideas into something people remember.
              </p>
            </motion.div>

            {/* Distinct Editorial CTAs */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="flex flex-wrap items-center gap-5 sm:gap-7 pt-2 font-mono text-xs uppercase tracking-[0.16em]"
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
                onClick={() => navigate('/contact')}
                data-cursor-text="COMMISSION"
                className="group inline-flex items-center gap-2 pb-1.5 border-b border-[#111116] dark:border-white text-[#111116] dark:text-white font-bold hover:text-[#EA1E4D] hover:border-[#EA1E4D] transition-colors cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* ========================================================== */}
          {/* RIGHT COLUMN (~56% -> lg:col-span-7): CREATIVE WORKTABLE   */}
          {/* ========================================================== */}
          <div className="lg:col-span-7 relative">
            {/* DESKTOP INTERACTIVE WORKTABLE COLLAGE (>= 1024px) */}
            <div className="hidden lg:block relative w-full h-[540px] xl:h-[580px] select-none">
              {/* --- ARTIFACT 01: BRAND IDENTITY SYSTEM (Hardcover Monograph) --- */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 26, rotate: -6 }}
                animate={{ opacity: 1, y: 0, rotate: -6 }}
                whileHover={prefersReducedMotion ? undefined : { rotate: -3, y: -6, transition: { duration: 0.25 } }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-[52px] left-[28px] xl:left-[44px] w-[275px] xl:w-[300px] z-10"
              >
                {/* Thin L-Shaped Callout Connector -> BRAND / 01 */}
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.4 }}
                  className="absolute -top-11 -left-14 flex items-start gap-2 pointer-events-none"
                >
                  <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#52525B] dark:text-white/60 uppercase whitespace-nowrap">
                    BRAND / 01
                  </span>
                  <div className="w-10 h-6 border-t border-r border-[#111116]/40 dark:border-white/40 mt-1.5" />
                </motion.div>

                <Link
                  to="/services/brand-identity"
                  data-cursor-text="BRAND"
                  className="block w-full aspect-[4/4.8] bg-[#111116] text-white border border-white/10 shadow-[0_24px_48px_rgba(17,17,22,0.28)] dark:shadow-[0_24px_48px_rgba(0,0,0,0.65)] relative overflow-hidden group"
                >
                  {/* Realistic Book Spine Highlight */}
                  <div className="absolute inset-y-0 left-0 w-3.5 bg-gradient-to-r from-white/15 via-white/5 to-transparent border-r border-black/40" />

                  {/* Dramatic Red Sweeping Monogram Curve */}
                  <svg
                    viewBox="0 0 240 300"
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                  >
                    <path
                      d="M 190 10 C 120 75, 110 155, 235 195 L 240 295 L 95 295 C 105 225, 165 180, 120 150 C 90 130, 145 75, 215 10 Z"
                      fill="#EA1E4D"
                    />
                  </svg>

                  {/* Monograph Inner Typographic Layout */}
                  <div className="relative z-10 h-full p-6 pl-7 flex flex-col justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="/brand/riwa-logo-official.png"
                        alt="Riwa Logo"
                        className="h-7 w-auto object-contain"
                      />
                      <span className="font-mono text-[9px] tracking-[0.22em] text-white/70 uppercase">
                        CREATIVES
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="font-mono text-[9px] text-[#EA1E4D] font-bold tracking-widest uppercase block">
                        ISSUE 01 // GUIDELINES
                      </span>
                      <p className="font-mono text-xs tracking-[0.14em] uppercase text-white/90 font-semibold leading-tight">
                        BRAND<br />IDENTITY<br />SYSTEM
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* --- ARTIFACT 02: COMMERCIAL CAMPAIGN POSTER --- */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24, rotate: 6 }}
                animate={{ opacity: 1, y: 0, rotate: 6 }}
                whileHover={prefersReducedMotion ? undefined : { rotate: 3, y: -6, transition: { duration: 0.25 } }}
                transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-[40px] right-[18px] xl:right-[28px] w-[240px] xl:w-[262px] z-[8]"
              >
                {/* Thin L-Shaped Callout Connector -> CAMPAIGN / 02 */}
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="absolute -top-10 -right-4 flex items-start gap-2 pointer-events-none"
                >
                  <div className="w-10 h-6 border-t border-l border-[#111116]/40 dark:border-white/40 mt-1.5" />
                  <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#52525B] dark:text-white/60 uppercase whitespace-nowrap">
                    CAMPAIGN / 02
                  </span>
                </motion.div>

                <Link
                  to="/work/solanas-baddies"
                  data-cursor-text="CAMPAIGN"
                  className="block w-full bg-[#FFFFFF] p-2 pb-4 border border-[#111116]/15 shadow-[0_22px_44px_rgba(17,17,22,0.18)] dark:shadow-[0_22px_44px_rgba(0,0,0,0.55)]"
                >
                  <div className="aspect-[4/4.6] w-full overflow-hidden bg-[#111116]">
                    <img
                      src="/work/solanas-chilli-chicken.jpg"
                      alt="Solanas Commercial Campaign Poster"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="pt-2.5 px-1 flex items-center justify-between font-mono text-[9px] text-[#52525B] uppercase tracking-wider">
                    <span className="font-bold text-[#111116]">SOLANAS · KEY VISUAL</span>
                    <span className="text-[#EA1E4D] font-bold">2026</span>
                  </div>
                </Link>
              </motion.div>

              {/* --- ARTIFACT 03: DIGITAL EXPERIENCE (Tablet UI) --- */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 28, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                whileHover={prefersReducedMotion ? undefined : { rotate: -1, y: -5, transition: { duration: 0.25 } }}
                transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-[42px] left-[92px] xl:left-[120px] w-[335px] xl:w-[365px] z-20"
              >
                {/* Thin L-Shaped Callout Connector -> DIGITAL / 03 */}
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.4 }}
                  className="absolute -bottom-9 left-0 flex items-end gap-2 pointer-events-none"
                >
                  <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#52525B] dark:text-white/60 uppercase whitespace-nowrap">
                    DIGITAL / 03
                  </span>
                  <div className="w-12 h-5 border-b border-r border-[#111116]/40 dark:border-white/40 mb-1.5" />
                </motion.div>

                <Link
                  to="/services/technology-experiences"
                  data-cursor-text="DIGITAL"
                  className="block rounded-[18px] bg-[#16161B] p-2.5 border border-white/15 shadow-[0_28px_56px_rgba(17,17,22,0.34)] dark:shadow-[0_28px_56px_rgba(0,0,0,0.7)]"
                >
                  <div className="relative aspect-[16/10.5] rounded-[11px] overflow-hidden bg-[#0D0E12] text-white p-5 flex flex-col justify-between border border-white/10">
                    {/* Right Half Digital Background Wireframe & Artwork Tint */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-y-0 right-0 w-1/2 opacity-30 pointer-events-none overflow-hidden"
                    >
                      <img
                        src="/work/solanas-green-dimsum.png"
                        alt=""
                        className="h-full w-full object-cover filter grayscale contrast-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0E12] via-[#0D0E12]/50 to-transparent" />
                      <div className="absolute top-6 right-5 w-16 h-16 border border-[#EA1E4D]/70" />
                    </div>

                    {/* Screen Top Bar */}
                    <div className="relative z-10 flex items-center justify-between">
                      <img
                        src="/brand/riwa-logo-official.png"
                        alt="Riwa Digital"
                        className="h-5 w-auto object-contain"
                      />
                      <div className="space-y-1">
                        <span className="block w-4 h-[1.5px] bg-white/70" />
                        <span className="block w-4 h-[1.5px] bg-white/70" />
                      </div>
                    </div>

                    {/* Screen Headline */}
                    <div className="relative z-10 space-y-2.5 max-w-[78%]">
                      <p className="font-display text-base xl:text-lg font-black uppercase leading-[1.05] tracking-tight">
                        A DIGITAL<br />
                        EXPERIENCE<br />
                        THAT CONNECTS<span className="text-[#EA1E4D]">.</span>
                      </p>
                      <span className="inline-flex items-center justify-center w-7 h-5 bg-[#EA1E4D] text-white font-mono text-[10px] font-bold">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* --- ARTIFACT 04: LIVE EVENTS & ACTIVATIONS (Orange Event Pass + Lanyard) --- */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24, rotate: 9 }}
                animate={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0, rotate: 9 }
                    : {
                        opacity: 1,
                        y: [0, -5, 0],
                        rotate: 9,
                      }
                }
                whileHover={prefersReducedMotion ? undefined : { rotate: 5, scale: 1.02, transition: { duration: 0.25 } }}
                transition={{
                  opacity: { duration: 0.65, delay: 0.3 },
                  rotate: { duration: 0.65, delay: 0.3 },
                  y: prefersReducedMotion
                    ? { duration: 0.65, delay: 0.3 }
                    : { repeat: Infinity, repeatType: 'mirror', duration: 4.2, ease: 'easeInOut', delay: 1 },
                }}
                className="absolute bottom-[36px] right-[18px] xl:right-[24px] w-[142px] xl:w-[154px] z-30"
              >
                {/* Subtle Fabric Lanyard Strap Top Graphic */}
                <svg
                  viewBox="0 0 120 120"
                  aria-hidden="true"
                  className="absolute -top-24 -right-12 w-32 h-32 pointer-events-none overflow-visible"
                >
                  <path
                    d="M 55 112 C 62 70, 92 24, 130 -18"
                    stroke="#1C1C22"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Metallic Clip */}
                  <rect x="46" y="102" width="16" height="14" rx="2" fill="#9CA3AF" stroke="#111116" strokeWidth="1.5" />
                </svg>

                {/* Thin L-Shaped Callout Connector -> LIVE / 04 */}
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="absolute -bottom-9 right-0 flex items-end gap-2 pointer-events-none"
                >
                  <div className="w-8 h-5 border-b border-l border-[#111116]/40 dark:border-white/40 mb-1.5" />
                  <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#52525B] dark:text-white/60 uppercase whitespace-nowrap">
                    LIVE / 04
                  </span>
                </motion.div>

                <Link
                  to="/services/events-experiences"
                  data-cursor-text="LIVE"
                  className="block rounded-[10px] bg-[#FD7D3C] text-[#111116] p-4 pt-6 border border-[#111116]/25 shadow-[0_22px_40px_rgba(17,17,22,0.28)] relative overflow-hidden"
                >
                  {/* Pass Slot Hole */}
                  <div className="mx-auto w-7 h-2 rounded-full bg-[#111116]/25 mb-4" />

                  <div className="space-y-4">
                    <p className="font-display text-xl xl:text-2xl font-black uppercase leading-[0.94] tracking-tight">
                      RIWA<br />LIVE<br />PASS
                    </p>

                    <div className="font-mono text-[9px] uppercase tracking-widest font-bold leading-snug text-[#111116]/85">
                      <span>EVENTS &amp;</span><br />
                      <span>ACTIVATIONS</span>
                    </div>

                    {/* Graphic Black Tear Corner Motif */}
                    <div className="pt-2 flex justify-end">
                      <svg viewBox="0 0 40 40" className="w-9 h-9 text-[#111116]" fill="currentColor">
                        <polygon points="40,0 40,40 8,40 26,20" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* ========================================================== */}
            {/* MOBILE & TABLET RECOMPOSED COLLAGE (< 1024px)              */}
            {/* ========================================================== */}
            <div className="lg:hidden grid grid-cols-2 gap-4 sm:gap-6 pt-2">
              {/* Mobile Artifact 01: Brand */}
              <Link
                to="/services/brand-identity"
                className="flex flex-col gap-2"
              >
                <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#52525B] dark:text-white/60 uppercase">
                  BRAND / 01
                </span>
                <div className="aspect-[4/4.6] bg-[#111116] text-white p-4 flex flex-col justify-between relative overflow-hidden border border-white/10 shadow-lg">
                  <svg viewBox="0 0 200 250" aria-hidden="true" className="absolute inset-0 w-full h-full">
                    <path d="M 160 10 C 100 65, 90 135, 195 165 L 200 250 L 80 250 C 90 185, 135 150, 100 125 Z" fill="#EA1E4D" />
                  </svg>
                  <img
                    src="/brand/riwa-logo-official.png"
                    alt="Riwa Brand"
                    className="relative z-10 h-6 w-fit object-contain"
                  />
                  <span className="relative z-10 font-mono text-[10px] font-bold tracking-wider uppercase leading-tight">
                    BRAND IDENTITY<br />SYSTEM
                  </span>
                </div>
              </Link>

              {/* Mobile Artifact 02: Campaign */}
              <Link
                to="/work/solanas-baddies"
                className="flex flex-col gap-2 pt-4"
              >
                <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#52525B] dark:text-white/60 uppercase">
                  CAMPAIGN / 02
                </span>
                <div className="aspect-[4/4.6] bg-white p-1.5 border border-[#111116]/15 shadow-lg">
                  <img
                    src="/work/solanas-chilli-chicken.jpg"
                    alt="Solanas Commercial Poster"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </Link>

              {/* Mobile Artifact 03: Digital */}
              <Link
                to="/services/technology-experiences"
                className="flex flex-col gap-2"
              >
                <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#52525B] dark:text-white/60 uppercase">
                  DIGITAL / 03
                </span>
                <div className="aspect-[4/4.2] rounded-xl bg-[#16161B] p-2 border border-white/15 shadow-lg">
                  <div className="h-full w-full rounded-lg bg-[#0D0E12] text-white p-3.5 flex flex-col justify-between border border-white/10">
                    <img
                      src="/brand/riwa-logo-official.png"
                      alt="Riwa Digital"
                      className="h-5 w-fit object-contain"
                    />
                    <div className="space-y-2">
                      <p className="font-display text-xs sm:text-sm font-black uppercase leading-tight">
                        DIGITAL EXPERIENCE<span className="text-[#EA1E4D]">.</span>
                      </p>
                      <span className="inline-flex items-center justify-center w-6 h-4 bg-[#EA1E4D] text-white font-mono text-[9px] font-bold">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Mobile Artifact 04: Live Pass */}
              <Link
                to="/services/events-experiences"
                className="flex flex-col gap-2 -mt-2"
              >
                <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#52525B] dark:text-white/60 uppercase">
                  LIVE / 04
                </span>
                <div className="aspect-[4/4.2] rounded-lg bg-[#FD7D3C] text-[#111116] p-4 border border-[#111116]/25 shadow-lg flex flex-col justify-between relative overflow-hidden">
                  <div className="mx-auto w-6 h-1.5 rounded-full bg-[#111116]/25" />
                  <div>
                    <p className="font-display text-lg sm:text-xl font-black uppercase leading-[0.95]">
                      RIWA<br />LIVE PASS
                    </p>
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider mt-1.5 block text-[#111116]/80">
                      EVENTS &amp; ACTIVATIONS
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* BOTTOM VISUAL STRIP: Disciplines + Scroll Indicator        */}
        {/* ========================================================== */}
        <div className="mt-12 sm:mt-16 pt-5 border-t border-[#111116]/15 dark:border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#52525B] dark:text-white/60 select-none">
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
            onClick={handleScrollDown}
            className="inline-flex items-center gap-2 sm:pl-6 sm:border-l border-[#111116]/20 dark:border-white/20 text-[#111116] dark:text-white hover:text-[#EA1E4D] font-bold transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={13} className="text-[#EA1E4D]" />
          </button>
        </div>
      </div>
    </section>
  );
};
