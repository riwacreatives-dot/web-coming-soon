import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const DIGITAL_CAPABILITIES = [
  ['Custom websites', 'UI/UX design'],
  ['Digital products', 'Interactive experiences'],
  ['Component libraries', 'Campaign microsites'],
  ['Responsive front-end builds', 'Technical SEO setup'],
  ['Event ticketing hubs', 'Performance architecture'],
];

const ARCHITECTURE_NODES = [
  {
    step: '01 // ATTENTION HOOK',
    tag: 'ENTRY SPEED',
    title: 'Immediate Above-the-Fold Clarity',
    detail: 'Fast initial renders, semantic HTML hierarchy, and zero bloated page-builder wrappers so visitors understand the offer instantly.',
  },
  {
    step: '02 // DIGITAL EXPERIENCE',
    tag: 'RESPONSIVE UX',
    title: 'Desktop & Thumb-First Adaptation',
    detail: 'Layouts engineered cleanly for both wide editorial screens and 390px mobile viewports with accessible keyboard and reduced-motion support.',
  },
  {
    step: '03 // CONVERSION FLOW',
    tag: 'ACTION READY',
    title: 'Frictionless Enquiry & Launch Paths',
    detail: 'Clear interactive pathways connecting storytelling directly into tailored project briefs, registrations, or direct studio contact.',
  },
];

type LabTabId = 'interface' | 'interaction' | 'architecture';

interface TheWorldProps {
  embedded?: boolean;
}

