import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ArrowUpRight } from 'lucide-react';

interface SelectedWorksProps {
  standalone?: boolean;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ standalone = false }) => {
  const featuredProject = PROJECTS_DATA[0];
  const supportingPrimary = PROJECTS_DATA[1];
  const supportingSecondary = PROJECTS_DATA[2];
  const supportingTertiary = PROJECTS_DATA[3];
  const conceptAndFurther = PROJECTS_DATA.slice(4);

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
        {/* Opening Editorial Header */}
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
            A selection of things we&apos;ve imagined, designed, built and brought to life. Client productions and self-initiated concept explorations presented side by side, clearly distinguished.
          </p>
        </div>

        {/* A. ONE FEATURED STORY */}
        {featuredProject && (
          <div className="mb-16 sm:mb-24">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 mb-5">
              <span className="font-bold text-[#111116] dark:text-white">✦ FEATURED STORY</span>
              <span>ARCHIVE LEAD</span>
            </div>
            <ProjectCard project={featuredProject} index={0} variant="featured" />
          </div>
        )}

        {/* B. SUPPORTING STORIES */}
        <div className="mb-16 sm:mb-24 pt-10 border-t border-[#111116]/20 dark:border-white/15">
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 mb-8">
            <span className="font-bold text-[#111116] dark:text-white">✦ SUPPORTING STORIES</span>
            <span>MIXED EDITORIAL FORMATS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-12 sm:space-y-16">
              {supportingPrimary && (
                <ProjectCard project={supportingPrimary} index={1} variant="wide" />
              )}
              {supportingTertiary && (
                <ProjectCard project={supportingTertiary} index={3} variant="wide" />
              )}
            </div>

            <div className="lg:col-span-5 lg:pt-14">
              {supportingSecondary && (
                <ProjectCard project={supportingSecondary} index={2} variant="tall" />
              )}
            </div>
          </div>
        </div>

        {/* C. FURTHER WORK & CONCEPT EXPLORATIONS */}
        {conceptAndFurther.length > 0 && (
          <div className="pt-10 border-t border-[#111116]/20 dark:border-white/15">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 mb-6">
              <span className="font-bold text-[#111116] dark:text-white">✦ FURTHER WORK &amp; CONCEPT ARCHITECTURE</span>
              <span>SELF-INITIATED &amp; BLUEPRINTS</span>
            </div>

            <div className="border-t border-[#111116]/20 dark:border-white/15">
              {conceptAndFurther.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx + 4}
                  variant="archive-row"
                />
              ))}
            </div>
          </div>
        )}

        {/* Archive Footer CTA */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#111116]/20 dark:border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          {!standalone ? (
            <>
              <span className="text-xs text-[#52525B] dark:text-white/60 uppercase tracking-wider">
                Click any archive entry to open the full case study
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
                Ready to add your brand to the archive?
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
