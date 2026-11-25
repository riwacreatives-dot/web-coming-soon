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
    description: 'For founders turning an early conviction into a distinctive brand, a product, or a growing company.',
  },
  {
    id: 'growing-biz',
    number: '02',
    title: 'GROWING BUSINESSES.',
    description:
      'For established businesses ready to sharpen their identity, elevate commercial creative, and win new audiences.',
  },
  {
    id: 'brands',
    number: '03',
    title: 'BRANDS & ORGANIZATIONS.',
    description:
      'For teams looking for fresh creative thinking, compelling campaigns, and meaningful communication across channels.',
  },
  {
    id: 'events',
    number: '04',
    title: 'EVENTS & COMMUNITIES.',
    description:
      'For organizers conceptualizing hackathons, conferences, college festivals, and live experiences that bring people together.',
  },
];

export const WhoWeWorkWithSection: React.FC = () => {
  return (
    <div className="w-full bg-[#E7E7E9] text-[#111116] border-b border-[#111116]/15 transition-colors">
      <section
        id="audiences"
        className="relative w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#52525B] font-semibold block mb-3 select-none">
            06 / WHO WE WORK WITH
          </span>
          <h2 className="font-display text-[clamp(2.1rem,6vw,4.2rem)] font-black uppercase tracking-tight text-[#111116] leading-[1.02]">
            <span>FOR THE AMBITIOUS,</span><br />
            <span>THE CURIOUS AND</span>{' '}
            <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
              the
            </span>{' '}
            <span>READY</span><span className="text-[#EA1E4D]">.</span>
          </h2>
        </div>

        {/* Restrained Typographic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#111116]/20">
          {AUDIENCES.map((a, idx) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-6 sm:p-8 border-r border-b border-[#111116]/20 flex flex-col justify-between bg-[#E7E7E9] hover:bg-white transition-colors duration-300"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#EA1E4D] tracking-widest block mb-6">
                  // {a.number}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-black uppercase tracking-tight text-[#111116] mb-3 leading-snug">
                  {a.title}
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#52525B] leading-relaxed mt-4">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
