import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <div className="w-full bg-[#E7E7E9] dark:bg-[#0B0B0F] text-[#111116] dark:text-white border-b border-[#111116]/15 dark:border-white/10 transition-colors">
      <section
        id="audiences"
        className="relative w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 font-semibold block mb-3 select-none">
            06 / WHO WE WORK WITH
          </span>
          <h2 className="font-display text-[clamp(2.1rem,6vw,4.2rem)] font-black uppercase tracking-tight text-[#111116] dark:text-white leading-[1.02]">
            <span>FOR THE AMBITIOUS,</span><br />
            <span>THE CURIOUS AND</span>{' '}
            <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
              the
            </span>{' '}
            <span>READY</span><span className="text-[#EA1E4D]">.</span>
          </h2>
        </div>

        {/* Pure Typographic Editorial Rows (Zero Repetitive Boxed Cards) */}
        <div className="border-t-2 border-[#111116]/25 dark:border-white/20 divide-y divide-[#111116]/20 dark:divide-white/15">
          {AUDIENCES.map((a, idx) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="py-7 sm:py-9 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline hover:px-2 transition-all"
            >
              <span className="md:col-span-2 font-mono text-xs sm:text-sm font-bold text-[#EA1E4D] tracking-widest">
                // {a.number}
              </span>
              <h3 className="md:col-span-4 font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111116] dark:text-white">
                {a.title}
              </h3>
              <p className="md:col-span-6 font-sans text-sm sm:text-base text-[#52525B] dark:text-white/75 leading-relaxed">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
