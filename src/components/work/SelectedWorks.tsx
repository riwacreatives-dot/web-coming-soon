import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ArrowUpRight } from 'lucide-react';

interface SelectedWorksProps {
  standalone?: boolean;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ standalone = false }) => {
  const featuredProject = PROJECTS_DATA[0]; // A. Featured Story (Unified Solanas Campaign Suite)
  const supportingStories = PROJECTS_DATA.slice(1, 3); // B. Supporting Stories (Asymmetric duo)
  const archiveEntries = PROJECTS_DATA; // C. Full Compact Editorial Archive Index

  return (
    <div className="w-full bg-[#E7E7E9] dark:bg-[#14141A] text-[#111116] dark:text-white border-y border-[#111116]/15 dark:border-white/10 transition-colors">
      <section
        id="work"
        className={`relative w-full ${
          standalone
            ? 'pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-28 md:pb-32'
            : 'py-16 sm:py-24 md:py-32'
        } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
      >
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-[#111116]/20 dark:border-white/15">
          <div className="max-w-3xl">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 block mb-3 font-semibold select-none">
              {standalone ? '01 / OPENING STATEMENT — THE CREATIVE ARCHIVE' : '02 / THE CREATIVE ARCHIVE'}
            </span>
            <h2 className="font-display text-[clamp(2.35rem,7vw,4.75rem)] font-black uppercase tracking-tight text-[#111116] dark:text-white leading-[0.96]">
              {standalone ? (
                <>
                  <span>A COLLECTION OF</span><br />
                  <span>THINGS WE&apos;VE</span>{' '}
                  <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.12em] lowercase select-none">
                    made
                  </span>{' '}
                  <span>HAPPEN</span><span className="text-[#EA1E4D]">.</span>
                </>
              ) : (
                <>
                  <span>LESS TALK.</span><br />
                  <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
                    more
                  </span>{' '}
                  <span>WORK</span><span className="text-[#EA1E4D]">.</span>
                </>
              )}
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#52525B] dark:text-white/70 leading-relaxed max-w-md">
            A curated archive uniting complete client campaign suites and self-initiated concept blueprints. Zero repetition, clear roles, and real craft.
          </p>
        </div>

        {/* ============================================================ */}
        {/* A. FEATURED STORIES (Unified Cohesive Campaign Showcase)     */}
        {/* ============================================================ */}
        {featuredProject && (
          <div className="mb-16 sm:mb-24">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 mb-5">
              <span className="font-bold text-[#111116] dark:text-white">A / FEATURED STORY</span>
              <span>UNIFIED CAMPAIGN SUITE (4 DROPS)</span>
            </div>
            <ProjectCard project={featuredProject} index={0} variant="featured" />
          </div>
        )}

        {/* ============================================================ */}
        {/* B. SUPPORTING STORIES (Asymmetrical Proportions)             */}
        {/* ============================================================ */}
        {supportingStories.length > 0 && (
          <div className="mb-16 sm:mb-24 pt-10 border-t border-[#111116]/20 dark:border-white/15">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 mb-8">
              <span className="font-bold text-[#111116] dark:text-white">B / SUPPORTING STORIES</span>
              <span>CONCEPT EXPLORATIONS &amp; BLUEPRINTS</span>
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
        {/* C. THE ARCHIVE (Compact Editorial Project Index)             */}
        {/* ============================================================ */}
        <div className="pt-10 border-t border-[#111116]/20 dark:border-white/15">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 mb-6">
            <span className="font-bold text-[#111116] dark:text-white">C / THE ARCHIVE — EDITORIAL INDEX</span>
            <span>[{archiveEntries.length} RECORDED DOSSIERS]</span>
          </div>

          <div className="border-t border-[#111116]/20 dark:border-white/15 bg-white/70 dark:bg-[#1A1A22] px-4 sm:px-6">
            {archiveEntries.map((entry) => (
              <Link
                key={entry.id}
                to={`/work/${entry.id}`}
                data-cursor-text="DOSSIER"
                className="group py-5 border-b last:border-b-0 border-[#111116]/15 dark:border-white/10 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center transition-colors hover:text-[#EA1E4D]"
              >
                <div className="md:col-span-3 flex items-center gap-2.5 font-mono text-xs">
                  <span className="font-bold text-[#EA1E4D] shrink-0">
                    {entry.archiveCode.split(' / ')[0]}
                  </span>
                  {entry.isConcept && (
                    <span className="px-2 py-0.5 bg-[#111116] dark:bg-white text-white dark:text-[#111116] text-[9px] font-bold uppercase tracking-widest">
                      CONCEPT
                    </span>
                  )}
                </div>

                <div className="md:col-span-4">
                  <h3 className="font-display text-base sm:text-lg font-black uppercase tracking-tight text-[#111116] dark:text-white group-hover:text-[#EA1E4D] transition-colors">
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
                  <span className="text-[#71717A] dark:text-white/50">{entry.year}</span>
                  <span className="inline-flex items-center gap-1 font-bold text-[#111116] dark:text-white group-hover:text-[#EA1E4D] uppercase tracking-wider">
                    <span>Case Study</span>
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Archive Navigation */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#111116]/20 dark:border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          {!standalone ? (
            <>
              <span className="text-xs text-[#52525B] dark:text-white/60 uppercase tracking-wider">
                Every entry opens an individual case-study dossier
              </span>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111116] dark:bg-white text-white dark:text-[#111116] hover:bg-[#EA1E4D] dark:hover:bg-[#EA1E4D] dark:hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Open Full Creative Archive</span>
                <ArrowUpRight size={14} />
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
                <ArrowUpRight size={14} />
              </Link>
            </>
          )}
        </div>
      </section>
    </div>
  );
};
