import React from 'react';
import { FounderItem } from '../../types';

interface FounderCardProps {
  founder: FounderItem;
  index: number;
}

export const FounderCard: React.FC<FounderCardProps> = ({ founder, index }) => {
  return (
    <div className="flex-1 p-5 sm:p-6 border border-white/15 bg-[#17171D] hover:border-[#EA1E4D]/50 transition-colors flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-white/10 font-mono text-[11px]">
          <span className="font-bold text-[#EA1E4D]">// 0{index + 1}</span>
          <span className="text-white/50 uppercase tracking-wider truncate">
            {founder.department}
          </span>
        </div>

        <h3 className="font-display text-lg sm:text-xl font-black uppercase text-white tracking-tight">
          {founder.name}
        </h3>
        <span className="font-mono text-xs text-[#FD7D3C] block mt-0.5 mb-3">
          {founder.role}
        </span>

        <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
          {founder.bio}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-2">
        {founder.specialties.slice(0, 3).map((spec) => (
          <span
            key={spec}
            className="px-2.5 py-0.5 border border-white/10 bg-white/5 font-mono text-[10px] text-white/75 uppercase"
          >
            {spec}
          </span>
        ))}
      </div>
    </div>
  );
};
