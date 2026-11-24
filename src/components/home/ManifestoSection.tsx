import React from 'react';
import { motion } from 'framer-motion';

export const ManifestoSection: React.FC = () => {
  return (
    <div className="w-full bg-[#08090d] text-white border-y border-brand-red/25 relative overflow-hidden transition-colors">
      {/* Ambient Electric Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
        <div className="w-full max-w-2xl h-56 bg-brand-red/15 filter blur-[110px] rounded-full" />
      </div>

      <section
        id="manifesto"
        className="py-24 sm:py-36 px-4 sm:px-8 md:px-12 max-w-5xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-brand-orange font-bold block mb-5 select-none">
            ✦ 09 / THE RIWA MANIFESTO ✦
          </span>

          <h2 className="font-display text-[clamp(2.4rem,7.5vw,5.5rem)] font-black uppercase tracking-tight text-white leading-[1.02] mb-8">
            WE DON'T BELIEVE IN{' '}
            <span className="font-serif italic font-normal tracking-normal text-brand-red lowercase text-[1.12em]">
              ordinary
            </span>
            <span className="text-brand-red font-black">.</span>
          </h2>

          <div className="space-y-6 font-sans text-sm sm:text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            <p>
              We believe in questions that challenge. Ideas that disrupt. Design that communicates. Work that means something.
            </p>
            <p>
              We believe that brands deserve more than templates. That creativity deserves discipline. That execution matters as much as imagination. And that the best work is always worth pushing further.
            </p>
            <p className="font-display font-bold text-lg sm:text-2xl uppercase tracking-wider text-white pt-4">
              THAT'S THE RIWA WAY<span className="text-brand-red">.</span>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
