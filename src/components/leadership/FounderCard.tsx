import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, ShieldCheck } from 'lucide-react';
import { FounderItem } from '../../types';
import { useIsMobile } from '../../hooks/useIsMobile';

interface FounderCardProps {
  founder: FounderItem;
  index: number;
}

export const FounderCard: React.FC<FounderCardProps> = ({ founder, index }) => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      whileHover={!isMobile ? { y: -4 } : undefined}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col justify-between p-5 sm:p-12 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand-red/30 transition-all duration-300 dark-card"
    >
      <div>
        {/* Top Department & Track Record Header */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 mb-6 md:mb-8 pb-4 border-b border-white/10 font-mono text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold text-brand-red">// 0{index + 1}</span>
            <span className="text-white/60 uppercase tracking-wider text-xs sm:text-sm">
              {founder.department}
            </span>
          </div>

          <span className="px-3.5 py-1 rounded-full border border-white/10 bg-white/10 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5">
            <Award size={14} className="text-brand-red" />
            <span>{founder.trackRecord}</span>
          </span>
        </div>

        {/* Founder Name & Title */}
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight group-hover:text-brand-red transition-colors duration-300">
          {founder.name}
        </h3>

        <span className="font-mono text-xs sm:text-sm font-semibold text-brand-red block mt-2 mb-6">
          {founder.role}
        </span>

        {/* Bio Copy */}
        <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed mb-8">
          "{founder.bio}"
        </p>

        {/* Specialties Tags */}
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 font-bold block mb-3">
            Core Disciplines
          </span>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {founder.specialties.map((spec) => (
              <span
                key={spec}
                className="px-3 sm:px-3.5 py-1 rounded-full border border-white/10 bg-white/5 font-mono text-[11px] sm:text-xs text-white/70 group-hover:text-white transition-colors"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs sm:text-sm">
        <div className="flex items-center gap-1.5 text-white/60 text-xs sm:text-sm">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Senior Sprint Lead</span>
        </div>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          data-cursor-text="BRIEF"
          className="inline-flex items-center gap-1 text-white font-bold hover:text-brand-red transition-colors cursor-pointer"
        >
          <span>Initiate Sprint</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </motion.div>
  );
};
