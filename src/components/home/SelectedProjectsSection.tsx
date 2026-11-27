import React, { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Monitor, Smartphone } from 'lucide-react';
import { CANONICAL_ASSETS } from '../../data/studioData';
import { AssetId } from '../../types';
import { useReducedMotion } from '../../hooks/useReducedMotion';

type ShowcaseDevice = 'iphone' | 'macbook';

interface ShowcaseSlide {
  id: string;
  device: ShowcaseDevice;
  requiredAsset?: AssetId;
  badge: string;
  title: string;
  route: string;
  year: string;
  src?: string;
  alt?: string;
  webVariant?: 'digital-studio' | 'events-stage';
}

const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    id: 'solanas-baddies-iphone',
    device: 'iphone',
    requiredAsset: 'AST-C01',
    badge: 'CLIENT PROJECT',
    title: 'SOLANAS · HOTTER THAN BADDIES',
    src: '/work/solanas-chilli-chicken.jpg',
    alt: 'Solanas viral street campaign key visual framed inside mobile showcase',
    route: '/services/creative-advertising',
    year: '2026',
  },
  {
    id: 'riwa-digital-macbook',
    device: 'macbook',
    badge: 'DIGITAL & TECHNOLOGY',
    title: 'RIWA DIGITAL · WEB EXPERIENCE CONCEPT',
    webVariant: 'digital-studio',
    route: '/services/digital-technology',
    year: 'WEB SPEC',
  },
  {
    id: 'solanas-dimsum-iphone',
    device: 'iphone',
    requiredAsset: 'AST-C02',
    badge: 'CLIENT PROJECT',
    title: 'SOLANAS · DIM SUM KEY VISUAL',
    src: '/work/solanas-poster.jpg',
    alt: 'Solanas culinary key visual poster framed inside mobile showcase',
    route: '/services/creative-advertising',
    year: '2026',
  },
  {
    id: 'riwa-events-macbook',
    device: 'macbook',
    badge: 'EVENTS & EXPERIENCES',
    title: 'RIWA LIVE · STAGE & PASS WEB ARCHITECTURE',
    webVariant: 'events-stage',
    route: '/services/events-experiences',
    year: 'LIVE SPEC',
  },
  {
    id: 'riwa-culture-iphone',
    device: 'iphone',
    requiredAsset: 'AST-R01',
    badge: 'STUDIO CULTURE',
    title: "FOUNDER'S OFFICE · STUDIO POSTER",
    src: '/brand/riwa-hiring-poster.jpg',
    alt: "Riwa Creatives Founder's Office poster inside mobile showcase",
    route: '/about#studio-culture',
    year: 'RIWA',
  },
];

const STUDIO_CURVE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 64 : -64,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -56 : 56,
    opacity: 0,
    scale: 0.96,
  }),
};

/**
 * Generated interactive Editorial Website Designs for MacBook Screen-Only Mockup (0deg)
 */
