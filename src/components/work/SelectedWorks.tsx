import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../../data/projectsData';
import { getPublicArchiveArtefacts, LOCKED_CAPABILITIES } from '../../data/studioData';
import { ProjectCard } from './ProjectCard';
import { ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface SelectedWorksProps {
  standalone?: boolean;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ standalone = false }) => {
  const reduced = useReducedMotion();
  const featuredProject = PROJECTS_DATA[0];
  const supportingStories = PROJECTS_DATA.slice(1, 3);
  const archiveEntries = PROJECTS_DATA;
  const archiveArtefacts = getPublicArchiveArtefacts();

  return (
    <div className="w-full bg-[#E7E7E9] dark:bg-[#14141A] text-[#111116] dark:text-white border-y border-[#111116]/15 dark:border-white/10 transition-colors">
      <section
        id="work"
        className={`relative w-full ${standalone
          ? 'pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-28 md:pb-32'
          : 'py-16 sm:py-24 md:py-32'
          } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
      >
        {/* Editorial Section Header */}
        <motion.div
          initial={reduced ? false : 'hidden'}
          animate="visible"
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16 pb-8 border-b border-[#111116]/20 dark:border-white/15"
        >
          <div className="flex-1 min-w-0 max-w-4xl">
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -12 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: STUDIO_EASE } },
              }}
              className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 block mb-3 font-semibold select-none"
            >
              {standalone ? '01 — THE CREATIVE ARCHIVE' : '02 — THE CREATIVE ARCHIVE'}
            </motion.span>
            <h1 className="font-display text-[clamp(2rem,5.4vw,4.15rem)] font-extrabold uppercase tracking-tight text-[#111116] dark:text-white leading-[0.96]">
              {standalone ? (
                <>
                  <span className="block overflow-hidden pr-2 -mr-2">
                    <motion.span
                      variants={{
                        hidden: { y: '108%', opacity: 0 },
                        visible: { y: '0%', opacity: 1, transition: { duration: 0.7, delay: 0.05, ease: STUDIO_EASE } },
                      }}
                      className="block"
                    >
                      A COLLECTION OF
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em] pr-2 -mr-2">
                    <motion.span
                      variants={{
                        hidden: { y: '108%', opacity: 0 },
                        visible: { y: '0%', opacity: 1, transition: { duration: 0.76, delay: 0.14, ease: STUDIO_EASE } },
                      }}
                      className="block"
                    >
                      <span>THINGS WE&apos;VE</span>{' '}
                      <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.12em] lowercase select-none">
                        made
                      </span>{' '}
                      <span>HAPPEN</span>
                      <span className="text-[#EA1E4D]">.</span>
                    </motion.span>
                  </span>
                </>
              ) : (
                <>
                  <span className="block overflow-hidden pr-2 -mr-2">
                    <motion.span
                      variants={{
                        hidden: { y: '108%', opacity: 0 },
                        visible: { y: '0%', opacity: 1, transition: { duration: 0.7, delay: 0.05, ease: STUDIO_EASE } },
                      }}
                      className="block"
                    >
                      LESS TALK.
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em] pr-2 -mr-2">
                    <motion.span
                      variants={{
                        hidden: { y: '108%', opacity: 0 },
                        visible: { y: '0%', opacity: 1, transition: { duration: 0.76, delay: 0.14, ease: STUDIO_EASE } },
                      }}
                      className="block"
                    >
                      <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
                        more
                      </span>{' '}
                      <span>WORK</span>
                      <span className="text-[#EA1E4D]">.</span>
                    </motion.span>
                  </span>
                </>
              )}
            </h1>
          </div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.22, ease: STUDIO_EASE } },
            }}
            className="font-sans text-sm sm:text-base text-[#52525B] dark:text-white/70 leading-relaxed max-w-sm lg:max-w-md shrink-0"
          >
            Curated client stories, studio-created IP, and live event initiatives published transparently with verified permissions.
          </motion.p>
        </motion.div>

        {/* ============================================================ */}
        {/* A. FEATURED STORY                                            */}
        {/* ============================================================ */}
        {featuredProject && (
          <div className="mb-16 sm:mb-24">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 mb-5">
              <span className="font-bold text-[#111116] dark:text-white">A / FEATURED STORY</span>
              <span>{featuredProject.categoryBadge}</span>
            </div>
            <ProjectCard project={featuredProject} index={0} variant="featured" />
          </div>
        )}

        {/* ============================================================ */}
        {/* B. SUPPORTING STORIES                                        */}
        {/* ============================================================ */}
        {supportingStories.length > 0 && (
          <div className="mb-16 sm:mb-24 pt-10 border-t border-[#111116]/20 dark:border-white/15">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 mb-8">
              <span className="font-bold text-[#111116] dark:text-white">B / SUPPORTING STORIES</span>
              <span>CLIENT PROJECTS &amp; INITIATIVES</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {supportingStories[0] && (
                <div className="lg:col-span-7">
                  <ProjectCard project={supportingStories[0]} index={1} variant="supporting-wide" />
                </div>
              )}
              {supportingStories[1] && (
                <div className="lg:col-span-5 lg:pt-12">
                  <ProjectCard project={supportingStories[1]} index={2} variant="supporting-tall" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* C. STUDIO CREATIVE ARCHIVE & CLEARANCE INDEX (#creative-archive) */}
        {/* ============================================================ */}
        <div id="creative-archive" className="pt-10 border-t border-[#111116]/20 dark:border-white/15 space-y-12">
          {archiveArtefacts.length > 0 && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60">
                <span className="font-bold text-[#111116] dark:text-white">STUDIO ARCHIVE // STUDIO IP &amp; CULTURE</span>
                <span>[{archiveArtefacts.length} CLEARED ARTEFACTS]</span>
              </div>

              <motion.div
                initial={reduced ? false : 'hidden'}
                whileInView="visible"
                viewport={{ once: true, amount: 0.06 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {archiveArtefacts.map((artefact, idx) => (
                  <motion.article
                    key={artefact.id}
                    variants={{
                      hidden: { opacity: 0, y: 22, scale: 0.97 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.6, delay: idx * 0.1, ease: STUDIO_EASE },
                      },
                    }}
                    className="group rounded-2xl border border-[#111116]/15 dark:border-white/15 bg-white dark:bg-[#1A1A22] p-6 space-y-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#EA1E4D]/50"
                  >
                    <div className="flex items-center justify-between font-mono text-xs uppercase">
                      <span className="font-bold text-[#C4123D] dark:text-[#FD7D3C]">
                        {artefact.badge}
                      </span>
                      <span className="text-[#52525B] dark:text-white/60">{artefact.medium}</span>
                    </div>
                    <div className="aspect-[4/3] overflow-hidden bg-[#111116] flex items-center justify-center p-4">
                      <img
                        src={artefact.src}
                        alt={artefact.title}
                        width={artefact.width}
                        height={artefact.height}
                        loading="lazy"
                        className="h-full w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-extrabold uppercase text-[#111116] dark:text-white">
                        {artefact.title}
                      </h2>
                      <p className="font-sans text-sm text-[#52525B] dark:text-white/75 mt-1">
                        {artefact.studioNote}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          )}

          {archiveEntries.length > 0 ? (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 mb-6">
                <span className="font-bold text-[#111116] dark:text-white">C / THE ARCHIVE — EDITORIAL INDEX</span>
                <span>[{archiveEntries.length} RECORDED DOSSIERS]</span>
              </div>

              <div className="border-t border-[#111116]/20 dark:border-white/15 bg-white/70 dark:bg-[#1A1A22] px-4 sm:px-6">
                {archiveEntries.map((entry) => (
                  <Link
                    key={entry.id}
                    to={`/work/${entry.id}`}
                    className="group py-5 border-b last:border-b-0 border-[#111116]/15 dark:border-white/10 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center transition-colors hover:text-[#EA1E4D]"
                  >
                    <div className="md:col-span-3 flex items-center gap-2.5 font-mono text-xs">
                      <span className="font-bold text-[#C4123D] dark:text-[#FD7D3C] shrink-0">
                        {entry.archiveCode.split(' / ')[0]}
                      </span>
                      <span className="px-2 py-0.5 bg-[#111116] dark:bg-white text-white dark:text-[#111116] text-[10px] font-bold uppercase tracking-widest">
                        {entry.categoryBadge}
                      </span>
                    </div>

                    <div className="md:col-span-4">
                      <h3 className="font-display text-base sm:text-lg font-extrabold uppercase tracking-tight text-[#111116] dark:text-white group-hover:text-[#EA1E4D] transition-colors">
                        {entry.title}
                      </h3>
                      <span className="font-mono text-[11px] text-[#52525B] dark:text-white/60 block">
                        {entry.client}
                      </span>
                    </div>

                    <div className="md:col-span-3 font-mono text-xs text-[#52525B] dark:text-white/70">
                      {entry.category}
                    </div>

                    <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-3 font-mono text-xs">
                      <span className="text-[#52525B] dark:text-white/50">{entry.year}</span>
                      <span className="inline-flex items-center gap-1 font-bold text-[#111116] dark:text-white group-hover:text-[#EA1E4D] uppercase tracking-wider">
                        <span>Case Study</span>
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-[#111116]/15 dark:border-white/15 bg-white dark:bg-[#1A1A22] p-8 sm:p-12 space-y-6">
              <div className="max-w-2xl space-y-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C4123D] dark:text-[#FD7D3C] font-bold block">
                  PORTFOLIO INDEX // FIVE DISCIPLINES
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#111116] dark:text-white">
                  Bold Visuals. Strategy That Holds The Room.
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#52525B] dark:text-white/75 leading-relaxed">
                  Every public release separates commissioned Client Projects, self-initiated Studio IP, and Event Initiatives without synthetic mockups or padded claims—explore any of our five core practices directly below.
                </p>
              </div>

              <div className="pt-4 border-t border-[#111116]/15 dark:border-white/15 flex flex-wrap gap-3 font-mono text-xs">
                {LOCKED_CAPABILITIES.map((cap) => (
                  <Link
                    key={cap.id}
                    to={`/services/${cap.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#111116]/20 dark:border-white/20 text-[#111116] dark:text-white hover:border-[#EA1E4D] transition-colors font-semibold"
                  >
                    <span>{cap.name}</span>
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Archive Navigation */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#111116]/20 dark:border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          {!standalone ? (
            <>
              <span className="text-xs text-[#52525B] dark:text-white/60 uppercase tracking-wider">
                Every cleared entry opens a full case-study dossier
              </span>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111116] dark:bg-white text-white dark:text-[#111116] hover:bg-[#EA1E4D] dark:hover:bg-[#EA1E4D] dark:hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Open Full Creative Archive</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </>
          ) : (
            <>
              <span className="text-xs text-[#52525B] dark:text-white/60 uppercase tracking-wider">
                Ready to commission your next campaign or identity?
              </span>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EA1E4D] text-white hover:brightness-110 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Commission a Project</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </>
          )}
        </div>
      </section>
    </div>
  );
};
