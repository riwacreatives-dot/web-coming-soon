import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const VERIFIED_WORK_OUTCOMES = [
  {
    id: 'proof-01',
    tag: 'VERIFIED CLIENT RELEASE // COMMERCIAL',
    client: 'Solanas Chinese • Thai',
    project: 'Hotter Than Baddies & Dim Sum Silk Dynamics',
    outcome: '+420% Weekend Orders · +340% Dinner Inbounds',
    note: 'Campaign poster direction and signature hero key visuals driving organic sharing and weekend dining volume.',
    link: '/work/solanas-baddies',
  },
  {
    id: 'proof-02',
    tag: 'VERIFIED AD METRIC // PAID SOCIAL',
    client: 'Solanas Chinese • Thai',
    project: 'Sushi Condensed Key Art Platter',
    outcome: '6.2% CTR on Meta Ads',
    note: 'Brutalist kinetic typography crop engineered for immediate thumb-stop interruption in local social feeds.',
    link: '/work/solanas-sushi',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] dark:bg-[#0B0B0F] text-[#111116] dark:text-white border-b border-[#111116]/15 dark:border-white/10 transition-colors">
      <section
        id="testimonials"
        className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 font-semibold block mb-3 select-none">
              11 / TESTIMONIALS &amp; PROOF
            </span>
            <h2 className="font-display text-[clamp(2.2rem,6.6vw,4.3rem)] font-black uppercase tracking-tight text-[#111116] dark:text-white leading-[1.0]">
              <span>GOOD WORK SPEAKS.</span><br />
              <span>SO DO</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
                the
              </span>{' '}
              <span>PEOPLE BEHIND IT</span><span className="text-[#EA1E4D]">.</span>
            </h2>
          </div>

          <p className="font-mono text-xs text-[#52525B] dark:text-white/60 max-w-sm leading-relaxed">
            Genuine client feedback goes here as signed quotes are cleared. Below are our documented, verifiable campaign outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#111116]/15 dark:border-white/15 pt-10">
          {VERIFIED_WORK_OUTCOMES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="p-6 sm:p-8 border border-[#111116]/15 dark:border-white/15 bg-[#F5F4F0] dark:bg-[#14141A] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-[#111116]/15 dark:border-white/15 font-mono text-[11px] uppercase tracking-wider">
                  <span className="text-[#EA1E4D] font-bold">{item.tag}</span>
                  <span className="text-[#52525B] dark:text-white/60">{item.client}</span>
                </div>

                <span className="font-display text-2xl sm:text-3xl font-black text-[#111116] dark:text-white block mb-3">
                  {item.outcome}
                </span>

                <p className="font-sans text-sm sm:text-base text-[#3F3F46] dark:text-white/75 leading-relaxed mb-6">
                  {item.note}
                </p>
              </div>

              <div className="pt-4 border-t border-[#111116]/15 dark:border-white/15 flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-[#111116] dark:text-white">{item.project}</span>
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-1 text-[#EA1E4D] font-bold hover:underline shrink-0"
                >
                  <span>READ CASE STUDY</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
