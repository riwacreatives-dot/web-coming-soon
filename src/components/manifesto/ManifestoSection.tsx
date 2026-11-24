import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TelemetryCard } from './TelemetryCard';
import { SprintProcess } from './SprintProcess';
import { TextScrubReveal } from '../common/TextScrubReveal';
import { useIsTouchDevice } from '../../hooks/useIsMobile';
import { Eye, Flame, Layers, Network, ArrowUpRight, ShieldCheck, Sparkles, TrendingUp, X, Zap } from 'lucide-react';

interface Pillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
}

const PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'FOUNDER-LED CRAFT',
    tagline: 'Direct Senior Access Always',
    description:
      'We reject the traditional agency model of selling with founders then handing delivery to interns. Abhinav and our senior directors personally lead every poster, render, and campaign.',
    icon: <Eye size={16} className="text-brand-red" />,
  },
  {
    number: '02',
    title: 'PROVOCATIVE ART',
    tagline: 'Work People Actually Remember',
    description:
      'Most commercial ads blend into the noise. We produce high-impact street posters, 3D fluid food styling, and culture-first visuals that make people stop, screenshot, and share.',
    icon: <Flame size={16} className="text-brand-red" />,
  },
  {
    number: '03',
    title: 'FAST, CLEAN FUNNELS',
    tagline: 'Sub-Second Page Speed',
    description:
      'Arresting creative is useless if your landing page takes 4 seconds to load. We engineer lightweight, zero-lag advertorials and headless storefronts that convert curiosity into buyers.',
    icon: <Layers size={16} className="text-brand-red" />,
  },
  {
    number: '04',
    title: 'DISCIPLINED SCALE',
    tagline: 'Real Margin Over Vanity Views',
    description:
      'We track what actually deposits into your bank account. Meta Advantage+, Google Performance Max, and customer retention flows tuned daily for healthy contribution margin.',
    icon: <Network size={16} className="text-brand-red" />,
  },
];

interface ManifestoSectionProps {
  standalone?: boolean;
}

