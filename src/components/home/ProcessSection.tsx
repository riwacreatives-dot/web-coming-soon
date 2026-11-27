import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CANONICAL_ASSETS } from '../../data/studioData';
import { AssetId } from '../../types';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface StageArtefactItem {
  key: string;
  heading: string;
  detail: string;
}

interface StageArtefactSpec {
  status: string;
  title: string;
  items: StageArtefactItem[];
  tags: string[];
}

interface ProcessStage {
  number: string;
  name: string;
  tagline: string;
  purpose: string;
  description: string;
  assetId?: AssetId;
  exampleImage?: string;
  exampleLabel: string;
  artefactSpec?: StageArtefactSpec;
}

const STAGES: ProcessStage[] = [
  {
    number: '01',
    name: 'DISCOVER',
    tagline: 'Interrogate · Audit · Align',
    purpose: 'Establish factual context and identify real market whitespace before designing.',
    description:
      'We listen, question, and examine your product, audience behavior, competitors, and objectives so every subsequent move is grounded in clarity.',
    exampleLabel: 'STUDIO AUDIT // RESEARCH BRIEF & MARKET MAP',
    artefactSpec: {
      status: 'AUDIT SPEC',
      title: 'Market & Category Diagnosis',
      items: [
        {
          key: '01',
          heading: 'Category & Competitor Scan',
          detail: 'Map visual clichés to avoid and clear positioning whitespace.',
        },
        {
          key: '02',
          heading: 'Audience & Buying Triggers',
          detail: 'Isolate attention hooks, buyer friction, and real cultural proof.',
        },
        {
          key: '03',
          heading: 'Aligned Commercial Brief',
          detail: 'Sign off on scope, priorities, and measurable direction early.',
        },
      ],
      tags: ['Research Brief', 'Category Map', 'Brief Scope'],
    },
  },
  {
    number: '02',
    name: 'DEFINE',
    tagline: 'Position · Strategize · Direct',
    purpose: 'Distill complexity into one clear creative direction everyone can rally behind.',
    description:
      'We shape the brief into core strategic territories, verbal positioning, visual mood direction, and production scope.',
    assetId: 'AST-C02',
    exampleImage: '/work/solanas-poster.jpg',
    exampleLabel: 'CREATIVE DIRECTION // STRATEGY & MOOD ARCHITECTURE',
  },
  {
    number: '03',
    name: 'CREATE',
    tagline: 'Design · Direct · Engineer',
    purpose: 'Craft distinctive work that carries taste, cultural tension, and emotional weight.',
    description:
      'Where ideas become tangible: visual identities, poster campaigns, interactive web code, motion assets, and live event systems.',
    assetId: 'AST-C01',
    exampleImage: '/work/solanas-chilli-chicken.jpg',
    exampleLabel: 'CRAFT & PRODUCTION // SYSTEMS, PRINT & DIGITAL BUILD',
  },
  {
    number: '04',
    name: 'EXECUTE',
    tagline: 'Refine · Deliver · Launch',
    purpose: 'Guarantee rigorous finish quality from file specs to live audience launch.',
    description:
      'We oversee print calibration, paid-social placement formatting, responsive frontend speed, and on-ground coordination.',
    exampleLabel: 'LAUNCH READINESS // PRINT, WEB & VENUE QA',
    artefactSpec: {
      status: 'LAUNCH QA',
      title: 'Multi-Surface Launch QA',
      items: [
        {
          key: 'PRINT',
          heading: 'Print & Packaging Calibration',
          detail: 'CMYK separations, trim bleeds, and stock-ready press masters.',
        },
        {
          key: 'WEB',
          heading: 'Frontend & Speed Verification',
          detail: 'Responsive breakpoints, semantic markup, and clean builds.',
        },
        {
          key: 'LIVE',
          heading: 'Social & Venue Rollout Sync',
          detail: 'Aspect-ratio cuts, signage files, and on-ground launch checks.',
        },
      ],
      tags: ['Print Specs', 'Web QA', 'Launch Sync'],
    },
  },
  {
    number: '05',
    name: 'EVOLVE',
    tagline: 'Measure · Learn · Compound',
    purpose: 'Turn audience feedback and conversion response into smarter subsequent sprints.',
    description:
      'We review performance, spot new brand opportunities, and steward the identity as your business grows.',
    exampleLabel: 'ONGOING STEWARDSHIP // BRAND & GROWTH CONTINUITY',
    artefactSpec: {
      status: 'STEWARDSHIP',
      title: 'Brand Equity & Growth Cadence',
      items: [
        {
          key: '01',
          heading: 'Cross-Channel Touchpoint QA',
          detail: 'Protect typography, colour, and voice coherence after launch.',
        },
        {
          key: '02',
          heading: 'Response & Campaign Review',
          detail: 'Evaluate real audience traction before planning the next push.',
        },
        {
          key: '03',
          heading: 'Next-Phase Creative Sprints',
          detail: 'Extend the visual world across new drops, menus, and activations.',
        },
      ],
      tags: ['Guardrails', 'Drop Review', 'Growth Sprints'],
    },
  },
];

