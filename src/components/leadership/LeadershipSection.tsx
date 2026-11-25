import React, { useState } from 'react';
import { LEADERSHIP_DATA } from '../../data/leadershipData';
import { FounderCard } from './FounderCard';
import { RegionalHubModal } from '../footer/RegionalHubModal';
import { useIsMobile } from '../../hooks/useIsMobile';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface LeadershipSectionProps {
  standalone?: boolean;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ standalone = false }) => {
  const isMobile = useIsMobile();
  const [isCareersOpen, setIsCareersOpen] = useState(false);

  return (
    <section
      id="leadership"
      className={`relative w-full ${
        standalone
          ? 'pt-24 sm:pt-32 md:pt-36 pb-14 sm:pb-28 md:py-36'
          : 'py-14 sm:py-28 md:py-36 border-t border-line-border'
      } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
    >
      {/* Header Eyebrow */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-20">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-text-secondary font-semibold block mb-3 select-none">
            {standalone
              ? '05 / STUDIO LEADERSHIP · SENIOR ARCHITECTS'
              : '05 / STUDIO LEADERSHIP & SENIOR ARCHITECTS'}
          </span>
          {standalone ? (
            <h1 className="font-display text-[clamp(2.4rem,7vw,5.5rem)] font-extrabold uppercase tracking-tight text-text-primary leading-[1.05]">
              <span>FOUNDER</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-brand-red text-[1.14em] lowercase select-none">
                led
              </span><span className="text-brand-red font-bold">.</span><br />
              <span>ARTIST</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-brand-red text-[1.14em] lowercase select-none">
                built
              </span><span className="text-brand-red font-bold">.</span>
            </h1>
          ) : (
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-text-primary leading-[1.08]">
              <span>FOUNDER</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-brand-red text-[1.14em] lowercase select-none">
                led
              </span><span className="text-brand-red font-bold">.</span><br />
              <span>ARTIST</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-brand-red text-[1.14em] lowercase select-none">
                built
              </span><span className="text-brand-red font-bold">.</span>
            </h2>
          )}
        </div>

        <p className="max-w-md font-mono text-xs sm:text-sm text-text-secondary leading-relaxed">
          We reject the traditional agency model of winning accounts with founders then delegating delivery to entry-level interns<span className="text-brand-red font-bold">.</span> Every sprint is architected and executed directly by <span className="text-brand-red font-bold">senior partners</span><span className="text-brand-red font-bold">.</span>
        </p>
      </div>

      {/* 2-Column Founder Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {LEADERSHIP_DATA.map((founder, idx) => (
          <FounderCard key={founder.name} founder={founder} index={idx} />
        ))}
      </div>

      {/* Active Founder's Office Hiring Spotlight Banner */}
      <div className="rounded-2xl border border-line-border bg-surface/30 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start sm:items-center gap-4">
          <div className="p-3 rounded-xl bg-surface border border-line-border text-brand-red shrink-0">
            <Sparkles size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold">
                ✦ Active Hiring Call · Senior Creative Squad
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <h4 className="font-display text-xl font-bold uppercase text-text-primary">
              We're Hiring: Founder's Office Role
            </h4>
            <p className="font-mono text-xs sm:text-sm text-text-secondary mt-0.5">
              "We need a right-hand person who thinks like a founder and executes like an artist."
            </p>
          </div>
        </div>

        {/* Mobile opens interactive Bottom Sheet (with pitch, email copy & mailto); Desktop preserves direct mailto */}
        {isMobile ? (
          <button
            type="button"
            onClick={() => setIsCareersOpen(true)}
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 rounded-full bg-text-primary text-canvas font-mono text-xs font-bold uppercase tracking-wider hover:bg-brand-red hover:text-white transition-all cursor-pointer shrink-0 shadow-sm w-full touch-manipulation"
          >
            <span>Apply to Founder's Office</span>
            <ArrowUpRight size={14} />
          </button>
        ) : (
          <a
            href="mailto:riwacreatives@gmail.com?subject=Application%20—%20Founder%27s%20Office%20Role"
            data-cursor-text="APPLY"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-text-primary text-canvas font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-brand-red hover:text-white transition-all cursor-pointer shrink-0 shadow-sm w-full sm:w-auto"
          >
            <span>Apply to Founder's Office</span>
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>

      {/* Interactive Bottom Sheet for Mobile Founder's Office CTA */}
      <RegionalHubModal
        type={isCareersOpen ? 'careers' : null}
        onClose={() => setIsCareersOpen(false)}
      />
    </section>
  );
};
