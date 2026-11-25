import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../../types';
import { ResponsiveModalShell } from '../common/ResponsiveModalShell';

interface WorkPreviewModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const WorkPreviewModal: React.FC<WorkPreviewModalProps> = ({ project, onClose }) => {
  const navigate = useNavigate();

  const handleCommission = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    navigate('/contact');
  };

  return (
    <ResponsiveModalShell
      isOpen={!!project}
      onClose={onClose}
      maxWidthClass="max-w-5xl"
      zIndexClass="z-[120]"
      mobileFooter={
        project && (
          <div className="flex items-center justify-between gap-3 font-mono">
            <button
              type="button"
              onClick={onClose}
              className="min-h-[46px] px-4 rounded-full border border-white/20 text-white/80 text-xs uppercase tracking-wider font-semibold touch-manipulation"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={handleCommission}
              className="min-h-[46px] flex-1 inline-flex items-center justify-center gap-1.5 px-5 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-red/30 touch-manipulation"
            >
              <span>Commission Ad Art</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        )
      }
    >
      {project && (
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Visual Column */}
          <div className="lg:col-span-7 bg-black flex items-center justify-center p-4 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
            <img
              src={project.heroImage}
              alt={project.title}
              loading="eager"
              decoding="sync"
              className="max-h-[36dvh] md:max-h-[65vh] max-w-full w-auto object-contain rounded-lg shadow-2xl mx-auto"
            />
          </div>

          {/* Narrative & Metrics Column */}
          <div className="lg:col-span-5 p-5 sm:p-10 flex flex-col justify-between font-mono">
            <div className="space-y-5 md:space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-brand-red/20 text-brand-red text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-brand-red/40">
                    {project.badge}
                  </span>
                  <span className="text-xs text-white/50 uppercase">
                    YEAR {project.year}
                  </span>
                </div>

                <span className="text-xs sm:text-sm text-brand-red font-bold uppercase tracking-wider block">
                  {project.client}
                </span>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mt-1">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/70 mt-1">
                  {project.headline}
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs uppercase text-white/50 tracking-widest block font-bold">
                  Verified Sprint Impact
                </span>
                <span className="font-display text-xl sm:text-2xl font-black text-brand-red block">
                  {project.metric}
                </span>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-white/50 block mb-2 font-bold">
                  Case Study Summary
                </span>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-white/50 block mb-2.5 font-bold">
                  Included Deliverables
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-white/85">
                  {project.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-brand-red shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Desktop Footer Bar (>= 768px — Mobile uses sticky Bottom Sheet footer) */}
            <div className="hidden md:flex pt-8 mt-6 border-t border-white/10 items-center justify-between">
              <span className="text-xs uppercase text-white/50">
                Sprint Protocol ✦ RIWA
              </span>
              <a
                href="#contact"
                onClick={handleCommission}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-red text-white text-xs font-bold hover:brightness-110 transition-all cursor-pointer"
              >
                <span>Commission Ad Art</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </ResponsiveModalShell>
  );
};
