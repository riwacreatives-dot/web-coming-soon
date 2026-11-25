import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const ManifestoSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full bg-[#111116] text-white border-y border-white/10 relative overflow-hidden select-none transition-colors">
      <section
        id="manifesto"
        className="relative z-10 min-h-[70vh] sm:min-h-[82vh] flex flex-col justify-center py-24 sm:py-36 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto"
      >
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10 sm:space-y-14"
        >
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.28em] text-[#EA1E4D] font-bold block">
            10 / THE RIWA MANIFESTO
          </span>

          <h2 className="font-display text-[clamp(2.8rem,8.5vw,6.8rem)] font-black uppercase tracking-tighter text-white leading-[0.92]">
            <span>WE DON&apos;T</span><br />
            <span>BELIEVE IN</span><br />
            <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.12em] lowercase select-none">
              ordinary
            </span>
            <span className="text-[#EA1E4D]">.</span>
          </h2>

          <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-2 font-display text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white/90">
              <p>WE BELIEVE IN IDEAS THAT MOVE.</p>
              <p>DESIGN THAT SPEAKS.</p>
              <p>EXECUTION THAT MATTERS.</p>
            </div>

            <p className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wider text-white shrink-0">
              THAT&apos;S THE RIWA WAY<span className="text-[#EA1E4D]">.</span>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
