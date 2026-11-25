import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Copy, LayoutGrid, Palette, ShieldCheck, Type } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { SparkElement } from '../common/SparkElement';

const BRAND_OPINIONS = [
  {
    quote: 'A brand is not what you say you are.',
    sub: 'It is what people repeat about you when you leave the room.',
  },
  {
    quote: "We don't decorate businesses.",
    sub: 'We build coherent visual and verbal belief systems.',
  },
  {
    quote: 'Strategy without taste is a spreadsheet.',
    sub: 'Taste without commercial intent is decoration.',
  },
];

const BRAND_SERVICES = [
  'Brand strategy & positioning',
  'Visual identity & scalable systems',
  'Naming & verbal tone of voice',
  'Identity guidelines & governance',
  'Packaging & print collateral',
  'Ongoing brand stewardship',
];

const IDENTITY_TOKENS = [
  {
    hex: '#EA1E4D',
    name: 'RIWA RED',
    role: 'Primary Ignition / Focus',
    surfaceText: '#FFFFFF',
  },
  {
    hex: '#FD7D3C',
    name: 'RIWA ORANGE',
    role: 'Live Energy / Official Mark',
    surfaceText: '#111116',
  },
  {
    hex: '#111116',
    name: 'INK CHARCOAL',
    role: 'Editorial Depth / Ground',
    surfaceText: '#FFFFFF',
  },
  {
    hex: '#F5F4F0',
    name: 'WARM PAPER',
    role: 'Tactile Print Canvas',
    surfaceText: '#111116',
  },
];

type IdentityTabId = 'grid' | 'palette' | 'typography' | 'applied';

const IDENTITY_TABS: { id: IdentityTabId; label: string; icon: React.ReactNode }[] = [
  { id: 'grid', label: '01 // LOGO & GRID', icon: <LayoutGrid size={12} /> },
  { id: 'palette', label: '02 // COLOUR', icon: <Palette size={12} /> },
  { id: 'typography', label: '03 // TYPE', icon: <Type size={12} /> },
  { id: 'applied', label: '04 // APPLIED', icon: <ShieldCheck size={12} /> },
];

