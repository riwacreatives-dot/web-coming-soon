import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../../types';
import { useIsMobile } from '../../hooks/useIsMobile';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState(false);

  // Alternating layout formula: index % 3 === 0 (full bleed showcase) vs 1 & 2 (editorial cards)
  const isFeature = index % 3 === 0;

  return (
    <div className="w-full group">
      {/* Top Metadata Bar */}
      <div className="flex items-center justify-between gap-3 py-3 border-b border-[#171719]/15 font-mono text-xs sm:text-sm uppercase tracking-wider text-[#767571]">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <span className="font-bold text-[#FD7D3C] whitespace-nowrap shrink-0">// 0{index + 1}</span>
          <span className="font-bold text-[#171719] truncate">{project.client}</span>
        </div>

        <div className="hidden sm:block text-[#767571] text-xs">
          {project.category}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="px-3 py-0.5 rounded-full bg-[#FD7D3C]/15 text-[#171719] font-bold text-xs border border-[#FD7D3C]/30 whitespace-nowrap">
            {project.metric}
          </span>
          <span className="hidden md:inline text-[#767571] text-xs">
            {project.year}
          </span>
        </div>
      </div>

      {/* Main Interactive Media Canvas */}
      <div
        onClick={() => onSelect(project)}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        className={`relative my-4 w-full rounded-2xl overflow-hidden border border-[#171719]/15 bg-[#171719] cursor-pointer shadow-lg transition-all duration-500 ${
          isFeature
            ? 'aspect-[16/10] sm:aspect-[21/10]'
            : 'aspect-[4/3] sm:aspect-[16/10]'
        }`}
      >
        <img
          src={project.heroImage}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover object-top filter brightness-95 group-hover:scale-102 group-hover:brightness-100 transition-transform duration-700 ease-out"
        />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Floating Bottom Card Details */}
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white pointer-events-none">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FD7D3C] font-bold block mb-1">
              ✦ {project.badge}
            </span>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white leading-tight">
              {project.title}
            </h3>
            <p className="mt-1 font-sans text-xs sm:text-sm text-white/80 max-w-lg line-clamp-2">
              {project.brief}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:inline font-mono text-xs uppercase tracking-wider text-white/70">
              View Case Study
            </span>
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#FD7D3C] group-hover:text-[#171719] transition-all">
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
