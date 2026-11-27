import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface Audience {
  id: string;
  number: string;
  title: string;
  description: string;
}

const AUDIENCES: Audience[] = [
  {
    id: 'startups',
    number: '01',
    title: 'STARTUPS & FOUNDERS.',
    description: 'For founders turning an early conviction into a distinctive brand, flagship launch, or growing company.',
  },
  {
    id: 'growing-biz',
    number: '02',
    title: 'GROWING BUSINESSES.',
    description:
      'For established businesses ready to sharpen their identity, elevate commercial creative, and win new audiences.',
  },
  {
    id: 'established-brands',
    number: '03',
    title: 'ESTABLISHED BRANDS.',
    description:
      'For marketing and brand teams seeking fresh creative direction, ongoing brand stewardship, and campaigns with teeth.',
  },
  {
    id: 'event-organizers',
    number: '04',
    title: 'EVENT ORGANIZERS.',
    description:
      'For teams building hackathons, Model UN assemblies, college festivals, and live summits that unite people.',
  },
];

export const WhoWeWorkWithSection: React.FC = () => {
  const reduced = useReducedMotion();

  return (
    <div className="w-full bg-[#E7E7E9] text-[#111116] border-b border-[#111116]/15 transition-colors">
      <section
        id="audiences"
        className="relative w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <motion.div
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="mb-12 sm:mb-16 max-w-3xl"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -12 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: STUDIO_EASE } },
            }}
            className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#52525B] font-semibold block mb-3 select-none"
          >
            05 — WHO WE WORK WITH
          </motion.span>
          <h2 className="font-display text-[clamp(2.1rem,6vw,4.2rem)] font-extrabold uppercase tracking-tight text-[#111116] leading-[1.02]">
            <span className="block overflow-hidden">
              <motion.span
                variants={{
                  hidden: { y: '108%', opacity: 0 },
                  visible: { y: '0%', opacity: 1, transition: { duration: 0.68, delay: 0.05, ease: STUDIO_EASE } },
                }}
                className="block"
              >
                FOR THE AMBITIOUS,
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
                <span>THE CURIOUS AND</span>{' '}
                <span className="font-serif italic font-normal tracking-normal text-[#C4123D] text-[1.14em] lowercase select-none">
                  the
                </span>{' '}
                <span>READY</span>
                <span className="text-[#C4123D]">.</span>
              </motion.span>
            </span>
          </h2>
        </motion.div>

        {/* Pure Typographic Editorial Rows */}
        <motion.div
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.06 }}
          className="border-t-2 border-[#111116]/25 divide-y divide-[#111116]/20"
        >
          {AUDIENCES.map((a, idx) => (
            <motion.div
              key={a.id}
              variants={{
                hidden: { opacity: 0, x: 16 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.52, delay: idx * 0.07, ease: STUDIO_EASE },
                },
              }}
              className="py-7 sm:py-9 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline hover:px-2 transition-all duration-300"
            >
              <span className="md:col-span-2 font-mono text-xs sm:text-sm font-bold text-[#C4123D] tracking-widest">
                // {a.number}
              </span>
              <h3 className="md:col-span-4 font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111116]">
                {a.title}
              </h3>
              <p className="md:col-span-6 font-sans text-sm sm:text-base text-[#3F3F46] leading-relaxed">
                {a.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};
