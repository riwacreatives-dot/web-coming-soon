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
      "We don't start with templates or predictable playbooks. We start by deeply understanding the brand, the cultural audience and the commercial opportunity.",
    icon: <Brain size={18} className="text-[#FD7D3C]" />,
  },
  {
    number: '02',
    title: 'CREATIVE WITHOUT COMPROMISE',
    description:
      'We challenge safe, generic ideas. We push for work that possesses its own distinct graphic identity, voice and unforgettable character.',
    icon: <Flame size={18} className="text-[#FD7D3C]" />,
  },
  {
    number: '03',
    title: 'BUILT TO EXECUTE',
    description:
      'A brilliant idea means nothing if it dies inside a presentation deck. We stay close to execution from the first frame to the final production asset.',
    icon: <Layers size={18} className="text-[#FD7D3C]" />,
  },
  {
    number: '04',
    title: 'SMALL ENOUGH TO CARE. AMBITIOUS ENOUGH TO CHALLENGE.',
    description:
      'No junior layers or bureaucratic account managers. You collaborate directly with senior creative directors, strategists and makers who own the work.',
    icon: <ShieldCheck size={18} className="text-[#FD7D3C]" />,
  },
];

export const DifferenceSection: React.FC = () => {
  return (
    <div className="w-full bg-[#DAD8D1] text-[#171719] border-b border-[#171719]/15 transition-colors">
      <section
        id="difference"
        className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        {/* Top Eyebrow */}
        <div className="mb-4">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.24em] text-[#605F5B] font-semibold block select-none">
            04 / THE RIWA DIFFERENCE
          </span>
        </div>

        {/* 12-Column Swiss Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Full Editorial Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="font-display text-[clamp(2.3rem,6vw,4.2rem)] font-extrabold uppercase tracking-tight text-[#171719] leading-[0.98]">
              <span>NOT ANOTHER</span><br />
              <span>AGENCY.</span><br />
              <span>IT'S A</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-[#FD7D3C] text-[1.12em] lowercase select-none">
                different
              </span><br />
              <span>WAY OF THINKING</span><span className="text-[#FD7D3C] font-bold">.</span>
            </h2>

            <p className="mt-5 font-sans text-sm sm:text-base text-[#4F4E4A] leading-relaxed max-w-md">
              We believe good creative work should do more than look good. It should have a point of view, solve a problem and leave something behind. That's why we bring creative thinking, strategic direction and hands-on execution under one roof.
            </p>

            <div className="mt-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#171719]/20 bg-[#F4F1EA] font-mono text-xs uppercase tracking-wider text-[#171719] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FD7D3C] animate-pulse" />
              <span>Zero Templates · 100% Intention</span>
            </div>
          </div>

          {/* Right Column: Stacked Meaningful Differentiators */}
          <div className="lg:col-span-7 border-t border-[#171719]/20 divide-y divide-[#171719]/20">
            {PRINCIPLES.map((p, idx) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="group py-6 sm:py-8 transition-all duration-300 md:hover:px-3 md:hover:bg-[#F4F1EA]/50"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#FD7D3C] uppercase tracking-widest">
                    // {p.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F4F1EA] border border-[#171719]/20 flex items-center justify-center text-[#FD7D3C]">
                    {p.icon}
                  </div>
                </div>

                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight text-[#171719] mb-2">
                  {p.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#4F4E4A] leading-relaxed max-w-xl">
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
