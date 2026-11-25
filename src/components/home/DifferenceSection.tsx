import React from 'react';
import { motion } from 'framer-motion';

interface Principle {
  number: string;
  title: string;
  description: string;
}

const PRINCIPLES: Principle[] = [
  {
    number: '01',
    title: 'THINK BEFORE WE MAKE.',
    description:
      "We don't start with templates or safe formulas. We start by understanding the brand, the audience, and the commercial opportunity.",
  },
  {
    number: '02',
    title: 'CREATIVE WITHOUT COMPROMISE.',
    description:
      'We challenge predictable ideas and push for work that carries its own voice, sharp taste, and unmistakable identity.',
  },
  {
    number: '03',
    title: 'BUILT TO EXECUTE.',
    description:
      'A brilliant idea means nothing if it dies inside a presentation deck. We stay close to execution from strategy to final production.',
  },
  {
    number: '04',
    title: 'SMALL ENOUGH TO CARE. AMBITIOUS ENOUGH TO CHALLENGE.',
    description:
      'We value direct founder collaboration, honest critique, and work that receives dedicated senior focus.',
  },
];

export const DifferenceSection: React.FC = () => {
  return (
    <div className="w-full bg-[#F5F4F0] dark:bg-[#0B0B0F] text-[#111116] dark:text-white border-b border-[#111116]/15 dark:border-white/10 transition-colors">
      <section
        id="difference"
        className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <div className="border-b-2 border-[#111116] dark:border-white/25 pb-10 sm:pb-14 mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 font-bold mb-6 select-none">
            <span>04 / THE RIWA DIFFERENCE</span>
            <span className="text-[#EA1E4D]">[ ZERO TEMPLATES · 100% INTENTION ]</span>
          </div>

          <h2 className="font-display text-[clamp(2.4rem,7.5vw,5.8rem)] font-black uppercase tracking-tighter text-[#111116] dark:text-white leading-[0.92]">
            <span>NOT ANOTHER</span><br />
            <span>AGENCY</span>{' '}
            <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
              playing
            </span>{' '}
            <span>IT SAFE</span><span className="text-[#EA1E4D]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10 sm:gap-y-14">
          {PRINCIPLES.map((p, idx) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="border-t border-[#111116]/25 dark:border-white/15 pt-5 sm:pt-6"
            >
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-mono text-xs font-bold tracking-widest text-[#EA1E4D]">
                  // {p.number}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-[#111116] dark:text-white leading-[1.08] mb-3">
                {p.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#52525B] dark:text-white/70 leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
