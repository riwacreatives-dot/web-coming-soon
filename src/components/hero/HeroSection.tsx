import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { resolveHeroVisualState } from '../../data/studioData';

const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const HeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const heroVisual = resolveHeroVisualState();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.3,
  });
  const topLineDrift = useTransform(
    smoothScroll,
    [0, 1],
    [0, prefersReducedMotion ? 0 : -20]
  );
  const bottomLineDrift = useTransform(
    smoothScroll,
    [0, 1],
    [0, prefersReducedMotion ? 0 : 22]
  );

  const handleScrollDown = () => {
    const nextEl =
      document.getElementById('selected-projects') ||
      document.getElementById('manifesto') ||
      document.getElementById('work');
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    } else {
      window.scrollBy({
        top: window.innerHeight * 0.85,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      aria-labelledby="hero-heading"
      className="relative w-full bg-[#F7F6F2] dark:bg-[#0B0B0F] text-[#111116] dark:text-white lg:min-h-[100svh] lg:flex lg:flex-col pt-24 sm:pt-28 lg:pt-[94px] xl:pt-[102px] pb-6 sm:pb-8 lg:pb-6 px-4 sm:px-8 md:px-12 overflow-x-clip transition-colors"
    >
      <div className="max-w-7xl w-full mx-auto lg:flex-1 lg:flex lg:flex-col lg:justify-between">
        {/* Main 2-Column Composition: ~44% Left Editorial / ~56% Right Creative Worktable */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center lg:my-auto py-1">
          {/* ========================================================== */}
          {/* LEFT COLUMN (~44% -> lg:col-span-5): Editorial Positioning   */}
          {/* ========================================================== */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 relative z-20 min-w-0">
            {/* Eyebrow */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: STUDIO_EASE }}
              className="flex items-start gap-2.5 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#52525B] dark:text-white/65 select-none"
            >
              <span
                aria-hidden="true"
                className="inline-block w-2 h-2 rounded-full bg-[#EA1E4D] shrink-0 mt-1"
              />
              <div className="leading-snug">
                <span className="text-[#111116] dark:text-white font-bold block">
                  RIWA CREATIVES
                </span>
                <span>INDEPENDENT CREATIVE &amp; GROWTH STUDIO</span>
              </div>
            </motion.div>

            {/* Headline: Line-Clipped Masked Curtain Ascent + Subtle Scroll Shear */}
            <h1
              id="hero-heading"
              className="font-display text-[clamp(2.5rem,5.2vw,4.35rem)] font-extrabold uppercase tracking-tighter text-[#111116] dark:text-white leading-[0.94] select-none"
            >
              <span className="block overflow-hidden">
                <motion.span
                  style={{ x: topLineDrift }}
                  initial={prefersReducedMotion ? false : { y: '115%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.72, delay: 0.06, ease: STUDIO_EASE }}
                  className="block"
                >
                  IDEAS, MADE
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em] px-1 -mx-1">
                <motion.span
                  style={{ x: bottomLineDrift }}
                  initial={prefersReducedMotion ? false : { y: '115%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.78, delay: 0.16, ease: STUDIO_EASE }}
                  className="block font-serif italic font-normal tracking-tight text-[#EA1E4D] text-[1.14em] uppercase mt-0.5"
                >
                  UNREASONABLE.
                </motion.span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24, ease: STUDIO_EASE }}
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
              transition={{ duration: 0.65, delay: 0.32, ease: STUDIO_EASE }}
              className="flex flex-wrap items-center gap-5 sm:gap-7 pt-2 font-mono text-xs uppercase tracking-[0.16em]"
            >
              <Link
                to="/work"
                data-cursor-text="WORK"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C4123D] hover:bg-[#EA1E4D] text-white font-bold active:scale-[0.98] transition-all duration-300 shadow-sm"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowUpRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                to="/contact"
                data-cursor-text="COMMISSION"
                className="group inline-flex items-center gap-2 min-h-[44px] pb-1.5 border-b border-[#111116] dark:border-white text-[#111116] dark:text-white font-bold hover:text-[#C4123D] dark:hover:text-[#FD7D3C] hover:border-[#EA1E4D] transition-colors"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight
                  size={14}
                  aria-hidden="true"
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </div>

          {/* ========================================================== */}
          {/* RIGHT COLUMN (~56% -> lg:col-span-7): CREATIVE WORKTABLE   */}
          {/* ========================================================== */}
          <div className="lg:col-span-7 relative min-w-0">
            {/* DESKTOP INTERACTIVE WORKTABLE COLLAGE (>= 1024px) */}
            <div className="hidden lg:block relative w-full h-[465px] xl:h-[495px] 2xl:h-[545px] select-none">
              {/* --- ARTIFACT 01: BRAND IDENTITY SYSTEM (Hardcover Monograph) --- */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 26, rotate: -6 }}
                animate={{ opacity: 1, y: 0, rotate: -6 }}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { rotate: -3, y: -6, transition: { duration: 0.25 } }
                }
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-[40px] left-[28px] xl:left-[44px] w-[245px] xl:w-[266px] 2xl:w-[292px] z-10 hover:z-40 focus-within:z-40"
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
                  aria-label="Brand Identity System — Open Brand and Identity Services"
                  className="block w-full aspect-[4/4.8] bg-[#111116] text-white border border-white/10 dark:border-white/30 shadow-[0_24px_48px_rgba(17,17,22,0.28)] dark:shadow-[0_24px_48px_rgba(0,0,0,0.72)] relative overflow-hidden group"
                >
                  {/* Realistic Book Spine Highlight */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-3.5 bg-gradient-to-r from-white/15 via-white/5 to-transparent border-r border-black/40"
                  />

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
                        BRAND
                        <br />
                        IDENTITY
                        <br />
                        SYSTEM
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* --- ARTIFACT 02: COMMERCIAL CAMPAIGN POSTER --- */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24, rotate: 6 }}
                animate={{ opacity: 1, y: 0, rotate: 6 }}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { rotate: 3, y: -6, transition: { duration: 0.25 } }
                }
                transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-[32px] right-[18px] xl:right-[28px] w-[214px] xl:w-[234px] 2xl:w-[258px] z-[8] hover:z-40 focus-within:z-40"
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
                  to="/work"
                  data-cursor-text="CAMPAIGN"
                  aria-label="Solanas Commercial Campaign Poster — View Selected Work"
                  className="block w-full bg-[#FFFFFF] p-2 pb-4 border border-[#111116]/15 shadow-[0_22px_44px_rgba(17,17,22,0.18)] dark:shadow-[0_22px_44px_rgba(0,0,0,0.55)]"
                >
                  <div className="aspect-[4/4.6] w-full overflow-hidden bg-[#111116]">
                    <img
                      src={heroVisual.src || '/work/solanas-chilli-chicken.jpg'}
                      alt={heroVisual.alt || 'Solanas Commercial Campaign Poster'}
                      width={heroVisual.width || 819}
                      height={heroVisual.height || 1024}
                      fetchPriority="high"
                      decoding="auto"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="pt-2.5 px-1 flex items-center justify-between font-mono text-[9px] text-[#52525B] uppercase tracking-wider">
                    <span className="font-bold text-[#111116]">SOLANAS · KEY VISUAL</span>
                    <span className="text-[#C4123D] font-bold">2026</span>
                  </div>
                </Link>
              </motion.div>

              {/* --- ARTIFACT 03: DIGITAL EXPERIENCE (Tablet UI) --- */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 28, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { rotate: -1, y: -5, transition: { duration: 0.25 } }
                }
                transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-[38px] left-[86px] xl:left-[110px] w-[308px] xl:w-[336px] 2xl:w-[360px] z-20 hover:z-40 focus-within:z-40"
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
                  to="/services/digital-technology"
                  data-cursor-text="DIGITAL"
                  aria-label="Digital Experience Tablet — Open Digital and Technology Services"
                  className="block rounded-[18px] bg-[#16161B] p-2.5 border border-white/15 dark:border-white/30 shadow-[0_28px_56px_rgba(17,17,22,0.34)] dark:shadow-[0_28px_56px_rgba(0,0,0,0.75)]"
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
                        width={363}
                        height={454}
                        decoding="async"
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
                      <div className="space-y-1" aria-hidden="true">
                        <span className="block w-4 h-[1.5px] bg-white/70" />
                        <span className="block w-4 h-[1.5px] bg-white/70" />
                      </div>
                    </div>

                    {/* Screen Headline */}
                    <div className="relative z-10 space-y-2.5 max-w-[78%]">
                      <p className="font-display text-base xl:text-lg font-extrabold uppercase leading-[1.05] tracking-tight">
                        A DIGITAL
                        <br />
                        EXPERIENCE
                        <br />
                        THAT CONNECTS<span className="text-[#EA1E4D]">.</span>
                      </p>
                      <span className="inline-flex items-center justify-center w-7 h-5 bg-[#C4123D] text-white font-mono text-[10px] font-bold">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* --- ARTIFACT 04: LIVE EVENTS & ACTIVATIONS (Orange Event Pass + Lanyard) --- */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: -18, rotate: 13.5 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: prefersReducedMotion ? 9 : [13.5, 7.6, 9.5, 9],
                }}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { rotate: 5.5, scale: 1.02, transition: { duration: 0.28, ease: STUDIO_EASE } }
                }
                transition={{
                  opacity: { duration: 0.55, delay: 0.34 },
                  y: { duration: 0.65, delay: 0.34, ease: STUDIO_EASE },
                  rotate: { duration: 1.05, delay: 0.34, times: [0, 0.45, 0.78, 1], ease: 'easeOut' },
                }}
                style={{ transformOrigin: '50% -24px' }}
                className="absolute bottom-[36px] right-[18px] xl:right-[24px] w-[132px] xl:w-[144px] 2xl:w-[154px] z-30 hover:z-40 focus-within:z-40"
              >
                {/* Centered Woven Lanyard Strap & Metallic Clasp */}
                <svg
                  viewBox="0 0 120 118"
                  aria-hidden="true"
                  className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-[88px] w-[120px] h-[118px] z-20 pointer-events-none overflow-visible"
                >
                  <path
                    d="M 60 76 C 60 44, 70 14, 88 -24"
                    stroke="#1C1C22"
                    strokeWidth="14"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 60 76 C 60 44, 70 14, 88 -24"
                    stroke="#52525B"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    fill="none"
                  />
                  {/* Metallic Swivel Buckle */}
                  <rect
                    x="49"
                    y="70"
                    width="22"
                    height="12"
                    rx="3"
                    fill="#9CA3AF"
                    stroke="#111116"
                    strokeWidth="1.5"
                  />
                  {/* Center Clasp Tongue Engaging Pass Slot */}
                  <rect
                    x="55"
                    y="80"
                    width="10"
                    height="36"
                    rx="4"
                    fill="#D1D5DB"
                    stroke="#111116"
                    strokeWidth="1.5"
                  />
                  <circle cx="60" cy="76" r="1.8" fill="#111116" />
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
                  aria-label="Riwa Live Pass — Open Events and Experiences Services"
                  className="relative z-10 block rounded-[10px] bg-[#FD7D3C] text-[#111116] p-4 pt-6 border border-[#111116]/25 shadow-[0_22px_40px_rgba(17,17,22,0.28)] overflow-hidden"
                >
                  {/* Pass Slot Hole */}
                  <div
                    aria-hidden="true"
                    className="mx-auto w-7 h-2 rounded-full bg-[#111116]/25 mb-4"
                  />

                  <div className="space-y-4">
                    <p className="font-display text-xl xl:text-2xl font-extrabold uppercase leading-[0.94] tracking-tight text-[#111116]">
                      RIWA
                      <br />
                      LIVE
                      <br />
                      PASS
                    </p>

                    <div className="font-mono text-[9px] uppercase tracking-widest font-bold leading-snug text-[#111116]">
                      <span>EVENTS &amp;</span>
                      <br />
                      <span>ACTIVATIONS</span>
                    </div>

                    {/* Graphic Black Tear Corner Motif */}
                    <div className="pt-2 flex justify-end" aria-hidden="true">
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
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                transition={{ duration: 0.58, delay: 0.14, ease: STUDIO_EASE }}
              >
                <Link to="/services/brand-identity" className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#52525B] dark:text-white/60 uppercase">
                    BRAND / 01
                  </span>
                  <div className="aspect-[4/4.6] bg-[#111116] text-white p-4 flex flex-col justify-between relative overflow-hidden border border-white/10 dark:border-white/30 shadow-lg">
                    <svg
                      viewBox="0 0 200 250"
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full pointer-events-none"
                    >
                      <path
                        d="M 160 10 C 100 65, 90 135, 195 165 L 200 250 L 80 250 C 90 185, 135 150, 100 125 Z"
                        fill="#EA1E4D"
                      />
                    </svg>
                    <img
                      src="/brand/riwa-logo-official.png"
                      alt="Riwa Brand"
                      className="relative z-10 h-6 w-fit object-contain"
                    />
                    <span className="relative z-10 font-mono text-[10px] font-bold tracking-wider uppercase leading-tight">
                      BRAND IDENTITY
                      <br />
                      SYSTEM
                    </span>
                  </div>
                </Link>
              </motion.div>

              {/* Mobile Artifact 02: Campaign */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 22, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                transition={{ duration: 0.58, delay: 0.22, ease: STUDIO_EASE }}
              >
                <Link to="/work" className="flex flex-col gap-2 pt-4">
                  <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#52525B] dark:text-white/60 uppercase">
                    CAMPAIGN / 02
                  </span>
                  <div className="aspect-[4/4.6] bg-white p-1.5 border border-[#111116]/15 shadow-lg">
                    <img
                      src={heroVisual.src || '/work/solanas-chilli-chicken.jpg'}
                      alt={heroVisual.alt || 'Solanas Commercial Poster'}
                      width={heroVisual.width || 819}
                      height={heroVisual.height || 1024}
                      fetchPriority="high"
                      decoding="auto"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </Link>
              </motion.div>

              {/* Mobile Artifact 03: Digital */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 22, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                transition={{ duration: 0.58, delay: 0.3, ease: STUDIO_EASE }}
              >
                <Link to="/services/digital-technology" className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#52525B] dark:text-white/60 uppercase">
                    DIGITAL / 03
                  </span>
                  <div className="aspect-[4/4.2] rounded-xl bg-[#16161B] p-2 border border-white/15 dark:border-white/30 shadow-lg">
                    <div className="h-full w-full rounded-lg bg-[#0D0E12] text-white p-3.5 flex flex-col justify-between border border-white/10">
                      <img
                        src="/brand/riwa-logo-official.png"
                        alt="Riwa Digital"
                        className="h-5 w-fit object-contain"
                      />
                      <div className="space-y-2">
                        <p className="font-display text-xs sm:text-sm font-extrabold uppercase leading-tight">
                          DIGITAL EXPERIENCE<span className="text-[#EA1E4D]">.</span>
                        </p>
                        <span className="inline-flex items-center justify-center w-6 h-4 bg-[#C4123D] text-white font-mono text-[9px] font-bold">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Mobile Artifact 04: Live Pass */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 22, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                transition={{ duration: 0.58, delay: 0.38, ease: STUDIO_EASE }}
              >
                <Link to="/services/events-experiences" className="flex flex-col gap-2 -mt-2">
                  <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#52525B] dark:text-white/60 uppercase">
                    LIVE / 04
                  </span>
                  <div className="aspect-[4/4.2] rounded-lg bg-[#FD7D3C] text-[#111116] p-4 border border-[#111116]/25 shadow-lg flex flex-col justify-between relative overflow-hidden">
                    <div
                      aria-hidden="true"
                      className="mx-auto w-6 h-1.5 rounded-full bg-[#111116]/25"
                    />
                    <div>
                      <p className="font-display text-lg sm:text-xl font-extrabold uppercase leading-[0.95] text-[#111116]">
                        RIWA
                        <br />
                        LIVE PASS
                      </p>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider mt-1.5 block text-[#111116]">
                        EVENTS &amp; ACTIVATIONS
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* BOTTOM VISUAL STRIP: Disciplines + Scroll Indicator        */}
        {/* ========================================================== */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45, ease: STUDIO_EASE }}
          className="relative mt-8 lg:mt-4 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#52525B] dark:text-white/60 select-none"
        >
          <motion.span
            aria-hidden="true"
            initial={prefersReducedMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.42, ease: STUDIO_EASE }}
            className="absolute top-0 inset-x-0 h-px bg-[#111116]/15 dark:bg-white/15 origin-left"
          />
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[#111116] dark:text-white/85 font-semibold">
            <span>STRATEGY</span>
            <span className="text-[#EA1E4D]" aria-hidden="true">—</span>
            <span>IDENTITY</span>
            <span className="text-[#EA1E4D]" aria-hidden="true">—</span>
            <span>CAMPAIGNS</span>
            <span className="text-[#EA1E4D]" aria-hidden="true">—</span>
            <span>DIGITAL</span>
            <span className="text-[#EA1E4D]" aria-hidden="true">—</span>
            <span className="text-[#C4123D] dark:text-[#FD7D3C] font-bold">EXPERIENCES</span>
          </div>

          <button
            type="button"
            onClick={handleScrollDown}
            className="group inline-flex items-center gap-2 min-h-[44px] sm:min-h-0 sm:pl-6 sm:border-l border-[#111116]/20 dark:border-white/20 text-[#111116] dark:text-white hover:text-[#C4123D] dark:hover:text-[#FD7D3C] font-bold transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown
              size={13}
              className="text-[#EA1E4D] transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