const MacBookWebArtwork: React.FC<{ variant: 'digital-studio' | 'events-stage' }> = ({
  variant,
}) => {
  if (variant === 'events-stage') {
    return (
      <div className="w-full h-full bg-[#FD7D3C] text-[#111116] flex flex-col justify-between p-4 sm:p-6 md:p-7 relative overflow-hidden">
        {/* Subtle Architectural Lines */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#111116 1px, transparent 1px), linear-gradient(90deg, #111116 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Mini Website Top Bar */}
        <div className="relative z-10 flex items-center justify-between pb-2.5 border-b border-[#111116]/25 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <img
              src="/brand/riwa-logo-official.png"
              alt="Riwa Logo"
              className="h-4 sm:h-5 w-auto object-contain brightness-0"
            />
            <span>LIVE EXPERIENCES</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span>STAGES</span>
            <span>PASSES</span>
            <span className="px-2.5 py-1 rounded-full bg-[#111116] text-white">REGISTER ↗</span>
          </div>
        </div>

        {/* Main Split Editorial Web Showcase */}
        <div className="relative z-10 grid grid-cols-12 gap-4 items-center my-auto py-3">
          <div className="col-span-7 space-y-2 sm:space-y-3">
            <span className="inline-block px-2 py-0.5 bg-[#111116] text-[#FD7D3C] font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-widest">
              EXPERIENCE ARCHITECTURE
            </span>
            <p className="font-display font-extrabold uppercase tracking-tighter leading-[0.9] text-lg sm:text-3xl md:text-4xl text-[#111116]">
              ROOMS BUILT
              <br />
              FOR LIVE{' '}
              <span className="font-serif italic font-normal lowercase underline decoration-2 underline-offset-4">
                energy.
              </span>
            </p>
            <p className="hidden sm:block font-sans text-xs text-[#111116]/85 font-medium max-w-xs leading-snug">
              Visual identity, registration systems, stage direction, and physical passes aligned as one experience.
            </p>
          </div>

          <div className="col-span-5 bg-[#111116] text-white p-3 sm:p-4 border border-[#111116] shadow-lg space-y-2.5">
            <div className="flex items-center justify-between font-mono text-[8px] sm:text-[9px] text-[#FD7D3C] font-bold uppercase">
              <span>STAGE SPEC // 04</span>
              <span>ADMIT ALL</span>
            </div>
            <div className="border-t border-white/15 pt-2.5 space-y-1.5 font-mono text-[8px] sm:text-[10px]">
              <div className="flex justify-between">
                <span className="text-white/70">STAGE GRAPHICS</span>
                <span className="text-[#FD7D3C] font-bold">01</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">DELEGATE PASSES</span>
                <span className="text-[#FD7D3C] font-bold">02</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">WEB REGISTRATION</span>
                <span className="text-[#FD7D3C] font-bold">03</span>
              </div>
            </div>
            <div className="pt-2 border-t border-white/15 font-mono text-[8px] sm:text-[9px] font-bold text-white uppercase">
              END-TO-END PRODUCTION →
            </div>
          </div>
        </div>

        {/* Mini Website Footer Bar */}
        <div className="relative z-10 pt-2 border-t border-[#111116]/25 flex items-center justify-between font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-widest">
          <span>CONFERENCES · HACKATHONS · ACTIVATIONS</span>
          <span>RIWA.IN</span>
        </div>
      </div>
    );
  }

  // Default: Digital Creative Studio Editorial Website Concept
  return (
    <div className="w-full h-full bg-[#0D0E12] text-white flex flex-col justify-between p-4 sm:p-6 md:p-7 relative overflow-hidden">
      {/* Subtle Ambient Accent Mesh (Static) */}
      <div
        aria-hidden="true"
        className="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-[#EA1E4D]/15 blur-2xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-[#FD7D3C]/12 blur-2xl pointer-events-none"
      />

      {/* Simulated Website Nav */}
      <div className="relative z-10 flex items-center justify-between pb-2.5 border-b border-white/10 font-mono text-[8px] sm:text-[10px] uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <img
            src="/brand/riwa-logo-official.png"
            alt="Riwa Logo"
            className="h-4 sm:h-5 w-auto object-contain"
          />
          <span className="text-white/90 font-bold">RIWA STUDIO</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-white/70">
          <span>WORK</span>
          <span>SYSTEMS</span>
          <span className="px-2.5 py-1 rounded-full bg-[#C4123D] text-white font-bold">
            START BRIEF ↗
          </span>
        </div>
      </div>

      {/* Asymmetric Editorial Web Hero Content */}
      <div className="relative z-10 grid grid-cols-12 gap-4 items-center my-auto py-3">
        <div className="col-span-7 space-y-2 sm:space-y-3.5">
          <span className="inline-flex items-center gap-1.5 font-mono text-[8px] sm:text-[9px] text-[#FD7D3C] font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA1E4D]" />
            INTERACTIVE ARCHITECTURE
          </span>
          <p className="font-display font-extrabold uppercase tracking-tighter leading-[0.9] text-lg sm:text-3xl md:text-4xl text-white">
            DIGITAL
            <br />
            CRAFT BUILT TO{' '}
            <span className="font-serif italic font-normal text-[#EA1E4D] lowercase text-[1.1em]">
              convert.
            </span>
          </p>
          <p className="hidden sm:block font-sans text-xs text-[#B4B4BE] max-w-xs leading-snug">
            Custom React architecture, sharp type rhythm, and responsive interfaces engineered in-house.
          </p>
          <div className="flex items-center gap-2 pt-0.5 font-mono text-[8px] sm:text-[9px] font-bold uppercase">
            <span className="px-2.5 py-1 rounded-full bg-white text-[#111116]">EXPLORE ↗</span>
            <span className="px-2.5 py-1 rounded-full border border-white/25 text-white/85">
              SPECS
            </span>
          </div>
        </div>

        {/* Interactive Visual Wireframe Stack */}
        <div className="col-span-5 grid grid-cols-2 gap-2">
          <div className="col-span-2 aspect-[16/9] border border-[#EA1E4D]/60 bg-gradient-to-br from-[#1B1319] to-[#111116] p-2.5 flex flex-col justify-between">
            <span className="font-mono text-[7px] sm:text-[8px] text-[#EA1E4D] font-bold uppercase">
              01 // BRAND SYSTEM
            </span>
            <span className="font-display text-[10px] sm:text-xs font-extrabold uppercase">
              UNIFORM TOKENS
            </span>
          </div>
          <div className="aspect-square border border-white/15 bg-[#161720] p-2 flex flex-col justify-between">
            <span className="w-2.5 h-2.5 bg-[#FD7D3C] inline-block" />
            <span className="font-mono text-[7px] sm:text-[8px] text-white/75 uppercase">
              UI LAB
            </span>
          </div>
          <div className="aspect-square border border-white/15 bg-[#161720] p-2 flex flex-col justify-between">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EA1E4D] inline-block" />
            <span className="font-mono text-[7px] sm:text-[8px] text-white/75 uppercase">
              MOTION
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Ticker Line Inside Browser */}
      <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between font-mono text-[8px] sm:text-[9px] text-[#B4B4BE] uppercase tracking-widest">
        <span>REACT · TYPESCRIPT · TAILWIND</span>
        <span className="text-[#FD7D3C]">01 / LIVE VIEWPORT</span>
      </div>
    </div>
  );
};

