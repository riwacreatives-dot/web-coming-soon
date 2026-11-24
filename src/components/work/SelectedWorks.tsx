import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { PROJECTS_DATA } from '../../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { WorkPreviewModal } from './WorkPreviewModal';
import { ProjectItem } from '../../types';
import { useIsMobile } from '../../hooks/useIsMobile';
import { ArrowUpRight, Grid, List } from 'lucide-react';

interface SelectedWorksProps {
  standalone?: boolean;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ standalone = false }) => {
  const isMobile = useIsMobile();
  const hasToggledRef = useRef(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [hoveredProject, setHoveredProject] = useState<ProjectItem | null>(null);
  const [viewMode, setViewMode] = useState<'gallery' | 'index'>(() =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? 'gallery' : 'gallery'
  );

  useEffect(() => {
    if (!hasToggledRef.current) {
      setViewMode(isMobile ? 'gallery' : 'gallery');
    }
  }, [isMobile]);

  const handleSetViewMode = (mode: 'gallery' | 'index') => {
    hasToggledRef.current = true;
    setViewMode(mode);
  };

  const handleProjectSelect = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const CATEGORIES = [
    { label: 'All Projects', value: 'All' },
    { label: 'Commercial Campaigns', value: 'Commercial' },
    { label: 'Brand & Identity', value: 'Brand' },
    { label: 'Digital & Web', value: 'Technology' },
    { label: 'Events & Experiences', value: 'Events' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  // Inertial Floating Media Mouse Coordinates (for Index View)
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
    <div className="w-full bg-[#FFFFFF] text-[#171719] border-b border-[#171719]/15 transition-colors">
      <section
        id="work"
        className={`relative w-full ${
          standalone
            ? 'pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-28 md:pb-32'
            : 'py-16 sm:py-24 md:py-32'
        } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
        onMouseMove={handleContainerMouseMove}
      >
        {/* Floating Media Preview for Index View */}
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
              initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              exit={{ opacity: 0, scale: 0.85, rotate: -4 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block w-84 h-56 rounded-xl overflow-hidden border border-[#171719]/20 bg-[#171719] shadow-2xl p-1"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-black">
                <img
                  src={hoveredProject.heroImage}
                  alt={hoveredProject.title}
                  className="w-full h-full object-cover object-top filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono text-xs">
                  <span className="font-bold uppercase tracking-wider text-[#FD7D3C]">
                    {hoveredProject.badge}
                  </span>
                  <span className="font-bold">{hoveredProject.metric}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.24em] text-[#767571] block mb-3 font-semibold select-none">
              {standalone ? 'SELECTED WORK · ARCHIVE' : '02 / SELECTED WORK'}
            </span>
            <h2 className="font-display text-[clamp(2.2rem,6.8vw,4.5rem)] font-extrabold uppercase tracking-tight text-[#171719] leading-none">
              <span>LESS TALK.</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-[#FD7D3C] text-[1.14em] lowercase select-none">
                more
              </span>{' '}
              <span>WORK</span>
              <span className="text-[#FD7D3C] font-black">.</span>
            </h2>
            <p className="mt-4 font-sans text-sm sm:text-base text-[#605F5B] leading-relaxed max-w-xl">
              Ideas are easy to claim. Tangible execution is what transforms brands. Explore a curated selection of commercial advertising, visual systems, digital products and physical activations.
            </p>
          </div>

          {/* View Switcher Pill */}
          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <div className="flex items-center p-1 rounded-full border border-[#171719]/15 bg-[#F4F1EA]">
              <button
                type="button"
                onClick={() => handleSetViewMode('gallery')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'gallery'
                    ? 'bg-[#171719] text-[#F4F1EA] font-bold shadow-sm'
                    : 'text-[#767571] hover:text-[#171719]'
                }`}
              >
                <Grid size={13} />
                <span>Gallery</span>
              </button>
              <button
                type="button"
                onClick={() => handleSetViewMode('index')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'index'
                    ? 'bg-[#171719] text-[#F4F1EA] font-bold shadow-sm'
                    : 'text-[#767571] hover:text-[#171719]'
                }`}
              >
                <List size={13} />
                <span>Index</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-10 sm:mb-14 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                  isSelected
                    ? 'bg-[#FD7D3C] text-[#171719] border-[#FD7D3C] font-bold shadow-sm'
                    : 'bg-[#F4F1EA] border-[#171719]/15 text-[#605F5B] hover:text-[#171719] hover:border-[#171719]/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery View: Asymmetric Editorial Layouts */}
        {viewMode === 'gallery' ? (
          <div className="space-y-16 sm:space-y-24">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onSelect={handleProjectSelect}
              />
            ))}
          </div>
        ) : (
          /* Index View: Clean Typographic Rows */
          <div className="border-t border-[#171719]/15">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => handleProjectSelect(project)}
                onMouseEnter={() => !isMobile && setHoveredProject(project)}
                onMouseLeave={() => !isMobile && setHoveredProject(null)}
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-6 sm:py-8 border-b border-[#171719]/15 cursor-pointer transition-all duration-300 md:hover:px-4 md:hover:bg-[#F4F1EA]/60"
              >
                <div className="flex items-center gap-4 sm:gap-8 min-w-0 flex-1 mr-4">
                  <span className="font-mono text-xs sm:text-sm text-[#FD7D3C] font-bold shrink-0">
                    // 0{idx + 1}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-[#171719] group-hover:text-[#FD7D3C] transition-colors truncate">
                    {project.title}
                  </h3>
                </div>

                <div className="mt-3 md:mt-0 flex items-center justify-between md:justify-end gap-6 sm:gap-8 font-mono text-xs sm:text-sm text-[#767571] shrink-0">
                  <div className="hidden lg:block text-right">
                    <span className="block text-[#171719] font-semibold text-xs sm:text-sm leading-tight">
                      {project.client}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[#767571]">
                      {project.category}
                    </span>
                  </div>

                  <div className="px-3 py-1 rounded-full border border-[#FD7D3C]/40 bg-[#FD7D3C]/10 text-[#171719] font-mono text-xs font-bold uppercase tracking-wider shrink-0 whitespace-nowrap">
                    {project.metric}
                  </div>

                  <div className="flex items-center gap-3 text-[#767571] group-hover:text-[#171719] shrink-0">
                    <span className="text-xs sm:text-sm hidden sm:inline font-mono">{project.year}</span>
                    <div className="p-2 rounded-full border border-[#171719]/20 group-hover:border-[#171719] group-hover:bg-[#171719] group-hover:text-[#F4F1EA] transition-all duration-300">
                      <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Case Study Modal */}
        <WorkPreviewModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </section>
    </div>
  );
};