export const TheWorld: React.FC<TheWorldProps> = ({ embedded = false }) => {
  const reduced = useReducedMotion();

  const [activeTab, setActiveTab] = useState<LabTabId>('interface');
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [previewDark, setPreviewDark] = useState(true);
  const [mockTested, setMockTested] = useState(false);
  const [activeBtnStyle, setActiveBtnStyle] = useState<'solid' | 'hairline' | 'orange'>('solid');
  const [sliderValue, setSliderValue] = useState(65);
  const [activeNodeIdx, setActiveNodeIdx] = useState(0);

  return (
    <section
      id="digital-technology-showcase"
      className="relative w-full bg-[#E7E7E9] dark:bg-[#111116] text-[#111116] dark:text-white overflow-hidden transition-colors"
    >
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

      <div className="relative z-10 max-w-7xl mx-auto py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12">
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="w-2.5 h-2.5 rounded-full border-2 border-[#EA1E4D] inline-block" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#C4123D] dark:text-[#FD7D3C] font-bold">
            03 — DIGITAL &amp; TECHNOLOGY
          </span>
        </div>

        <h2 className="font-display text-[clamp(2.2rem,6vw,4.8rem)] font-extrabold uppercase tracking-tighter text-[#111116] dark:text-white leading-[0.92] mb-12 sm:mb-16 max-w-4xl">
          <span className="block">YOUR BRAND LIVES</span>
          <span className="block font-serif italic font-normal tracking-tight text-[#EA1E4D] text-[1.06em] lowercase mt-1">
            in the browser now.
          </span>
        </h2>

        {/* Two-Column: Capability Matrix + Interactive Digital Studio Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 5 Cols: Capability Matrix + Architecture Note */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#52525B] dark:text-[#B4B4BE] font-bold block mb-4">
                DIGITAL &amp; TECHNOLOGY CAPABILITY MATRIX
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
                    <span className="font-mono text-xs sm:text-sm text-[#52525B] dark:text-[#B4B4BE]">
                      {right}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 border border-[#111116]/15 dark:border-white/15 bg-white/70 dark:bg-[#181820] space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#C4123D] dark:text-[#FD7D3C] font-bold block">
                ZERO PAGE-BUILDER BLOAT
              </span>
              <p className="font-sans text-sm text-[#3F3F46] dark:text-white/80 leading-relaxed">
                This very website runs custom React 19, TypeScript, Tailwind CSS, and responsive motion crafted cleanly in-house—engineered to adapt cleanly across desktop and mobile viewports.
              </p>
              {!embedded && (
                <div className="flex flex-wrap gap-4 pt-1 font-mono text-xs font-bold">
                  <Link
                    to="/services/digital-technology"
                    className="inline-flex items-center gap-1 text-[#C4123D] dark:text-[#FD7D3C] hover:underline uppercase"
                  >
                    <span>Digital &amp; Tech Scope</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </Link>
                  <Link
                    to="/contact?service=digital-technology"
                    className="inline-flex items-center gap-1 text-[#111116] dark:text-white hover:text-[#C4123D] uppercase"
                  >
                    <span>Start a Build</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right 7 Cols: Interactive Digital Studio Sandbox */}
          <div className="lg:col-span-7 bg-[#111116] dark:bg-[#17171E] text-white border border-[#111116] dark:border-white/15 overflow-hidden shadow-xl">
            <div className="px-4 sm:px-5 py-3.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-widest">
              <span className="text-[#FD7D3C] font-bold flex items-center gap-2">
                ⌖ LIVE DIGITAL STUDIO SANDBOX
              </span>
              <span className="text-[#B4B4BE]">CLICK CONTROLS TO TEST</span>
            </div>

            {/* 3 Mode Switcher Tabs */}
            <div className="grid grid-cols-3 border-b border-white/10 bg-[#0B0B0F]">
              {[
                { id: 'interface' as const, label: '01 // INTERFACE DEMO' },
                { id: 'interaction' as const, label: '02 // COMPONENT LAB' },
                { id: 'architecture' as const, label: '03 // ARCHITECTURE' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`min-h-[44px] py-3 px-2 sm:px-4 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border-r last:border-r-0 border-white/10 transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#C4123D] text-white'
                      : 'text-[#B4B4BE] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

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
                    {/* Browser Toolbar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10 font-mono text-[10px]">
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setViewportMode('desktop')}
                          className={`min-h-[36px] inline-flex items-center gap-1.5 px-2.5 py-1 border cursor-pointer transition-colors ${
                            viewportMode === 'desktop'
                              ? 'border-[#FD7D3C] text-[#FD7D3C] bg-[#FD7D3C]/10 font-bold'
                              : 'border-white/20 text-[#B4B4BE] hover:text-white'
                          }`}
                        >
                          <span>DESKTOP</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setViewportMode('mobile')}
                          className={`min-h-[36px] inline-flex items-center gap-1.5 px-2.5 py-1 border cursor-pointer transition-colors ${
                            viewportMode === 'mobile'
                              ? 'border-[#FD7D3C] text-[#FD7D3C] bg-[#FD7D3C]/10 font-bold'
                              : 'border-white/20 text-[#B4B4BE] hover:text-white'
                          }`}
                        >
                          <span>MOBILE (390PX)</span>
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => setPreviewDark((d) => !d)}
                        className="min-h-[36px] inline-flex items-center gap-1.5 px-2.5 py-1 border border-white/20 text-white/85 hover:border-white/40 cursor-pointer"
                      >
                        {previewDark ? <Sun size={11} className="text-[#FD7D3C]" /> : <Moon size={11} />}
                        <span>{previewDark ? 'LIGHT SURFACE' : 'DARK SURFACE'}</span>
                      </button>
                    </div>

                    {/* Live Mini Website Instance */}
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
                        <div className="px-4 py-2.5 border-b border-current/15 flex items-center justify-between font-mono text-[9px] uppercase tracking-wider">
                          <span className="font-bold">RIWA // DIGITAL SPEC</span>
                          <span className="text-[#FD7D3C] font-bold">
                            {viewportMode === 'mobile' ? '390PX' : '1280PX'}
                          </span>
                        </div>

                        <div className={`p-4 grid gap-4 items-center ${viewportMode === 'mobile' ? 'grid-cols-1' : 'grid-cols-12'}`}>
                          <div className={viewportMode === 'mobile' ? '' : 'col-span-7'}>
                            <span className={`font-mono text-[9px] font-bold uppercase tracking-widest block mb-1 ${previewDark ? 'text-[#FD7D3C]' : 'text-[#C4123D]'}`}>
                              RESPONSIVE INTERFACE
                            </span>
                            <h3 className="font-display text-lg font-extrabold uppercase tracking-tight leading-none mb-2">
                              DESIGNED FOR REAL INTERACTION.
                            </h3>
                            <p className="font-sans text-[11px] opacity-80 leading-snug mb-3">
                              Interactive UI architecture connecting visual identity cleanly to working digital flows.
                            </p>
                            <button
                              type="button"
                              onClick={() => setMockTested((r) => !r)}
                              className={`min-h-[36px] px-3.5 py-2 font-mono text-[9px] font-bold uppercase tracking-wider cursor-pointer transition-all ${
                                mockTested
                                  ? 'bg-[#FD7D3C] text-[#111116]'
                                  : 'bg-[#C4123D] text-white hover:bg-[#EA1E4D]'
                              }`}
                            >
                              {mockTested ? '✓ INTERACTION TESTED (RESET)' : 'TEST LIVE INTERACTION →'}
                            </button>
                          </div>

                          {/* Honest Architectural Wireframe Preview (Zero unapproved photography) */}
                          <div className={viewportMode === 'mobile' ? '' : 'col-span-5'}>
                            <div className="aspect-[4/3] border border-current/20 bg-[#0D0E12] text-white p-3 flex flex-col justify-between">
                              <div className="flex items-center justify-between font-mono text-[8px] text-[#B4B4BE]">
                                <span>SYSTEM // UI</span>
                                <span className="text-[#FD7D3C]">LIVE</span>
                              </div>
                              <div className="space-y-1.5">
                                <div className="h-4 border border-[#EA1E4D]/60 bg-[#EA1E4D]/15" />
                                <div className="grid grid-cols-2 gap-1.5">
                                  <div className="h-7 border border-white/15 bg-white/5" />
                                  <div className="h-7 border border-white/15 bg-white/5" />
                                </div>
                              </div>
                              <div className="font-mono text-[8px] text-white/55">REACT · TS · TAILWIND</div>
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
                    <p className="font-mono text-xs text-white/80">
                      Test interactive component states built with accessibility &amp; motion discipline:
                    </p>

                    <div className="p-5 bg-[#09090D] border border-white/10 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px]">
                        <span className="text-[#B4B4BE] uppercase">INTERACTIVE BUTTON SYSTEM</span>
                        <div className="flex gap-1.5">
                          {(['solid', 'hairline', 'orange'] as const).map((style) => (
                            <button
                              key={style}
                              type="button"
                              onClick={() => setActiveBtnStyle(style)}
                              className={`min-h-[32px] px-2.5 py-1 uppercase border cursor-pointer ${
                                activeBtnStyle === style
                                  ? 'border-white text-white bg-white/15 font-bold'
                                  : 'border-white/20 text-[#B4B4BE]'
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
                          className={`min-h-[44px] px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                            activeBtnStyle === 'solid'
                              ? 'rounded-full bg-[#C4123D] text-white'
                              : activeBtnStyle === 'hairline'
                                ? 'border border-white text-white hover:bg-white hover:text-[#111116]'
                                : 'bg-[#FD7D3C] text-[#111116] shadow-[4px_4px_0px_#FFFFFF]'
                          }`}
                        >
                          CLICK TO CYCLE STATE ↗
                        </motion.button>
                      </div>
                    </div>

                    <div className="p-5 bg-[#09090D] border border-white/10 space-y-3">
                      <div className="flex items-center justify-between font-mono text-[10px] uppercase">
                        <span className="text-[#B4B4BE]">LAYOUT PROPORTION SCRUBBER</span>
                        <span className="text-[#FD7D3C] font-bold">{sliderValue}% GRID SPLIT</span>
                      </div>
                      <input
                        type="range"
                        min={15}
                        max={100}
                        value={sliderValue}
                        aria-label="Interactive proportion scrubber"
                        onChange={(e) => setSliderValue(Number(e.target.value))}
                        className="w-full accent-[#FD7D3C] cursor-pointer"
                      />
                      <div className="h-3 bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#C4123D] to-[#FD7D3C] transition-all duration-150"
                          style={{ width: `${sliderValue}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'architecture' && (
                  <motion.div
                    key="tab-architecture"
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <p className="font-mono text-xs text-white/80">
                      Inspect how brand clarity, interface design, and front-end engineering align:
                    </p>

                    <div className="space-y-2.5">
                      {ARCHITECTURE_NODES.map((node, i) => {
                        const isOpen = activeNodeIdx === i;
                        return (
                          <button
                            key={node.step}
                            type="button"
                            onClick={() => setActiveNodeIdx(i)}
                            className={`w-full text-left p-4 border transition-colors cursor-pointer ${
                              isOpen
                                ? 'border-[#FD7D3C] bg-[#09090D]'
                                : 'border-white/15 bg-[#0D0E12] hover:border-white/35'
                            }`}
                          >
                            <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                              <span className="text-[#FD7D3C] font-bold">{node.step}</span>
                              <span className="text-[#B4B4BE]">{node.tag}</span>
                            </div>
                            <p className="font-display text-base font-extrabold uppercase text-white mb-1">
                              {node.title}
                            </p>
                            {isOpen && (
                              <p className="font-sans text-xs text-white/80 leading-relaxed pt-1">
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
          </div>
        </div>
      </div>
    </section>
  );
};
