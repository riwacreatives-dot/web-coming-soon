import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../../types';
import { useIsMobile } from '../../hooks/useIsMobile';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  variant?: 'hero-feature' | 'wide-editorial' | 'tall-poster' | 'contact-sheet';
  codeLabel?: string;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  variant = 'wide-editorial',
  codeLabel,
  onSelect,
}) => {
  const isMobile = useIsMobile();
  const numCode = `RC—00${index + 1}`;
  const isConcept =
    project.client.toLowerCase().includes('exploration') ||
    project.badge.toLowerCase().includes('exploration') ||
    project.category.toLowerCase().includes('events');

  const aspectClass =
    variant === 'hero-feature'
      ? 'aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9]'
      : variant === 'tall-poster'
        ? 'aspect-[4/5]'
        : variant === 'contact-sheet'
          ? 'aspect-[4/3]'
          : 'aspect-[16/10]';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.25) }}
      onClick={() => onSelect(project)}
      data-cursor-text="VIEW CASE"
      className="group cursor-pointer flex flex-col"
    >
      {/* Top Annotation Strip */}
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#111116]/20 font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#52525B]">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="font-bold text-[#EA1E4D] shrink-0">
            {codeLabel || `${numCode} / ${project.badge}`}
          </span>
          {isConcept && (
            <span className="px-2 py-0.5 rounded bg-[#111116] text-white text-[10px] font-bold tracking-widest shrink-0">
              CONCEPT
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:inline font-semibold text-[#111116]">{project.client}</span>
          <span className="text-[#71717A]">{project.year}</span>
        </div>
      </div>

      {/* Campaign Wall Visual Frame */}
      <div className={`relative mt-3.5 w-full ${aspectClass} overflow-hidden bg-[#111116] border border-[#111116]/15`}>
        <img
          src={project.heroImage}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
        />

        {/* Editorial Corner Stamp */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#111116] border border-[#111116]/15 flex items-center justify-center group-hover:bg-[#EA1E4D] group-hover:text-white group-hover:border-[#EA1E4D] transition-all duration-300 shadow-md">
          <ArrowUpRight size={16} />
        </div>

        {/* Hero Feature Overlapping Editorial Callout Card (Desktop Hero Feature only) */}
        {variant === 'hero-feature' && !isMobile && (
          <div className="hidden md:block absolute bottom-6 left-6 max-w-md bg-[#FFFFFF] text-[#111116] p-6 border border-[#111116] shadow-[8px_8px_0px_#111116]">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#EA1E4D] font-bold block mb-1.5">
              ★ FEATURED CAMPAIGN · {project.category}
            </span>
            <h3 className="font-display text-2xl font-black uppercase tracking-tight leading-none mb-2">
              {project.title}
            </h3>
            <p className="font-sans text-xs text-[#52525B] leading-relaxed line-clamp-2 mb-3">
              {project.description}
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-[#111116]/15 font-mono text-[11px] font-bold">
              <span className="text-[#111116]">{project.metric}</span>
              <span className="text-[#EA1E4D]">OPEN DOSSIER ↗</span>
            </div>
          </div>
        )}
      </div>

      {/* Editorial Caption Block Below Artwork (hidden only if overlapping card shows on desktop hero-feature, or rendered cleanly for scannability) */}
      <div className={`${variant === 'hero-feature' ? 'md:hidden' : ''} pt-4 flex flex-col justify-between flex-1`}>
        <div className="flex items-baseline justify-between gap-4 mb-1.5">
          <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111116] group-hover:text-[#EA1E4D] transition-colors leading-tight">
            {project.title}
          </h3>
          <span className="font-mono text-[11px] font-bold text-[#EA1E4D] shrink-0">
            {project.metric}
          </span>
        </div>

        <p className="font-sans text-xs sm:text-sm text-[#52525B] leading-relaxed line-clamp-2 mb-3">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          {project.deliverables.slice(0, 2).map((d) => (
            <span
              key={d}
              className="px-2.5 py-0.5 border border-[#111116]/15 bg-white font-mono text-[10px] uppercase tracking-wider text-[#52525B]"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};
