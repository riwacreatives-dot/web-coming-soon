import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Building2, Users } from 'lucide-react';

interface Audience {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AUDIENCES: Audience[] = [
  {
    id: 'startups',
    number: '01',
    title: 'STARTUPS & FOUNDERS',
    description: 'For people turning an idea into a brand, a product or a business.',
    icon: <Sparkles size={18} className="text-brand-red" />,
  },
  {
    id: 'growing-biz',
    number: '02',
    title: 'GROWING BUSINESSES',
    description:
      'For established businesses ready to sharpen their identity, improve their digital presence and reach new audiences.',
    icon: <TrendingUp size={18} className="text-brand-red" />,
  },
  {
    id: 'brands',
    number: '03',
    title: 'BRANDS & ORGANIZATIONS',
    description:
      'For teams looking for fresh creative thinking, compelling campaigns and meaningful brand communication.',
    icon: <Building2 size={18} className="text-brand-red" />,
  },
  {
    id: 'events',
    number: '04',
    title: 'EVENTS & COMMUNITIES',
    description:
      'For organizers creating experiences, building communities and bringing people together.',
    icon: <Users size={18} className="text-brand-red" />,
  },
];

export const WhoWeWorkWithSection: React.FC = () => {
  return (
    <section
      id="audiences"
      className="relative w-full py-16 sm:py-24 md:py-32 border-t border-line-border px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      {/* Eyebrow & Headline */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 mb-12 sm:mb-20">
        <div className="max-w-3xl">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-text-secondary font-semibold block mb-3 select-none">
            07 / WHO WE WORK WITH
          </span>
          <h2 className="font-display text-[clamp(2.2rem,6.8vw,4.5rem)] font-extrabold uppercase tracking-tight text-text-primary leading-[1.05]">
            <span>FOR THE AMBITIOUS,</span><br />
            <span>THE CURIOUS AND</span>{' '}
            <span className="font-serif italic font-normal tracking-normal text-brand-red text-[1.14em] lowercase select-none">
              the
            </span>{' '}
            <span>READY</span><span className="text-brand-red font-bold">.</span>
          </h2>
          <p className="mt-4 font-mono text-xs sm:text-sm text-text-secondary leading-relaxed max-w-2xl">
            We work with people building something worth noticing.
          </p>
        </div>
      </div>

      {/* 4 Audience Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {AUDIENCES.map((a, idx) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="p-6 sm:p-7 rounded-2xl border border-line-border bg-surface/40 hover:bg-surface/80 hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-brand-red uppercase tracking-widest">
                  {a.number}
                </span>
                <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center">
                  {a.icon}
                </div>
              </div>

              <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-text-primary mb-2">
                {a.title}
              </h3>
            </div>

            <p className="font-mono text-xs sm:text-sm text-text-secondary leading-relaxed mt-4">
              {a.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Shared Belief Footer Tag */}
      <div className="mt-10 p-5 rounded-xl border border-line-border bg-surface/30 font-mono text-xs sm:text-sm text-center text-text-secondary">
        <span>Different industries. Different ambitions. One shared belief: </span>
        <span className="text-brand-red font-bold">ordinary isn't the goal.</span>
      </div>
    </section>
  );
};
