import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const EDITORIAL_PILLARS = [
  {
    label: '01 / ORIGIN',
    title: 'Born From Conviction, Not Convention',
    copy: 'Founded by Ranjan Kumar to replace predictable templates and bloated agency hierarchies with high-conviction creative direction and accountable execution.',
  },
  {
    label: '02 / CREATIVE PHILOSOPHY',
    title: 'Ideas With Intention & Taste',
    copy: "We don't treat design as surface decoration. Every campaign headline, visual identity system, and digital flow is built to hold cultural weight and drive action.",
  },
  {
    label: '03 / MULTIDISCIPLINARY APPROACH',
    title: 'One Connected Studio Thesis',
    copy: 'Branding, commercial advertising, digital growth, interactive web engineering, and live event production operate together—so your brand never fragments across vendors.',
  },
  {
    label: '04 / HOW WE WORK & AMBITIONS',
    title: 'Direct Access. Lasting Momentum.',
    copy: 'Clients collaborate directly with senior creative makers from brief to launch. Our ambition is simple: help bold founders and organizations build brands people remember.',
  },
];

export const AboutRiwaSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#F5F4F0] dark:bg-[#14141A] text-[#111116] dark:text-white border-b border-[#111116]/15 dark:border-white/10 transition-colors">
      <section
        id="about"
        className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Sticky Editorial Frame & Authentic Studio Emblem */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div>
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 font-semibold block mb-3 select-none">
                07 / ABOUT RIWA
              </span>
              <h2 className="font-display text-[clamp(2.3rem,6vw,4.3rem)] font-black uppercase tracking-tight text-[#111116] dark:text-white leading-[0.98]">
                <span>WE&apos;RE HERE</span><br />
                <span>TO MAKE THINGS</span><br />
                <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
                  matter
                </span><span className="text-[#EA1E4D]">.</span>
              </h2>
            </div>

            <div className="border border-[#111116] dark:border-white/20 bg-[#111116] p-5 sm:p-6 shadow-[8px_8px_0px_#111116] dark:shadow-[8px_8px_0px_rgba(253,125,60,0.3)]">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/60 pb-3 mb-4 border-b border-white/15">
                <span>STUDIO IDENTITY // EMBLEM</span>
                <span className="text-[#FD7D3C]">INDEPENDENT</span>
              </div>
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#111116] flex items-center justify-center p-4">
                <img
                  src="/brand/riwa-logo-official.png"
                  alt="Riwa Creatives Official Crow Logo"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="pt-3 mt-4 border-t border-white/15 flex items-center justify-between font-mono text-[10px] text-white/70 uppercase tracking-wider">
                <span>FOUNDED BY RANJAN KUMAR</span>
                <span>STUDIO PHOTO PENDING</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate('/about')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111116] dark:bg-white text-white dark:text-[#111116] hover:bg-[#EA1E4D] dark:hover:bg-[#EA1E4D] dark:hover:text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
            >
              <span>Read Full Studio Story</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Right Column: Structured 5-Theme Founder-Led Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 border-l-4 border-[#EA1E4D] bg-white dark:bg-[#1D1D24]">
              <p className="font-display font-bold text-xl sm:text-2xl text-[#111116] dark:text-white leading-snug mb-3">
                Riwa Creatives is an independent creative and growth studio built around a simple belief: ambitious ideas deserve ambitious execution.
              </p>
              <p className="font-serif italic text-lg sm:text-xl text-[#52525B] dark:text-white/75">
                &ldquo;We&apos;re not here to make more of the same. We&apos;re here to make what comes next.&rdquo;
              </p>
            </div>

            <div className="border-t border-[#111116]/20 dark:border-white/15 divide-y divide-[#111116]/20 dark:divide-white/15">
              {EDITORIAL_PILLARS.map((pillar) => (
                <div key={pillar.label} className="py-6 sm:py-7">
                  <span className="font-mono text-xs font-bold text-[#EA1E4D] uppercase tracking-widest block mb-2">
                    {pillar.label}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-black uppercase tracking-tight text-[#111116] dark:text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#3F3F46] dark:text-white/75 leading-relaxed">
                    {pillar.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
