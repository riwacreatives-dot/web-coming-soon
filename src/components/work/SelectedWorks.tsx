import React, { useState } from 'react';
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

const IDENTIFIERS: Record<string, string> = {
  'solanas-baddies': 'RC—001 / COMMERCIAL CAMPAIGN',
  'solanas-silk': 'RC—002 / BRAND SYSTEM',
  'solanas-sushi': 'RC—003 / SOCIAL AD ART',
  'solanas-steamer': 'RC—004 / CULINARY IDENTITY',
  'dtc-accelerator-concept': 'RC—005 / DIGITAL EXPERIENCE',
  'hack-uttar-pradesh': 'RC—006 / LIVE EXPERIENCE SUITE',
  'horizon-mun': 'RC—007 / CONFERENCE ARCHITECTURE',
};

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ standalone = false }) => {
  const isMobile = useIsMobile();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [hoveredProject, setHoveredProject] = useState<ProjectItem | null>(null);
  const [viewMode, setViewMode] = useState<'wall' | 'index'>('wall');

  const CATEGORIES = [
    { label: 'All Projects', value: 'All' },
    { label: 'Commercial Campaigns', value: 'Commercial' },
    { label: 'Brand & Identity', value: 'Brand' },
    { label: 'Digital Experiences', value: 'Technology' },
    { label: 'Events & Experiences', value: 'Events' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  // Floating preview coordinates for Index Mode
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const springConfig = { damping: 24, stiffness: 260, mass: 0.5 };
  const floatX = useSpring(mouseX, springConfig);
  const floatY = useSpring(mouseY, springConfig);

  const handleContainerMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX + 28);
    mouseY.set(e.clientY - 100);
  };

  // Partition filtered items for the asymmetrical Advertising Campaign Wall
  const leadProject = filteredProjects[0];
  const splitLeft = filteredProjects[1];
  const splitRight = filteredProjects[2];
  const sheetProjects = filteredProjects.slice(3);

  return (
    <div className="w-full bg-[#E7E7E9] text-[#111116] border-b border-[#111116]/15 transition-colors">
      <section
        id="work"
        className={`relative w-full ${
          standalone
            ? 'pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-28 md:pb-32'
            : 'py-16 sm:py-24 md:py-32'
        } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
        onMouseMove={handleContainerMouseMove}
      >
        {/* Floating Artwork Preview for Index View */}
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
              transition={{ duration: 0.2 }}
              className="hidden lg:block w-80 h-52 overflow-hidden border-2 border-[#111116] bg-[#111116] shadow-2xl p-1"
            >
              <div className="relative w-full h-full overflow-hidden bg-black">
                <img
                  src={hoveredProject.heroImage}
                  alt={hoveredProject.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono text-xs">
                  <span className="font-bold uppercase text-[#EA1E4D]">{hoveredProject.badge}</span>
                  <span className="font-bold">{hoveredProject.metric}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#52525B] block mb-3 font-semibold select-none">
              {standalone ? 'CAMPAIGN ARCHIVE · SELECTED WORK' : '02 / SELECTED WORK — CAMPAIGN WALL'}
            </span>
            <h2 className="font-display text-[clamp(2.25rem,6.8vw,4.5rem)] font-black uppercase tracking-tight text-[#111116] leading-none">
              <span>LESS TALK.</span>{' '}
              <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
                more
              </span>{' '}
              <span>WORK</span>
              <span className="text-[#EA1E4D]">.</span>
            </h2>
            <p className="mt-4 font-sans text-sm sm:text-base text-[#52525B] leading-relaxed max-w-xl">
              A studio campaign wall combining client commercial production and clearly tagged conceptual studio explorations. Ideas only count once they exist in the world.
            </p>
          </div>

          {/* Campaign Wall / Archive Index Switcher */}
          <div className="flex items-center p-1 rounded-full border border-[#111116]/20 bg-white self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('wall')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'wall'
                  ? 'bg-[#111116] text-white font-bold'
                  : 'text-[#52525B] hover:text-[#111116]'
              }`}
            >
              <Grid size={13} />
              <span>Campaign Wall</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('index')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'index'
                  ? 'bg-[#111116] text-white font-bold'
                  : 'text-[#52525B] hover:text-[#111116]'
              }`}
            >
              <List size={13} />
              <span>Index</span>
            </button>
          </div>
        </div>

        {/* Category Filter Strip */}
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
                    ? 'bg-[#EA1E4D] text-white border-[#EA1E4D] font-bold shadow-sm'
                    : 'bg-white border-[#111116]/15 text-[#52525B] hover:text-[#111116] hover:border-[#111116]/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* WALL VIEW: Varied Campaign Proportions (Hero Feature + Asymmetric Split + Contact Sheet) */}
        {viewMode === 'wall' ? (
          <div className="space-y-14 sm:space-y-20">
            {/* Slot 1: Full-Width Featured Project */}
            {leadProject && (
              <ProjectCard
                project={leadProject}
                index={0}
                variant="hero-feature"
                codeLabel={IDENTIFIERS[leadProject.id]}
                onSelect={setSelectedProject}
              />
            )}

            {/* Slot 2 & 3: Asymmetric 7/5 Editorial Split with Distinct Aspect Ratios */}
            {(splitLeft || splitRight) && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {splitLeft && (
                  <div className="lg:col-span-7">
                    <ProjectCard
                      project={splitLeft}
                      index={1}
                      variant="wide-editorial"
                      codeLabel={IDENTIFIERS[splitLeft.id]}
                      onSelect={setSelectedProject}
                    />
                  </div>
                )}

                {splitRight && (
                  <div className="lg:col-span-5 lg:pt-12">
                    <ProjectCard
                      project={splitRight}
                      index={2}
                      variant="tall-poster"
                      codeLabel={IDENTIFIERS[splitRight.id]}
                      onSelect={setSelectedProject}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Slot 4+: Contact-Sheet Grid with Editorial Annotations */}
            {sheetProjects.length > 0 && (
              <div className="pt-8 border-t border-[#111116]/20">
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-[#52525B] mb-8">
                  <span>// STUDIO CONTACT SHEET &amp; EXPLORATIONS</span>
                  <span>[{sheetProjects.length} RELEASES]</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                  {sheetProjects.map((project, offsetIdx) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={offsetIdx + 3}
                      variant="contact-sheet"
                      codeLabel={IDENTIFIERS[project.id]}
                      onSelect={setSelectedProject}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* INDEX VIEW: Minimal Swiss Archive Rows */
          <div className="border-t border-[#111116]/20 bg-white px-4 sm:px-8 border-x border-b">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => !isMobile && setHoveredProject(project)}
                onMouseLeave={() => !isMobile && setHoveredProject(null)}
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-6 sm:py-7 border-b last:border-b-0 border-[#111116]/15 cursor-pointer transition-all duration-200 md:hover:px-3"
              >
                <div className="flex items-center gap-4 sm:gap-7 min-w-0 flex-1 mr-4">
                  <span className="font-mono text-xs font-bold text-[#EA1E4D] shrink-0">
                    {IDENTIFIERS[project.id]?.split(' / ')[0] || `RC—00${idx + 1}`}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111116] group-hover:text-[#EA1E4D] transition-colors truncate">
                    {project.title}
                  </h3>
                </div>

                <div className="mt-3 md:mt-0 flex items-center justify-between md:justify-end gap-5 sm:gap-7 font-mono text-xs text-[#52525B] shrink-0">
                  <span className="hidden lg:inline text-[#111116] font-semibold">
                    {project.client}
                  </span>
                  <span className="px-3 py-1 rounded-full border border-[#EA1E4D]/30 bg-[#EA1E4D]/10 text-[#EA1E4D] font-bold uppercase tracking-wider whitespace-nowrap">
                    {project.metric}
                  </span>
                  <div className="flex items-center gap-2.5">
                    <span className="hidden sm:inline">{project.year}</span>
                    <div className="p-2 rounded-full border border-[#111116]/20 group-hover:bg-[#111116] group-hover:text-white transition-all">
                      <ArrowUpRight size={14} />
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
