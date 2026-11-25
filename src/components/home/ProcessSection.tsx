import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProcessStage {
  number: string;
  name: string;
  tagline: string;
  description: string;
}

const STAGES: ProcessStage[] = [
  {
    number: '01',
    name: 'DISCOVER',
    tagline: 'Listen · Question · Audit',
    description:
      'We learn about your business, audience, cultural whitespace, and core ambitions before deciding what needs to happen.',
  },
  {
    number: '02',
    name: 'DEFINE',
    tagline: 'Strategy · Concepts · Direction',
    description:
      'We turn the brief into a sharp creative direction, narrative angle, and strategic execution plan.',
  },
  {
    number: '03',
    name: 'CREATE',
    tagline: 'Design · Film · Code · Stage',
    description:
      'Where concepts take form: visual systems, campaign key visuals, responsive digital experiences, and event architecture.',
  },
  {
    number: '04',
    name: 'EXECUTE',
    tagline: 'Refine · Deliver · Launch',
    description:
      'We obsess over every production detail—press checks, code performance, ad rollout, and live event staging.',
  },
  {
    number: '05',
    name: 'EVOLVE',
    tagline: 'Review · Learn · Strengthen',
    description:
      'We study audience response and market feedback so every subsequent sprint hits harder.',
  },
];

export const ProcessSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="w-full bg-[#FFFFFF] dark:bg-[#14141A] text-[#111116] dark:text-white border-b border-[#111116]/15 dark:border-white/10 transition-colors">
      <section
        id="process"
        className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20">
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
            Five disciplined stages moving an unreasonable idea from initial interrogation into real-world impact.
          </p>
        </div>

        {/* DESKTOP Horizontal Timeline (>= 1024px) */}
        <div className="hidden lg:block">
          <div className="relative border-t-2 border-[#111116]/20 dark:border-white/20 grid grid-cols-5 gap-6 pt-8">
            {STAGES.map((stage, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={stage.number}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className="relative cursor-pointer group"
                >
                  <div
                    className={`absolute -top-[39px] left-0 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-[#EA1E4D] border-[#EA1E4D] scale-125'
                        : 'bg-white dark:bg-[#14141A] border-[#111116]/40 dark:border-white/40 group-hover:border-[#EA1E4D]'
                    }`}
                  />

                  <span
                    className={`font-display text-4xl font-black block mb-4 transition-colors ${
                      isActive ? 'text-[#EA1E4D]' : 'text-[#111116]/20 dark:text-white/20 group-hover:text-[#111116]/50 dark:group-hover:text-white/50'
                    }`}
                  >
                    {stage.number}
                  </span>

                  <h3 className="font-display text-xl font-black uppercase tracking-tight text-[#111116] dark:text-white mb-1.5">
                    {stage.name}
                  </h3>

                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#EA1E4D] font-bold block mb-3">
                    {stage.tagline}
                  </span>

                  <p className="font-sans text-xs sm:text-sm text-[#52525B] dark:text-white/70 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET Vertical Timeline (< 1024px) */}
        <div className="lg:hidden relative pl-7 border-l-2 border-[#111116]/20 dark:border-white/20 space-y-10">
          {STAGES.map((stage, idx) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="relative"
            >
              <span className="absolute -left-[35px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#EA1E4D] border-2 border-white dark:border-[#14141A] shadow-sm" />

              <div className="flex items-baseline gap-3 mb-1.5">
                <span className="font-mono text-xs font-bold text-[#EA1E4D]">// {stage.number}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#71717A] dark:text-white/50">
                  {stage.tagline}
                </span>
              </div>

              <h3 className="font-display text-2xl font-black uppercase tracking-tight text-[#111116] dark:text-white mb-2">
                {stage.name}
              </h3>

              <p className="font-sans text-sm text-[#52525B] dark:text-white/70 leading-relaxed">
                {stage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
