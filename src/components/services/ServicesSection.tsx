import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../../data/servicesData';
import { ServiceRow } from './ServiceRow';
import { ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface ServicesSectionProps {
  standalone?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ standalone = false }) => {
  const { hash } = useLocation();
  const reduced = useReducedMotion();
  const [activeServiceId, setActiveServiceId] = useState<string>(() => {
    const hashId = hash.replace(/^#/, '');
    return SERVICES_DATA.some((s) => s.id === hashId) ? hashId : SERVICES_DATA[0].id;
  });

  useEffect(() => {
    const hashId = hash.replace(/^#/, '');
    if (hashId && SERVICES_DATA.some((s) => s.id === hashId)) {
      setActiveServiceId(hashId);
    }
  }, [hash]);

  return (
    <div className="w-full bg-[#111116] dark:bg-[#F5F4F0] text-white dark:text-[#111116] border-b border-white/10 dark:border-[#111116]/15 transition-colors">
      <section
        id="services"
        className={`relative w-full ${
          standalone
            ? 'pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 md:pb-28'
            : 'py-16 sm:py-24 md:py-28'
        } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Sticky Column: Editorial Positioning & Direct Enquiry CTA */}
          <motion.div
            initial={reduced ? false : 'hidden'}
            animate="visible"
            className="lg:col-span-5 lg:sticky lg:top-[var(--sticky-offset)] space-y-6"
          >
            <div>
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: STUDIO_EASE } },
                }}
                className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#FD7D3C] dark:text-[#C4123D] font-semibold block mb-3 select-none"
              >
                {standalone ? '01 — OUR CAPABILITIES · FIVE CORE DISCIPLINES' : '04 — WHAT WE DO'}
              </motion.span>

              <h1 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold uppercase tracking-tight text-white dark:text-[#111116] leading-[0.96]">
                <span className="block overflow-hidden">
                  <motion.span
                    variants={{
                      hidden: { y: '108%', opacity: 0 },
                      visible: { y: '0%', opacity: 1, transition: { duration: 0.68, delay: 0.05, ease: STUDIO_EASE } },
                    }}
                    className="block"
                  >
                    BIG IDEAS.
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    variants={{
                      hidden: { y: '108%', opacity: 0 },
                      visible: { y: '0%', opacity: 1, transition: { duration: 0.72, delay: 0.12, ease: STUDIO_EASE } },
                    }}
                    className="block"
                  >
                    BUILT FROM
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
                  <motion.span
                    variants={{
                      hidden: { y: '108%', opacity: 0 },
                      visible: { y: '0%', opacity: 1, transition: { duration: 0.75, delay: 0.2, ease: STUDIO_EASE } },
                    }}
                    className="block"
                  >
                    <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] dark:text-[#C4123D] text-[1.14em] lowercase select-none">
                      every
                    </span>{' '}
                    <span>ANGLE</span>
                    <span className="text-[#EA1E4D] dark:text-[#C4123D]">.</span>
                  </motion.span>
                </span>
              </h1>
            </div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.28, ease: STUDIO_EASE } },
              }}
              className="font-sans text-sm sm:text-base text-[#B4B4BE] dark:text-[#3F3F46] leading-relaxed max-w-md"
            >
              Five integrated disciplines spanning brand foundations, commercial advertising, digital craft, live experiences, and ongoing stewardship. Expand any discipline or open its dedicated showcase page.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.34, ease: STUDIO_EASE } },
              }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FD7D3C] text-[#111116] hover:bg-white dark:hover:bg-[#111116] dark:hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowUpRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/25 dark:border-[#111116]/30 text-white dark:text-[#111116] hover:border-[#FD7D3C] hover:text-[#FD7D3C] dark:hover:border-[#C4123D] dark:hover:text-[#C4123D] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-[0.98]"
              >
                <span>View Work</span>
                <ArrowUpRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Editorial Discipline List */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: STUDIO_EASE }}
            className="lg:col-span-7 border-t border-white/15 dark:border-[#111116]/20"
          >
            {SERVICES_DATA.map((service) => (
              <ServiceRow
                key={service.id}
                service={service}
                isOpen={activeServiceId === service.id}
                onToggle={() => setActiveServiceId(service.id)}
                onHoverStart={() => {}}
                onHoverEnd={() => {}}
                onMouseMove={() => {}}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