function isStageImageApproved(assetId?: AssetId): boolean {
  if (!assetId) return false;
  const entry = CANONICAL_ASSETS.find((asset) => asset.assetId === assetId);
  return Boolean(entry?.permissionApproved && entry.founderApproved);
}

interface ProcessSectionProps {
  embedded?: boolean;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ embedded = false }) => {
  const reduced = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);
  const current = STAGES[activeIdx];

  return (
    <div
      className={
        embedded
          ? 'w-full border-t border-[#111116]/15 dark:border-white/10 transition-colors'
          : 'w-full bg-[#FFFFFF] dark:bg-[#0B0B0F] text-[#111116] dark:text-white border-b border-[#111116]/15 dark:border-white/15 transition-colors'
      }
    >
      <section
        id="process"
        className={`relative w-full ${
          embedded ? 'py-16 sm:py-24' : 'py-16 sm:py-24 md:py-32'
        } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
      >
        <motion.div
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="max-w-3xl">
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -12 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: STUDIO_EASE } },
              }}
              className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#52525B] dark:text-[#B4B4BE] font-semibold block mb-3 select-none"
            >
              {embedded ? '04B — DELIVERY WORKFLOW' : '04 — OUR PROCESS'}
            </motion.span>
            <h2 className="font-display text-[clamp(2.25rem,6.8vw,4.5rem)] font-extrabold uppercase tracking-tight text-[#111116] dark:text-white leading-[0.98]">
              <span className="block overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: '108%', opacity: 0 },
                    visible: { y: '0%', opacity: 1, transition: { duration: 0.68, delay: 0.05, ease: STUDIO_EASE } },
                  }}
                  className="block"
                >
                  FROM FIRST THOUGHT
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
                <motion.span
                  variants={{
                    hidden: { y: '108%', opacity: 0 },
                    visible: { y: '0%', opacity: 1, transition: { duration: 0.74, delay: 0.14, ease: STUDIO_EASE } },
                  }}
                  className="block"
                >
                  <span>TO</span>{' '}
                  <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
                    final
                  </span>{' '}
                  <span>FRAME</span>
                  <span className="text-[#EA1E4D]">.</span>
                </motion.span>
              </span>
            </h2>
          </div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.58, delay: 0.2, ease: STUDIO_EASE } },
            }}
            className="font-sans text-sm sm:text-base text-[#52525B] dark:text-white/70 leading-relaxed max-w-sm"
          >
            Select any stage to inspect its core purpose and corresponding output artefact.
          </motion.p>
        </motion.div>

        {/* DESKTOP Interactive Horizontal Timeline Rail (>= 1024px) */}
        <div className="hidden lg:block mb-10">
          <div className="relative border-t-2 border-[#111116]/20 dark:border-white/20 grid grid-cols-5 gap-6 pt-8">
            {STAGES.map((stage, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={stage.number}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className="relative text-left cursor-pointer group focus:outline-none"
                >
                  <div
                    className={`absolute -top-[39px] left-0 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-[#EA1E4D] border-[#EA1E4D] scale-125'
                        : 'bg-white dark:bg-[#0B0B0F] border-[#111116]/40 dark:border-white/40 group-hover:border-[#EA1E4D]'
                    }`}
                  />

                  <span
                    className={`font-display text-4xl font-black block mb-3 transition-colors ${
                      isActive
                        ? 'text-[#EA1E4D]'
                        : 'text-[#111116]/20 dark:text-white/20 group-hover:text-[#111116]/55 dark:group-hover:text-white/55'
                    }`}
                  >
                    {stage.number}
                  </span>

                  <h3 className="font-display text-xl font-black uppercase tracking-tight text-[#111116] dark:text-white mb-1">
                    {stage.name}
                  </h3>

                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#EA1E4D] font-bold block">
                    {stage.tagline}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET Stage Buttons (< 1024px) */}
        <div className="lg:hidden relative pl-6 border-l-2 border-[#111116]/20 dark:border-white/20 space-y-6 mb-10">
          {STAGES.map((stage, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={stage.number}
                onClick={() => setActiveIdx(idx)}
                className="relative cursor-pointer"
              >
                <span
                  className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                    isActive
                      ? 'bg-[#EA1E4D] border-[#EA1E4D]'
                      : 'bg-white dark:bg-[#0B0B0F] border-[#111116]/40 dark:border-white/40'
                  }`}
                />
                <div className="flex items-baseline gap-3">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#EA1E4D]' : 'text-[#71717A] dark:text-white/50'}`}>
                    // {stage.number}
                  </span>
                  <h3 className="font-display text-xl font-black uppercase text-[#111116] dark:text-white">
                    {stage.name}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#52525B] dark:text-white/70 mt-1">
                  {stage.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Shared Interactive Stage Detail Panel: Purpose + Description + Visual Example */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.number}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#111116]/15 dark:border-white/20 bg-[#F5F4F0] dark:bg-[#16161F] p-6 sm:p-10"
          >
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest">
                <span className="px-2.5 py-0.5 bg-[#EA1E4D] text-white font-bold">
                  STAGE {current.number} · {current.name}
                </span>
                <span className="text-[#52525B] dark:text-white/60">{current.tagline}</span>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#EA1E4D] font-bold block mb-1">
                  CORE PURPOSE
                </span>
                <p className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111116] dark:text-white leading-snug">
                  {current.purpose}
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#3F3F46] dark:text-white/75 leading-relaxed">
                {current.description}
              </p>
            </div>

            <div className="lg:col-span-5">
              {current.exampleImage && isStageImageApproved(current.assetId) ? (
                <div className="border border-[#111116]/20 dark:border-white/25 bg-[#111116] dark:bg-[#0B0B0F] p-2.5">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={current.exampleImage}
                      alt={current.exampleLabel}
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white/70 block pt-2">
                    {current.exampleLabel}
                  </span>
                </div>
              ) : (
                <div className="relative border border-[#111116]/25 dark:border-white/25 bg-[#111116] dark:bg-[#0B0B0F] text-white p-5 sm:p-6 space-y-4 overflow-hidden">
                  {/* Corner Crop Marks */}
                  <span className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-[#EA1E4D] pointer-events-none" aria-hidden="true" />
                  <span className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-[#EA1E4D] pointer-events-none" aria-hidden="true" />
                  <span className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-[#EA1E4D] pointer-events-none" aria-hidden="true" />
                  <span className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-[#EA1E4D] pointer-events-none" aria-hidden="true" />

                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/15 font-mono text-[10px] uppercase tracking-widest">
                    <span className="text-[#FD7D3C] font-bold">
                      {current.exampleLabel}
                    </span>
                    <span className="text-white/60 shrink-0">
                      {current.artefactSpec?.status || current.name}
                    </span>
                  </div>

                  {current.artefactSpec && (
                    <>
                      <h4 className="font-display text-base sm:text-lg font-extrabold uppercase tracking-tight text-white">
                        {current.artefactSpec.title}
                        <span className="text-[#EA1E4D]">.</span>
                      </h4>

                      <div className="space-y-2.5">
                        {current.artefactSpec.items.map((item) => (
                          <div
                            key={item.key}
                            className="flex items-start gap-3 p-2.5 bg-white/[0.04] border border-white/10"
                          >
                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FD7D3C] shrink-0 pt-0.5 min-w-[34px]">
                              {item.key}
                            </span>
                            <div className="min-w-0 space-y-0.5">
                              <p className="font-display text-xs sm:text-sm font-bold uppercase tracking-tight text-white leading-tight">
                                {item.heading}
                              </p>
                              <p className="font-sans text-[11px] sm:text-xs text-[#B4B4BE] leading-snug">
                                {item.detail}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-white/15 flex items-center justify-between gap-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-white/65">
                        <span className="truncate">
                          {current.artefactSpec.tags.join(' · ')}
                        </span>
                        <img
                          src="/brand/riwa-logo-official.png"
                          alt=""
                          aria-hidden="true"
                          className="h-5 w-auto object-contain opacity-85 shrink-0"
                        />
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};
