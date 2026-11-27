import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import {
  CANONICAL_ASSETS,
  FOUNDER_PRINCIPAL,
  STUDIO_IDENTITY,
} from '../../data/studioData';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const EDITORIAL_PILLARS = [
  {
    label: '01 / PHILOSOPHY',
    title: 'Conviction Over Category Templates',
    copy: 'Founded by Ranjan Kumar to bring clear strategic direction and high-craft creative execution under one roof.',
  },
  {
    label: '02 / CREATIVE CRAFT',
    title: 'Ideas With Intention & Taste',
    copy: 'Every identity system, campaign concept, and digital surface is shaped to hold clarity and stand apart cleanly.',
  },
  {
    label: '03 / MULTIDISCIPLINARY THESIS',
    title: 'One Connected Studio',
    copy: 'Brand & Identity, Creative & Advertising, Digital & Technology, Events & Experiences, and Brand Management & Growth operate as one practice.',
  },
];

export const AboutRiwaSection: React.FC = () => {
  const navigate = useNavigate();
  const reduced = useReducedMotion();

  const astM01 = CANONICAL_ASSETS.find((asset) => asset.assetId === 'AST-M01');
  const hasApprovedPortrait = Boolean(
    astM01?.permissionApproved && astM01.founderApproved && (FOUNDER_PRINCIPAL.portraitImage || astM01.repoPath)
  );
  const portraitSrc = FOUNDER_PRINCIPAL.portraitImage || astM01?.repoPath || null;

  const astR01 = CANONICAL_ASSETS.find((asset) => asset.assetId === 'AST-R01');
  const hasApprovedCulture = Boolean(
    astR01?.permissionApproved && astR01.founderApproved && astR01.repoPath
  );

  return (
    <div className="w-full bg-[#F5F4F0] dark:bg-[#14141A] text-[#111116] dark:text-white border-b border-[#111116]/15 dark:border-white/10 transition-colors">
      <section
        id="about"
        className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Sticky Editorial Frame & Founder Identity (#founder) */}
          <motion.div
            id="founder"
            initial={reduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            className="lg:col-span-5 lg:sticky lg:top-[var(--sticky-offset)] space-y-8"
          >
            <div>
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: STUDIO_EASE } },
                }}
                className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 font-semibold block mb-3 select-none"
              >
                03 — ABOUT {STUDIO_IDENTITY.name.toUpperCase()}
              </motion.span>
              <h2 className="font-display text-[clamp(2.3rem,6vw,4.3rem)] font-extrabold uppercase tracking-tight text-[#111116] dark:text-white leading-[0.98]">
                <span className="block overflow-hidden">
                  <motion.span
                    variants={{
                      hidden: { y: '108%', opacity: 0 },
                      visible: { y: '0%', opacity: 1, transition: { duration: 0.68, delay: 0.05, ease: STUDIO_EASE } },
                    }}
                    className="block"
                  >
                    WE&apos;RE HERE
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    variants={{
                      hidden: { y: '108%', opacity: 0 },
                      visible: { y: '0%', opacity: 1, transition: { duration: 0.72, delay: 0.13, ease: STUDIO_EASE } },
                    }}
                    className="block"
                  >
                    TO MAKE THINGS
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
                  <motion.span
                    variants={{
                      hidden: { y: '108%', opacity: 0 },
                      visible: { y: '0%', opacity: 1, transition: { duration: 0.76, delay: 0.21, ease: STUDIO_EASE } },
                    }}
                    className="block"
                  >
                    <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
                      matter
                    </span>
                    <span className="text-[#EA1E4D]">.</span>
                  </motion.span>
                </span>
              </h2>
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, delay: 0.2, ease: STUDIO_EASE } },
              }}
              className="border border-[#111116] dark:border-white/25 bg-[#111116] dark:bg-[#0B0B0F] p-5 sm:p-6 shadow-[8px_8px_0px_#111116] dark:shadow-[8px_8px_0px_#FD7D3C]"
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/60 pb-3 mb-4 border-b border-white/15">
                <span>STUDIO RECORD // VERIFIED</span>
                <span className="text-[#FD7D3C]">INDEPENDENT</span>
              </div>

              <div className="aspect-[16/10] w-full overflow-hidden bg-[#111116] flex items-center justify-center p-4">
                {hasApprovedPortrait && portraitSrc ? (
                  <img
                    src={portraitSrc}
                    alt={`${FOUNDER_PRINCIPAL.name} — ${FOUNDER_PRINCIPAL.role}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <img
                    src="/brand/riwa-logo-official.png"
                    alt="Riwa Creatives Official Crow Logo"
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                )}
              </div>

              <div className="pt-3 mt-4 border-t border-white/15 flex items-center justify-between font-mono text-[11px] text-white/80 uppercase tracking-wider">
                <span>{FOUNDER_PRINCIPAL.name}</span>
                <span className="text-[#FD7D3C]">{FOUNDER_PRINCIPAL.role}</span>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => navigate('/leadership')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111116] dark:bg-white text-white dark:text-[#111116] hover:bg-[#EA1E4D] dark:hover:bg-[#EA1E4D] dark:hover:text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                <span>Leadership Profile</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#111116]/25 dark:border-white/25 text-[#111116] dark:text-white hover:border-[#EA1E4D] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
              >
                <span>Start a Project</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Verified Positioning, Pillars & Studio Culture (#studio-culture) */}
          <motion.div
            initial={reduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.06 }}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: STUDIO_EASE } },
              }}
              className="p-6 sm:p-8 border-l-4 border-[#EA1E4D] bg-white dark:bg-[#1D1D24]"
            >
              <p className="font-display font-bold text-xl sm:text-2xl text-[#111116] dark:text-white leading-snug mb-2">
                {STUDIO_IDENTITY.name} is an {STUDIO_IDENTITY.descriptor.replace(/\.$/, '')} founded by {FOUNDER_PRINCIPAL.name}.
              </p>
              {FOUNDER_PRINCIPAL.bio && (
                <p className="font-sans text-sm sm:text-base text-[#52525B] dark:text-white/75 leading-relaxed mt-2">
                  {FOUNDER_PRINCIPAL.bio}
                </p>
              )}
            </motion.div>

            <div className="border-t border-[#111116]/20 dark:border-white/15 divide-y divide-[#111116]/20 dark:divide-white/15">
              {EDITORIAL_PILLARS.map((pillar, idx) => (
                <motion.div
                  key={pillar.label}
                  variants={{
                    hidden: { opacity: 0, x: 16 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.52, delay: 0.08 + idx * 0.08, ease: STUDIO_EASE },
                    },
                  }}
                  className="py-6 sm:py-7"
                >
                  <span className="font-mono text-xs font-bold text-[#C4123D] dark:text-[#FD7D3C] uppercase tracking-widest block mb-2">
                    {pillar.label}
                  </span>
                  <h2 className="font-display text-lg sm:text-xl font-extrabold uppercase tracking-tight text-[#111116] dark:text-white mb-2">
                    {pillar.title}
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-[#3F3F46] dark:text-white/75 leading-relaxed">
                    {pillar.copy}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Studio Culture Section (#studio-culture) */}
            <div
              id="studio-culture"
              className="pt-8 border-t border-[#111116]/20 dark:border-white/15 space-y-4"
            >
              <span className="font-mono text-xs font-bold text-[#C4123D] dark:text-[#FD7D3C] uppercase tracking-widest block">
                STUDIO CULTURE // PRACTICE
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#111116] dark:text-white">
                Intentional Craft Over Noise.
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#3F3F46] dark:text-white/75 leading-relaxed">
                Strategy, design taste, engineering, and room production work directly alongside each other so brand decisions stay coherent across print, digital, and physical rooms.
              </p>

              {hasApprovedCulture && astR01?.repoPath && (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 18, scale: 0.97 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, delay: 0.25, ease: STUDIO_EASE } },
                  }}
                  className="pt-2 max-w-sm border border-[#111116]/15 dark:border-white/15 bg-white dark:bg-[#111116] p-3"
                >
                  <img
                    src={astR01.repoPath}
                    alt="Riwa Creatives Studio Culture Poster"
                    loading="lazy"
                    className="w-full h-auto object-contain"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#52525B] dark:text-white/60 block pt-2">
                    STUDIO CULTURE // {STUDIO_IDENTITY.name}
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
