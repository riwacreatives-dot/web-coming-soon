import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface SprintStep {
  step: string;
  days: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

const SPRINT_STEPS: SprintStep[] = [
  {
    step: '01',
    days: 'DAYS 01 – 03',
    title: 'Brand & Creative Audit',
    subtitle: 'Direct Founder Session',
    description:
      'We sit down with you to review your past ad performance, unit margins, and what makes your product genuinely remarkable. Zero slide decks. Just honest alignment on what needs to change.',
    deliverables: ['Creative Fatigue Audit', 'Unit Economics Review', 'Competitive Whitespace Map'],
  },
  {
    step: '02',
    days: 'DAYS 04 – 08',
    title: 'Art Direction & Key Visuals',
    subtitle: 'The Creative Workshop',
    description:
      'We craft provocative commercial posters, 3D fluid renders, and scroll-stopping copywriting. Everything is tailored specifically for your brand—no generic templates.',
    deliverables: ['Commercial Ad Posters', '3D CGI Product Visuals', 'Hook & Copywriting Variations'],
  },
  {
    step: '03',
    days: 'DAYS 09 – 11',
    title: 'Campaign Architecture & Launch',
    subtitle: 'Media Deployment',
    description:
      'Clean tracking, server-side CAPI, Meta Advantage+ creative rotation, and high-converting landing pages go live in market under our direct supervision.',
    deliverables: ['Meta & Google P-Max Setup', 'Clean Attribution Tracking', 'Fast Advertorial Landers'],
  },
  {
    step: '04',
    days: 'DAYS 12 – 14',
    title: 'Daily Iteration & Scale',
    subtitle: 'Active Optimization',
    description:
      'We review hook rates, average watch time, and conversion daily. Winning creative receives scaled budget; underperformers are swapped within 24 hours.',
    deliverables: ['Creative Winner Scaling', '24h Asset Iteration', 'Clear Executive Reporting'],
  },
];

export const SprintProcess: React.FC = () => {
  const handleConsult = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full mt-14 md:mt-24 rounded-2xl md:rounded-3xl border border-line-border bg-surface/30 p-5 sm:p-10 md:p-12 shadow-xl backdrop-blur-sm">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-6 sm:pb-8 border-b border-line-border">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-red font-bold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span>HOW WE WORK · THE 14-DAY SPRINT</span>
          </div>
          <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-black uppercase text-text-primary tracking-tight">
            From brief to live campaigns<span className="text-brand-red">.</span>
          </h3>
          <p className="font-mono text-xs sm:text-sm text-text-secondary mt-1 max-w-xl">
            A transparent, founder-led framework designed to ship museum-grade work without the typical 6-week agency lag.
          </p>
        </div>

        <button
          type="button"
          onClick={handleConsult}
          data-cursor-text="BRIEF"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-text-primary text-canvas font-mono text-xs uppercase tracking-wider font-bold hover:bg-brand-red hover:text-white transition-all cursor-pointer self-start md:self-auto shrink-0 shadow-sm"
        >
          <Sparkles size={13} />
          <span>Book a Sprint</span>
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* 4-Step Process Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
        {SPRINT_STEPS.map((step, idx) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col justify-between p-5 rounded-xl border border-line-border bg-surface/40 hover:border-brand-red/40 transition-colors group"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-text-secondary mb-3">
                <span className="font-bold text-brand-red">// {step.step}</span>
                <span className="px-2 py-0.5 rounded-full bg-surface border border-line-border text-[10px] tracking-wider">
                  {step.days}
                </span>
              </div>

              <h4 className="font-display text-lg font-bold uppercase text-text-primary group-hover:text-brand-red transition-colors mb-1">
                {step.title}
              </h4>

              <span className="font-mono text-xs text-text-secondary/70 block mb-3 font-medium">
                {step.subtitle}
              </span>

              <p className="font-mono text-xs text-text-secondary leading-relaxed mb-4">
                {step.description}
              </p>
            </div>

            <div className="pt-3 border-t border-line-border/60 space-y-1.5 font-mono text-[11px] text-text-secondary">
              {step.deliverables.map((d) => (
                <div key={d} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-brand-red shrink-0" />
                  <span className="truncate">{d}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
