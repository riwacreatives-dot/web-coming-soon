import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TestimonialsSection: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] dark:bg-[#0B0B0F] text-[#111116] dark:text-white border-b border-[#111116]/15 dark:border-white/10 transition-colors">
      <section
        id="collaborations"
        className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 font-semibold block mb-3 select-none">
              11 / SELECTED COLLABORATIONS
            </span>
            <h2 className="font-display text-[clamp(2.2rem,6.6vw,4.3rem)] font-black uppercase tracking-tight text-[#111116] dark:text-white leading-[1.0]">
              <span>GOOD WORK SPEAKS.</span><br />
              <span>PROVEN</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
                in
              </span>{' '}
              <span>MARKET</span><span className="text-[#EA1E4D]">.</span>
            </h2>
          </div>

          <p className="font-mono text-xs text-[#52525B] dark:text-white/60 max-w-sm leading-relaxed">
            Client partnerships and verified outcomes documented without fabricated quotes. Named partner endorsements will appear here once signed off.
          </p>
        </div>

        {/* Asymmetric Collaboration Showcase: 1 Featured Collaboration + Studio Practice Commitments */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-[#111116]/15 dark:border-white/15 pt-10">
          {/* Featured Verified Collaboration */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 p-6 sm:p-10 border border-[#111116]/15 dark:border-white/15 bg-[#F5F4F0] dark:bg-[#14141A] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 pb-4 mb-6 border-b border-[#111116]/15 dark:border-white/15 font-mono text-[11px] uppercase tracking-wider">
                <span className="text-[#EA1E4D] font-bold">FEATURED COLLABORATION // HOSPITALITY</span>
                <span className="text-[#52525B] dark:text-white/60">2026</span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111116] dark:text-white mb-4">
                Solanas Chinese • Thai
              </h3>

              <p className="font-sans text-base sm:text-lg text-[#3F3F46] dark:text-white/80 leading-relaxed mb-8">
                Multi-drop commercial campaign partnership spanning street posters, key visual styling, Meta ad acquisition creatives, and flagship menu photography.
              </p>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-[#111116]/15 dark:border-white/15 font-mono">
                <div>
                  <span className="text-lg sm:text-2xl font-black text-[#EA1E4D] block">+420%</span>
                  <span className="text-[10px] uppercase text-[#52525B] dark:text-white/60">Weekend Orders</span>
                </div>
                <div>
                  <span className="text-lg sm:text-2xl font-black text-[#EA1E4D] block">+340%</span>
                  <span className="text-[10px] uppercase text-[#52525B] dark:text-white/60">Dinner Inbounds</span>
                </div>
                <div>
                  <span className="text-lg sm:text-2xl font-black text-[#EA1E4D] block">6.2%</span>
                  <span className="text-[10px] uppercase text-[#52525B] dark:text-white/60">Meta Ads CTR</span>
                </div>
              </div>
            </div>

            <div className="pt-6 flex items-center justify-between font-mono text-xs">
              <span className="text-[#52525B] dark:text-white/60">Commercial Advertising · Key Visuals</span>
              <Link
                to="/work/solanas-campaign"
                className="inline-flex items-center gap-1.5 text-[#EA1E4D] font-bold hover:underline"
              >
                <span>READ FULL DOSSIER</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Supporting Collaboration Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="p-6 sm:p-8 border border-[#111116]/15 dark:border-white/15 bg-[#111116] text-white flex-1 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-[#FD7D3C] uppercase tracking-widest font-bold block mb-3">
                  // PARTNER ENDORSEMENTS
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight mb-3">
                  Partner Quotes Coming Soon
                </h4>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  We never fabricate placeholder testimonials. Direct named quotes from founders and organizing heads will be published here as campaigns conclude.
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#FD7D3C] hover:underline uppercase tracking-wider"
              >
                <span>Commission Next Case Study</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="p-6 border border-[#111116]/15 dark:border-white/15 bg-[#F5F4F0] dark:bg-[#14141A]">
              <span className="font-mono text-[10px] text-[#EA1E4D] uppercase tracking-widest font-bold block mb-2">
                // OPEN TO COLLABORATIONS
              </span>
              <p className="font-sans text-sm text-[#111116] dark:text-white/85 leading-relaxed">
                Available for brand sprints, commercial shoots, custom web builds, and festival/hackathon productions across India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
