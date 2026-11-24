import React from 'react';
import { motion } from 'framer-motion';

export const StudioBeliefSection: React.FC = () => {
  return (
    <div className="w-full bg-[#0A0A0C] text-white border-b border-[#1F1F23] py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 transition-colors select-none">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#FD7D3C] font-bold block">
            08 / STUDIO BELIEF
          </span>

          <h2 className="font-display text-[clamp(2.8rem,8.5vw,6rem)] font-extrabold uppercase tracking-tight text-white leading-[0.95]">
            <span>WE DON'T</span><br />
            <span>BELIEVE IN</span><br />
            <span className="font-serif italic font-normal tracking-normal text-[#FD7D3C] text-[1.12em] lowercase select-none">
              ordinary
            </span>
            <span className="text-[#FD7D3C] font-black">.</span>
          </h2>

          <p className="max-w-xl mx-auto font-sans text-sm sm:text-base text-white/60 leading-relaxed pt-2">
            Safe ideas get ignored. Predictable brands disappear. We build identities, campaigns and digital experiences that command genuine attention and create enduring value.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
