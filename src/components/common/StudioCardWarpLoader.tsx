import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageTransition } from '../../contexts/TransitionContext';

export const StudioCardWarpLoader: React.FC = () => {
  const { isIntroActive, isBetweenActive, transitionTitle, finishIntro } = usePageTransition();
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const isActive = isIntroActive || isBetweenActive;

  useEffect(() => {
    if (!isActive) return;

    setProgress(0);
    setIsExiting(false);

    // Snappy, luxury 600ms editorial curtain progression
    const startTime = performance.now();
    const duration = isBetweenActive ? 320 : 600;

    let animId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const p = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(p);

      if (elapsed < duration) {
        animId = requestAnimationFrame(tick);
      } else {
        setIsExiting(true);
        setTimeout(() => {
          finishIntro();
        }, 320);
      }
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isActive, isBetweenActive, finishIntro]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      finishIntro();
    }, 150);
  };

  if (!isActive) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="studio-curtain-loader"
        initial={{ opacity: 1, y: '0%' }}
        animate={isExiting ? { y: '-100%' } : { y: '0%' }}
        exit={{ y: '-100%' }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        onClick={handleSkip}
        className="fixed inset-0 z-[200] flex flex-col justify-between p-6 sm:p-12 md:p-16 bg-[#07080a] text-white cursor-pointer select-none"
      >
        {/* Top Header: Brand Indicator & Skip Cue */}
        <div className="flex items-center justify-between font-mono text-[11px] sm:text-xs uppercase tracking-widest text-white/50">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-white font-semibold">RIWA CREATIVES</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-white/40">DELHI · MUMBAI</span>
          </div>

          <span className="text-white/40 hover:text-white transition-colors text-[10px] tracking-wider">
            [ TAP TO ENTER ✦ ]
          </span>
        </div>

        {/* Center: Elegant Monumental Typography */}
        <div className="flex flex-col items-center justify-center text-center my-auto py-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-brand-red font-semibold mb-3">
              {isBetweenActive ? transitionTitle : 'INDEPENDENT CREATIVE & GROWTH STUDIO'}
            </span>

            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white leading-none">
              RIWA<span className="text-brand-red font-light">.</span>
            </h2>

            <p className="font-serif italic text-white/70 text-base sm:text-xl md:text-2xl mt-3 max-w-md font-normal">
              Making <span className="text-brand-red lowercase text-lg sm:text-2xl">unreasonable</span> brands happen.
            </p>

            {/* Hairline Progress Meter */}
            <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mt-6">
              <div
                className="h-full bg-brand-red transition-all duration-75 ease-out shadow-[0_0_10px_#ff2a55]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar: Bureaus Network */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-white/40">
          <div className="flex items-center gap-2 text-white/60">
            <span>DELHI</span>
            <span className="text-white/20">·</span>
            <span>MUMBAI</span>
            <span className="text-white/20">·</span>
            <span>LONDON</span>
            <span className="text-white/20">·</span>
            <span>NEW YORK</span>
          </div>

          <span className="text-white/50 font-medium">
            Dikhega Toh Bikega<span className="text-brand-red font-bold">.</span>
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
