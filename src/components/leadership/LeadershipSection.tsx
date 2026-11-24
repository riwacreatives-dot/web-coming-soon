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
    <div className="w-full bg-[#171719] text-[#F4F1EA] border-b border-[#2C2C30] transition-colors">
      <section
        id="leadership"
        className={`relative w-full ${
          standalone
            ? 'pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-28 md:py-36'
            : 'py-16 sm:py-24 md:py-36'
        } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
      >
        {/* Header Eyebrow & Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.24em] text-[#9E9D98] font-semibold block mb-3 select-none">
              {standalone ? 'STUDIO LEADERSHIP · CREATIVE DIRECTION' : '07 / DIFFERENT MINDS. ONE DIRECTION.'}
            </span>
            <h2 className="font-display text-[clamp(2.2rem,6.8vw,4.5rem)] font-extrabold uppercase tracking-tight text-[#F4F1EA] leading-[1.02]">
              <span>DIFFERENT MINDS.</span><br />
              <span>ONE</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-[#FD7D3C] text-[1.14em] lowercase select-none">
                creative
              </span>{' '}
              <span>DIRECTION</span><span className="text-[#FD7D3C] font-bold">.</span>
            </h2>
            <p className="mt-4 max-w-xl font-sans text-sm sm:text-base text-[#9E9D98] leading-relaxed">
              Behind every project is a squad of people who think, challenge, build and execute. Meet the disciplines and minds shaping the work at Riwa Creatives.
            </p>
          </div>
        </div>

        {/* Asymmetrical Editorial Leadership Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {LEADERSHIP_DATA.map((founder, idx) => (
            <FounderCard key={founder.name} founder={founder} index={idx} />
          ))}
        </div>

        {/* Active Founder's Office Hiring Spotlight Banner */}
        <div className="rounded-2xl border border-[#FD7D3C]/40 bg-[#1F1F23] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3 rounded-xl bg-[#FD7D3C]/10 border border-[#FD7D3C]/30 text-[#FD7D3C] shrink-0">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FD7D3C] font-bold">
                  ✦ Active Hiring Call · Senior Creative Squad
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <h4 className="font-display text-xl font-bold uppercase text-[#F4F1EA]">
                We're Hiring: Founder's Office Role
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#9E9D98] mt-0.5">
                "We need a right-hand person who thinks like a founder and executes like an artist."
              </p>
            </div>
          </div>

          {isMobile ? (
            <button
              type="button"
              onClick={() => setIsCareersOpen(true)}
              className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 rounded-full bg-[#FD7D3C] text-[#171719] font-mono text-xs font-bold uppercase tracking-wider hover:brightness-105 transition-all cursor-pointer shrink-0 shadow-md w-full touch-manipulation"
            >
              <span>Apply to Founder's Office</span>
              <ArrowUpRight size={14} />
            </button>
          ) : (
            <a
              href="mailto:hello@riwacreatives.in?subject=Application%20—%20Founder%27s%20Office%20Role"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FD7D3C] text-[#171719] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:brightness-105 transition-all cursor-pointer shrink-0 shadow-md w-full sm:w-auto"
            >
              <span>Apply to Founder's Office</span>
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>

        {/* Modal for Mobile Careers */}
        <RegionalHubModal
          type={isCareersOpen ? 'careers' : null}
          onClose={() => setIsCareersOpen(false)}
        />
      </section>
    </div>
  );
};
