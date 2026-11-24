import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="final-cta"
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Electric Red Accent Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
        <div className="w-full max-w-3xl h-64 bg-brand-red/15 filter blur-[120px] rounded-full" />
      </div>

      <div className="p-8 sm:p-14 md:p-20 rounded-3xl border border-brand-red/30 bg-[#111116] text-white shadow-2xl relative">
        <div className="max-w-3xl space-y-6">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-brand-red font-bold block">
            12 / FINAL CALL TO ACTION
          </span>

          <h2 className="font-display text-[clamp(2.4rem,7.5vw,5.5rem)] font-black uppercase tracking-tight text-white leading-[0.98]">
            <span>GOT SOMETHING</span><br />
            <span className="font-serif italic font-normal tracking-normal text-brand-red lowercase text-[1.12em]">
              unreasonable
            </span>{' '}
            <span>IN MIND?</span><br />
            <span>GOOD. WE SHOULD TALK</span><span className="text-brand-red font-black">.</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm md:text-base text-white/70 leading-relaxed max-w-xl">
            Tell us what you're building, what you're imagining or what needs to change. Let's see what we can make happen.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand-red text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:brightness-110 shadow-lg shadow-brand-red/40 transition-all cursor-pointer"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight size={16} />
            </button>

            <a
              href="mailto:riwacreatives@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 hover:border-white text-white font-mono text-xs sm:text-sm uppercase tracking-wider hover:bg-white/5 transition-all"
            >
              <Mail size={15} className="text-brand-red" />
              <span>riwacreatives@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
