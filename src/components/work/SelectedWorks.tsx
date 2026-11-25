import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { PROJECTS_DATA } from '../../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { WorkPreviewModal } from './WorkPreviewModal';
import { SplitHeading } from '../common/SplitHeading';
import { ProjectItem } from '../../types';
import { useIsMobile } from '../../hooks/useIsMobile';
import { ArrowUpRight, Grid, List } from 'lucide-react';

interface SelectedWorksProps {
  standalone?: boolean;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ standalone = false }) => {
  const isMobile = useIsMobile();
  const hasToggledRef = useRef(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [hoveredProject, setHoveredProject] = useState<ProjectItem | null>(null);
  const [viewMode, setViewMode] = useState<'index' | 'gallery'>(() =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? 'gallery' : 'index'
  );

  // Sync default mode automatically on viewport resize unless user manually switched
  useEffect(() => {
    if (!hasToggledRef.current) {
      setViewMode(isMobile ? 'gallery' : 'index');
    }
  }, [isMobile]);

  const handleSetViewMode = (mode: 'index' | 'gallery') => {
    hasToggledRef.current = true;
    setViewMode(mode);
  };

  const handleProjectSelect = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  // Inertial Floating Media Mouse Coordinates
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const springConfig = { damping: 24, stiffness: 260, mass: 0.5 };
  const floatX = useSpring(mouseX, springConfig);
  const floatY = useSpring(mouseY, springConfig);

  const handleContainerMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX + 30);
    mouseY.set(e.clientY - 100);
  };

  return (
    <section
      id="work"
      className={`relative w-full ${
        standalone
          ? 'pt-24 sm:pt-32 md:pt-36 pb-14 sm:pb-28 md:pb-32'
          : 'py-14 sm:py-28 md:py-32 border-t border-line-border'
      } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
      onMouseMove={handleContainerMouseMove}
    >
      {/* RIWA Floating Media Preview Portal (Desktop Cursor Only) */}
      <AnimatePresence>
        {!isMobile && hoveredProject && viewMode === 'index' && (
          <motion.div
            style={{
              x: floatX,
              y: floatY,
              position: 'fixed',
              top: 0,
              left: 0,
              pointerEvents: 'none',
              zIndex: 100,
            }}
            initial={{ opacity: 0, scale: 0.8, rotate: -7 }}
            animate={{ opacity: 1, scale: 1, rotate: -7 }}
            exit={{ opacity: 0, scale: 0.8, rotate: -7 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block w-80 h-52 rounded-xl overflow-hidden border border-line-border bg-black shadow-2xl p-1"
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-black">
              {/* Pristine artwork scaled cleanly with top focal point */}
              <img
                src={hoveredProject.heroImage}
                alt={hoveredProject.title}
                className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono text-xs">
                <span className="font-bold uppercase tracking-wider text-brand-red">
                  {hoveredProject.badge}
                </span>
                <span className="font-bold">{hoveredProject.metric}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Eyebrow & View Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-20">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-text-secondary block mb-3 font-semibold select-none">
            {standalone
              ? '02 / ARCHIVE ARCHITECTURE · CLIENT CASE STUDIES'
              : '03 / SELECTED WORKS & ART DIRECTION'}
          </span>
          {standalone ? (
            <h1 className="font-display text-[clamp(2.4rem,8.5vw,5.5rem)] font-extrabold uppercase tracking-tight text-text-primary leading-none">
              <span>COMMERCIAL</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-brand-red text-[1.12em] lowercase select-none">
                ad art
              </span>{' '}
              <span>&amp; SCALE</span>
              <span className="text-brand-red font-black">.</span>
            </h1>
          ) : (
            <h2 className="font-display text-[clamp(2.4rem,8.5vw,5rem)] font-extrabold uppercase tracking-tight text-text-primary leading-none">
              <span>PROVEN</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-brand-red text-[1.12em] lowercase select-none">
                impact
              </span>
              <span className="text-brand-red font-black">.</span>
            </h2>
          )}
        </div>

        {/* View Mode Switcher Pill */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="flex items-center p-1 rounded-full border border-line-border bg-surface/50 backdrop-blur-md">
            <button
              type="button"
              onClick={() => handleSetViewMode('index')}
              className={`min-h-[40px] sm:min-h-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer touch-manipulation ${
                viewMode === 'index'
                  ? 'bg-text-primary text-canvas font-bold'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <List size={14} />
              <span>Index</span>
            </button>
            <button
              type="button"
              onClick={() => handleSetViewMode('gallery')}
              className={`min-h-[40px] sm:min-h-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer touch-manipulation ${
                viewMode === 'gallery'
                  ? 'bg-text-primary text-canvas font-bold'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Grid size={14} />
              <span>Gallery</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mode A: RIWA Inertial Floating Project Rows */}
      {viewMode === 'index' ? (
        <div className="border-t border-line-border">
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => handleProjectSelect(project)}
              onMouseEnter={() => !isMobile && setHoveredProject(project)}
              onMouseLeave={() => !isMobile && setHoveredProject(null)}
              data-cursor-text="EXPLORE"
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-5 sm:py-8 border-b border-line-border cursor-pointer transition-all duration-300 md:hover:px-3 md:hover:bg-surface/20"
            >
              {/* Left Column: Mobile Thumbnail (< md) + Number & Title */}
              <div className="flex items-center gap-3.5 sm:gap-8 min-w-0 flex-1 mr-4">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  loading="lazy"
                  className="md:hidden w-12 h-12 rounded-lg object-cover border border-line-border shrink-0"
                />
                <span className="font-mono text-xs sm:text-sm text-text-secondary group-hover:text-brand-red transition-colors shrink-0 font-medium">
                  // 0{idx + 1}
                </span>
                <h3 className="font-display text-lg sm:text-2xl md:text-3xl lg:text-[2rem] font-black uppercase tracking-tight text-text-primary group-hover:text-brand-red transition-colors duration-300 truncate">
                  {project.title}
                </h3>
              </div>

              {/* Middle & Right Column: Client, Category, Metric & Year */}
              <div className="mt-3 md:mt-0 flex items-center justify-between md:justify-end gap-5 sm:gap-8 md:gap-10 font-mono text-xs sm:text-sm text-text-secondary shrink-0">
                <div className="hidden lg:block text-right">
                  <span className="block text-text-primary font-semibold text-xs sm:text-sm leading-tight">
                    {project.client}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-text-secondary">
                    {project.category}
                  </span>
                </div>

                <div className="px-3.5 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shrink-0 whitespace-nowrap">
                  {project.metric}
                </div>

                <div className="flex items-center gap-3 text-text-secondary group-hover:text-text-primary shrink-0">
                  <span className="text-xs sm:text-sm hidden sm:inline font-mono">{project.year}</span>
                  <div className="p-2 rounded-full border border-line-border group-hover:border-text-primary group-hover:bg-text-primary group-hover:text-canvas transition-all duration-300">
                    <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Mode B: Full Gallery Viewports */
        <div className="space-y-16 sm:space-y-24">
          {PROJECTS_DATA.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={(proj) => handleProjectSelect(proj)}
            />
          ))}
        </div>
      )}

      {/* Lightbox / Case Study Preview Modal */}
      <WorkPreviewModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
