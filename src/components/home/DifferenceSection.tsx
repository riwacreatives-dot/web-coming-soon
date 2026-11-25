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
      "We don't start with templates or generic agency playbooks. We interrogate the brand, audience, and commercial opportunity first.",
  },
  {
    number: '02',
    title: 'CREATIVE WITHOUT COMPROMISE.',
    description:
      'We challenge predictable, safe work and push for ideas that carry distinct visual taste and cultural presence.',
  },
  {
    number: '03',
    title: 'BUILT TO EXECUTE.',
    description:
      'Good strategy dies if it stays inside a slide deck. We stay hands-on from the first sketch through final production.',
  },
  {
    number: '04',
    title: 'SMALL ENOUGH TO CARE.',
    description:
      'Every partner receives senior focus, direct founder access, and uncompromising attention to every detail.',
  },
];

export const DifferenceSection: React.FC = () => {
  return (
    <div className="w-full bg-[#FD7D3C] text-[#111116] border-y-2 border-[#111116] transition-colors">
      <section
        id="difference"
        className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Oversized Headline Split */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#111116]/85 font-bold select-none">
              <span className="px-2 py-0.5 bg-[#111116] text-white">04</span>
              <span>THE RIWA DIFFERENCE</span>
            </div>

            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-black uppercase tracking-tighter text-[#111116] leading-[0.94]">
              <span>NOT ANOTHER</span><br />
              <span>AGENCY</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-white text-[1.12em] lowercase select-none">
                playing
              </span><br />
              <span>IT SAFE</span><span className="text-white">.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#111116]/90 font-medium leading-relaxed max-w-md">
              Ambitious brands don&apos;t stand out by blending into safe industry templates. Here is how we refuse ordinary execution.
            </p>
          </div>

          {/* Right Editorial Principle Rows with Large Section Numbers (No Cards) */}
          <div className="lg:col-span-7 border-t-2 border-[#111116] divide-y-2 divide-[#111116]/25">
            {PRINCIPLES.map((p, idx) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="py-7 sm:py-9 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8"
              >
                <span className="font-display text-4xl sm:text-5xl font-black text-white leading-none shrink-0 select-none">
                  {p.number}
                </span>

                <div className="space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111116] leading-snug">
                    {p.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#111116]/85 font-medium leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
