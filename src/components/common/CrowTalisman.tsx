import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, X, ShieldAlert, Award } from 'lucide-react';

export const CrowTalisman: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [rotations, setRotations] = useState(0);

  // Parallax spring coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 260 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [18, -18]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-18, 18]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const flipCoin = () => {
    setRotations((prev) => prev + 1);
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      {/* Floating 3D Desk Talisman (Bottom Right, above dock) */}
      <div
        className="fixed bottom-16 right-4 sm:right-8 z-40 select-none hidden sm:block"
        style={{ perspective: 1000 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative cursor-pointer group"
          onClick={flipCoin}
          data-cursor-text="FLIP"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Subtle Ambient Red Halo */}
          <div className="absolute inset-0 rounded-full bg-brand-red/20 filter blur-xl group-hover:bg-brand-red/35 transition-all duration-300 pointer-events-none" />

          {/* Rotating Double-Sided Physical Medal */}
          <motion.div
            animate={{
              rotateY: rotations * 180,
              y: [0, -45, 0],
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 18,
              mass: 0.8,
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/20 dark:border-white/10 bg-gradient-to-br from-[#1C1F26] to-[#0A0C10] shadow-2xl flex items-center justify-center p-2 relative"
          >
            {/* Front Face: The Initial 'R' Monogram */}
            <div
              style={{ backfaceVisibility: 'hidden' }}
              className="absolute inset-0 rounded-full flex flex-col items-center justify-center p-2 text-center"
            >
              <span className="font-display font-black text-xl text-white tracking-tighter leading-none">
                R
              </span>
              <span className="text-[7.5px] font-mono text-brand-red uppercase font-bold tracking-widest mt-0.5">
                RIWA
              </span>
            </div>

            {/* Back Face: Brand Dalal Seal */}
            <div
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2A1E08] to-[#120D04] border border-[#F5B31B]/40 flex flex-col items-center justify-center p-1 text-center"
            >
              <Award size={16} className="text-[#F5B31B]" />
              <span className="text-[7.5px] font-mono text-[#F5B31B] uppercase font-bold tracking-tighter leading-tight mt-0.5">
                DIKHEGA
                <br />
                BIKEGA
              </span>
            </div>
          </motion.div>

          {/* Floating Pill Cue on hover */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute -top-7 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[9px] font-mono font-bold text-white uppercase tracking-wider whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {isFlipped ? 'Brand Dalal NCR' : 'RIWA'}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
