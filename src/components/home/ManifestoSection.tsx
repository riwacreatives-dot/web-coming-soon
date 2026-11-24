import React from 'react';
import { motion } from 'framer-motion';

export const ManifestoSection: React.FC = () => {
  return (
    <div className="w-full bg-[#07080B] text-white border-y border-white/10 relative overflow-hidden select-none transition-colors">
      <section
        id="manifesto"
        className="relative z-10 min-h-[75vh] sm:min-h-[85vh] flex flex-col justify-center py-24 sm:py-36 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 sm:space-y-12"
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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-white/15 font-sans text-base sm:text-lg text-white/75 leading-relaxed">
            <div className="md:col-span-6 space-y-2 text-white font-medium">
              <p>We believe in questions that challenge.</p>
              <p>Ideas that disrupt.</p>
              <p>Design that communicates.</p>
              <p>Work that means something.</p>
            </div>

            <div className="md:col-span-6 space-y-4">
              <p>
                We believe that brands deserve more than templates. That creativity deserves discipline. That execution matters as much as imagination.
              </p>
              <p className="font-display font-black text-xl sm:text-2xl uppercase tracking-wider text-white pt-2">
                THAT&apos;S THE RIWA WAY<span className="text-[#EA1E4D]">.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
