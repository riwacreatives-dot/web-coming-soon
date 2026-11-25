import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#EA1E4D] text-white border-y border-[#111116]/15 transition-colors relative overflow-hidden">
      <section
        id="final-cta"
        className="relative z-10 w-full py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <div className="max-w-5xl space-y-6">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#111116] font-black block">
            13 / FINAL CALL TO ACTION
          </span>

          <h2 className="font-display text-[clamp(2.5rem,8vw,6.2rem)] font-black uppercase tracking-tighter text-white leading-[0.93]">
            <span>GOT SOMETHING</span><br />
            <span className="font-serif italic font-normal tracking-normal text-[#111116] lowercase text-[1.15em]">
              unreasonable
            </span>{' '}
            <span>IN MIND?</span><br />
            <span className="block mt-2">
              GOOD. WE SHOULD TALK<span className="text-[#111116]">.</span>
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg md:text-xl text-white/95 font-medium leading-relaxed max-w-2xl">
            A brand to build. A campaign to launch. An experience to create. Tell us what you&apos;re imagining.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#111116] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#111116] transition-all cursor-pointer shadow-xl"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight size={16} />
            </button>

            <a
              href="mailto:riwacreatives@gmail.com"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full border-2 border-[#111116] text-[#111116] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#111116] hover:text-white transition-all"
            >
              <Mail size={15} />
              <span>riwacreatives@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
