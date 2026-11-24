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

  const [leadFounder, ...squadLeads] = LEADERSHIP_DATA;

  return (
    <div className="w-full bg-[#111116] text-white border-b border-white/10 transition-colors">
      <section
        id="leadership"
        className={`relative w-full ${
          standalone
            ? 'pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-28 md:py-36'
            : 'py-16 sm:py-24 md:py-36'
        } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
      >
        {/* Header Eyebrow & Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-white/60 font-semibold block mb-3 select-none">
              {standalone ? 'STUDIO LEADERSHIP · CREATIVE DIRECTION' : '09 / LEADERSHIP'}
            </span>
            <h2 className="font-display text-[clamp(2.25rem,6.8vw,4.5rem)] font-black uppercase tracking-tight text-white leading-[1.0]">
              <span>DIFFERENT MINDS.</span><br />
              <span>ONE</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
                creative
              </span>{' '}
              <span>DIRECTION</span><span className="text-[#EA1E4D]">.</span>
            </h2>
            <p className="mt-4 max-w-xl font-sans text-sm sm:text-base text-white/70 leading-relaxed">
              Behind every project is a senior squad of thinkers, designers, engineers, and producers who stay close to the craft.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Leadership Spread (Founder Spotlight + Practice Roster) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
          {/* Left 7 Cols: Lead Founder Editorial Profile */}
          <div className="lg:col-span-7 flex">
            {leadFounder && (
              <div className="w-full flex flex-col justify-between p-6 sm:p-10 border border-white/15 bg-[#17171D] relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-white/50 pb-4 mb-6 border-b border-white/10">
                    <span className="text-[#EA1E4D] font-bold">// 01 · FOUNDER &amp; CREATIVE DIRECTOR</span>
                    <span>PRINCIPAL LEAD</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start mb-6">
                    {/* Art-Directed Monogram Portrait Frame */}
                    <div className="sm:col-span-5 aspect-[4/5] bg-[#0B0B0F] border border-white/15 p-4 flex flex-col justify-between relative">
                      <span className="font-mono text-[10px] text-[#FD7D3C] uppercase tracking-widest">
                        STUDIO PORTRAIT
                      </span>
                      <div className="my-auto flex flex-col items-center justify-center text-center py-4">
                        <span className="font-display font-black text-5xl text-white tracking-tighter leading-none">
                          RK<span className="text-[#EA1E4D]">.</span>
                        </span>
                        <span className="font-mono text-[10px] text-white/45 uppercase tracking-wider mt-3">
                          [ PHOTOGRAPHY PENDING ]
                        </span>
                      </div>
                      <div className="font-mono text-[10px] text-white/60 border-t border-white/10 pt-2 flex justify-between">
                        <span>RANJAN KUMAR</span>
                        <span className="text-[#EA1E4D]">DELHI NCR</span>
                      </div>
                    </div>

                    <div className="sm:col-span-7 space-y-4">
                      <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                        {leadFounder.name}
                      </h3>
                      <span className="font-mono text-xs text-[#EA1E4D] font-bold uppercase tracking-wider block">
                        {leadFounder.role}
                      </span>
                      <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed">
                        &ldquo;{leadFounder.bio}&rdquo;
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {leadFounder.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="px-2.5 py-1 border border-white/15 bg-white/5 font-mono text-[11px] text-white/80"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/60">
                  <span>{leadFounder.trackRecord}</span>
                  <a
                    href="#final-cta"
                    className="inline-flex items-center gap-1 text-white font-bold hover:text-[#EA1E4D] transition-colors"
                  >
                    <span>WORK DIRECTLY</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right 5 Cols: Supporting Discipline Leads Stack */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {squadLeads.map((founder, idx) => (
              <FounderCard key={founder.name} founder={founder} index={idx + 1} />
            ))}
          </div>
        </div>

        {/* Active Founder's Office Hiring Call featuring Real Hiring Poster Thumbnail */}
        <div className="border border-[#EA1E4D]/40 bg-[#17171D] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-5">
            <img
              src="/brand/riwa-hiring-poster.jpg"
              alt="Riwa Creatives Founder's Office Hiring Poster"
              loading="lazy"
              className="hidden sm:block w-16 h-20 object-cover border border-white/20 shrink-0"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FD7D3C] font-bold flex items-center gap-1.5">
                  <Sparkles size={13} /> Active Hiring Call · Senior Creative Squad
                </span>
              </div>
              <h4 className="font-display text-xl font-bold uppercase text-white">
                We&apos;re Hiring: Founder&apos;s Office Role
              </h4>
              <p className="font-sans text-xs sm:text-sm text-white/70 mt-1">
                &ldquo;We need a right-hand person who thinks like a founder and creates like an artist.&rdquo;
              </p>
            </div>
          </div>

          {isMobile ? (
            <button
              type="button"
              onClick={() => setIsCareersOpen(true)}
              className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 rounded-full bg-[#EA1E4D] text-white font-mono text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shrink-0 w-full touch-manipulation"
            >
              <span>Apply to Founder&apos;s Office</span>
              <ArrowUpRight size={14} />
            </button>
          ) : (
            <a
              href="mailto:riwacreatives@gmail.com?subject=Application%20—%20Founder%27s%20Office%20Role"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#EA1E4D] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shrink-0"
            >
              <span>Apply to Founder&apos;s Office</span>
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>

        <RegionalHubModal
          type={isCareersOpen ? 'careers' : null}
          onClose={() => setIsCareersOpen(false)}
        />
      </section>
    </div>
  );
};
