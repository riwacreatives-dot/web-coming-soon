import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../../types';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  variant?: 'featured' | 'wide' | 'tall' | 'archive-row';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  variant = 'wide',
}) => {
  const aspectClass =
    variant === 'featured'
      ? 'aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9]'
      : variant === 'tall'
        ? 'aspect-[4/5]'
        : 'aspect-[16/10]';

  // Archive compact horizontal spread for Further Work
  if (variant === 'archive-row') {
    return (
      <Link
        to={`/work/${project.id}`}
        data-cursor-text="CASE STUDY"
        className="group block border-b border-[#111116]/20 py-7 sm:py-9 transition-colors hover:bg-white/60 px-2 sm:px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 items-center">
          {/* Small Varied-Ratio Thumbnail */}
          <div className="md:col-span-3 aspect-[16/10] overflow-hidden bg-[#111116] border border-[#111116]/15">
            <img
              src={project.heroImage}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Archive Metadata & Title */}
          <div className="md:col-span-7 space-y-2">
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-[11px] uppercase tracking-wider">
              <span className="font-bold text-[#EA1E4D]">{project.archiveCode}</span>
              {project.isConcept && (
                <span className="px-2 py-0.5 bg-[#111116] text-white text-[10px] font-bold tracking-widest">
                  CONCEPT WORK
                </span>
              )}
              <span className="text-[#52525B]">· {project.client}</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111116] group-hover:text-[#EA1E4D] transition-colors leading-tight">
              {project.title}
            </h3>

            <p className="font-sans text-sm text-[#52525B] leading-relaxed line-clamp-2 max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Right CTA Arrow */}
          <div className="md:col-span-2 flex md:flex-col items-center md:items-end justify-between gap-2 font-mono text-xs">
            <span className="text-[#71717A]">{project.year}</span>
            <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#111116] group-hover:text-[#EA1E4D] transition-colors">
              <span>Explore</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.25) }}
      className="group flex flex-col"
    >
      <Link to={`/work/${project.id}`} data-cursor-text="EXPLORE" className="block">
        {/* Top Metadata Annotation */}
        <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#111116]/20 font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#52525B]">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="font-bold text-[#EA1E4D] truncate">{project.archiveCode}</span>
            {project.isConcept && (
              <span className="px-2 py-0.5 bg-[#111116] text-white text-[10px] font-bold tracking-widest shrink-0">
                CONCEPT
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden sm:inline font-semibold text-[#111116]">{project.client}</span>
            <span className="text-[#71717A]">{project.year}</span>
          </div>
        </div>

        {/* Image Presentation */}
        <div className={`relative mt-3.5 w-full ${aspectClass} overflow-hidden bg-[#111116] border border-[#111116]/15`}>
          <img
            src={project.heroImage}
            alt={project.title}
            loading={variant === 'featured' ? 'eager' : 'lazy'}
            className="h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />

          <div className="hidden md:flex absolute bottom-4 right-4 items-center gap-2 px-4 py-2 rounded-full bg-white text-[#111116] border border-[#111116]/20 font-mono text-[11px] font-bold uppercase tracking-wider shadow-lg group-hover:bg-[#EA1E4D] group-hover:text-white group-hover:border-[#EA1E4D] transition-all">
            <span>Explore Project</span>
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Story Caption */}
        <div className="pt-4 sm:pt-5 flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3
              className={`font-display font-black uppercase tracking-tight text-[#111116] group-hover:text-[#EA1E4D] transition-colors leading-none ${
                variant === 'featured' ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-2xl'
              }`}
            >
              {project.title}
            </h3>

            <span className="font-mono text-xs font-bold text-[#EA1E4D]">
              {project.category}
            </span>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#52525B] leading-relaxed max-w-2xl">
            {project.description}
          </p>

          <div className="pt-1 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[#111116] font-bold">
            <span className="md:hidden inline-flex items-center gap-1 text-[#EA1E4D]">
              <span>Explore Project</span>
              <ArrowUpRight size={13} />
            </span>
            {project.verifiedOutcome && (
              <span className="text-[#52525B] text-[11px]">
                ✓ {project.metric}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
