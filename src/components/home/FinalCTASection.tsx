import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#171719] text-[#F4F1EA] border-b border-[#2C2C30] transition-colors relative overflow-hidden">
      <section
        id="final-cta"
        className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <div className="p-8 sm:p-14 md:p-20 rounded-3xl border border-[#2C2C30] bg-[#1F1F23] text-[#F4F1EA] shadow-2xl relative overflow-hidden">
          {/* Subtle Orange Glow Ambient Corner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FD7D3C]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#FD7D3C] font-bold block">
              11 / CONTACT CTA
            </span>

            <h2 className="font-display text-[clamp(2.4rem,7.5vw,5.5rem)] font-extrabold uppercase tracking-tight text-[#F4F1EA] leading-[0.95]">
              <span>GOT SOMETHING</span><br />
              <span className="font-serif italic font-normal tracking-normal text-[#FD7D3C] lowercase text-[1.14em]">
                unreasonable
              </span><br />
              <span>IN MIND?</span><br />
              <span className="block mt-2">GOOD. WE SHOULD TALK<span className="text-[#FD7D3C]">.</span></span>
            </h2>

            <p className="font-sans text-sm sm:text-base md:text-lg text-[#9E9D98] leading-relaxed max-w-xl">
              Tell us what you're building, what you're imagining or what needs to change. From a full rebrand to high-stakes campaign launches, let's see what we can make happen.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FD7D3C] text-[#171719] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:brightness-105 active:scale-95 shadow-lg shadow-[#FD7D3C]/20 transition-all cursor-pointer"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight size={16} />
              </button>

              <a
                href="mailto:hello@riwacreatives.in"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-[#2C2C30] hover:border-[#FD7D3C] text-[#F4F1EA] font-mono text-xs sm:text-sm uppercase tracking-wider hover:bg-[#171719] transition-all"
              >
                <Mail size={15} className="text-[#FD7D3C]" />
                <span>hello@riwacreatives.in</span>
              </a>

              <a
                href="https://wa.me/919999999999?text=Hi%20Riwa%20Creatives,%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-[#2C2C30] hover:border-emerald-500 text-[#F4F1EA] font-mono text-xs sm:text-sm uppercase tracking-wider hover:bg-[#171719] transition-all"
              >
                <MessageSquare size={15} className="text-emerald-400" />
                <span>WhatsApp Sprint</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
