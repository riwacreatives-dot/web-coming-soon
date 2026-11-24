import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const AboutRiwaSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#E7E7E9] text-[#111116] border-b border-[#111116]/15 transition-colors">
      <section
        id="about"
        className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        {/* Editorial Magazine Spread Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Oversized Magazine Display & Official Crow Emblem Spread */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#52525B] font-semibold block mb-3 select-none">
                07 / ABOUT RIWA — STUDIO EDITORIAL
              </span>
              <h2 className="font-display text-[clamp(2.3rem,6.4vw,4.5rem)] font-black uppercase tracking-tight text-[#111116] leading-[0.98]">
                <span>WE&apos;RE HERE</span><br />
                <span>TO MAKE</span><br />
                <span>THINGS</span>{' '}
                <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
                  matter
                </span><span className="text-[#EA1E4D]">.</span>
              </h2>
            </div>

            {/* Print-Inspired Brand Visual Plate */}
            <div className="relative border border-[#111116] bg-[#111116] p-4 sm:p-6 shadow-[8px_8px_0px_#111116]">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/60 pb-3 mb-4 border-b border-white/15">
                <span>FIG. 01 // RIWA CROW IDENTITY</span>
                <span className="text-[#FD7D3C]">OFFICIAL MASCOT</span>
              </div>
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#111116] flex items-center justify-center">
                <img
                  src="/brand/riwa-crow-mascot.jpg"
                  alt="Riwa Creatives Official Crow Mascot"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="pt-3 mt-4 border-t border-white/15 flex items-center justify-between font-mono text-[10px] text-white/70 uppercase tracking-wider">
                <span>FOUNDED BY RANJAN KUMAR</span>
                <span>DELHI NCR · INDIA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Magazine Essay & Creed Pull-Quote */}
          <div className="lg:col-span-6 lg:pt-10 space-y-6 font-sans text-sm sm:text-base md:text-lg text-[#3F3F46] leading-relaxed">
            <p className="font-display font-bold text-xl sm:text-2xl text-[#111116] leading-snug">
              Riwa Creatives is an independent creative and growth studio built around a simple conviction:{' '}
              <span className="text-[#EA1E4D]">ambitious ideas deserve unreasonable execution.</span>
            </p>

            <p>
              We bring together creative directors, strategic thinkers, technologists, and live experience producers to help businesses communicate sharply, build iconic visual brands, and create experiences that audiences actually care about.
            </p>

            <p>
              We do not believe in decoration for its own sake. We believe in strategy before craft, ideas with cultural tension, and execution tight enough to move commercial needles.
            </p>

            <p>
              Founded by <strong className="text-[#111116]">Ranjan Kumar</strong>, Riwa is built around curiosity, direct founder collaboration, and the refusal to produce forgettable work.
            </p>

            {/* Pull-Quote Editorial Block */}
            <div className="p-6 sm:p-8 border-l-4 border-[#EA1E4D] bg-white my-8">
              <p className="font-serif italic text-xl sm:text-2xl text-[#111116] leading-snug">
                &ldquo;We&apos;re not here to make more of the same. We&apos;re here to make what comes next.&rdquo;
              </p>
              <span className="font-mono text-xs uppercase tracking-widest text-[#EA1E4D] block mt-3 font-bold">
                — THE RIWA CREED
              </span>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => navigate('/about')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111116] hover:bg-[#EA1E4D] text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                <span>Read Our Full Story</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
