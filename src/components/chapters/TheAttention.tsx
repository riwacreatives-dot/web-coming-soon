import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { SparkElement } from '../common/SparkElement';

const SOLANAS_PLATES = [
  {
    code: 'PLATE 01',
    src: '/work/solanas-poster.jpg',
    title: 'Dim Sum Silk Key Visual',
    medium: 'Print & Hero Art Direction',
  },
  {
    code: 'PLATE 02',
    src: '/work/solanas-chilli-chicken.jpg',
    title: 'Hotter Than Baddies Poster',
    medium: 'Viral Street Poster Drop',
  },
  {
    code: 'PLATE 03',
    src: '/work/solanas-sushi.png',
    title: 'Kinetic Sushi Suite',
    medium: 'Paid Social & Meta Ads',
  },
  {
    code: 'PLATE 04',
    src: '/work/solanas-steamer-dimsum.jpg',
    title: 'Signature Steamer Frame',
    medium: 'Menu & Retention Anchor',
  },
];

const STORY_STAGES = [
  {
    id: 'brief',
    label: '01 / BRIEF',
    copy: 'Position an independent Pan-Asian kitchen as an unmissable evening destination and spike weekend delivery demand against generic aggregator discounts.',
  },
  {
    id: 'thinking',
    label: '02 / THINKING',
    copy: 'Pair irreverent internet-native headlines ("Hotter Than Baddies") with tactile studio culinary photography so every drop begs to be shared, not skipped.',
  },
  {
    id: 'execution',
    label: '03 / EXECUTION',
    copy: 'Four unified visual drops spanning street posters, overhead silk key visuals, Meta ad crops, and flagship steamer menu hero artwork.',
  },
];

// All concept slugs match src/data/projectsData.ts exactly
const CONCEPT_WORK = [
  {
    code: 'RC—002 // DIGITAL R&D',
    title: 'DTC BRAND ACCELERATOR',
    sub: 'Concept exploration: editorial storefront architecture, React motion & mobile performance study.',
    slug: 'dtc-accelerator-concept',
  },
  {
    code: 'RC—003 // LIVE SYSTEM',
    title: 'HACK UTTAR PRADESH',
    sub: 'Conceptual event blueprint: hackathon identity, digital registration portal & sponsor decks.',
    slug: 'hack-uttar-pradesh',
  },
  {
    code: 'RC—004 // CONFERENCE',
    title: 'HORIZON MUN ASSEMBLY',
    sub: 'Conceptual conference suite: diplomatic identity, delegate acquisition & ceremony production.',
    slug: 'horizon-mun',
  },
];

