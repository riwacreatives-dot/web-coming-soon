import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../../types';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  variant?: 'featured' | 'supporting-wide' | 'supporting-tall';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  variant = 'supporting-wide',
}) => {
  const aspectClass =
    variant === 'featured'
      ? 'aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/10]'
      : variant === 'supporting-tall'
        ? 'aspect-[4/4.6]'
        : 'aspect-[16/10]';

  const supportingThumbs =
    variant === 'featured' && project.galleryImages
      ? project.galleryImages.slice(1, 4)
      : [];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.25) }}
      className="group flex flex-col"
    >
      <Link to={`/work/${project.id}`} data-cursor-text="CASE STUDY" className="block">
        {/* Top Metadata Annotation */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#111116]/20 dark:border-white/15 font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#52525B] dark:text-white/60">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="font-bold text-[#EA1E4D] truncate">{project.archiveCode}</span>
            {project.isConcept && (
              <span className="px-2 py-0.5 bg-[#111116] dark:bg-white text-white dark:text-[#111116] text-[10px] font-bold tracking-widest shrink-0">
                CONCEPT WORK
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="font-semibold text-[#111116] dark:text-white">{project.client}</span>
            <span className="text-[#71717A] dark:text-white/50">{project.year}</span>
          </div>
        </div>

        {/* Visual Presentation */}
        {variant === 'featured' && supportingThumbs.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Hero Key Visual Plate */}
            <div className={`lg:col-span-9 relative ${aspectClass} overflow-hidden bg-[#111116] border border-[#111116]/15 dark:border-white/15`}>
              <img
                src={project.heroImage}
                alt={project.title}
                loading="eager"
                className="h-full w-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="hidden md:flex absolute bottom-4 right-4 items-center gap-2 px-4 py-2 rounded-full bg-white text-[#111116] border border-[#111116]/20 font-mono text-[11px] font-bold uppercase tracking-wider shadow-lg group-hover:bg-[#EA1E4D] group-hover:text-white group-hover:border-[#EA1E4D] transition-all">
                <span>View Campaign Dossier</span>
                <ArrowUpRight size={14} />
              </div>
            </div>

            {/* Cohesive Campaign Sub-Plates Column (3 additional drops from the same campaign) */}
            <div className="lg:col-span-3 grid grid-cols-3 lg:grid-cols-1 gap-3">
              {supportingThumbs.map((imgSrc, subIdx) => (
                <div
                  key={imgSrc}
                  className="aspect-[4/3] lg:aspect-auto lg:flex-1 overflow-hidden bg-[#111116] border border-[#111116]/15 dark:border-white/15 relative"
                >
                  <img
                    src={imgSrc}
                    alt={`${project.title} visual ${subIdx + 2}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center opacity-95 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="absolute bottom-1.5 left-2 px-1.5 py-0.5 bg-black/75 text-white font-mono text-[9px] uppercase tracking-wider">
                    DROP 0{subIdx + 2}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={`relative mt-3.5 w-full ${aspectClass} overflow-hidden bg-[#111116] border border-[#111116]/15 dark:border-white/15`}>
            <img
              src={project.heroImage}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />

            <div className="hidden md:flex absolute bottom-4 right-4 items-center gap-2 px-4 py-2 rounded-full bg-white text-[#111116] border border-[#111116]/20 font-mono text-[11px] font-bold uppercase tracking-wider shadow-lg group-hover:bg-[#EA1E4D] group-hover:text-white group-hover:border-[#EA1E4D] transition-all">
              <span>Explore Case Study</span>
              <ArrowUpRight size={14} />
            </div>
          </div>
        )}

        {/* Story & Explicit Role Metadata */}
        <div className="pt-5 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
          <div className="md:col-span-7 space-y-2">
            <span className="font-mono text-[11px] font-bold text-[#EA1E4D] uppercase tracking-wider block">
              {project.category}
            </span>
            <h3
              className={`font-display font-black uppercase tracking-tight text-[#111116] dark:text-white group-hover:text-[#EA1E4D] transition-colors leading-none ${
                variant === 'featured' ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-2xl'
              }`}
            >
              {project.title}
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#52525B] dark:text-white/70 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="md:col-span-5 md:border-l border-[#111116]/15 dark:border-white/15 md:pl-6 space-y-2 font-mono text-xs">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#71717A] dark:text-white/50 font-bold block mb-0.5">
                Riwa&apos;s Role
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#111116] dark:text-white/90 leading-snug">
                {project.role}
              </p>
            </div>
            {project.verifiedOutcome && (
              <div className="pt-1 text-[#EA1E4D] font-bold text-[11px]">
                ✓ {project.metric}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
