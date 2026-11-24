import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

const REASONS = [
  {
    number: '01',
    title: 'DIRECT SENIOR MAKER ACCESS',
    desc: 'You work directly with the creative director, principal strategists and lead engineers who actually craft your brand. No account handlers or junior handoffs.',
  },
  {
    number: '02',
    title: 'HOLISTIC DISCIPLINE CONVERGENCE',
    desc: 'Brand positioning, commercial copy, digital code, motion art and physical event staging are designed together under one unified creative thesis.',
  },
  {
    number: '03',
    title: 'FOCUSED 14-DAY SPRINT VELOCITY',
    desc: 'We operate in disciplined, high-velocity sprints. Ideas move from strategic whiteboard to live production-ready assets without lingering agency bureaucracy.',
  },
  {
    number: '04',
    title: 'COMMERCIAL INTENTION × PURE CRAFT',
    desc: 'Every pixel, word and interaction serves your commercial objectives: revenue growth, brand valuation, customer recall and cultural authority.',
  },
];

export const WhyRiwaSection: React.FC = () => {
  return (
    <div className="w-full bg-[#F4F1EA] text-[#171719] border-b border-[#171719]/15 transition-colors">
      <section
        id="why-riwa"
        className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Monumental Headline */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.24em] text-[#767571] font-semibold block mb-4 select-none">
              09 / WHY RIWA CREATIVES
            </span>

            <h2 className="font-display text-[clamp(2.3rem,6vw,4.2rem)] font-extrabold uppercase tracking-tight text-[#171719] leading-[0.98]">
              <span>GOOD WORK</span><br />
              <span>SPEAKS.</span><br />
              <span>SO DO THE</span><br />
              <span className="font-serif italic font-normal tracking-normal text-[#FD7D3C] text-[1.12em] lowercase select-none">
                people
              </span>{' '}
              <span>BEHIND IT</span><span className="text-[#FD7D3C] font-bold">.</span>
            </h2>

            <p className="mt-5 font-sans text-sm sm:text-base text-[#605F5B] leading-relaxed max-w-md">
              Ambitious founders don't need another generic agency playing it safe. They need partners with taste, technical depth and the courage to execute ideas that refuse to be ignored.
            </p>

            <div className="mt-8 p-6 rounded-2xl border border-[#171719]/15 bg-white shadow-sm">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#FD7D3C] font-bold block mb-1">
                ✦ INDEPENDENT STUDIO ETHOS
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#171719] font-medium leading-relaxed">
                "We take on a limited number of brand engagements each quarter to ensure uncompromised senior focus and extraordinary output."
              </p>
            </div>
          </div>

          {/* Right Column: 4 Editorial Differentiators */}
          <div className="lg:col-span-7 border-t border-[#171719]/20 divide-y divide-[#171719]/20">
            {REASONS.map((r, idx) => (
              <motion.div
                key={r.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="py-7 sm:py-9 transition-all duration-300 md:hover:px-3 md:hover:bg-white/40"
              >
                <div className="flex items-center gap-3 mb-2 font-mono text-xs font-bold text-[#FD7D3C]">
                  <span>// {r.number}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FD7D3C]" />
                </div>

                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight text-[#171719] mb-2">
                  {r.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#605F5B] leading-relaxed">
                  {r.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
