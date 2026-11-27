import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { CONTACT_CONFIG } from '../../data/studioData';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * SECTION 04 — CLOSING CTA (Preserved Iconic Riwa Red Full-Bleed Ending)
 * - Uses #C4123D ground so white body copy & eyebrow meet WCAG 2.2 AA (>= 6.0:1)
 *   while preserving the bold original crimson CTA personality from `db4d0a2`
 */
interface FinalCTASectionProps {
  eyebrow?: string;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  eyebrow = '05 — START A PROJECT',
}) => {
  const navigate = useNavigate();
  const reduced = useReducedMotion();

  return (
    <section
      id="final-cta"
      aria-labelledby="closing-cta-heading"
      className="w-full bg-[#C4123D] text-white border-y border-[#111116]/15 transition-colors relative overflow-hidden"
    >
      <div className="relative z-10 w-full py-20 sm:py-28 md:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="max-w-5xl space-y-6"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -12 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: STUDIO_EASE } },
            }}
            className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-white font-bold block"
          >
            {eyebrow}
          </motion.span>

          <h2
            id="closing-cta-heading"
            className="font-display text-[clamp(1.85rem,7.6vw,5.8rem)] font-extrabold uppercase tracking-tighter text-white leading-[0.93]"
          >
            <span className="block overflow-hidden">
              <motion.span
                variants={{
                  hidden: { y: '108%', opacity: 0 },
                  visible: { y: '0%', opacity: 1, transition: { duration: 0.7, delay: 0.04, ease: STUDIO_EASE } },
                }}
                className="block"
              >
                GOT SOMETHING
              </motion.span>
            </span>

            <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em] px-1 -mx-1">
              <motion.span
                variants={{
                  hidden: { y: '108%', opacity: 0 },
                  visible: { y: '0%', opacity: 1, transition: { duration: 0.75, delay: 0.14, ease: STUDIO_EASE } },
                }}
                className="block"
              >
                <span className="font-serif italic font-normal tracking-normal text-[#111116] lowercase text-[1.15em]">
                  unreasonable
                </span>{' '}
                <span>IN MIND?</span>
              </motion.span>
            </span>

            <span className="block overflow-hidden mt-2">
              <motion.span
                variants={{
                  hidden: { y: '108%', opacity: 0 },
                  visible: { y: '0%', opacity: 1, transition: { duration: 0.78, delay: 0.24, ease: STUDIO_EASE } },
                }}
                className="block"
              >
                GOOD. WE SHOULD TALK<span className="text-[#111116]">.</span>
              </motion.span>
            </span>
          </h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.3, ease: STUDIO_EASE } },
            }}
            className="font-sans text-base sm:text-lg md:text-xl text-white font-medium leading-relaxed max-w-2xl"
          >
            A brand to build. A campaign to launch. An experience to create. Tell us what you&apos;re imagining.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.36, ease: STUDIO_EASE } },
            }}
            className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="group inline-flex items-center justify-center gap-3 min-h-[52px] px-8 py-4 rounded-full bg-[#111116] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#111116] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-xl"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>

            {CONTACT_CONFIG.publicEmail ? (
              <a
                href={`mailto:${CONTACT_CONFIG.publicEmail}`}
                className="group inline-flex items-center justify-center gap-2.5 min-h-[52px] px-6 py-4 rounded-full border-2 border-white text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#111116] hover:border-[#111116] active:scale-[0.98] transition-all duration-300"
              >
                <Mail size={15} aria-hidden="true" />
                <span>{CONTACT_CONFIG.publicEmail}</span>
              </a>
            ) : (
              <Link
                to="/work"
                className="group inline-flex items-center justify-center gap-2.5 min-h-[52px] px-6 py-4 rounded-full border-2 border-white text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#111116] hover:border-[#111116] active:scale-[0.98] transition-all duration-300"
              >
                <span>VIEW ALL WORK</span>
                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