export const ManifestoSection: React.FC<ManifestoSectionProps> = ({ standalone = false }) => {
  const isTouch = useIsTouchDevice();
  const [activeHover, setActiveHover] = useState<'art' | 'math' | null>(null);
  const [mobileTrigger, setMobileTrigger] = useState<'art' | 'math' | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHeadingInView, setIsHeadingInView] = useState(false);
  const [activePillarIdx, setActivePillarIdx] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const pillarsTrackRef = useRef<HTMLDivElement>(null);

  // Mobile-only center-band optical glow on heading scroll
  useEffect(() => {
    if (!isTouch || !headingRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeadingInView(entry.isIntersecting),
      { rootMargin: '-36% 0px -36% 0px', threshold: 0 }
    );
    observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, [isTouch]);

  const handleHoverStart = (type: 'art' | 'math', e: React.MouseEvent) => {
    if (isTouch) return;
    setActiveHover(type);
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleHoverEnd = () => {
    if (isTouch) return;
    setActiveHover(null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouch) return;
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMobileTap = (type: 'art' | 'math') => {
    if (!isTouch) return;
    setMobileTrigger((prev) => (prev === type ? null : type));
  };

  const handlePillarsScroll = () => {
    const track = pillarsTrackRef.current;
    if (!track) return;
    const cardWidth = track.scrollWidth / PILLARS.length;
    if (cardWidth > 0) {
      const idx = Math.min(
        PILLARS.length - 1,
        Math.max(0, Math.round(track.scrollLeft / cardWidth))
      );
      setActivePillarIdx(idx);
    }
  };

  return (
    <section
      id="manifesto"
      className={`relative w-full ${
        standalone
          ? 'pt-24 sm:pt-32 md:pt-36 pb-14 sm:pb-28 md:pb-32'
          : 'py-14 sm:py-28 md:py-32 border-t border-line-border'
      } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
    >
      {/* Floating Telemetry Portal (Desktop Hover) */}
      <AnimatePresence>
        {!isTouch && activeHover && (
          <TelemetryCard
            type={activeHover}
            x={mousePos.x}
            y={mousePos.y}
          />
        )}
      </AnimatePresence>

      {/* Eyebrow Label */}
      <div className="flex items-center gap-2 sm:gap-3 mb-5 md:mb-10 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-text-secondary select-none">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
        <span className="text-text-primary font-semibold">
          {standalone ? '03 / THE RIWA PROTOCOL' : '02 / THE RIWA PROTOCOL MANIFESTO'}
        </span>
        <span className="hidden sm:inline-block text-line-border">|</span>
        <span className="hidden sm:inline-block text-brand-red font-bold">
          {standalone ? 'CRAFT × COMMERCIAL DISCIPLINE' : 'SENIOR FOUNDER DISCIPLINE'}
        </span>
      </div>

      {/* High-Fashion Editorial Typography Pairing: Grotesque + Instrument Serif Italic */}
      <div className="max-w-5xl mb-10 md:mb-28">
        {standalone ? (
          <h1
            ref={headingRef}
            className="font-display text-[clamp(1.75rem,6.2vw,4.75rem)] md:text-[clamp(2rem,7vw,4.75rem)] font-extrabold uppercase tracking-tight text-text-primary leading-[1.12]"
          >
            <span>WE OPERATE AT THE RAZOR-EDGE OF</span>{' '}
            <span
              role={isTouch ? 'button' : undefined}
              tabIndex={isTouch ? 0 : undefined}
              onClick={() => handleMobileTap('art')}
              onMouseEnter={(e) => handleHoverStart('art', e)}
              onMouseLeave={handleHoverEnd}
              onMouseMove={handleMouseMove}
              data-inview={isHeadingInView ? 'true' : 'false'}
              className="mobile-scroll-focus font-serif italic font-normal tracking-normal text-brand-red text-[1.18em] lowercase cursor-pointer underline decoration-brand-red/50 decoration-2 underline-offset-8 hover:brightness-110 transition-colors"
            >
              provocative art
              {isTouch && <sup className="ml-0.5 text-[10px] not-italic font-mono">✦</sup>}
            </span>{' '}
            <span className="text-text-secondary font-light mx-1 md:mx-2">×</span>{' '}
            <span
              role={isTouch ? 'button' : undefined}
              tabIndex={isTouch ? 0 : undefined}
              onClick={() => handleMobileTap('math')}
              onMouseEnter={(e) => handleHoverStart('math', e)}
              onMouseLeave={handleHoverEnd}
              onMouseMove={handleMouseMove}
              data-inview={isHeadingInView ? 'true' : 'false'}
              className="mobile-scroll-focus cursor-pointer text-text-primary underline decoration-line-border hover:decoration-brand-red decoration-2 underline-offset-8 hover:text-brand-red transition-all md:whitespace-nowrap"
            >
              COMMERCIAL SCALE
              {isTouch && <sup className="ml-0.5 text-[10px] text-brand-red font-mono">✦</sup>}
            </span>
            <span className="text-brand-red font-black">.</span>
          </h1>
        ) : (
          <h2
            ref={headingRef}
            className="font-display text-[clamp(1.5rem,5.8vw,4.5rem)] md:text-[clamp(1.85rem,6.8vw,4.5rem)] font-extrabold uppercase tracking-tight text-text-primary leading-[1.12]"
          >
            <span>WE OPERATE AT THE INTERSECTION OF</span>{' '}
            <span
              role={isTouch ? 'button' : undefined}
              tabIndex={isTouch ? 0 : undefined}
              onClick={() => handleMobileTap('art')}
              onMouseEnter={(e) => handleHoverStart('art', e)}
              onMouseLeave={handleHoverEnd}
              onMouseMove={handleMouseMove}
              data-inview={isHeadingInView ? 'true' : 'false'}
              className="mobile-scroll-focus font-serif italic font-normal tracking-normal text-brand-red text-[1.18em] lowercase cursor-pointer underline decoration-brand-red/50 decoration-2 underline-offset-8 hover:brightness-110 transition-colors"
            >
              provocative art
              {isTouch && <sup className="ml-0.5 text-[10px] not-italic font-mono">✦</sup>}
            </span>{' '}
            <span className="text-text-secondary font-light mx-1 md:mx-2">×</span>{' '}
            <span
              role={isTouch ? 'button' : undefined}
              tabIndex={isTouch ? 0 : undefined}
              onClick={() => handleMobileTap('math')}
              onMouseEnter={(e) => handleHoverStart('math', e)}
              onMouseLeave={handleHoverEnd}
              onMouseMove={handleMouseMove}
              data-inview={isHeadingInView ? 'true' : 'false'}
              className="mobile-scroll-focus cursor-pointer text-text-primary underline decoration-line-border hover:decoration-brand-red decoration-2 underline-offset-8 hover:text-brand-red transition-all md:whitespace-nowrap"
            >
              COMMERCIAL SCALE
              {isTouch && <sup className="ml-0.5 text-[10px] text-brand-red font-mono">✦</sup>}
            </span>
            <span className="text-brand-red font-black">.</span>
          </h2>
        )}

        {/* Mobile Tap-to-Peek Inline Telemetry Card (< md / touch) */}
        <AnimatePresence>
          {isTouch && mobileTrigger && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="relative rounded-2xl border border-brand-red/35 bg-[#0A0C10] p-4 text-white font-mono text-xs shadow-2xl">
                <button
                  type="button"
                  onClick={() => setMobileTrigger(null)}
                  aria-label="Close Preview"
                  className="absolute top-3 right-3 min-w-[32px] min-h-[32px] rounded-full bg-white/10 text-white/80 flex items-center justify-center touch-manipulation"
                >
                  <X size={14} />
                </button>

                {mobileTrigger === 'art' ? (
                  <div className="flex items-center gap-3.5 pr-8">
                    <img
                      src="/work/solanas-chilli-chicken.jpg"
                      alt="Hotter Than Baddies"
                      className="w-16 h-20 rounded-lg object-cover border border-white/15 shrink-0"
                    />
                    <div className="space-y-1 min-w-0">
                      <span className="flex items-center gap-1 text-brand-red font-bold uppercase text-[10px]">
                        <Sparkles size={11} /> Provocative Ad Direction
                      </span>
                      <span className="font-display font-bold text-sm uppercase block text-white">
                        +420% Weekend Orders
                      </span>
                      <p className="text-[11px] text-white/70 leading-snug">
                        Museum-grade commercial ad art stopping the scroll dead.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2.5 pr-6">
                    <span className="flex items-center gap-1.5 text-brand-red font-bold uppercase text-[10px]">
                      <Zap size={11} /> Commercial Media Performance · LIVE
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2 rounded bg-white/5 border border-white/10">
                        <span className="text-[9px] text-white/50 block">ROAS</span>
                        <span className="font-bold text-emerald-400 flex items-center gap-0.5 text-xs">
                          <TrendingUp size={11} /> 5.4x
                        </span>
                      </div>
                      <div className="p-2 rounded bg-white/5 border border-white/10">
                        <span className="text-[9px] text-white/50 block">CAPI</span>
                        <span className="font-bold text-white flex items-center gap-0.5 text-xs">
                          <ShieldCheck size={11} className="text-brand-red" /> 99.4%
                        </span>
                      </div>
                      <div className="p-2 rounded bg-white/5 border border-white/10">
                        <span className="text-[9px] text-white/50 block">CAC</span>
                        <span className="font-bold text-brand-red text-xs">-34%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-5 md:mt-8 max-w-3xl font-mono text-[13px] sm:text-base text-text-secondary leading-relaxed space-y-3">
          <TextScrubReveal
            text="Traditional marketing agencies win accounts with charming founders, then delegate the execution to junior interns who have never shipped a campaign. The RIWA Protocol is our uncompromising antidote to that broken model."
            accentWords={['RIWA', 'Protocol', 'antidote']}
          />
          <TextScrubReveal
            text="Every commercial poster, 3D fluid simulation, and Meta Advantage+ algorithm rule is architected and executed directly by senior partners who have scaled ₹400 Cr+ in verified client revenue. No junior handoffs. No bloated slide decks. Pure creative impact."
            accentWords={['senior', 'partners', '₹400', 'Cr+', 'creative', 'impact']}
          />
        </div>
      </div>

      {/* Horizontal Snap Deck on Mobile (< 768px) / Hairline Grid on Desktop (>= 768px) */}
      <div
        ref={pillarsTrackRef}
        onScroll={handlePillarsScroll}
        className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-visible mobile-snap-track no-scrollbar gap-3 md:gap-0 px-1 md:px-0 pb-2 md:pb-0 md:border-t md:border-l border-line-border"
      >
        {PILLARS.map((p, idx) => (
          <motion.div
            key={p.number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '100px 0px 0px 0px', amount: 0.05 }}
            transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            data-cursor-text="EXPLORE"
            className="w-[84vw] max-w-[330px] md:w-auto md:max-w-none shrink-0 snap-center md:snap-align-none rounded-2xl md:rounded-none border md:border-0 md:border-r md:border-b border-line-border bg-surface/40 md:bg-transparent group relative flex flex-col justify-between p-5 sm:p-8 hover:bg-surface/30 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs sm:text-sm font-semibold text-text-secondary group-hover:text-brand-red transition-colors">
                  // 0{idx + 1}
                </span>
                <div className="text-text-secondary group-hover:text-brand-red group-hover:rotate-45 transition-all duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-text-primary tracking-tight mb-2 group-hover:text-brand-red transition-colors">
                {p.title}
              </h3>

              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-brand-red font-medium block mb-4">
                {p.tagline}<span className="text-brand-red font-bold">.</span>
              </span>

              <p className="font-mono text-xs sm:text-sm text-text-secondary leading-relaxed">
                {p.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-line-border/60 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-text-secondary">
              <span>Standard 0{p.number}</span>
              <span className="text-brand-red font-bold">VERIFIED ✦</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile-Only Protocol Carousel Indicator (< 768px) */}
      <div className="md:hidden flex items-center justify-between gap-4 mt-3 px-1 font-mono text-[10px] uppercase tracking-wider text-text-secondary">
        <span>
          <span className="text-brand-red font-bold">0{activePillarIdx + 1}</span> / 0{PILLARS.length} · Swipe Pillars ⇄
        </span>
        <div className="flex items-center gap-1.5">
          {PILLARS.map((pillar, idx) => (
            <span
              key={pillar.number}
              className={`h-1 rounded-full transition-all duration-300 ${
                activePillarIdx === idx ? 'w-6 bg-brand-red' : 'w-2 bg-line-border'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Real 14-Day Sprint Process & Deliverables */}
      <SprintProcess />
    </section>
  );
};