export const ThePointOfView: React.FC = () => {
  const reduced = useReducedMotion();
  const [activeTab, setActiveTab] = useState<IdentityTabId>('grid');
  const [showGridOverlay, setShowGridOverlay] = useState(true);
  const [activeTokenIdx, setActiveTokenIdx] = useState(0);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeTypeSpecimen, setActiveTypeSpecimen] = useState<'display' | 'serif' | 'mono'>('display');

  const activeToken = IDENTITY_TOKENS[activeTokenIdx];

  const handleCopyHex = (hex: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(hex).catch(() => {});
    }
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <section
      id="chapter-point-of-view"
      className="relative w-full bg-[#111116] dark:bg-[#0A0A0E] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12">
        {/* Chapter Label with THE SPARK Diamond ◆ */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-3 mb-10 sm:mb-14"
        >
          <SparkElement chapter={1} size={20} />
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#EA1E4D] font-bold">
            02 — BRAND &amp; IDENTITY
          </span>
          <div className="flex-1 h-[1px] bg-[#EA1E4D]/30 max-w-[140px]" />
        </motion.div>

        {/* Main Editorial Headline */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-18"
        >
          <h2 className="font-display text-[clamp(2.4rem,6.8vw,5.4rem)] font-black uppercase tracking-tighter text-white leading-[0.92] max-w-4xl">
            <span className="block">A BRAND IS NOT</span>
            <span className="block">A LOGO.</span>
            <span className="block font-serif italic font-normal tracking-tight text-[#EA1E4D] text-[1.08em] lowercase mt-1">
              it is a position.
            </span>
          </h2>
        </motion.div>

        {/* Two-Column Composition: Beliefs + Interactive Identity System Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-14 sm:mb-20 items-start">

          {/* LEFT (5 Cols): Beliefs + Disciplines */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-0 border-t border-white/10">
              {BRAND_OPINIONS.map((item, i) => (
                <motion.div
                  key={item.quote}
                  initial={reduced ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="py-6 border-b border-white/10 group"
                >
                  <p className="font-display text-lg sm:text-xl font-black uppercase tracking-tight text-white mb-1.5 group-hover:text-[#EA1E4D] transition-colors">
                    {item.quote}
                  </p>
                  <p className="font-serif italic text-base sm:text-lg text-white/55 leading-relaxed">
                    {item.sub}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Deliverables Index (2-col wrap on mobile for compactness) */}
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/45 block mb-3.5">
                BRAND PRACTICE DELIVERABLES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-0 border-t border-white/10">
                {BRAND_SERVICES.map((s, i) => (
                  <div
                    key={s}
                    className="flex items-center justify-between py-2.5 border-b border-white/10 text-sm text-white/80 font-sans pr-2"
                  >
                    <span>{s}</span>
                    <span className="font-mono text-[10px] text-[#EA1E4D] font-bold shrink-0">
                      0{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT (7 Cols): Strong Interactive Brand Identity System Demonstration */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#17171E] border border-white/15 relative overflow-hidden"
          >
            {/* Header Bar */}
            <div className="px-5 py-3.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-widest">
              <span className="text-[#EA1E4D] font-bold flex items-center gap-2">
                ◆ IDENTITY SYSTEM SPECIMEN // RIWA CREATIVES
              </span>
              <span className="text-white/40">INTERACTIVE SPEC</span>
            </div>

            {/* 4-Tab Selector Grid (2x2 on small mobile, 4-across desktop) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-white/10 bg-[#121217]">
              {IDENTITY_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 px-3 flex items-center justify-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider border-r border-b sm:border-b-0 border-white/10 last:border-r-0 transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#EA1E4D] text-white'
                        : 'text-white/55 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Specimen Content Stage */}
            <div className="p-5 sm:p-8 min-h-[340px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeTab === 'grid' && (
                  <motion.div
                    key="tab-grid"
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="font-mono text-xs text-white/75">
                        Clearspace, crow proportion &amp; dual emblem/vector construction
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowGridOverlay((v) => !v)}
                        className={`px-3 py-1 font-mono text-[10px] uppercase font-bold border transition-colors cursor-pointer ${
                          showGridOverlay
                            ? 'border-[#EA1E4D] bg-[#EA1E4D]/15 text-[#EA1E4D]'
                            : 'border-white/20 text-white/60 hover:text-white'
                        }`}
                      >
                        {showGridOverlay ? 'GRID: ON' : 'GRID: OFF'}
                      </button>
                    </div>

                    {/* Interactive Construction Viewport influenced by THE SPARK ◆ */}
                    <div className="relative bg-[#0E0E13] border border-white/15 p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-around gap-8 overflow-hidden">
                      {showGridOverlay && (
                        <>
                          <div
                            className="absolute inset-0 pointer-events-none opacity-25"
                            style={{
                              backgroundImage:
                                'linear-gradient(rgba(234,30,77,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(234,30,77,0.35) 1px, transparent 1px)',
                              backgroundSize: '28px 28px',
                            }}
                            aria-hidden="true"
                          />
                          {/* Center Diamond Axis from THE SPARK */}
                          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#EA1E4D]/45 pointer-events-none" aria-hidden="true" />
                          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#EA1E4D]/45 pointer-events-none" aria-hidden="true" />
                          <span className="absolute top-2 left-3 font-mono text-[9px] text-[#EA1E4D] font-bold">2X CLEARSPACE</span>
                          <span className="absolute bottom-2 right-3 font-mono text-[9px] text-[#FD7D3C] font-bold">MIN SIZE 24MM</span>
                        </>
                      )}

                      <div className="relative z-10 flex flex-col items-center gap-2 p-4 border border-dashed border-[#EA1E4D]/40 bg-[#111116]/80">
                        <img src="/brand/riwa-logo-official.png" alt="Primary Crow Mark" className="h-20 w-auto object-contain" />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-white/55">PRIMARY EMBLEM</span>
                      </div>

                      <div className="relative z-10 flex flex-col items-center gap-2 p-4 border border-dashed border-[#FD7D3C]/40 bg-[#111116]/80">
                        <img src="/brand/riwa-crow-vector.svg" alt="Vector Construction Mark" className="h-20 w-auto object-contain brightness-0 invert" />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-white/55">MONO VECTOR SYSTEM</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'palette' && (
                  <motion.div
                    key="tab-palette"
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-5"
                  >
                    <p className="font-mono text-xs text-white/75">
                      Select any system token to test live identity contrast and copy hex codes:
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {IDENTITY_TOKENS.map((tok, i) => (
                        <button
                          key={tok.hex}
                          type="button"
                          onClick={() => setActiveTokenIdx(i)}
                          className={`p-3 border text-left transition-all cursor-pointer ${
                            activeTokenIdx === i
                              ? 'border-white ring-1 ring-white bg-white/10'
                              : 'border-white/15 bg-black/30 hover:border-white/40'
                          }`}
                        >
                          <div className="h-10 w-full mb-2 border border-black/20" style={{ backgroundColor: tok.hex }} />
                          <span className="font-mono text-[10px] font-bold text-white block">{tok.hex}</span>
                          <span className="font-mono text-[9px] text-white/55 block truncate">{tok.name}</span>
                        </button>
                      ))}
                    </div>

                    {/* Dynamic Live Palette Surface Preview */}
                    <div
                      className="p-5 sm:p-6 border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors duration-300"
                      style={{ backgroundColor: activeToken.hex, color: activeToken.surfaceText }}
                    >
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-widest font-bold opacity-75 block mb-1">
                          TOKEN ROLE // {activeToken.role}
                        </span>
                        <p className="font-display text-2xl font-black uppercase tracking-tight leading-none">
                          RIWA — {activeToken.name}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopyHex(activeToken.hex)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider border border-current/35 hover:bg-black/15 transition-colors cursor-pointer self-start sm:self-auto"
                      >
                        {copiedHex === activeToken.hex ? <Check size={12} /> : <Copy size={12} />}
                        <span>{copiedHex === activeToken.hex ? 'COPIED!' : `COPY ${activeToken.hex}`}</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'typography' && (
                  <motion.div
                    key="tab-type"
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-5"
                  >
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: 'display' as const, label: 'SYNE // DISPLAY' },
                        { id: 'serif' as const, label: 'INSTRUMENT SERIF // EDITORIAL' },
                        { id: 'mono' as const, label: 'JETBRAINS MONO // TECHNICAL' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setActiveTypeSpecimen(t.id)}
                          className={`px-3 py-1.5 font-mono text-[10px] font-bold uppercase border cursor-pointer transition-colors ${
                            activeTypeSpecimen === t.id
                              ? 'border-[#EA1E4D] bg-[#EA1E4D] text-white'
                              : 'border-white/15 text-white/60 hover:text-white'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>

                    <div className="p-6 sm:p-8 bg-[#0E0E13] border border-white/15 space-y-4">
                      {activeTypeSpecimen === 'display' && (
                        <>
                          <span className="font-mono text-[9px] text-[#EA1E4D] uppercase tracking-widest block">
                            800 WEIGHT · TRACKING -0.04EM · ARCHITECTURAL PUNCH
                          </span>
                          <p className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.9] text-white">
                            UNREASONABLE BY DESIGN.
                          </p>
                        </>
                      )}
                      {activeTypeSpecimen === 'serif' && (
                        <>
                          <span className="font-mono text-[9px] text-[#FD7D3C] uppercase tracking-widest block">
                            ITALIC CONTRAST · HUMAN &amp; LITERARY TENSION
                          </span>
                          <p className="font-serif italic text-3xl sm:text-5xl font-normal tracking-tight leading-[1.0] text-[#EA1E4D]">
                            ideas that make people feel.
                          </p>
                        </>
                      )}
                      {activeTypeSpecimen === 'mono' && (
                        <>
                          <span className="font-mono text-[9px] text-white/55 uppercase tracking-widest block">
                            INDEXING &amp; SYSTEM METADATA · 0.18EM TRACKING
                          </span>
                          <p className="font-mono text-base sm:text-lg uppercase tracking-[0.2em] text-white leading-relaxed">
                            RC—001 // IDENTITY · CAMPAIGNS · WEB · LIVE
                          </p>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'applied' && (
                  <motion.div
                    key="tab-applied"
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    <div className="bg-[#0E0E13] border border-white/15 p-5 flex flex-col justify-between min-h-[190px]">
                      <div className="flex items-center justify-between">
                        <img src="/brand/riwa-logo-official.png" alt="Riwa" className="h-9 w-auto object-contain" />
                        <span className="font-mono text-[9px] text-[#EA1E4D] font-bold">◆ CREDENTIAL</span>
                      </div>
                      <div className="pt-6">
                        <p className="font-display text-lg font-black uppercase leading-tight text-white">
                          RIWA CREATIVES®
                        </p>
                        <p className="font-mono text-[10px] text-white/50 uppercase tracking-wider mt-1">
                          GOVT. OF INDIA MSME REGISTERED
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#F5F4F0] text-[#111116] border border-white/15 p-5 flex flex-col justify-between min-h-[190px]">
                      <div className="flex items-center justify-between font-mono text-[9px] uppercase font-bold text-[#52525B]">
                        <span>STATIONERY SPEC</span>
                        <span className="text-[#EA1E4D]">350GSM MATTE</span>
                      </div>
                      <div className="space-y-1.5">
                        <p className="font-display text-lg font-black uppercase leading-none">
                          MAKING UNREASONABLE<br />BRANDS HAPPEN.
                        </p>
                        <p className="font-mono text-[10px] text-[#52525B]">
                          riwacreatives.in · @madebyriwa
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Footer CTA Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
          <span className="font-mono text-xs text-white/40 uppercase tracking-widest hidden sm:block">
            THE IDENTITY FOUNDATION BEHIND EVERY DISCIPLINE
          </span>
          <Link
            to="/services/brand-identity"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#EA1E4D] hover:text-white transition-colors uppercase tracking-wider"
          >
            <span>SEE FULL BRAND CAPABILITIES</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      {/* Transition Crop Rule into Warm White Ch03 */}
      <div className="w-full h-[3px] bg-gradient-to-r from-[#EA1E4D] via-[#FD7D3C] to-[#EA1E4D] opacity-75" />
    </section>
  );
};
