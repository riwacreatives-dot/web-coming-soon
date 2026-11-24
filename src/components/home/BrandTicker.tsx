import React from 'react';
import { motion } from 'framer-motion';

const TICKER_ITEMS = [
  'BRAND & IDENTITY',
  'COMMERCIAL ADVERTISING',
  'DIGITAL & GROWTH',
  'TECHNOLOGY & EXPERIENCES',
  'EVENTS & ACTIVATIONS',
  'CONTROLLED CHAOS',
  'CREATIVE WITHOUT BOUNDARIES',
];

export const BrandTicker: React.FC = () => {
  return (
    <div
      aria-label="Riwa Disciplines Ticker"
      className="relative w-full py-3.5 sm:py-4 border-y border-[#111116]/15 bg-[#111116] text-white overflow-hidden select-none"
    >
      <div className="flex w-max">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 24,
          }}
          className="flex items-center shrink-0 whitespace-nowrap"
        >
          {[0, 1, 2].map((rep) =>
            TICKER_ITEMS.map((item, idx) => (
              <span
                key={`t-${rep}-${idx}`}
                className="flex items-center gap-3 sm:gap-4 mx-3 sm:mx-4 font-mono text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase text-white"
              >
                <span>{item}</span>
                <span className="text-[#EA1E4D] text-sm sm:text-base font-black">✳</span>
              </span>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};
