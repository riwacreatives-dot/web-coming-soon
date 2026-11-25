import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProcessStage {
  number: string;
  name: string;
  tagline: string;
  purpose: string;
  description: string;
  exampleImage?: string;
  exampleLabel: string;
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
  },
  {
    number: '02',
    name: 'DEFINE',
    tagline: 'Position · Strategize · Direct',
    purpose: 'Distill complexity into one clear creative direction everyone can rally behind.',
    description:
      'We shape the brief into core strategic territories, verbal positioning, visual mood direction, and production scope.',
    exampleImage: '/work/solanas-poster.jpg',
    exampleLabel: 'SOLANAS // VISUAL DIRECTION & SILK ART KEY',
  },
  {
    number: '03',
    name: 'CREATE',
    tagline: 'Design · Direct · Engineer',
    purpose: 'Craft distinctive work that carries taste, cultural tension, and emotional weight.',
    description:
      'Where ideas become tangible: visual identities, poster campaigns, interactive web code, motion assets, and live event systems.',
    exampleImage: '/work/solanas-chilli-chicken.jpg',
    exampleLabel: 'SOLANAS // VIRAL STREET POSTER PRODUCTION',
  },
  {
    number: '04',
    name: 'EXECUTE',
    tagline: 'Refine · Deliver · Launch',
    purpose: 'Guarantee rigorous finish quality from file specs to live audience launch.',
    description:
      'We oversee print calibration, paid-social placement formatting, responsive frontend speed, and on-ground coordination.',
    exampleImage: '/work/solanas-sushi.png',
    exampleLabel: 'META ADS // KINETIC CROP EXECUTION',
  },
  {
    number: '05',
    name: 'EVOLVE',
    tagline: 'Measure · Learn · Compound',
    purpose: 'Turn audience feedback and conversion response into smarter subsequent sprints.',
    description:
      'We review performance, spot new brand opportunities, and steward the identity as your business grows.',
    exampleImage: '/work/solanas-steamer-dimsum.jpg',
    exampleLabel: 'RETENTION & MENU EVOLUTION // SYSTEM ARTIFACT',
  },
];

export const ProcessSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = STAGES[activeIdx];

  return (
    <div className="w-full bg-[#FFFFFF] dark:bg-[#14141A] text-[#111116] dark:text-white border-b border-[#111116]/15 dark:border-white/10 transition-colors">
      <section
        id="process"
        className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 font-semibold block mb-3 select-none">
              05 / OUR PROCESS
            </span>
            <h2 className="font-display text-[clamp(2.25rem,6.8vw,4.5rem)] font-black uppercase tracking-tight text-[#111116] dark:text-white leading-[0.98]">
              <span>FROM FIRST THOUGHT</span><br />
              <span>TO</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
                final
              </span>{' '}
              <span>FRAME</span><span className="text-[#EA1E4D]">.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#52525B] dark:text-white/70 leading-relaxed max-w-sm">
            Select any stage to inspect its core purpose and corresponding output artefact.
          </p>
        </div>

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
                        : 'bg-white dark:bg-[#14141A] border-[#111116]/40 dark:border-white/40 group-hover:border-[#EA1E4D]'
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
                      : 'bg-white dark:bg-[#14141A] border-[#111116]/40 dark:border-white/40'
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#111116]/15 dark:border-white/15 bg-[#F5F4F0] dark:bg-[#1B1B22] p-6 sm:p-10"
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
              {current.exampleImage ? (
                <div className="border border-[#111116]/20 dark:border-white/15 bg-[#111116] p-2.5">
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
                <div className="aspect-[16/10] border border-[#111116]/20 dark:border-white/15 bg-[#111116] text-white p-6 flex flex-col justify-between">
                  <span className="font-mono text-[10px] text-[#FD7D3C] uppercase tracking-widest font-bold">
                    {current.exampleLabel}
                  </span>
                  <div className="font-mono text-xs space-y-1.5 text-white/80">
                    <p>01. Brand &amp; Category Interrogation</p>
                    <p>02. Audience Attention &amp; Buying Triggers</p>
                    <p>03. Commercial Success Metrics</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};
