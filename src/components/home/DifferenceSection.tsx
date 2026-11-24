import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Flame, Layers, ShieldCheck } from 'lucide-react';

interface Principle {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PRINCIPLES: Principle[] = [
  {
    number: '01',
    title: 'THINK BEFORE WE MAKE',
    description:
      "We don't start with templates. We start by understanding the brand, the audience and the opportunity.",
    icon: <Brain size={18} className="text-brand-red" />,
  },
  {
    number: '02',
    title: 'CREATIVE WITHOUT COMPROMISE',
    description:
      'We challenge predictable ideas and push for work that has its own identity.',
    icon: <Flame size={18} className="text-brand-red" />,
  },
  {
    number: '03',
    title: 'BUILT TO EXECUTE',
    description:
      'A great idea means nothing if it never makes it out of the presentation. We stay close to execution.',
    icon: <Layers size={18} className="text-brand-red" />,
  },
  {
    number: '04',
    title: 'SMALL ENOUGH TO CARE. AMBITIOUS ENOUGH TO CHALLENGE.',
    description:
      'We value direct communication, focused collaboration and work that receives real attention.',
    icon: <ShieldCheck size={18} className="text-brand-red" />,
  },
];

export const DifferenceSection: React.FC = () => {
  return (
    <section
      id="difference"
      className="relative w-full py-16 sm:py-24 md:py-32 border-t border-line-border px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      {/* Eyebrow & Headline */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 mb-12 sm:mb-20">
        <div className="max-w-3xl">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-text-secondary font-semibold block mb-3 select-none">
            05 / THE RIWA DIFFERENCE
          </span>
          <h2 className="font-display text-[clamp(2.2rem,6.8vw,4.5rem)] font-extrabold uppercase tracking-tight text-text-primary leading-[1.05]">
            <span>NOT ANOTHER</span><br />
            <span>AGENCY</span>{' '}
            <span className="font-serif italic font-normal tracking-normal text-brand-red text-[1.14em] lowercase select-none">
              playing
            </span>{' '}
            <span>IT SAFE</span><span className="text-brand-red font-bold">.</span>
          </h2>
          <p className="mt-4 font-mono text-xs sm:text-sm text-text-secondary leading-relaxed max-w-2xl">
            We believe good creative work should do more than look good. It should have a point of view, solve a problem and leave something behind. That's why we bring creative thinking, strategic direction and hands-on execution under one roof.
          </p>
        </div>
      </div>

      {/* 4 Editorial Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {PRINCIPLES.map((p, idx) => (
          <motion.div
            key={p.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group relative p-6 sm:p-8 rounded-2xl border border-line-border bg-surface/40 hover:bg-surface/80 hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs font-bold text-brand-red uppercase tracking-widest">
                  {p.number}
                </span>
                <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center">
                  {p.icon}
                </div>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-text-primary group-hover:text-brand-red transition-colors mb-3">
                {p.title}
              </h3>
            </div>

            <p className="font-mono text-xs sm:text-sm text-text-secondary leading-relaxed mt-2">
              {p.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
