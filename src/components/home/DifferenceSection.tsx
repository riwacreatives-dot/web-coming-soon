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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Editorial Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-text-secondary font-semibold block mb-3 select-none">
              05 / THE RIWA DIFFERENCE
            </span>
            <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold uppercase tracking-tight text-text-primary leading-[1.02]">
              <span>NOT ANOTHER</span><br />
              <span>AGENCY</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-brand-red text-[1.14em] lowercase select-none">
                playing
              </span><br />
              <span>IT SAFE</span><span className="text-brand-red font-bold">.</span>
            </h2>
            <p className="mt-5 font-mono text-xs sm:text-sm text-text-secondary leading-relaxed max-w-md">
              We believe good creative work should do more than look good. It should have a point of view, solve a problem and leave something behind. That's why we bring creative thinking, strategic direction and hands-on execution under one roof.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line-border bg-surface/70 font-mono text-xs uppercase tracking-wider text-text-primary">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span>Zero Templates · 100% Intention</span>
            </div>
          </div>

          {/* Right Asymmetrical Typographic Rows */}
          <div className="lg:col-span-7 divide-y divide-line-border border-t border-b border-line-border">
            {PRINCIPLES.map((p, idx) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="group py-8 sm:py-10 transition-all duration-300 hover:pl-3 cursor-default"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs sm:text-sm font-bold text-brand-red uppercase tracking-widest">
                    // {p.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-surface border border-line-border flex items-center justify-center text-text-secondary group-hover:text-brand-red group-hover:border-brand-red transition-all">
                    {p.icon}
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-text-primary group-hover:text-brand-red transition-colors mb-3">
                  {p.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
