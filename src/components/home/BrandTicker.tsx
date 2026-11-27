import React from 'react';
import { LOCKED_CAPABILITIES } from '../../data/studioData';

const TICKER_ITEMS = [
  ...LOCKED_CAPABILITIES.map((c) => c.name.toUpperCase()),
  'INDEPENDENT CREATIVE & GROWTH STUDIO',
];

export const BrandTicker: React.FC = () => {
  return (
    <div
      aria-label="Riwa Disciplines"
      className="relative w-full py-3.5 sm:py-4 border-y border-[#111116]/15 bg-[#111116] text-white overflow-x-auto no-scrollbar select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {TICKER_ITEMS.map((item, idx) => (
          <span
            key={item}
            className="flex items-center gap-3 font-mono text-xs sm:text-[13px] font-bold tracking-[0.18em] uppercase text-white whitespace-nowrap"
          >
            <span>{item}</span>
            {idx < TICKER_ITEMS.length - 1 && (
              <span className="text-[#FD7D3C] text-sm font-extrabold" aria-hidden="true">
                ✳
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};
