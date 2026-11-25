import React from 'react';

export const HeroMeta: React.FC = () => {
  return (
    <>
      {/* Mobile-Only Hairline 2x2 Architectural Matrix (< 640px) */}
      <div className="sm:hidden w-full grid grid-cols-2 border-t border-l border-[#111116]/15 dark:border-white/15 rounded-xl overflow-hidden bg-[#F5F4F0] dark:bg-[#14141A] font-mono text-[11px] tracking-wider uppercase text-[#52525B] dark:text-white/60 select-none">
        <div className="p-3.5 border-r border-b border-[#111116]/15 dark:border-white/15">
          <span className="block text-[#EA1E4D] font-bold text-[10px] mb-1">01 / DISCIPLINES</span>
          <span className="text-[#111116] dark:text-white font-bold block leading-snug">05 CORE PRACTICES</span>
        </div>

        <div className="p-3.5 border-r border-b border-[#111116]/15 dark:border-white/15">
          <span className="block text-[#EA1E4D] font-bold text-[10px] mb-1">02 / MODEL</span>
          <span className="text-[#111116] dark:text-white font-bold block leading-snug">FOUNDER-LED</span>
        </div>

        <div className="p-3.5 border-r border-b border-[#111116]/15 dark:border-white/15">
          <span className="block text-[#EA1E4D] font-bold text-[10px] mb-1">03 / APPROACH</span>
          <span className="text-[#111116] dark:text-white font-bold block leading-snug">CONTROLLED CHAOS</span>
        </div>

        <div className="p-3.5 border-r border-b border-[#111116]/15 dark:border-white/15">
          <span className="block text-[#EA1E4D] font-bold text-[10px] mb-1">04 / HYBRID</span>
          <span className="text-[#111116] dark:text-white font-bold block leading-snug">
            <span className="text-[#EA1E4D] font-bold">ART</span> × <span className="text-[#EA1E4D] font-bold">GROWTH</span>
          </span>
        </div>
      </div>

      {/* Desktop / Tablet Horizontal Row (>= 640px) */}
      <div className="hidden sm:grid w-full grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-[#111116]/15 dark:border-white/15 font-mono text-[11px] sm:text-xs tracking-wider uppercase text-[#52525B] dark:text-white/60 select-none">
        <div>
          <span className="block text-[#EA1E4D] font-bold mb-0.5">01 / STUDIO DISCIPLINES</span>
          <span className="text-[#111116] dark:text-white font-semibold">BRAND · AD · TECH · EVENTS</span>
        </div>

        <div>
          <span className="block text-[#EA1E4D] font-bold mb-0.5">02 / EXECUTION MODEL</span>
          <span className="text-[#111116] dark:text-white font-semibold">SENIOR FOUNDER SPRINTS</span>
        </div>

        <div>
          <span className="block text-[#EA1E4D] font-bold mb-0.5">03 / CREATIVE DIRECTION</span>
          <span className="text-[#111116] dark:text-white font-semibold">CONTROLLED CHAOS</span>
        </div>

        <div>
          <span className="block text-[#EA1E4D] font-bold mb-0.5">04 / DISCIPLINE HYBRID</span>
          <span className="text-[#111116] dark:text-white font-semibold">
            <span className="text-[#EA1E4D] font-bold">IDENTITY</span> ×{' '}
            <span className="text-[#EA1E4D] font-bold">EXPERIENCE</span>
          </span>
        </div>
      </div>
    </>
  );
};
