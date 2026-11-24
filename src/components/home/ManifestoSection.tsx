import React from 'react';
import { motion } from 'framer-motion';

export const ManifestoSection: React.FC = () => {
  return (
    <section
      id="manifesto"
      className="py-20 sm:py-32 px-4 sm:px-8 md:px-12 max-w-5xl mx-auto border-t border-line-border text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-brand-red font-bold block mb-4 select-none">
          09 / THE RIWA MANIFESTO
        </span>

        <h2 className="font-display text-[clamp(2.4rem,7vw,5.5rem)] font-black uppercase tracking-tight text-text-primary leading-[1.02] mb-8">
          WE DON'T BELIEVE IN{' '}
          <span className="font-serif italic font-normal tracking-normal text-brand-red lowercase text-[1.12em]">
            ordinary
          </span>
          <span className="text-brand-red font-black">.</span>
        </h2>

        <div className="space-y-6 font-mono text-sm sm:text-base md:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
          <p>
            We believe in questions that challenge. Ideas that disrupt. Design that communicates. Work that means something.
          </p>
          <p>
            We believe that brands deserve more than templates. That creativity deserves discipline. That execution matters as much as imagination. And that the best work is always worth pushing further.
          </p>
          <p className="font-display font-bold text-lg sm:text-2xl uppercase tracking-wider text-text-primary pt-4">
            THAT'S THE RIWA WAY<span className="text-brand-red">.</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};
