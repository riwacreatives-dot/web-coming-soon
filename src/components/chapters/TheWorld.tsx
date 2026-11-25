import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { ArrowUpRight, Sparkles, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { SparkElement } from '../common/SparkElement';
import { ProcessSection } from '../home/ProcessSection';

const DIGITAL_CAPABILITIES = [
  ['Digital strategy', 'Growth marketing'],
  ['Website design & dev', 'Performance ad creative'],
  ['UX & interface architecture', 'Social & content systems'],
  ['E-commerce storefronts', 'Funnel & conversion flows'],
  ['Event & ticketing portals', 'Analytics & iteration'],
];

const FUNNEL_NODES = [
  {
    step: '01 // ATTENTION HOOK',
    metric: '6.2% CTR',
    title: 'Scroll-Stopping Campaign Creative',
    detail: 'Visual-first Meta ads, street key visuals, and platform-native copy engineered to earn clicks instead of getting scrolled past.',
  },
  {
    step: '02 // DIGITAL EXPERIENCE',
    metric: '+340% INBOUNDS',
    title: 'Fast Purpose-Built Web Flow',
    detail: 'Clean responsive destinations with zero bloat so mobile visitors reach booking or ordering actions in seconds.',
  },
  {
    step: '03 // VERIFIED ACTION',
    metric: '+420% ORDERS',
    title: 'Compounding Commercial Demand',
    detail: 'Measured weekly on Solanas Chinese • Thai—connecting sharp creative direction directly to weekend orders.',
  },
];

type LabTabId = 'interface' | 'interaction' | 'funnel';

export const TheWorld: React.FC = () => {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Section-local Spark coordinate reticle (zero re-renders on pointer move)
  const reticleX = useMotionValue(-120);
  const reticleY = useMotionValue(-120);
  const [reticleActive, setReticleActive] = useState(false);

  // Interactive Sandbox states
  const [activeTab, setActiveTab] = useState<LabTabId>('interface');
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [previewDark, setPreviewDark] = useState(true);
  const [mockReserved, setMockReserved] = useState(false);
  const [activeBtnStyle, setActiveBtnStyle] = useState<'solid' | 'hairline' | 'orange'>('solid');
  const [sliderValue, setSliderValue] = useState(65);
  const [activeFunnelIdx, setActiveFunnelIdx] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduced || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    reticleX.set(e.clientX - rect.left - 14);
    reticleY.set(e.clientY - rect.top - 14);
    if (!reticleActive) setReticleActive(true);
  };

  const handleMouseLeave = () => {
    setReticleActive(false);
  };

  return (
    <section
      id="chapter-world"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-[#E7E7E9] dark:bg-[#111116] text-[#111116] dark:text-white overflow-hidden transition-colors"
    >
      {/* THE SPARK — Ch04 Functional Section-Local UI Reticle (Desktop Fine Pointer) */}
      {!reduced && reticleActive && (
        <motion.div
          aria-hidden="true"
          style={{ x: reticleX, y: reticleY }}
          className="hidden lg:block absolute top-0 left-0 pointer-events-none z-30"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="9" stroke="#EA1E4D" strokeWidth="1" opacity="0.65" />
            <line x1="14" y1="0" x2="14" y2="7" stroke="#EA1E4D" strokeWidth="1.2" />
            <line x1="14" y1="21" x2="14" y2="28" stroke="#EA1E4D" strokeWidth="1.2" />
            <line x1="0" y1="14" x2="7" y2="14" stroke="#EA1E4D" strokeWidth="1.2" />
            <line x1="21" y1="14" x2="28" y2="14" stroke="#EA1E4D" strokeWidth="1.2" />
          </svg>
        </motion.div>
      )}

      {/* Subtle Ruled Blueprint Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#111116 1px, transparent 1px), linear-gradient(90deg, #111116 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto pt-20 sm:pt-28 md:pt-36 px-4 sm:px-8 md:px-12">

        {/* Chapter Label with THE SPARK Crosshair ⌖ */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-3 mb-10 sm:mb-14"
        >
          <SparkElement chapter={3} size={20} />
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#EA1E4D] font-bold">
            04 — DIGITAL, TECHNOLOGY &amp; GROWTH
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.4rem,6.5vw,5.2rem)] font-black uppercase tracking-tighter text-[#111116] dark:text-white leading-[0.92] mb-12 sm:mb-16 max-w-4xl"
        >
          <span className="block">YOUR BRAND LIVES</span>
          <span className="block font-serif italic font-normal tracking-tight text-[#EA1E4D] text-[1.06em] lowercase mt-1">
            in the browser now.
          </span>
        </motion.h2>

        {/* Two-Column: Capability Matrix + Real Interactive Digital Experience Lab */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pb-16 sm:pb-20">

          {/* Left 5 Cols: Capability Matrix + Deep-Dive Link */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#52525B] dark:text-white/50 font-bold block mb-4">
                DIGITAL &amp; GROWTH CAPABILITY MATRIX
              </span>
              <div className="border-t border-[#111116]/15 dark:border-white/15">
                {DIGITAL_CAPABILITIES.map(([left, right]) => (
                  <div
                    key={left}
                    className="grid grid-cols-2 gap-4 py-3.5 border-b border-[#111116]/15 dark:border-white/10"
                  >
                    <span className="font-mono text-xs sm:text-sm text-[#111116] dark:text-white/90 font-medium">
                      {left}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-[#52525B] dark:text-white/55">
                      {right}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 border border-[#111116]/15 dark:border-white/15 bg-white/60 dark:bg-[#181820] space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#EA1E4D] font-bold block">
                ZERO PAGE-BUILDER BLOAT
              </span>
              <p className="font-sans text-sm text-[#3F3F46] dark:text-white/75 leading-relaxed">
                This very website runs custom React, TypeScript, Tailwind, and hardware-accelerated motion crafted cleanly in-house—designed to adapt independently for desktop and thumb navigation.
              </p>
              <div className="flex flex-wrap gap-4 pt-1 font-mono text-xs font-bold">
                <Link to="/services/technology-experiences" className="inline-flex items-center gap-1 text-[#EA1E4D] hover:underline uppercase">
                  <span>Technology Scope</span>
                  <ArrowUpRight size={13} />
                </Link>
                <Link to="/services/digital-growth" className="inline-flex items-center gap-1 text-[#111116] dark:text-white hover:text-[#EA1E4D] uppercase">
                  <span>Growth Scope</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Interactive Digital Studio Sandbox (Visitors test real UI) */}
          <div className="lg:col-span-7 bg-[#111116] dark:bg-[#17171E] text-white border border-[#111116] dark:border-white/15 overflow-hidden shadow-xl">
            {/* Sandbox Header Bar */}
            <div className="px-4 sm:px-5 py-3.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-widest">
              <span className="text-[#FD7D3C] font-bold flex items-center gap-2">
                ⌖ LIVE DIGITAL STUDIO SANDBOX
              </span>
              <span className="text-white/45">CLICK CONTROLS TO TEST</span>
            </div>

            {/* 3 Mode Switcher Tabs */}
            <div className="grid grid-cols-3 border-b border-white/10 bg-[#0B0B0F]">
              {[
                { id: 'interface' as const, label: '01 // INTERFACE DEMO' },
                { id: 'interaction' as const, label: '02 // COMPONENT LAB' },
                { id: 'funnel' as const, label: '03 // GROWTH FLOW' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-2 sm:px-4 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border-r last:border-r-0 border-white/10 transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#EA1E4D] text-white'
                      : 'text-white/55 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Active Interactive Sandbox Panel */}
            <div className="p-4 sm:p-6 min-h-[340px]">
              <AnimatePresence mode="wait">
                {activeTab === 'interface' && (
                  <motion.div
                    key="tab-interface"
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {/* Browser Toolbar with Responsive & Theme Switchers */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10 font-mono text-[10px]">
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setViewportMode('desktop')}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 border cursor-pointer transition-colors ${
                            viewportMode === 'desktop'
                              ? 'border-[#FD7D3C] text-[#FD7D3C] bg-[#FD7D3C]/10 font-bold'
                              : 'border-white/15 text-white/55 hover:text-white'
                          }`}
                        >
                          <span>DESKTOP</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setViewportMode('mobile')}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 border cursor-pointer transition-colors ${
                            viewportMode === 'mobile'
                              ? 'border-[#FD7D3C] text-[#FD7D3C] bg-[#FD7D3C]/10 font-bold'
                              : 'border-white/15 text-white/55 hover:text-white'
                          }`}
                        >
                          <span>MOBILE (390PX)</span>
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => setPreviewDark((d) => !d)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-white/15 text-white/75 hover:border-white/40 cursor-pointer"
                      >
                        {previewDark ? <Sun size={11} className="text-[#FD7D3C]" /> : <Moon size={11} />}
                        <span>{previewDark ? 'LIGHT SURFACE' : 'DARK SURFACE'}</span>
                      </button>
                    </div>

                    {/* Live Mini Website Instance Inside Frame */}
                    <div className="flex justify-center bg-[#09090D] p-3 border border-white/10">
                      <motion.div
                        layout={!reduced}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className={`overflow-hidden border transition-colors ${
                          viewportMode === 'mobile' ? 'w-[260px]' : 'w-full'
                        } ${
                          previewDark
                            ? 'bg-[#111116] text-white border-white/15'
                            : 'bg-[#F5F4F0] text-[#111116] border-[#111116]/20'
                        }`}
                      >
                        {/* Mini Top Bar */}
                        <div className="px-4 py-2.5 border-b border-current/10 flex items-center justify-between font-mono text-[9px] uppercase tracking-wider">
                          <span className="font-bold">SOLANAS // EXPERIENCE</span>
                          <span className="text-[#EA1E4D] font-bold">
                            {viewportMode === 'mobile' ? '390PX' : '1280PX'}
                          </span>
                        </div>

                        {/* Mini Site Content */}
                        <div className={`p-4 grid gap-4 items-center ${viewportMode === 'mobile' ? 'grid-cols-1' : 'grid-cols-12'}`}>
                          <div className={viewportMode === 'mobile' ? '' : 'col-span-7'}>
                            <span className="font-mono text-[8px] text-[#EA1E4D] font-bold uppercase tracking-widest block mb-1">
                              NIGHTLY TABLE DROP
                            </span>
                            <h4 className="font-display text-lg font-black uppercase tracking-tight leading-none mb-2">
                              HOTTER THAN ORDINARY DINING.
                            </h4>
                            <p className="font-sans text-[11px] opacity-75 leading-snug mb-3">
                              Interactive ordering funnel connecting key visuals straight to bookings.
                            </p>
                            <button
                              type="button"
                              onClick={() => setMockReserved((r) => !r)}
                              className={`px-3.5 py-2 font-mono text-[9px] font-bold uppercase tracking-wider cursor-pointer transition-all ${
                                mockReserved
                                  ? 'bg-emerald-500 text-[#07080B]'
                                  : 'bg-[#EA1E4D] text-white hover:brightness-110'
                              }`}
                            >
                              {mockReserved ? '✓ TABLE ACTION TESTED (RESET)' : 'TEST LIVE INTERACTION →'}
                            </button>
                          </div>

                          <div className={viewportMode === 'mobile' ? '' : 'col-span-5'}>
                            <div className="aspect-[4/3] overflow-hidden border border-current/15 bg-black">
                              <img
                                src="/work/solanas-sushi.png"
                                alt="Solanas Interactive Web Preview"
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'interaction' && (
                  <motion.div
                    key="tab-interaction"
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-5"
                  >
                    <p className="font-mono text-xs text-white/70">
                      Test interactive component states built with accessibility &amp; motion discipline:
                    </p>

                    {/* CTA Variant Tester */}
                    <div className="p-5 bg-[#09090D] border border-white/10 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px]">
                        <span className="text-white/50 uppercase">INTERACTIVE BUTTON SYSTEM</span>
                        <div className="flex gap-1.5">
                          {(['solid', 'hairline', 'orange'] as const).map((style) => (
                            <button
                              key={style}
                              type="button"
                              onClick={() => setActiveBtnStyle(style)}
                              className={`px-2.5 py-1 uppercase border cursor-pointer ${
                                activeBtnStyle === style
                                  ? 'border-white text-white bg-white/15 font-bold'
                                  : 'border-white/15 text-white/50'
                              }`}
                            >
                              {style}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="py-3 flex items-center justify-center">
                        <motion.button
                          type="button"
                          whileHover={reduced ? undefined : { scale: 1.04 }}
                          whileTap={reduced ? undefined : { scale: 0.96 }}
                          onClick={() =>
                            setActiveBtnStyle((prev) =>
                              prev === 'solid' ? 'hairline' : prev === 'hairline' ? 'orange' : 'solid'
                            )
                          }
                          className={`px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                            activeBtnStyle === 'solid'
                              ? 'rounded-full bg-[#EA1E4D] text-white'
                              : activeBtnStyle === 'hairline'
                                ? 'border border-white text-white hover:bg-white hover:text-[#111116]'
                                : 'bg-[#FD7D3C] text-[#111116] shadow-[4px_4px_0px_#FFFFFF]'
                          }`}
                        >
                          CLICK TO CYCLE STATE ↗
                        </motion.button>
                      </div>
                    </div>

                    {/* Tactile Motion Tension Scrubber */}
                    <div className="p-5 bg-[#09090D] border border-white/10 space-y-3">
                      <div className="flex items-center justify-between font-mono text-[10px] uppercase">
                        <span className="text-white/55">KINETIC WIDTH SCRUBBER</span>
                        <span className="text-[#FD7D3C] font-bold">{sliderValue}% ALLOCATION</span>
                      </div>
                      <input
                        type="range"
                        min={15}
                        max={100}
                        value={sliderValue}
                        aria-label="Interactive proportion scrubber"
                        onChange={(e) => setSliderValue(Number(e.target.value))}
                        className="w-full accent-[#EA1E4D] cursor-pointer"
                      />
                      <div className="h-3 bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#EA1E4D] to-[#FD7D3C] transition-all duration-150"
                          style={{ width: `${sliderValue}%` }}
                        />
                      </div>
                      <div className="font-mono text-[9px] text-white/45 flex justify-between pt-1">
                        <span>REDUCED-MOTION HOOK: {reduced ? 'ACTIVE' : 'STANDARD'}</span>
                        <span>REACT + TAILWIND + MOTION</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'funnel' && (
                  <motion.div
                    key="tab-funnel"
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <p className="font-mono text-xs text-white/70">
                      Anchored in verified Solanas performance metrics (inspect each node):
                    </p>

                    <div className="space-y-2.5">
                      {FUNNEL_NODES.map((node, idx) => {
                        const isSelected = activeFunnelIdx === idx;
                        return (
                          <button
                            key={node.step}
                            type="button"
                            onClick={() => setActiveFunnelIdx(idx)}
                            className={`w-full text-left p-4 border transition-all cursor-pointer ${
                              isSelected
                                ? 'border-[#EA1E4D] bg-[#EA1E4D]/15'
                                : 'border-white/15 bg-[#09090D] hover:border-white/35'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-1 font-mono text-[10px]">
                              <span className="text-white/60 font-bold">{node.step}</span>
                              <span className="text-[#FD7D3C] font-black">{node.metric}</span>
                            </div>
                            <p className="font-display text-base font-black uppercase text-white mb-1">
                              {node.title}
                            </p>
                            {isSelected && (
                              <p className="font-sans text-xs text-white/75 leading-relaxed pt-1">
                                {node.detail}
                              </p>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="border-t border-white/10 px-5 py-3 flex items-center justify-between font-mono text-[9px] text-white/45 uppercase tracking-widest">
              <span className="flex items-center gap-1.5">
                <Sparkles size={11} className="text-[#FD7D3C]" />
                LIVE ENGINEERING BY RIWA
              </span>
              <span>NO TEMPLATES USED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded 5-Stage Delivery Process — Unified cleanly inside Chapter 04 */}
      <ProcessSection embedded />
    </section>
  );
};