export const TheAttention: React.FC = () => {
  const reduced = useReducedMotion();
  const [activePlateIdx, setActivePlateIdx] = useState(0);
  const [mobileStoryTab, setMobileStoryTab] = useState<'brief' | 'thinking' | 'execution' | 'outcome'>('brief');

  const activePlate = SOLANAS_PLATES[activePlateIdx];

  return (
    <section
      id="chapter-attention"
      className="relative w-full bg-[#F5F4F0] dark:bg-[#0F0F13] text-[#111116] dark:text-white overflow-hidden transition-colors"
    >
      <div className="max-w-7xl mx-auto py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12">

        {/* Chapter Header with THE SPARK Crop Element [ ▬ ] */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-3 mb-10 sm:mb-14"
        >
          <SparkElement chapter={2} size={20} />
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#EA1E4D] font-bold">
            03 — COMMERCIAL CREATIVE &amp; ADVERTISING
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.4rem,6.5vw,5.2rem)] font-black uppercase tracking-tighter text-[#111116] dark:text-white leading-[0.92] mb-12 sm:mb-18 max-w-4xl"
        >
          <span className="block">MAKE THEM LOOK.</span>
          <span className="block">MAKE THEM FEEL.</span>
          <span className="block font-serif italic font-normal tracking-tight text-[#EA1E4D] text-[1.06em] lowercase mt-1">
            make them act.
          </span>
        </motion.h2>

        {/* ── COMPLETED CLIENT WORK: SOLANAS CINEMATIC SPREAD ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#111116]/20 dark:border-white/15 mb-6 overflow-hidden">

          {/* Left 7 Cols: Viewfinder Stage framed actively by THE SPARK crop marks */}
          <div className="lg:col-span-7 relative bg-[#111116] overflow-hidden min-h-[300px] sm:min-h-[420px] lg:min-h-[500px]">
            {/* THE SPARK Graphic Crop & Art-Direction Marks */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none" aria-hidden="true">
              <div className="flex items-center gap-2 bg-[#111116]/85 px-2.5 py-1 border border-[#EA1E4D]/50">
                <div className="w-6 h-[3px] bg-[#EA1E4D]" />
                <span className="font-mono text-[9px] font-bold text-white tracking-[0.18em] uppercase">
                  {activePlate.code} // {activePlate.medium}
                </span>
              </div>
              <span className="font-mono text-[9px] font-bold text-[#EA1E4D] bg-[#111116]/85 px-2 py-1">
                RC—001
              </span>
            </div>

            {/* Corner Crop Marks */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#EA1E4D] z-20 pointer-events-none" aria-hidden="true" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#EA1E4D] z-20 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#EA1E4D] z-20 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#EA1E4D] z-20 pointer-events-none" aria-hidden="true" />

            <AnimatePresence mode="wait">
              <motion.img
                key={activePlate.src}
                src={activePlate.src}
                alt={`Solanas — ${activePlate.title}`}
                initial={reduced ? false : { opacity: 0.4, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.4 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover object-center min-h-[300px] sm:min-h-[420px] lg:min-h-[500px]"
                loading="lazy"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-[#111116]/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider drop-shadow">
                {activePlate.title}
              </span>
              <span className="font-mono text-[10px] text-white/80 uppercase">
                SELECT DROP BELOW
              </span>
            </div>
          </div>

          {/* Right 5 Cols: Brief -> Thinking -> Execution -> Outcome */}
          <div className="lg:col-span-5 bg-white dark:bg-[#1A1A21] p-5 sm:p-8 lg:p-9 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#111116]/15 dark:border-white/10">
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2.5 font-mono text-[10px] uppercase tracking-widest">
                  <span className="px-2.5 py-0.5 bg-[#111116] dark:bg-white text-white dark:text-[#111116] font-bold">
                    COMPLETED CLIENT WORK
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111116] dark:text-white leading-tight mb-1">
                  SOLANAS: VIRAL SUITE
                </h3>
                <p className="font-mono text-xs text-[#EA1E4D] font-bold tracking-widest uppercase">
                  SOLANAS CHINESE · THAI DINING
                </p>
              </div>

              {/* DESKTOP: Full 4-stage Narrative */}
              <div className="hidden md:block space-y-4 text-sm font-sans">
                {STORY_STAGES.map((stage, i) => (
                  <div
                    key={stage.id}
                    className={`border-l-2 pl-3.5 ${
                      i === 0 ? 'border-[#EA1E4D]' : 'border-[#111116]/20 dark:border-white/20'
                    }`}
                  >
                    <span
                      className={`font-mono text-[9px] uppercase tracking-widest font-bold block mb-0.5 ${
                        i === 0 ? 'text-[#EA1E4D]' : 'text-[#52525B] dark:text-white/45'
                      }`}
                    >
                      {stage.label}
                    </span>
                    <p className="text-[#3F3F46] dark:text-white/80 leading-relaxed text-[13px]">
                      {stage.copy}
                    </p>
                  </div>
                ))}

                <div className="border-l-2 border-[#EA1E4D] pl-3.5 pt-1">
                  <span className="font-mono text-[9px] text-[#EA1E4D] uppercase tracking-widest font-bold block mb-2">
                    04 / VERIFIED OUTCOME
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <span className="font-display text-xl font-black text-[#EA1E4D] block">+420%</span>
                      <span className="font-mono text-[8px] uppercase text-[#52525B] dark:text-white/50">Weekend Orders</span>
                    </div>
                    <div>
                      <span className="font-display text-xl font-black text-[#EA1E4D] block">+340%</span>
                      <span className="font-mono text-[8px] uppercase text-[#52525B] dark:text-white/50">Dinner Inbounds</span>
                    </div>
                    <div>
                      <span className="font-display text-xl font-black text-[#EA1E4D] block">6.2%</span>
                      <span className="font-mono text-[8px] uppercase text-[#52525B] dark:text-white/50">Meta Ads CTR</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* MOBILE: Compact Tabbed Case Study Switcher (< 768px) */}
              <div className="md:hidden space-y-4">
                <div className="grid grid-cols-4 border border-[#111116]/15 dark:border-white/15 font-mono text-[9px] font-bold uppercase">
                  {(['brief', 'thinking', 'execution', 'outcome'] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setMobileStoryTab(t)}
                      className={`py-2.5 text-center border-r last:border-r-0 border-[#111116]/15 dark:border-white/15 cursor-pointer ${
                        mobileStoryTab === t
                          ? 'bg-[#EA1E4D] text-white'
                          : 'text-[#52525B] dark:text-white/60'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="min-h-[96px] p-4 bg-[#F5F4F0] dark:bg-[#121218] border border-[#111116]/10 dark:border-white/10">
                  {mobileStoryTab === 'outcome' ? (
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <span className="font-display text-xl font-black text-[#EA1E4D] block">+420%</span>
                        <span className="font-mono text-[8px] uppercase text-[#52525B] dark:text-white/50">Weekend Orders</span>
                      </div>
                      <div>
                        <span className="font-display text-xl font-black text-[#EA1E4D] block">+340%</span>
                        <span className="font-mono text-[8px] uppercase text-[#52525B] dark:text-white/50">Dinner Inbounds</span>
                      </div>
                      <div>
                        <span className="font-display text-xl font-black text-[#EA1E4D] block">6.2%</span>
                        <span className="font-mono text-[8px] uppercase text-[#52525B] dark:text-white/50">Meta Ads CTR</span>
                      </div>
                    </div>
                  ) : (
                    <p className="font-sans text-xs text-[#3F3F46] dark:text-white/80 leading-relaxed">
                      {STORY_STAGES.find((s) => s.id === mobileStoryTab)?.copy}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-[#111116]/10 dark:border-white/10 flex items-center justify-between">
              <Link
                to="/work/solanas-campaign"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#EA1E4D] hover:text-[#111116] dark:hover:text-white transition-colors uppercase tracking-wider"
              >
                <span>OPEN FULL CASE STUDY</span>
                <ArrowUpRight size={14} />
              </Link>
              <span className="font-mono text-[10px] text-[#52525B] dark:text-white/40 uppercase hidden sm:inline">
                4 CAMPAIGN DROPS
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Contact Sheet Plate Selector (4-across Desktop / Horizontal Snap Mobile) */}
        <div className="mobile-snap-track flex md:grid md:grid-cols-4 gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2 mb-16 sm:mb-20 -mx-4 px-4 md:mx-0 md:px-0">
          {SOLANAS_PLATES.map((plate, i) => {
            const isSelected = activePlateIdx === i;
            return (
              <button
                key={plate.code}
                type="button"
                onClick={() => setActivePlateIdx(i)}
                className={`snap-start shrink-0 w-[56vw] sm:w-[38vw] md:w-auto text-left group cursor-pointer border p-1.5 transition-all ${
                  isSelected
                    ? 'border-[#EA1E4D] bg-[#EA1E4D]/10 dark:bg-[#EA1E4D]/15'
                    : 'border-[#111116]/15 dark:border-white/15 bg-white dark:bg-[#16161C] hover:border-[#111116]/45'
                }`}
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#111116] mb-2">
                  <img
                    src={plate.src}
                    alt={plate.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] uppercase tracking-wider px-1 pb-0.5">
                  <span className="font-bold text-[#111116] dark:text-white truncate">{plate.title}</span>
                  <span className={`font-bold shrink-0 ml-2 ${isSelected ? 'text-[#EA1E4D]' : 'text-[#52525B] dark:text-white/45'}`}>
                    {plate.code}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── STRICTLY SEPARATED CONCEPT EXPLORATIONS ── */}
        <div className="border-t-2 border-dashed border-[#111116]/20 dark:border-white/15 pt-10 sm:pt-14">
          <div className="flex flex-wrap items-center gap-3 mb-7">
            <span className="px-3 py-1 bg-[#111116] dark:bg-white text-white dark:text-[#111116] font-mono text-[10px] uppercase tracking-widest font-bold">
              CONCEPT EXPLORATIONS — SELF-INITIATED STUDIO WORK
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#52525B] dark:text-white/50">
              Clearly distinct from commissioned client deliverables
            </span>
          </div>

          <div className="mobile-snap-track flex md:grid md:grid-cols-3 gap-4 sm:gap-5 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 md:mx-0 md:px-0">
            {CONCEPT_WORK.map((item) => (
              <Link
                key={item.code}
                to={`/work/${item.slug}`}
                className="snap-start shrink-0 w-[78vw] md:w-auto group border border-[#111116]/15 dark:border-white/15 bg-white/75 dark:bg-[#16161C] p-6 hover:border-[#EA1E4D] transition-colors flex flex-col justify-between min-h-[168px]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 font-mono text-[10px] uppercase tracking-widest">
                    <span className="text-[#EA1E4D] font-bold">{item.code}</span>
                    <span className="px-1.5 py-0.5 border border-[#111116]/20 dark:border-white/20 text-[9px] text-[#52525B] dark:text-white/55">
                      CONCEPT
                    </span>
                  </div>
                  <h4 className="font-display text-lg sm:text-xl font-black uppercase tracking-tight text-[#111116] dark:text-white group-hover:text-[#EA1E4D] transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="font-mono text-xs text-[#52525B] dark:text-white/60 leading-relaxed">
                    {item.sub}
                  </p>
                </div>
                <span className="font-mono text-xs text-[#EA1E4D] font-bold uppercase tracking-wider inline-flex items-center gap-1 mt-5 self-start">
                  Open Blueprint <ArrowUpRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
