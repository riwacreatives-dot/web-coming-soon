import React from 'react';
import { motion } from 'framer-motion';

const TICKER_ITEMS = [
  'BRAND STRATEGY',
  'IDENTITY & SYSTEMS',
  'COMMERCIAL CAMPAIGNS',
  'DIGITAL EXPERIENCES',
  'WEB DEVELOPMENT',
  'CREATIVE DIRECTION',
  'CONTENT PRODUCTION',
  'EVENTS & ACTIVATIONS',
  'GROWTH MARKETING',
];

export const BrandTicker: React.FC = () => {
  return (
    <div
      aria-label="Riwa Disciplines Ticker"
      className="relative w-full py-4 sm:py-4.5 border-y border-[#171719]/15 bg-[#F4F1EA] overflow-hidden select-none"
    >
      <div className="flex w-max">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 26,
          }}
          className="flex items-center shrink-0 whitespace-nowrap"
        >
          {/* First repetition */}
          {TICKER_ITEMS.map((item, idx) => (
            <span key={`t1-${idx}`} className="flex items-center gap-3 sm:gap-4 mx-3 sm:mx-4 font-mono text-xs sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#171719]">
              <span>{item}</span>
              <span className="text-[#FD7D3C] text-sm sm:text-base font-black">✳</span>
            </span>
          ))}

          {/* Second repetition to create continuous loop */}
          {TICKER_ITEMS.map((item, idx) => (
            <span key={`t2-${idx}`} className="flex items-center gap-3 sm:gap-4 mx-3 sm:mx-4 font-mono text-xs sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#171719]">
              <span>{item}</span>
              <span className="text-[#FD7D3C] text-sm sm:text-base font-black">✳</span>
            </span>
          ))}

          {/* Third repetition for high-res viewports */}
          {TICKER_ITEMS.map((item, idx) => (
            <span key={`t3-${idx}`} className="flex items-center gap-3 sm:gap-4 mx-3 sm:mx-4 font-mono text-xs sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#171719]">
              <span>{item}</span>
              <span className="text-[#FD7D3C] text-sm sm:text-base font-black">✳</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
