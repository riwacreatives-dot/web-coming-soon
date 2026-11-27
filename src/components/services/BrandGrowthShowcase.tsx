import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const STEWARDSHIP_MODES = [
  {
    id: 'governance',
    index: '01',
    label: 'BRAND GUARDRAILS',
    title: 'Keep Every Touchpoint Coherent.',
    summary:
      'Prevent visual and verbal drift after launch. We steward typography, color discipline, campaign layouts, and partner decks as new launches go out.',
    points: [
      'Consistent visual & verbal direction across print and social',
      'Design QA for decks, packaging, and seasonal creative drops',
      'Direct creative leadership without diluted handoffs',
    ],
  },
  {
    id: 'cadence',
    index: '02',
    label: 'CAMPAIGN CADENCE',
    title: 'Continuous Creative Momentum.',
    summary:
      'Plan and ship recurring campaign themes, social series, and announcement assets built around real business calendars rather than reactive posts.',
    points: [
      'Monthly campaign planning & creative briefs',
      'Cohesive launch sprints for new products or menus',
      'Visual refreshes tailored to evolving audience attention',
    ],
  },
  {
    id: 'growth',
    index: '03',
    label: 'GROWTH ALIGNMENT',
    title: 'Creative & Marketing Working As One.',
    summary:
      'Align creative storytelling with structured growth marketing—reviewing audience response and iterating messaging with clear commercial focus.',
    points: [
      'Creative variation testing across priority channels',
      'Clear conversion alignment from ad creative to web destination',
      'Ongoing strategic check-ins focused on brand equity',
    ],
  },
];

export const BrandGrowthShowcase: React.FC = () => {
  const [activeModeId, setActiveModeId] = useState(STEWARDSHIP_MODES[0].id);
  const activeMode = STEWARDSHIP_MODES.find((m) => m.id === activeModeId) || STEWARDSHIP_MODES[0];

  return (
    <section
      id="brand-management-growth-showcase"
      className="relative w-full bg-[#F5F4F0] dark:bg-[#0F0F13] text-[#111116] dark:text-white border-b border-[#111116]/15 dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12">
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="w-4 h-[2px] bg-[#EA1E4D] inline-block" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#C4123D] dark:text-[#FD7D3C] font-bold">
            05 — BRAND MANAGEMENT &amp; GROWTH
          </span>
        </div>

        <h2 className="font-display text-[clamp(2.2rem,5.8vw,4.6rem)] font-extrabold uppercase tracking-tighter text-[#111116] dark:text-white leading-[0.94] mb-12 sm:mb-16 max-w-4xl">
          <span className="block">CONTINUITY BEYOND</span>
          <span className="block">LAUNCH DAY.</span>
          <span className="block font-serif italic font-normal tracking-tight text-[#EA1E4D] text-[1.08em] lowercase mt-1">
            growth with discipline.
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left 5 Cols: Mode Selector */}
          <div className="lg:col-span-5 border-t border-[#111116]/20 dark:border-white/15">
            {STEWARDSHIP_MODES.map((mode) => {
              const isSelected = mode.id === activeMode.id;
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveModeId(mode.id)}
                  className={`w-full text-left py-5 px-4 border-b border-[#111116]/15 dark:border-white/15 flex items-baseline justify-between gap-4 transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#111116] text-white dark:bg-[#1E1E26]'
                      : 'hover:bg-white/60 dark:hover:bg-white/5 text-[#111116] dark:text-white'
                  }`}
                >
                  <div className="flex items-baseline gap-4 min-w-0">
                    <span className={`font-mono text-xs font-bold shrink-0 ${isSelected ? 'text-[#FD7D3C]' : 'text-[#C4123D] dark:text-[#FD7D3C]'}`}>
                      {mode.index} —
                    </span>
                    <div className="space-y-1">
                      <span className="font-display text-lg sm:text-xl font-extrabold uppercase tracking-tight block">
                        {mode.label}
                      </span>
                      <span className={`font-sans text-xs block ${isSelected ? 'text-[#B4B4BE]' : 'text-[#52525B] dark:text-[#B4B4BE]'}`}>
                        {mode.title}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right 7 Cols: Active Stewardship Panel */}
          <div className="lg:col-span-7 bg-[#111116] dark:bg-[#F5F4F0] text-white dark:text-[#111116] border border-[#111116] dark:border-white/20 p-6 sm:p-10 space-y-6 transition-colors">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest pb-4 border-b border-white/15 dark:border-[#111116]/15">
              <span className="text-[#FD7D3C] dark:text-[#C4123D] font-bold">
                STEWARDSHIP MODE // {activeMode.index}
              </span>
              <span className="text-[#B4B4BE] dark:text-[#52525B]">{activeMode.label}</span>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white dark:text-[#111116]">
                {activeMode.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#B4B4BE] dark:text-[#3F3F46] leading-relaxed">
                {activeMode.summary}
              </p>
            </div>

            <ul className="space-y-3 pt-2 border-t border-white/15 dark:border-[#111116]/15 font-mono text-xs sm:text-sm text-white/90 dark:text-[#111116]">
              {activeMode.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-[#FD7D3C] dark:text-[#C4123D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/15 dark:border-[#111116]/15 flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/contact?service=brand-management-growth"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FD7D3C] text-[#111116] dark:bg-[#111116] dark:text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white dark:hover:bg-[#C4123D] transition-colors"
              >
                <span>Discuss Ongoing Partnership</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
