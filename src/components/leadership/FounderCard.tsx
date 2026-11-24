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
      whileHover={!isMobile ? { y: -3 } : undefined}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col justify-between p-6 sm:p-10 rounded-2xl border border-[#2C2C30] bg-[#1F1F23] hover:border-[#FD7D3C]/40 transition-all duration-300"
    >
      <div>
        {/* Top Department & Track Record Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#2C2C30] font-mono text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#FD7D3C]">// 0{index + 1}</span>
            <span className="text-[#9E9D98] uppercase tracking-wider text-xs">
              {founder.department}
            </span>
          </div>

          <span className="px-3 py-1 rounded-full border border-[#2C2C30] bg-[#171719] text-[#F4F1EA] font-bold text-xs flex items-center gap-1.5">
            <Award size={13} className="text-[#FD7D3C]" />
            <span>{founder.trackRecord}</span>
          </span>
        </div>

        {/* Founder Name & Title */}
        <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#F4F1EA] tracking-tight group-hover:text-[#FD7D3C] transition-colors duration-300">
          {founder.name}
        </h3>

        <span className="font-mono text-xs font-semibold text-[#FD7D3C] block mt-1.5 mb-5">
          {founder.role}
        </span>

        {/* Bio Copy */}
        <p className="font-sans text-sm sm:text-base text-[#9E9D98] leading-relaxed mb-8">
          "{founder.bio}"
        </p>

        {/* Core Disciplines Tags */}
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E9D98] font-bold block mb-3">
            Core Disciplines
          </span>
          <div className="flex flex-wrap gap-2">
            {founder.specialties.map((spec) => (
              <span
                key={spec}
                className="px-3 py-1 rounded-full border border-[#2C2C30] bg-[#171719] font-mono text-xs text-[#9E9D98] group-hover:text-[#F4F1EA] transition-colors"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-8 pt-5 border-t border-[#2C2C30] flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-1.5 text-[#9E9D98]">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Senior Sprint Lead</span>
        </div>

        <a
          href="#final-cta"
          className="inline-flex items-center gap-1 text-[#F4F1EA] font-bold hover:text-[#FD7D3C] transition-colors cursor-pointer"
        >
          <span>Initiate Sprint</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </motion.div>
  );
};