/**
 * SECTION 02 — FEATURED WORK
 * - Edge-safe, never-clipped monumental 3-line display typography behind centered hardware stage
 * - Alternates sleek Portrait iPhone Mockup (for approved vertical campaign posters)
 *   and Screen-Only MacBook Display Mockup (no keyboard, displaying custom editorial websites)
 * - Corner arrow navigation, crisp minimal caption, keyboard/touch-friendly, 0deg orthogonal geometry
 */
export const SelectedProjectsSection: React.FC = () => {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const slides = useMemo(() => {
    const approvedIds = new Set(
      CANONICAL_ASSETS.filter((a) => a.permissionApproved && a.founderApproved).map((a) => a.assetId)
    );
    return SHOWCASE_SLIDES.filter(
      (slide) => !slide.requiredAsset || approvedIds.has(slide.requiredAsset)
    );
  }, []);

  const [[activeIdx, direction], setSlideState] = useState<[number, number]>([0, 1]);
  const touchStartXRef = useRef<number | null>(null);
  const currentSlide = slides[activeIdx] || slides[0];

  const stepSlide = (dir: number) => {
    if (slides.length <= 1) return;
    setSlideState(([prev]) => [(prev + dir + slides.length) % slides.length, dir]);
  };

  const jumpToSlide = (targetIdx: number) => {
    if (targetIdx === activeIdx) return;
    setSlideState(([prev]) => [targetIdx, targetIdx > prev ? 1 : -1]);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartXRef.current;
    const delta = endX - touchStartXRef.current;
    touchStartXRef.current = null;
    if (Math.abs(delta) >= 44) {
      stepSlide(delta < 0 ? 1 : -1);
    }
  };

  // Spring-smoothed scroll-linked counter-motion tuned for liquid 120Hz glide
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    mass: 0.35,
  });

  const topRowX = useTransform(smoothScroll, [0, 1], [reduced ? 0 : -24, reduced ? 0 : 24]);
  const midRowX = useTransform(smoothScroll, [0, 1], [reduced ? 0 : 26, reduced ? 0 : -26]);
  const midRowScale = useTransform(smoothScroll, [0, 0.5, 1], [reduced ? 1 : 0.965, reduced ? 1 : 1.03, reduced ? 1 : 0.965]);
  const botRowX = useTransform(smoothScroll, [0, 1], [reduced ? 0 : -20, reduced ? 0 : 20]);
  // Scroll-only depth parallax for the center hardware stage (zero cursor tracking)
  const deviceScrollY = useTransform(smoothScroll, [0, 0.5, 1], [reduced ? 0 : 28, 0, reduced ? 0 : -24]);
  const deviceScrollScale = useTransform(smoothScroll, [0, 0.48, 1], [reduced ? 1 : 0.94, 1, reduced ? 1 : 0.97]);

  return (
    <section
      id="selected-projects"
      ref={sectionRef}
      aria-labelledby="featured-work-heading"
      className="relative w-full bg-[#E7E7E9] dark:bg-[#14141C] text-[#111116] dark:text-white border-y border-[#111116]/15 dark:border-white/15 overflow-x-clip transition-colors"
    >
      {/* FULL-BLEED BACKGROUND TYPOGRAPHY (Always fits cleanly without edge slicing) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none z-0 px-4 leading-[0.86]"
      >
        <motion.span
          style={{ x: topRowX }}
          className="block whitespace-nowrap font-display font-extrabold uppercase tracking-tighter text-[clamp(2.4rem,7.8vw,7.2rem)] text-transparent [-webkit-text-stroke:1.5px_rgba(17,17,22,0.24)] dark:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.34)]"
        >
          MADE TO BE
        </motion.span>

        <motion.span
          style={{ x: midRowX, scale: midRowScale }}
          className="block whitespace-nowrap font-serif italic font-normal tracking-tight text-[clamp(3.3rem,10.5vw,9.6rem)] text-[#EA1E4D]/90 my-1 sm:my-2 will-change-transform"
        >
          impossible
        </motion.span>

        <motion.span
          style={{ x: botRowX }}
          className="block whitespace-nowrap font-display font-extrabold uppercase tracking-tighter text-[clamp(2.4rem,7.8vw,7.2rem)] text-[#111116]/90 dark:text-white/90"
        >
          TO IGNORE<span className="text-[#EA1E4D]">.</span>
        </motion.span>
      </div>

      <motion.div
        initial={reduced ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        className="max-w-7xl mx-auto py-14 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 relative z-10"
      >
        {/* Clean Top Strip */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: STUDIO_CURVE } },
          }}
          className="flex items-center justify-between gap-4 mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="w-5 h-[2px] bg-[#EA1E4D] inline-block" />
            <h2
              id="featured-work-heading"
              className="font-mono text-xs sm:text-sm uppercase tracking-[0.26em] text-[#C4123D] dark:text-[#FD7D3C] font-bold"
            >
              02 — FEATURED WORK
            </h2>
          </div>

          <Link
            to="/work"
            className="group inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full bg-[#111116] dark:bg-white text-white dark:text-[#111116] hover:bg-[#C4123D] hover:text-white dark:hover:bg-[#EA1E4D] dark:hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 active:scale-[0.98]"
          >
            <span>View All Work</span>
            <ArrowUpRight
              size={14}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>

        {/* ============================================================ */}
        {/* MAIN SHOWCASE STAGE: CORNER INFO + CENTER DEVICE + ARROWS    */}
        {/* ============================================================ */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative min-h-[540px] sm:min-h-[620px] md:min-h-[670px] flex flex-col items-center justify-between py-6 sm:py-8 select-none touch-pan-y"
        >
          {/* Corner Telemetry Bar */}
          <div className="w-full flex items-center justify-between gap-4 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] mb-4">
            <div className="flex items-center gap-2 font-bold text-[#111116] dark:text-white">
              <span className="text-[#C4123D] dark:text-[#FD7D3C]">
                0{activeIdx + 1} / 0{slides.length}
              </span>
              <span className="opacity-30">·</span>
              <span>{currentSlide?.badge}</span>
            </div>

            <div className="flex items-center gap-2 font-bold text-[#52525B] dark:text-[#B4B4BE]">
              {currentSlide?.device === 'macbook' ? (
                <Monitor size={14} className="text-[#C4123D] dark:text-[#FD7D3C]" aria-hidden="true" />
              ) : (
                <Smartphone size={14} className="text-[#C4123D] dark:text-[#FD7D3C]" aria-hidden="true" />
              )}
              <span className="hidden sm:inline">
                {currentSlide?.device === 'macbook' ? 'DESKTOP SCREEN' : 'MOBILE FORMAT'}
              </span>
            </div>
          </div>

          {/* CENTER HARDWARE STAGE (Scroll Depth Parallax + Entrance Emergence, Zero Cursor Tracking) */}
          {currentSlide && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.92 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.8, delay: 0.08, ease: STUDIO_CURVE },
                },
              }}
              className="relative z-20 my-auto flex items-center justify-center w-full py-2 sm:py-4"
            >
              <motion.div
                style={{ y: deviceScrollY, scale: deviceScrollScale }}
                className="w-full flex justify-center will-change-transform"
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                  key={currentSlide.id}
                  custom={direction}
                  variants={reduced ? undefined : slideVariants}
                  initial={reduced ? false : 'enter'}
                  animate="center"
                  exit={reduced ? undefined : 'exit'}
                  transition={{
                    duration: 0.48,
                    ease: STUDIO_CURVE,
                  }}
                  className="w-full flex justify-center"
                >
                  {currentSlide.device === 'iphone' ? (
                    /* ====================================================== */
                    /* SLEEK SLIM TALL TITANIUM iPHONE MOCKUP (0deg)          */
                    /* ====================================================== */
                    <Link
                      to={currentSlide.route}
                      aria-label={`${currentSlide.title} — Explore Work`}
                      className="group relative block w-[228px] sm:w-[248px] md:w-[264px] rounded-[42px] p-[4px] bg-gradient-to-b from-[#52525B] via-[#27272A] to-[#111116] dark:from-[#E4E4E7] dark:via-[#71717A] dark:to-[#27272A] dark:ring-1 dark:ring-white/30 shadow-[14px_14px_24px_rgba(17,17,22,0.28),36px_36px_64px_rgba(17,17,22,0.42)] dark:shadow-[18px_18px_28px_rgba(0,0,0,0.92),42px_42px_74px_rgba(0,0,0,0.88)]"
                    >
                      {/* Side Hardware Buttons */}
                      <span
                        aria-hidden="true"
                        className="absolute -left-[3px] top-24 w-[3px] h-8 rounded-l bg-[#52525B] dark:bg-[#D4D4D8]"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute -left-[3px] top-36 w-[3px] h-11 rounded-l bg-[#52525B] dark:bg-[#D4D4D8]"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute -right-[3px] top-28 w-[3px] h-14 rounded-r bg-[#52525B] dark:bg-[#D4D4D8]"
                      />

                      {/* Tall Obsidian Display Bezel */}
                      <div className="relative rounded-[38px] bg-[#09090D] p-2 pt-3 pb-2 border border-white/10 overflow-hidden aspect-[9/17.8] flex flex-col justify-between">
                        {/* Dynamic Island Speaker & Optic Pill */}
                        <div className="mx-auto w-[68px] sm:w-[74px] h-[17px] rounded-full bg-black border border-white/10 flex items-center justify-end px-1.5 relative z-20 shrink-0">
                          <span className="w-2 h-2 rounded-full bg-[#1E293B] border border-white/20" />
                        </div>

                        {/* Inner Screen Feed Container */}
                        <div className="my-auto flex flex-col justify-between flex-1 pt-2.5 pb-1.5 min-h-0">
                          <div className="px-1.5 pb-2 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.18em] text-[#B4B4BE] shrink-0">
                            <span className="text-[#FD7D3C] font-bold">{currentSlide.badge}</span>
                            <span>{currentSlide.year}</span>
                          </div>

                          {/* Clean Uncropped 4:5 Poster Frame with Optical Iris Reveal */}
                          <motion.div
                            initial={
                              reduced
                                ? false
                                : {
                                    clipPath:
                                      direction > 0
                                        ? 'inset(8% 18% 8% 0% round 20px)'
                                        : 'inset(8% 0% 8% 18% round 20px)',
                                    scale: 1.06,
                                  }
                            }
                            animate={{
                              clipPath: 'inset(0% 0% 0% 0% round 16px)',
                              scale: 1,
                            }}
                            transition={{ duration: 0.62, ease: STUDIO_CURVE }}
                            className="rounded-[16px] overflow-hidden bg-[#14141A] border border-white/10 aspect-[4/5] w-full shrink-0"
                          >
                            <img
                              src={currentSlide.src}
                              alt={currentSlide.alt || currentSlide.title}
                              loading="eager"
                              decoding="auto"
                              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                          </motion.div>

                          {/* Crisp Bottom Caption inside Tall Screen */}
                          <div className="px-1.5 pt-2.5 flex items-center justify-between gap-2 shrink-0">
                            <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white truncate">
                              {currentSlide.title}
                            </span>
                            <ArrowUpRight
                              size={12}
                              className="text-[#FD7D3C] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                              aria-hidden="true"
                            />
                          </div>
                        </div>

                        {/* Subtle Home Indicator Bar */}
                        <div
                          aria-hidden="true"
                          className="mx-auto mt-1 w-20 h-1 rounded-full bg-white/35 shrink-0"
                        />

                        {/* Diagonal Glass Highlight */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 pointer-events-none bg-[linear-gradient(125deg,rgba(255,255,255,0.09)_0%,transparent_36%)]"
                        />
                      </div>
                    </Link>
                  ) : (
                    /* ====================================================== */
                    /* SLEEK MACBOOK SCREEN-ONLY DISPLAY MOCKUP (NO KEYBOARD) */
                    /* ====================================================== */
                    <Link
                      to={currentSlide.route}
                      aria-label={`${currentSlide.title} — Open Digital Experience`}
                      className="group relative block w-full max-w-[348px] sm:max-w-[560px] md:max-w-[660px] lg:max-w-[700px]"
                    >
                      {/* Outer Brushed Space Black Aluminum Lid Frame */}
                      <div className="rounded-t-[20px] rounded-b-[12px] p-[4px] bg-gradient-to-b from-[#63636E] via-[#27272F] to-[#111116] dark:from-[#E4E4E7] dark:via-[#71717A] dark:to-[#27272A] dark:ring-1 dark:ring-white/30 shadow-[16px_16px_26px_rgba(17,17,22,0.28),40px_40px_70px_rgba(17,17,22,0.44)] dark:shadow-[20px_20px_30px_rgba(0,0,0,0.92),46px_46px_78px_rgba(0,0,0,0.88)]">
                        {/* Uniform Dark Glass Bezel */}
                        <div className="relative rounded-t-[16px] rounded-b-[9px] bg-[#07070A] p-2 sm:p-3 pt-4 sm:pt-5 border border-white/10 overflow-hidden">
                          {/* Signature MacBook Top Display Notch + Camera Optic */}
                          <div
                            aria-hidden="true"
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-3.5 sm:h-4 rounded-b-lg bg-[#050507] border-x border-b border-white/10 flex items-center justify-center z-20"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1E293B] border border-white/25" />
                          </div>

                          {/* 16:10 Retina Screen Canvas with Optical Shutter Sweep */}
                          <motion.div
                            initial={
                              reduced
                                ? false
                                : {
                                    clipPath:
                                      direction > 0
                                        ? 'inset(6% 22% 6% 0% round 14px)'
                                        : 'inset(6% 0% 6% 22% round 14px)',
                                    scale: 1.04,
                                  }
                            }
                            animate={{
                              clipPath: 'inset(0% 0% 0% 0% round 8px)',
                              scale: 1,
                            }}
                            transition={{ duration: 0.62, ease: STUDIO_CURVE }}
                            className="aspect-[16/10] w-full rounded-[8px] overflow-hidden border border-white/15 bg-[#0D0E12]"
                          >
                            <MacBookWebArtwork
                              variant={currentSlide.webVariant || 'digital-studio'}
                            />
                          </motion.div>

                          {/* Bottom Display Rim Label (No Keyboard) */}
                          <div className="pt-2 px-2 flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-white/60 uppercase tracking-widest">
                            <span className="text-white/90 font-bold truncate">
                              {currentSlide.title}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[#FD7D3C] font-bold shrink-0">
                              <span>OPEN</span>
                              <ArrowUpRight size={12} aria-hidden="true" />
                            </span>
                          </div>

                          {/* Glass Reflection Sheen */}
                          <div
                            aria-hidden="true"
                            className="absolute inset-0 pointer-events-none bg-[linear-gradient(120deg,rgba(255,255,255,0.07)_0%,transparent_40%)]"
                          />
                        </div>
                      </div>
                    </Link>
                  )}
                </motion.div>
              </AnimatePresence>
              </motion.div>
            </motion.div>
          )}

          {/* BOTTOM CORNER ARROWS + SLIDE INDICATOR STRIP */}
          <div className="relative z-30 w-full flex items-center justify-between gap-3 pt-5 sm:pt-7">
            <button
              type="button"
              onClick={() => stepSlide(-1)}
              aria-label="Previous Featured Work"
              className="min-w-[48px] min-h-[48px] inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-full bg-[#111116] dark:bg-white text-white dark:text-[#111116] hover:bg-[#C4123D] hover:text-white dark:hover:bg-[#EA1E4D] dark:hover:text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer active:scale-95"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 rounded-full bg-white/90 dark:bg-[#191922]/90 backdrop-blur-md border border-[#111116]/15 dark:border-white/15 shadow-sm">
              {slides.map((slide, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => jumpToSlide(idx)}
                    aria-label={`Show ${slide.title}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative min-w-[30px] h-7 rounded-full font-mono text-[10px] font-bold transition-colors cursor-pointer px-2.5 flex items-center justify-center ${
                      isActive
                        ? 'text-white'
                        : 'text-[#52525B] dark:text-[#B4B4BE] hover:text-[#111116] dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="featured-slide-pill"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-[#C4123D]"
                      />
                    )}
                    <span className="relative z-10">0{idx + 1}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => stepSlide(1)}
              aria-label="Next Featured Work"
              className="min-w-[48px] min-h-[48px] inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-full bg-[#111116] dark:bg-white text-white dark:text-[#111116] hover:bg-[#C4123D] hover:text-white dark:hover:bg-[#EA1E4D] dark:hover:text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer active:scale-95"
            >
              <span className="hidden sm:inline">Next</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
