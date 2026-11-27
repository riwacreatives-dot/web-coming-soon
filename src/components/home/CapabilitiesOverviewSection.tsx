import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { LOCKED_CAPABILITIES } from '../../data/studioData';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * SECTION 03 — WHAT WE DO (Compact Dark Charcoal Five-Capability Index)
 * - Follows original dark Services / Brand Laboratory aesthetic (#111116)
 * - Interactive shared-layout spring bar & dim focus sweep
 */
export const CapabilitiesOverviewSection: React.FC = () => {
  const reduced = useReducedMotion();
  const [focusedId, setFocusedId] = useState<string | null>(null);

  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-heading"
      className="w-full bg-[#111116] dark:bg-[#E7E7E9] text-white dark:text-[#111116] border-b border-white/10 dark:border-[#111116]/15 transition-colors"
    >
      <div className="max-w-7xl mx-auto py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Sticky Header Column */}
          <motion.div
            initial={reduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-5 lg:sticky lg:top-[var(--sticky-offset)] space-y-6"
          >
            <div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: STUDIO_EASE } },
                }}
                className="flex items-center gap-3 mb-3"
              >
                <span className="w-2 h-2 rotate-45 bg-[#EA1E4D] dark:bg-[#C4123D] inline-block" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-[0.26em] text-[#B4B4BE] dark:text-[#52525B] font-semibold">
                  04 — WHAT WE DO
                </span>
              </motion.div>

              <h2
                id="what-we-do-heading"
                className="font-display text-[clamp(1.75rem,5.5vw,3.9rem)] font-extrabold uppercase tracking-tighter text-white dark:text-[#111116] leading-[0.95]"
              >
                <span className="block overflow-hidden">
                  <motion.span
                    variants={{
                      hidden: { y: '108%', opacity: 0 },
                      visible: { y: '0%', opacity: 1, transition: { duration: 0.7, delay: 0.05, ease: STUDIO_EASE } },
                    }}
                    className="block"
                  >
                    BIG IDEAS.
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
                  <motion.span
                    variants={{
                      hidden: { y: '108%', opacity: 0 },
                      visible: { y: '0%', opacity: 1, transition: { duration: 0.75, delay: 0.14, ease: STUDIO_EASE } },
                    }}
                    className="block"
                  >
                    <span>BUILT FROM</span>{' '}
                    <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] dark:text-[#C4123D] text-[1.14em] lowercase">
                      every
                    </span>{' '}
                    <span>ANGLE</span>
                    <span className="text-[#EA1E4D] dark:text-[#C4123D]">.</span>
                  </motion.span>
                </span>
              </h2>
            </div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.22, ease: STUDIO_EASE } },
              }}
              className="font-sans text-sm sm:text-base text-[#B4B4BE] dark:text-[#3F3F46] leading-relaxed max-w-md"
            >
              Five integrated capabilities built to keep brand strategy, commercial creative, technology, and live execution working as one.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.3, ease: STUDIO_EASE } },
              }}
              className="pt-1"
            >
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#111116] hover:bg-[#FD7D3C] dark:bg-[#111116] dark:text-white dark:hover:bg-[#C4123D] dark:hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-[0.98]"
              >
                <span>Explore All Services</span>
                <ArrowUpRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Compact Five Capabilities Editorial Index */}
          <div
            onMouseLeave={() => setFocusedId(null)}
            className="lg:col-span-7 border-t border-white/15 dark:border-[#111116]/20"
          >
            {LOCKED_CAPABILITIES.map((capability, idx) => {
              const isEvents = capability.id === 'events-experiences';
              const isFocused = focusedId === capability.id;
              const isDimmed = focusedId !== null && !isFocused;

              return (
                <motion.div
                  key={capability.id}
                  initial={reduced ? false : { opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.58, delay: idx * 0.06, ease: STUDIO_EASE }}
                  className="relative"
                >
                  <Link
                    to={`/services/${capability.id}`}
                    onMouseEnter={() => setFocusedId(capability.id)}
                    onFocus={() => setFocusedId(capability.id)}
                    onBlur={() => setFocusedId(null)}
                    className={`group relative py-6 sm:py-7 border-b border-white/15 dark:border-[#111116]/20 flex items-start sm:items-center justify-between gap-4 sm:gap-6 px-3 -mx-3 transition-opacity duration-300 ${
                      isDimmed ? 'opacity-50' : 'opacity-100'
                    }`}
                  >
                    {isFocused && (
                      <motion.span
                        layoutId="capability-focus-bar"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        aria-hidden="true"
                        className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full ${
                          isEvents ? 'bg-[#FD7D3C]' : 'bg-[#EA1E4D]'
                        }`}
                      />
                    )}

                    <div className="flex items-start sm:items-baseline gap-4 sm:gap-6 min-w-0 pl-1.5 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                      <span className="font-mono text-xs sm:text-sm font-bold shrink-0 text-[#FD7D3C] dark:text-[#C4123D]">
                        {capability.index} —
                      </span>

                      <div className="space-y-1.5 min-w-0">
                        <h3
                          className={`font-display text-base sm:text-2xl font-extrabold uppercase tracking-tight text-white dark:text-[#111116] transition-colors break-words ${
                            isEvents
                              ? 'group-hover:text-[#FD7D3C] dark:group-hover:text-[#C4123D]'
                              : 'group-hover:text-[#EA1E4D] dark:group-hover:text-[#C4123D]'
                          }`}
                        >
                          {capability.name}
                        </h3>
                        <p className="font-sans text-sm text-[#B4B4BE] dark:text-[#3F3F46] leading-snug max-w-xl">
                          {capability.shortDesc}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${
                        isEvents
                          ? 'text-[#FD7D3C] dark:text-[#C4123D]'
                          : 'text-white/85 dark:text-[#111116] group-hover:text-[#FD7D3C] dark:group-hover:text-[#C4123D]'
                      }`}
                    >
                      <span className="hidden sm:inline">Explore</span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
