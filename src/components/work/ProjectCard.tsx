import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ProjectItem } from '../../types';
import { LiquidArtworkCanvas } from '../common/LiquidArtworkCanvas';
import { useIsMobile } from '../../hooks/useIsMobile';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const isMobile = useIsMobile();
  const [scrubPercent, setScrubPercent] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setScrubPercent(percent);
  };

  const activeDesktopHover = !isMobile && isHovered;

  return (
    <div className="w-full group">
      {/* Top Metadata Bar */}
      <div className="flex items-center justify-between gap-2 py-3 border-b border-line-border font-mono text-[11px] sm:text-sm uppercase tracking-wider text-text-secondary">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <span className="font-bold text-brand-red whitespace-nowrap shrink-0">// 0{index + 1}</span>
          <span className="font-bold text-text-primary truncate">{project.client}</span>
        </div>

        <div className="hidden sm:block text-text-secondary text-xs sm:text-sm">
          {project.category}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="px-2.5 sm:px-3 py-0.5 rounded-full bg-brand-red/10 text-brand-red font-bold text-[10px] sm:text-xs border border-brand-red/30 whitespace-nowrap">
            {project.metric}
          </span>
          <span className="hidden md:inline text-text-secondary text-xs sm:text-sm">
            {project.year}
          </span>
        </div>
      </div>

      {/* Main Interactive Media Canvas */}
      <div
        onClick={() => onSelect(project)}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => {
          if (!isMobile) {
            setIsHovered(false);
            setScrubPercent(50);
          }
        }}
        className="relative my-3 md:my-4 aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/10] w-full rounded-2xl overflow-hidden border border-line-border bg-black cursor-pointer shadow-xl transition-all duration-500 group-hover:border-line-border"
      >
        {/* Ambient Blurred Backdrop */}
        <img
          src={project.heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover blur-2xl opacity-35 scale-110 pointer-events-none"
        />

        {/* Crisp Center Stage Hero Artwork (WebGL shader strictly virtualized on Desktop hover) */}
        <motion.div
          animate={{
            scale: activeDesktopHover ? 1.03 : 1,
            x: activeDesktopHover ? (scrubPercent - 50) * -0.15 : 0,
          }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative z-10 h-full w-full flex items-center justify-center overflow-hidden"
        >
          {activeDesktopHover ? (
            <LiquidArtworkCanvas
              imageSrc={project.heroImage}
              alt={project.title}
              interactive={true}
              className="h-full w-full max-w-full"
            />
          ) : (
            <img
              src={project.heroImage}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full max-w-full object-cover object-top filter brightness-95 contrast-105 pointer-events-none"
            />
          )}
        </motion.div>

        {/* Ambient Gradient Overlays (Subtle on mobile to keep poster art clear; full overlay on desktop) */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/15 pointer-events-none z-10" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none z-10" />

        {/* Top Floating Badge */}
        <div className="absolute top-3.5 left-3.5 sm:top-6 sm:left-6 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 font-mono text-[10px] sm:text-xs uppercase tracking-wider text-white">
            <Sparkles size={11} className="text-brand-red" />
            <span>{project.badge}</span>
          </span>
        </div>

        {/* Interactive Scrub Guide (Desktop Hover Only) */}
        {activeDesktopHover && (
          <div
            style={{ left: `${scrubPercent}%` }}
            className="absolute top-0 bottom-0 w-[1px] bg-brand-red/60 pointer-events-none z-20 hidden md:block"
          >
            <span className="absolute top-4 -left-10 px-2.5 py-0.5 rounded bg-brand-red text-white font-mono text-xs font-bold uppercase tracking-widest">
              Scrub
            </span>
          </div>
        )}

        {/* Desktop Overlaid Headline & CTA (>= 768px — 100% Preserved) */}
        <div className="hidden md:flex absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight leading-none drop-shadow-lg group-hover:text-brand-red transition-colors duration-300">
              {project.title}
            </h3>
            <p className="mt-1.5 font-mono text-xs sm:text-sm text-white/80 drop-shadow">
              {project.headline}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-wider group-hover:bg-brand-red group-hover:text-white transition-all shadow-xl">
              <span>View Artwork</span>
              <ArrowUpRight size={13} />
            </span>
          </div>
        </div>
      </div>

      {/* Mobile-Only Editorial Caption Block Below Artwork (< 768px — keeps poster 90%+ unobscured) */}
      <div
        onClick={() => onSelect(project)}
        className="md:hidden pt-1 pb-4 flex items-end justify-between gap-3 cursor-pointer touch-manipulation"
      >
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-xl font-black uppercase text-text-primary tracking-tight leading-tight">
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-xs text-text-secondary line-clamp-2">
            {project.headline}
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-surface border border-line-border text-text-primary font-mono text-[11px] font-bold uppercase tracking-wider shrink-0 active:scale-95 transition-transform">
          <span>View</span>
          <ArrowUpRight size={13} className="text-brand-red" />
        </span>
      </div>
    </div>
  );
};
