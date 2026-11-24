import React from 'react';
import { motion } from 'framer-motion';

const TICKER_ITEMS = [
  'STRATEGY',
  'BRANDING',
  'COMMERCIALS',
  'DESIGN',
  'DIGITAL',
  'CAMPAIGNS',
  'GROWTH',
  'EXPERIENCES',
];

export const BrandTicker: React.FC = () => {
  return (
    <div
      aria-label="Riwa Disciplines Ticker"
      className="relative w-full py-4 sm:py-5 border-y border-line-border bg-surface/30 backdrop-blur-sm overflow-hidden select-none"
    >
      <div className="flex w-max">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 22,
          }}
          className="flex items-center shrink-0 whitespace-nowrap"
        >
          {/* First repetition */}
          {TICKER_ITEMS.map((item, idx) => (
            <span key={`t1-${idx}`} className="flex items-center gap-3 sm:gap-4 mx-3 sm:mx-4 font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-text-primary">
              <span>{item}</span>
              <span className="text-brand-red text-base sm:text-lg">✳</span>
            </span>
          ))}

          {/* Second repetition to create continuous loop */}
          {TICKER_ITEMS.map((item, idx) => (
            <span key={`t2-${idx}`} className="flex items-center gap-3 sm:gap-4 mx-3 sm:mx-4 font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-text-primary">
              <span>{item}</span>
              <span className="text-brand-red text-base sm:text-lg">✳</span>
            </span>
          ))}

          {/* Third repetition for large screens */}
          {TICKER_ITEMS.map((item, idx) => (
            <span key={`t3-${idx}`} className="flex items-center gap-3 sm:gap-4 mx-3 sm:mx-4 font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-text-primary">
              <span>{item}</span>
              <span className="text-brand-red text-base sm:text-lg">✳</span>
            </span>
          ))}

          {/* Fourth repetition */}
          {TICKER_ITEMS.map((item, idx) => (
            <span key={`t4-${idx}`} className="flex items-center gap-3 sm:gap-4 mx-3 sm:mx-4 font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-text-primary">
              <span>{item}</span>
              <span className="text-brand-red text-base sm:text-lg">✳</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
