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
    <div className="w-full bg-[#EBEAE6] dark:bg-[#0c0e13] border-y border-line-border transition-colors">
      <section
        id="difference"
        className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        {/* Header Eyebrow & Headline Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
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

          <div className="shrink-0 self-start md:self-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line-border bg-surface font-mono text-xs uppercase tracking-wider text-text-primary shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span>Zero Templates · 100% Intention</span>
            </div>
          </div>
        </div>

        {/* 4 Editorial Horizontal Manifesto Rows */}
        <div className="border-t border-b border-line-border divide-y divide-line-border">
          {PRINCIPLES.map((p, idx) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="group py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start transition-all duration-300 md:hover:px-4 md:hover:bg-surface/30 cursor-default"
            >
              {/* Number & Icon */}
              <div className="md:col-span-2 flex items-center gap-3">
                <span className="font-mono text-sm sm:text-base font-bold text-brand-red uppercase tracking-widest">
                  // {p.number}
                </span>
                <div className="w-8 h-8 rounded-full bg-surface border border-line-border flex items-center justify-center text-text-secondary group-hover:text-brand-red group-hover:border-brand-red transition-all">
                  {p.icon}
                </div>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight text-text-primary group-hover:text-brand-red transition-colors">
                  {p.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
