import React from 'react';
import { motion } from 'framer-motion';

export const ManifestoSection: React.FC = () => {
  return (
    <div className="w-full bg-[#FD7D3C] text-[#171719] border-y-2 border-[#171719] relative overflow-hidden select-none transition-colors">
      {/* Background Graphic Watermark: Geometric Crow Silhouette */}
      <div className="absolute right-[-5%] bottom-[-10%] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#171719]">
          <polygon
            points="50,8 88,32 78,78 50,94 22,78 12,32"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 32 36 L 50 20 L 72 32 L 84 46 L 56 46 L 46 62 L 36 60 L 44 48 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Poster Grid Markers */}
      <div className="absolute top-6 left-6 sm:left-12 font-mono text-[11px] uppercase tracking-[0.25em] text-[#171719]/70">
        [ 06 / MANIFESTO · RIWA CREATIVE PHILOSOPHY ]
      </div>
      <div className="absolute top-6 right-6 sm:right-12 hidden sm:block font-mono text-[11px] uppercase tracking-[0.25em] text-[#171719]/70">
        [ POSTER 01 // HIGH CONVICTION ]
      </div>

      <section
        id="manifesto"
        className="relative z-10 py-24 sm:py-36 md:py-44 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {/* Monumental Headline */}
          <h2 className="font-display text-[clamp(2.8rem,9vw,7.5rem)] font-extrabold uppercase tracking-tight text-[#171719] leading-[0.92]">
            <span>GOOD IDEAS</span><br />
            <span>DON'T ASK</span><br />
            <span>FOR PERMISSION</span>
            <span className="text-white">.</span>
          </h2>

          {/* Supporting Manifesto Subtitle */}
          <div className="pt-4 border-t-2 border-[#171719] max-w-3xl flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <p className="font-display font-bold text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-[#171719] leading-snug">
              THEY NEED THE RIGHT PEOPLE TO MAKE THEM HAPPEN.
            </p>

            <span className="font-mono text-xs uppercase tracking-widest text-[#171719]/80 shrink-0 sm:pt-1">
              — THE RIWA CREED
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
