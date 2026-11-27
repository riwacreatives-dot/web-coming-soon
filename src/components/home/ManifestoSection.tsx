import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ManifestoSectionProps {
  eyebrow?: string;
  standalone?: boolean;
}

const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const lineRevealVariant = (delay: number, duration = 0.72) => ({
  hidden: { y: '108%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration, delay, ease: STUDIO_EASE },
  },
});

export const ManifestoSection: React.FC<ManifestoSectionProps> = ({
  eyebrow = '03 — STUDIO CREDO',
  standalone = false,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const HeadingTag = standalone ? 'h1' : 'h2';
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.35,
  });
  const ordinaryShift = useTransform(
    smoothProgress,
    [0, 1],
    [prefersReducedMotion ? 0 : -14, prefersReducedMotion ? 0 : 18]
  );

  return (
    <div
      ref={sectionRef}
      className="w-full bg-[#0B0B0F] dark:bg-[#F5F4F0] text-white dark:text-[#111116] border-y border-white/10 dark:border-[#111116]/15 relative overflow-hidden select-none transition-colors"
    >
      <section
        id="manifesto"
        className={`relative z-10 flex flex-col justify-center px-4 sm:px-8 md:px-12 max-w-6xl mx-auto ${
          standalone
            ? 'min-h-[72vh] pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-28'
            : 'min-h-[62vh] sm:min-h-[72vh] py-20 sm:py-28'
        }`}
      >
        <motion.div
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="space-y-10 sm:space-y-14"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -14 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: STUDIO_EASE } },
            }}
            className="font-mono text-xs sm:text-sm uppercase tracking-[0.28em] text-[#FD7D3C] dark:text-[#C4123D] font-bold block"
          >
            {eyebrow}
          </motion.span>

          {/* Line-Masked Kinetic Display Stack */}
          <HeadingTag className="font-display text-[clamp(2.35rem,8vw,6.4rem)] font-extrabold uppercase tracking-tighter text-white dark:text-[#111116] leading-[0.92]">
            <span className="block overflow-hidden">
              <motion.span variants={lineRevealVariant(0.04)} className="block">
                WE DON&apos;T
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={lineRevealVariant(0.14, 0.75)} className="block">
                BELIEVE IN
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em] px-1 -mx-1">
              <motion.span
                style={{ x: ordinaryShift }}
                variants={lineRevealVariant(0.24, 0.8)}
                className="inline-block"
              >
                <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] dark:text-[#C4123D] text-[1.12em] lowercase select-none">
                  ordinary
                </span>
                <span className="text-[#EA1E4D] dark:text-[#C4123D]">.</span>
              </motion.span>
            </span>
          </HeadingTag>

          <div className="relative pt-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.span
              aria-hidden="true"
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.85, delay: 0.18, ease: STUDIO_EASE } },
              }}
              className="absolute top-0 inset-x-0 h-px bg-white/15 dark:bg-[#111116]/15 origin-left"
            />

            <div className="space-y-2 font-display text-lg sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white/90 dark:text-[#111116]">
              {[
                'WE BELIEVE IN IDEAS THAT MOVE.',
                'DESIGN THAT SPEAKS.',
                'EXECUTION THAT MATTERS.',
              ].map((line, i) => (
                <div key={line} className="overflow-hidden">
                  <motion.p variants={lineRevealVariant(0.18 + i * 0.06, 0.55)}>
                    {line}
                  </motion.p>
                </div>
              ))}
            </div>

            <motion.p
              variants={{
                hidden: { opacity: 0, x: 18 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.58, delay: 0.3, ease: STUDIO_EASE } },
              }}
              className="font-display font-extrabold text-xl sm:text-3xl uppercase tracking-wider text-white dark:text-[#111116] shrink-0"
            >
              THAT&apos;S THE RIWA WAY<span className="text-[#EA1E4D] dark:text-[#C4123D]">.</span>
            </motion.p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
