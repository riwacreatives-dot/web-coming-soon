import React, { useState } from 'react';
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
    <div className="w-full bg-[#111116] text-white border-b border-white/10 transition-colors">
      <section
        id="leadership"
        className={`relative w-full ${
          standalone
            ? 'pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-28 md:py-36'
            : 'py-16 sm:py-24 md:py-36'
        } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
      >
        <div className="max-w-2xl mb-12 sm:mb-16">
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
            Founder-led creative direction working closely with confirmed design, engineering, and event collaborators.
          </p>
        </div>

        {/* Editorial Portrait Gallery Frame (Zero Fake Team Profiles) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
          <div className="lg:col-span-5 bg-[#0B0B0F] border border-white/15 p-6 flex flex-col justify-between min-h-[360px]">
            <div className="flex items-center justify-between font-mono text-[10px] text-white/50 uppercase tracking-widest pb-3 border-b border-white/10">
              <span>PORTRAIT PLATE // 01</span>
              <span className="text-[#EA1E4D] font-bold">FOUNDER</span>
            </div>

            <div className="my-auto py-12 flex flex-col items-center justify-center text-center">
              <div className="w-28 h-28 rounded-full border border-white/20 bg-[#17171D] flex items-center justify-center mb-4">
                <span className="font-display text-4xl font-black text-white">
                  RK<span className="text-[#EA1E4D]">.</span>
                </span>
              </div>
              <span className="font-mono text-[11px] text-white/55 uppercase tracking-widest">
                [ REAL PORTRAIT PENDING UPLOAD ]
              </span>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/70">
              <span>RANJAN KUMAR</span>
              <span className="text-[#EA1E4D]">FOUNDER &amp; CD</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 border border-white/15 bg-[#17171D]">
            <div className="space-y-5">
              <div>
                <span className="font-mono text-xs text-[#EA1E4D] font-bold uppercase tracking-widest block mb-1.5">
                  Confirmed Studio Principal
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                  Ranjan Kumar
                </h3>
                <span className="font-mono text-xs text-white/60 block mt-1">
                  Founder &amp; Creative Director
                </span>
              </div>

              <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed">
                Founded Riwa Creatives around curiosity, collaboration, and the ambition to build brands and campaigns that stand apart. Works directly with founders and event organizers across brand identity, commercial art direction, growth, and live experiences.
              </p>

              <div className="pt-4 border-t border-white/10">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 font-bold block mb-3">
                  Lead Responsibilities
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Creative Direction',
                    'Brand Strategy & Stewardship',
                    'Commercial Advertising',
                    'Experience Architecture',
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 border border-white/15 bg-white/5 font-mono text-xs text-white/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <span className="text-white/50">
                Additional confirmed portraits &amp; collaborator profiles will be added upon photo delivery.
              </span>
              <a
                href="mailto:riwacreatives@gmail.com"
                className="inline-flex items-center gap-1.5 text-[#EA1E4D] font-bold hover:underline"
              >
                <span>Direct Founder Desk</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Genuine Studio Hiring Call with Official Poster Visual */}
        <div className="border border-[#EA1E4D]/40 bg-[#17171D] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-5">
            <img
              src="/brand/riwa-hiring-poster.jpg"
              alt="Riwa Creatives Founder's Office Hiring Poster"
              loading="lazy"
              className="hidden sm:block w-16 h-20 object-cover border border-white/20 shrink-0"
            />
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FD7D3C] font-bold flex items-center gap-1.5 mb-1">
                <Sparkles size={13} /> Open Role · Join The Collective
              </span>
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
