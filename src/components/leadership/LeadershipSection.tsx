import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import {
  CANONICAL_ASSETS,
  CONTACT_CONFIG,
  FOUNDER_PRINCIPAL,
  LOCKED_CAPABILITIES,
  STUDIO_IDENTITY,
} from '../../data/studioData';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface LeadershipSectionProps {
  standalone?: boolean;
}

const DIRECTION_PRINCIPLES = [
  {
    code: '01',
    title: 'PRINCIPAL-LED FROM BRIEF TO LAUNCH',
    summary:
      'Every project is directed hands-on from the initial strategic conversation through final design and production—keeping decisions coherent and focused.',
  },
  {
    code: '02',
    title: 'STRATEGY AND TASTE UNDER ONE ROOF',
    summary:
      'Positioning, visual identity, campaign copy, interactive engineering, and physical room production inform each other rather than working in disconnected silos.',
  },
  {
    code: '03',
    title: 'BUILT FOR DISTINCTIVE PRESENCE',
    summary:
      'Rather than recycling predictable industry templates, we shape identities, campaigns, and digital experiences built to stand apart cleanly.',
  },
];

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  standalone = false,
}) => {
  const reduced = useReducedMotion();
  const [activePracticeIdx, setActivePracticeIdx] = useState(0);
  const [activePrincipleIdx, setActivePrincipleIdx] = useState(0);

  const activePractice =
    LOCKED_CAPABILITIES[activePracticeIdx] || LOCKED_CAPABILITIES[0];
  const isEventsPractice = activePractice.id === 'events-experiences';

  const astM01 = CANONICAL_ASSETS.find((asset) => asset.assetId === 'AST-M01');
  const hasApprovedPortrait = Boolean(
    astM01?.permissionApproved &&
    astM01.founderApproved &&
    (FOUNDER_PRINCIPAL.portraitImage || astM01.repoPath)
  );
  const portraitSrc = FOUNDER_PRINCIPAL.portraitImage || astM01?.repoPath || null;

  return (
    <div className="w-full">
      {/* ================================================================== */}
      {/* BAND 1 — MONUMENTAL STUDIO DIRECTION STAGE (#0B0B0F -> #F5F4F0)     */}
      {/* ================================================================== */}
      <section
        id="leadership"
        className={`relative w-full bg-[#0B0B0F] dark:bg-[#F5F4F0] text-white dark:text-[#111116] border-b border-white/10 dark:border-[#111116]/15 overflow-hidden transition-colors ${standalone
          ? 'pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24'
          : 'py-16 sm:py-24'
          } px-4 sm:px-8 md:px-12`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 6 Cols: Editorial Statement + Interactive 5-Practice Lens */}
            <motion.div
              initial={reduced ? false : 'hidden'}
              animate="visible"
              className="lg:col-span-6 space-y-8 min-w-0"
            >
              <div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: STUDIO_EASE } },
                  }}
                  className="flex items-center gap-3 mb-4"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EA1E4D] dark:bg-[#C4123D] inline-block" aria-hidden="true" />
                  <span className="font-mono text-xs uppercase tracking-[0.26em] text-[#FD7D3C] dark:text-[#C4123D] font-bold">
                    01 — STUDIO LEADERSHIP · CREATIVE DIRECTION
                  </span>
                </motion.div>

                <h1 className="font-display text-[clamp(1.65rem,3.1vw,3rem)] font-extrabold uppercase tracking-tighter text-white dark:text-[#111116] leading-[0.94]">
                  <span className="block overflow-hidden">
                    <motion.span
                      variants={{
                        hidden: { y: '108%', opacity: 0 },
                        visible: { y: '0%', opacity: 1, transition: { duration: 0.68, delay: 0.04, ease: STUDIO_EASE } },
                      }}
                      className="block"
                    >
                      FOUNDED ON
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
                      CONVICTION.
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
                    <motion.span
                      variants={{
                        hidden: { y: '108%', opacity: 0 },
                        visible: { y: '0%', opacity: 1, transition: { duration: 0.76, delay: 0.2, ease: STUDIO_EASE } },
                      }}
                      className="block"
                    >
                      <span>LED BY</span>{' '}
                      <span className="font-serif italic font-normal tracking-tight text-[#EA1E4D] dark:text-[#C4123D] text-[1.12em] lowercase">
                        creative
                      </span>{' '}
                      <span>TASTE</span>
                      <span className="text-[#EA1E4D] dark:text-[#C4123D]">.</span>
                    </motion.span>
                  </span>
                </h1>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.26, ease: STUDIO_EASE } },
                  }}
                  className="mt-5 max-w-xl font-sans text-sm sm:text-base text-[#B4B4BE] dark:text-[#3F3F46] leading-relaxed"
                >
                  {STUDIO_IDENTITY.name} is an {STUDIO_IDENTITY.descriptor.replace(/\.$/, '')} founded by {FOUNDER_PRINCIPAL.name}. Select any discipline below to inspect how studio direction connects strategy, creative craft, and execution.
                </motion.p>
              </div>

              {/* Interactive 5-Practice Switcher Rail */}
              <div className="border-t border-white/15 dark:border-[#111116]/20">
                {LOCKED_CAPABILITIES.map((cap, idx) => {
                  const isActive = idx === activePracticeIdx;
                  const isEvents = cap.id === 'events-experiences';
                  return (
                    <button
                      key={cap.id}
                      type="button"
                      onClick={() => setActivePracticeIdx(idx)}
                      className={`relative w-full py-3.5 px-3 border-b border-white/15 dark:border-[#111116]/20 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer ${isActive
                        ? isEvents
                          ? 'bg-[#FD7D3C] text-[#111116]'
                          : 'bg-[#17171E] dark:bg-[#111116] text-white'
                        : 'text-[#B4B4BE] dark:text-[#52525B] hover:text-white dark:hover:text-[#111116] hover:bg-white/[0.03] dark:hover:bg-black/[0.04]'
                        }`}
                    >
                      {isActive && !isEvents && (
                        <motion.span
                          layoutId="leadership-practice-rail"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                          aria-hidden="true"
                          className="absolute left-0 inset-y-0 w-[3px] bg-[#EA1E4D]"
                        />
                      )}
                      <div className="flex items-baseline gap-3.5 min-w-0">
                        <span
                          className={`font-mono text-xs font-bold shrink-0 ${isActive
                            ? isEvents
                              ? 'text-[#111116]'
                              : 'text-[#FD7D3C]'
                            : 'text-[#FD7D3C]/80 dark:text-[#C4123D]'
                            }`}
                        >
                          {cap.index} —
                        </span>
                        <span className="font-display text-sm sm:text-base font-extrabold uppercase tracking-tight leading-snug">
                          {cap.name}
                        </span>
                      </div>
                      <ArrowUpRight
                        size={15}
                        aria-hidden="true"
                        className={`shrink-0 transition-transform ${isActive ? 'translate-x-0.5 -translate-y-0.5' : 'opacity-50'
                          }`}
                      />
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Right 6 Cols: Interactive Crop-Marked Direction Dossier Plate */}
            <div className="lg:col-span-6 lg:sticky lg:top-[var(--sticky-offset)] min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePractice.id}
                  initial={reduced ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className={`relative border p-6 sm:p-9 min-h-[430px] flex flex-col justify-between overflow-hidden ${isEventsPractice
                    ? 'bg-[#FD7D3C] text-[#111116] border-[#111116] shadow-[10px_10px_0px_#F5F4F0] dark:shadow-[10px_10px_0px_#111116]'
                    : 'bg-[#111116] text-white border-white/20 dark:border-[#111116] shadow-[10px_10px_0px_#C4123D] dark:shadow-[10px_10px_0px_#EA1E4D]'
                    }`}
                >
                  {/* Corner Crop Marks */}
                  <div
                    className={`absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 pointer-events-none ${isEventsPractice ? 'border-[#111116]' : 'border-[#EA1E4D]'
                      }`}
                    aria-hidden="true"
                  />
                  <div
                    className={`absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 pointer-events-none ${isEventsPractice ? 'border-[#111116]' : 'border-[#EA1E4D]'
                      }`}
                    aria-hidden="true"
                  />
                  <div
                    className={`absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 pointer-events-none ${isEventsPractice ? 'border-[#111116]' : 'border-[#EA1E4D]'
                      }`}
                    aria-hidden="true"
                  />
                  <div
                    className={`absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 pointer-events-none ${isEventsPractice ? 'border-[#111116]' : 'border-[#EA1E4D]'
                      }`}
                    aria-hidden="true"
                  />

                  <div className="space-y-6 relative z-10">
                    <div
                      className={`flex items-center justify-between gap-2 pb-4 border-b font-mono text-[11px] uppercase tracking-widest ${isEventsPractice ? 'border-[#111116]/25 text-[#111116]' : 'border-white/15 text-[#FD7D3C]'
                        }`}
                    >
                      <span className="font-bold">
                        DIRECTION LENS // {activePractice.index}
                      </span>
                      <span className={isEventsPractice ? 'font-bold text-[#111116]' : 'text-[#B4B4BE]'}>
                        {activePractice.categoryTag}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight leading-[0.98]">
                        {activePractice.name}
                      </h2>
                      <p
                        className={`font-serif italic text-xl sm:text-2xl leading-snug ${isEventsPractice ? 'text-[#111116] underline decoration-1 underline-offset-4' : 'text-[#EA1E4D]'
                          }`}
                      >
                        {activePractice.headline}
                      </p>
                      <p
                        className={`font-sans text-sm sm:text-base leading-relaxed pt-1 ${isEventsPractice ? 'text-[#111116]/90 font-medium' : 'text-[#B4B4BE]'
                          }`}
                      >
                        {activePractice.strategicValue}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {activePractice.confirmedDeliverables.map((item) => (
                        <span
                          key={item}
                          className={`px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider border ${isEventsPractice
                            ? 'border-[#111116] bg-[#111116] text-[#F5F4F0]'
                            : 'border-white/20 bg-white/5 text-white'
                            }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`pt-6 mt-8 border-t flex flex-wrap items-center justify-between gap-4 relative z-10 ${isEventsPractice ? 'border-[#111116]/25' : 'border-white/15'
                      }`}
                  >
                    <Link
                      to={`/services/${activePractice.id}`}
                      className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-colors ${isEventsPractice
                        ? 'bg-[#111116] text-white hover:bg-white hover:text-[#111116]'
                        : 'bg-[#FD7D3C] text-[#111116] hover:bg-white'
                        }`}
                    >
                      <span>Explore Practice</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>

                    <Link
                      to={`/contact?service=${activePractice.id}`}
                      className={`inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider hover:underline ${isEventsPractice ? 'text-[#111116]' : 'text-white'
                        }`}
                    >
                      <span>Start a Brief</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* BAND 2 — FOUNDER & PRINCIPAL ATELIER SPREAD (#F5F4F0 <-> #0B0B0F)  */}
      {/* ================================================================== */}
      <section className="w-full bg-[#F5F4F0] dark:bg-[#0B0B0F] text-[#111116] dark:text-white py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 border-b border-[#111116]/15 dark:border-white/15 transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left 5 Cols: Founder / Studio Emblem Frame */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-2 border-[#111116] dark:border-white/25 bg-[#111116] dark:bg-[#16161F] text-white p-6 sm:p-7 shadow-[8px_8px_0px_#111116] dark:shadow-[8px_8px_0px_#FD7D3C]">
              <div className="flex items-center justify-between font-mono text-[11px] text-[#B4B4BE] uppercase tracking-widest pb-4 border-b border-white/15">
                <span>STUDIO PRINCIPAL // 01</span>
                <span className="text-[#FD7D3C] font-bold">FOUNDER</span>
              </div>

              {hasApprovedPortrait && portraitSrc ? (
                <div className="my-5 aspect-[4/5] w-full overflow-hidden border border-white/15 bg-[#17171D]">
                  <img
                    src={portraitSrc}
                    alt={`${FOUNDER_PRINCIPAL.name} — ${FOUNDER_PRINCIPAL.role}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ) : (
                <div className="my-6 aspect-[16/11] w-full bg-[#0B0B0F] border border-white/15 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                  <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t border-l border-[#EA1E4D]" aria-hidden="true" />
                  <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t border-r border-[#EA1E4D]" aria-hidden="true" />
                  <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b border-l border-[#EA1E4D]" aria-hidden="true" />
                  <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b border-r border-[#EA1E4D]" aria-hidden="true" />

                  <img
                    src="/brand/riwa-logo-official.png"
                    alt="Riwa Creatives Official Mark"
                    loading="lazy"
                    className="h-24 w-auto object-contain mb-3"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FD7D3C] font-bold">
                    {STUDIO_IDENTITY.name.toUpperCase()}
                  </span>
                </div>
              )}

              <div className="pt-4 border-t border-white/15 flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-white uppercase">{FOUNDER_PRINCIPAL.name}</span>
                <span className="text-[#FD7D3C] uppercase font-bold">{FOUNDER_PRINCIPAL.role}</span>
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Principal Narrative & Interactive Operating Principles */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#C4123D] dark:text-[#FD7D3C] font-bold block">
                02 — PRINCIPAL DOSSIER
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#111116] dark:text-white leading-[0.95]">
                {FOUNDER_PRINCIPAL.name}
                <span className="text-[#EA1E4D]">.</span>
              </h2>
              <p className="font-serif italic text-xl sm:text-2xl text-[#C4123D] dark:text-[#FD7D3C]">
                {FOUNDER_PRINCIPAL.role} · {FOUNDER_PRINCIPAL.department}
              </p>
              <p className="font-sans text-sm sm:text-base text-[#3F3F46] dark:text-white/85 leading-relaxed pt-2 max-w-2xl">
                {FOUNDER_PRINCIPAL.bio ||
                  `Riwa Creatives is an Independent Creative & Growth Studio founded by ${FOUNDER_PRINCIPAL.name}, bringing brand foundations, advertising craft, interactive technology, live room experiences, and ongoing brand stewardship into one accountable practice.`}
              </p>
            </div>

            {/* Interactive How Leadership Works Accordion */}
            <div className="border-t-2 border-[#111116]/20 dark:border-white/15 divide-y divide-[#111116]/15 dark:divide-white/15">
              {DIRECTION_PRINCIPLES.map((item, idx) => {
                const isOpen = idx === activePrincipleIdx;
                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => setActivePrincipleIdx(idx)}
                    className="w-full py-5 text-left group cursor-pointer"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-baseline gap-4 min-w-0">
                        <span className="font-mono text-xs font-bold text-[#C4123D] dark:text-[#FD7D3C] shrink-0">
                          {item.code} //
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-extrabold uppercase tracking-tight text-[#111116] dark:text-white group-hover:text-[#EA1E4D] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#52525B] dark:text-[#B4B4BE] shrink-0">
                        {isOpen ? '−' : '+'}
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.p
                          initial={reduced ? false : { opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={reduced ? undefined : { opacity: 0, height: 0 }}
                          transition={{ duration: 0.32, ease: STUDIO_EASE }}
                          className="mt-3 pl-9 font-sans text-sm sm:text-base text-[#3F3F46] dark:text-white/80 leading-relaxed max-w-2xl overflow-hidden"
                        >
                          {item.summary}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111116] dark:bg-white text-white dark:text-[#111116] hover:bg-[#C4123D] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Read About Riwa</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#111116]/25 dark:border-white/25 text-[#111116] dark:text-white hover:border-[#EA1E4D] font-mono text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Explore Capabilities</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* BAND 3 — SIGNATURE ORANGE INVITATION BAND (#FD7D3C)                */}
      {/* ================================================================== */}
      <section className="w-full bg-[#FD7D3C] text-[#111116] py-16 sm:py-24 px-4 sm:px-8 md:px-12 border-b-2 border-[#111116]">
        <motion.div
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <div className="max-w-3xl space-y-4">
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -12 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: STUDIO_EASE } },
              }}
              className="font-mono text-xs uppercase tracking-[0.26em] text-[#111116] font-bold block"
            >
              03 — DIRECT COLLABORATION · RIWA CREATIVES
            </motion.span>
            <h2 className="font-display text-[clamp(2.2rem,5.8vw,4.5rem)] font-extrabold uppercase tracking-tighter text-[#111116] leading-[0.93]">
              <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em] px-1 -mx-1">
                <motion.span
                  variants={{
                    hidden: { y: '108%', opacity: 0 },
                    visible: { y: '0%', opacity: 1, transition: { duration: 0.72, delay: 0.06, ease: STUDIO_EASE } },
                  }}
                  className="block"
                >
                  WORK DIRECTLY WITH THE{' '}
                  <span className="font-serif italic font-normal underline decoration-2 underline-offset-4 lowercase">
                    studio.
                  </span>
                </motion.span>
              </span>
            </h2>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.16, ease: STUDIO_EASE } },
            }}
            className="flex flex-wrap items-center gap-4 shrink-0"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 min-h-[48px] px-7 py-3.5 rounded-full bg-[#111116] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#111116] transition-colors"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>

            {CONTACT_CONFIG.publicEmail ? (
              <a
                href={`mailto:${CONTACT_CONFIG.publicEmail}`}
                className="inline-flex items-center gap-2 min-h-[48px] px-6 py-3.5 rounded-full border-2 border-[#111116] text-[#111116] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#111116] hover:text-white transition-colors"
              >
                <span>{CONTACT_CONFIG.publicEmail}</span>
              </a>
            ) : (
              <Link
                to="/work"
                className="inline-flex items-center gap-2 min-h-[48px] px-6 py-3.5 rounded-full border-2 border-[#111116] text-[#111116] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#111116] hover:text-white transition-colors"
              >
                <span>View Selected Work</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            )}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};
