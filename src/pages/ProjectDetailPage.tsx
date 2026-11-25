import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projectsData';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const projectIndex = PROJECTS_DATA.findIndex((p) => p.id === projectId);
  const project = projectIndex >= 0 ? PROJECTS_DATA[projectIndex] : null;

  useDocumentMeta({
    title: project
      ? `${project.title} (${project.archiveCode}) — Riwa Creatives`
      : 'Project Archive — Riwa Creatives',
    description: project?.description || 'Case study from Riwa Creatives Creative Archive.',
  });

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FFFFFF] text-[#111116] flex flex-col items-center justify-center px-6 py-32 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-[#EA1E4D] font-bold mb-3">
          ARCHIVE ENTRY NOT FOUND
        </span>
        <h1 className="font-display text-4xl font-black uppercase mb-6">
          Project Not Available.
        </h1>
        <Link
          to="/work"
          className="px-6 py-3 rounded-full bg-[#111116] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#EA1E4D] transition-colors"
        >
          ← Back to Creative Archive
        </Link>
      </div>
    );
  }

  // Related work entries
  const relatedProjects = PROJECTS_DATA.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <>
      <main className="w-full bg-[#FFFFFF] text-[#111116] pt-28 sm:pt-36">
        {/* Case-Study Introduction */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pb-12 sm:pb-16 border-b border-[#111116]/15">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#52525B] hover:text-[#111116] font-bold transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Creative Archive</span>
            </Link>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-[#EA1E4D] font-bold">{project.archiveCode}</span>
              {project.isConcept && (
                <span className="px-2.5 py-0.5 bg-[#111116] text-white text-[10px] font-bold uppercase tracking-widest">
                  Self-Initiated / Concept Work
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display text-[clamp(2.4rem,6.5vw,5rem)] font-black uppercase tracking-tighter leading-[0.94] mb-4">
                {project.title}
                <span className="text-[#EA1E4D]">.</span>
              </h1>
              <p className="font-sans text-base sm:text-xl text-[#52525B] leading-relaxed max-w-2xl">
                {project.headline} — {project.description}
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right font-mono text-xs space-y-2 border-t lg:border-t-0 pt-6 lg:pt-0 border-[#111116]/15">
              <div>
                <span className="text-[#71717A] block text-[10px] uppercase tracking-widest">Client / Classification</span>
                <span className="font-bold text-[#111116]">{project.client}</span>
              </div>
              <div>
                <span className="text-[#71717A] block text-[10px] uppercase tracking-widest">Industry / Domain</span>
                <span className="font-bold text-[#111116]">{project.industry}</span>
              </div>
              <div>
                <span className="text-[#71717A] block text-[10px] uppercase tracking-widest">Discipline &amp; Year</span>
                <span className="font-bold text-[#EA1E4D]">{project.category} · {project.year}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Full-Width Hero Showcase Image */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-14">
          <div className="aspect-[16/10] sm:aspect-[21/10] w-full overflow-hidden bg-[#111116] border border-[#111116]/15">
            <img
              src={project.heroImage}
              alt={project.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </section>

        {/* Case-Study Narrative Architecture */}
        <section className="w-full bg-[#F5F4F0] border-y border-[#111116]/15 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Narrative Columns */}
            <div className="lg:col-span-8 space-y-10">
              {[
                { num: '01', heading: 'THE BRIEF', body: project.brief },
                { num: '02', heading: 'THE CHALLENGE', body: project.challenge },
                { num: '03', heading: 'CREATIVE INSIGHT', body: project.insight },
                { num: '04', heading: "RIWA'S ROLE", body: project.role },
                { num: '05', heading: 'EXECUTION', body: project.execution },
              ].map((block) => (
                <div key={block.num} className="border-t border-[#111116]/20 pt-5">
                  <span className="font-mono text-xs font-bold text-[#EA1E4D] uppercase tracking-widest block mb-2">
                    // {block.num} · {block.heading}
                  </span>
                  <p className="font-sans text-base sm:text-lg text-[#111116] leading-relaxed">
                    {block.body}
                  </p>
                </div>
              ))}

              {project.verifiedOutcome && (
                <div className="p-6 sm:p-8 bg-[#111116] text-white border border-[#111116]">
                  <span className="font-mono text-xs text-[#FD7D3C] uppercase tracking-widest font-bold block mb-2">
                    // 06 · VERIFIED OUTCOME
                  </span>
                  <p className="font-display text-2xl sm:text-3xl font-black uppercase text-white mb-2">
                    {project.metric}
                  </p>
                  <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed">
                    {project.verifiedOutcome}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar Deliverables & Inquiry */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-6 sm:p-8 bg-white border border-[#111116]/15 space-y-5">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#EA1E4D] font-bold block">
                  ✦ Scope &amp; Deliverables
                </span>
                <ul className="space-y-3 font-mono text-xs text-[#111116]">
                  {project.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-[#EA1E4D] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t border-[#111116]/15">
                  <button
                    type="button"
                    onClick={() => navigate('/contact')}
                    className="w-full py-3.5 px-5 rounded-full bg-[#EA1E4D] text-white font-mono text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Commission Similar Work</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Gallery (Genuine Available Assets) */}
        {project.galleryImages && project.galleryImages.length > 1 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-16 sm:py-24 border-b border-[#111116]/15">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] font-bold block mb-6">
              // VISUAL GALLERY
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.galleryImages.map((imgSrc, i) => (
                <div
                  key={`${imgSrc}-${i}`}
                  className="aspect-[16/10] overflow-hidden border border-[#111116]/15 bg-[#111116]"
                >
                  <img
                    src={imgSrc}
                    alt={`${project.title} frame ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Work */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-16 sm:py-24">
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] font-bold">
              // RELATED ARCHIVE ENTRIES
            </span>
            <Link
              to="/work"
              className="font-mono text-xs font-bold text-[#EA1E4D] hover:underline uppercase tracking-wider"
            >
              All Work →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.id}
                to={`/work/${rel.id}`}
                className="group border border-[#111116]/15 bg-[#F5F4F0] hover:bg-white transition-colors p-5 sm:p-6 block"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#111116] mb-4">
                  <img
                    src={rel.heroImage}
                    alt={rel.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="font-mono text-[11px] font-bold text-[#EA1E4D] block mb-1">
                  {rel.archiveCode}
                </span>
                <h3 className="font-display text-xl font-black uppercase tracking-tight text-[#111116] group-hover:text-[#EA1E4D] transition-colors">
                  {rel.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <EditorialFooter />
    </>
  );
};
