import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
  const reduced = useReducedMotion();

  return (
    <div className="w-full bg-[#FD7D3C] text-[#111116] border-y-2 border-[#111116] transition-colors">
      <section
        id="difference"
        className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Sticky Oversized Headline Split */}
          <motion.div
            initial={reduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            className="lg:col-span-5 min-w-0 lg:sticky lg:top-[var(--sticky-offset)] space-y-6"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -12 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: STUDIO_EASE } },
              }}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#111116] font-bold select-none"
            >
              <span className="px-2 py-0.5 bg-[#111116] text-white">02</span>
              <span>THE RIWA DIFFERENCE</span>
            </motion.div>

            <h2 className="font-display text-[clamp(1.85rem,3.5vw,3.4rem)] font-extrabold uppercase tracking-tighter text-[#111116] leading-[0.95] break-words">
              <span className="block overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: '108%', opacity: 0 },
                    visible: { y: '0%', opacity: 1, transition: { duration: 0.68, delay: 0.05, ease: STUDIO_EASE } },
                  }}
                  className="block"
                >
                  NOT ANOTHER
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
                <motion.span
                  variants={{
                    hidden: { y: '108%', opacity: 0 },
                    visible: { y: '0%', opacity: 1, transition: { duration: 0.72, delay: 0.13, ease: STUDIO_EASE } },
                  }}
                  className="block"
                >
                  <span>AGENCY</span>{' '}
                  <span className="font-serif italic font-normal tracking-normal text-[#111116] underline decoration-2 underline-offset-4 text-[1.1em] lowercase select-none">
                    playing
                  </span>
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: '108%', opacity: 0 },
                    visible: { y: '0%', opacity: 1, transition: { duration: 0.74, delay: 0.21, ease: STUDIO_EASE } },
                  }}
                  className="block"
                >
                  IT SAFE.
                </motion.span>
              </span>
            </h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.28, ease: STUDIO_EASE } },
              }}
              className="font-sans text-sm sm:text-base text-[#111116]/90 font-medium leading-relaxed max-w-md"
            >
              Ambitious brands don&apos;t stand out by blending into safe industry templates. Here is how we refuse ordinary execution.
            </motion.p>
          </motion.div>

          {/* Right Editorial Principle Rows with Large Section Numbers */}
          <motion.div
            initial={reduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            className="lg:col-span-7 min-w-0 border-t-2 border-[#111116] divide-y-2 divide-[#111116]/25"
          >
            {PRINCIPLES.map((p, idx) => (
              <motion.div
                key={p.number}
                variants={{
                  hidden: { opacity: 0, x: 18 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.56, delay: idx * 0.08, ease: STUDIO_EASE },
                  },
                }}
                className="py-7 sm:py-9 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 transition-transform duration-300 ease-out hover:translate-x-1"
              >
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#111116] leading-none shrink-0 select-none">
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};
