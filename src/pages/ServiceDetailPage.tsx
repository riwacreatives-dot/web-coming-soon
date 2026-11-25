import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { CAPABILITIES_DATA } from '../data/servicesData';
import { PROJECTS_DATA } from '../data/projectsData';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = CAPABILITIES_DATA.find((s) => s.id === serviceId);
  const isEvents = service?.id === 'events-experiences';

  useDocumentMeta({
    title: service
      ? `${service.name} — Riwa Creatives`
      : 'Capabilities — Riwa Creatives',
    description: service?.shortDesc || 'Creative and growth capabilities by Riwa Creatives.',
  });

  if (!service) {
    return (
      <div className="min-h-screen bg-[#111116] text-white flex flex-col items-center justify-center px-6 py-32 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-[#EA1E4D] font-bold mb-3">
          DISCIPLINE NOT FOUND
        </span>
        <h1 className="font-display text-4xl font-black uppercase mb-6">
          Service Page Unavailable.
        </h1>
        <Link
          to="/services"
          className="px-6 py-3 rounded-full bg-white text-[#111116] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#EA1E4D] hover:text-white transition-colors"
        >
          ← Explore All Capabilities
        </Link>
      </div>
    );
  }

  const relatedProjects = PROJECTS_DATA.filter((p) =>
    service.relatedProjectIds.includes(p.id)
  );
  const accentHex = isEvents ? '#FD7D3C' : '#EA1E4D';
  const contactTypeQuery =
    service.id === 'brand-identity'
      ? 'brand'
      : service.id === 'commercial-advertising' || service.id === 'digital-growth'
        ? 'campaign'
        : service.id === 'technology-experiences'
          ? 'digital'
          : 'event';

  return (
    <>
      <main
        className={`w-full pt-28 sm:pt-36 transition-colors ${
          isEvents ? 'bg-[#FD7D3C] text-[#111116]' : 'bg-[#111116] text-white'
        }`}
      >
        {/* Top Discipline Hero */}
        <section
          className={`max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pb-14 sm:pb-20 border-b ${
            isEvents ? 'border-[#111116]/25' : 'border-white/15'
          }`}
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/services"
              className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold transition-colors ${
                isEvents ? 'text-[#111116]/80 hover:text-[#111116]' : 'text-white/60 hover:text-white'
              }`}
            >
              <ArrowLeft size={14} />
              <span>All Capabilities</span>
            </Link>

            <span
              style={{ color: isEvents ? '#111116' : accentHex }}
              className="font-mono text-xs font-bold uppercase tracking-widest"
            >
              DISCIPLINE {service.index} / 05 · {service.categoryTag}
            </span>
          </div>

          <div className="max-w-4xl space-y-5">
            <h1 className="font-display text-[clamp(2.4rem,6.8vw,5.2rem)] font-black uppercase tracking-tighter leading-[0.94]">
              {service.name}
              <span style={{ color: isEvents ? '#FFFFFF' : accentHex }}>.</span>
            </h1>
            <p
              className={`font-display text-xl sm:text-2xl font-bold uppercase tracking-tight ${
                isEvents ? 'text-white' : 'text-white/90'
              }`}
            >
              {service.headline}
            </p>
            <p
              className={`font-sans text-base sm:text-xl leading-relaxed ${
                isEvents ? 'text-[#111116]/90 font-medium' : 'text-white/75'
              }`}
            >
              {service.fullDesc}
            </p>
          </div>
        </section>

        {/* Core Breakdown: Problems Addressed, Deliverables, & Collaboration Model */}
        <section className="w-full bg-[#FFFFFF] text-[#111116] py-16 sm:py-24 border-b border-[#111116]/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 7 Cols: Problems We Solve & Collaboration Model */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#EA1E4D] font-bold block mb-4">
                  // PROBLEMS WE ADDRESS
                </span>
                <div className="space-y-4">
                  {service.problemsAddressed.map((prob, idx) => (
                    <div
                      key={prob}
                      className="p-5 border border-[#111116]/15 bg-[#F5F4F0] flex items-start gap-4"
                    >
                      <span className="font-mono text-xs font-bold text-[#EA1E4D] shrink-0 pt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="font-sans text-sm sm:text-base text-[#111116] leading-relaxed">
                        {prob}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8 border-l-4 border-[#EA1E4D] bg-[#F5F4F0]">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#EA1E4D] font-bold block mb-2">
                  // HOW COLLABORATION WORKS
                </span>
                <p className="font-sans text-base sm:text-lg text-[#111116] leading-relaxed">
                  {service.collaborationModel}
                </p>
              </div>
            </div>

            {/* Right 5 Cols: Full Deliverables Scope & Commission CTA */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 bg-[#111116] text-white border border-[#111116] space-y-6">
                <div>
                  <span
                    style={{ color: accentHex }}
                    className="font-mono text-xs uppercase tracking-[0.2em] font-bold block mb-2"
                  >
                    ✦ COMPLETE DELIVERABLES
                  </span>
                  <h2 className="font-display text-2xl font-black uppercase tracking-tight">
                    What Riwa Delivers
                  </h2>
                </div>

                <ul className="space-y-3 font-mono text-xs sm:text-sm text-white/90 border-t border-white/15 pt-5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={15}
                        style={{ color: accentHex }}
                        className="shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/15">
                  <button
                    type="button"
                    onClick={() => navigate(`/contact?type=${contactTypeQuery}`)}
                    style={{ backgroundColor: accentHex }}
                    className={`w-full py-4 px-6 rounded-full font-mono text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isEvents ? 'text-[#111116]' : 'text-white'
                    }`}
                  >
                    <span>{service.ctaText || 'Start a Conversation'}</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Genuine Projects & Concept Suites */}
        {relatedProjects.length > 0 && (
          <section className="w-full bg-[#E7E7E9] text-[#111116] py-16 sm:py-24 border-b border-[#111116]/15">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] font-bold">
                  // RELEVANT ARCHIVE ENTRIES
                </span>
                <Link
                  to="/work"
                  className="font-mono text-xs font-bold text-[#EA1E4D] hover:underline uppercase tracking-wider"
                >
                  Open Creative Archive →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProjects.map((proj) => (
                  <Link
                    key={proj.id}
                    to={`/work/${proj.id}`}
                    className="group bg-white border border-[#111116]/15 p-5 sm:p-6 block hover:border-[#EA1E4D] transition-colors"
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden bg-[#111116] mb-4">
                      <img
                        src={proj.heroImage}
                        alt={proj.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-[#EA1E4D] mb-1">
                      <span>{proj.archiveCode}</span>
                      {proj.isConcept && (
                        <span className="px-2 py-0.5 bg-[#111116] text-white text-[10px]">
                          CONCEPT WORK
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-black uppercase text-[#111116] group-hover:text-[#EA1E4D] transition-colors">
                      {proj.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Sibling Discipline Navigation */}
        <section className="w-full bg-[#F5F4F0] text-[#111116] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] font-bold block mb-6">
              // OTHER CAPABILITIES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CAPABILITIES_DATA.filter((s) => s.id !== service.id).map((other) => (
                <Link
                  key={other.id}
                  to={`/services/${other.id}`}
                  className="p-5 bg-white border border-[#111116]/15 hover:border-[#EA1E4D] transition-colors flex flex-col justify-between group"
                >
                  <span className="font-mono text-xs font-bold text-[#EA1E4D] mb-2 block">
                    {other.index} —
                  </span>
                  <span className="font-display text-base font-black uppercase text-[#111116] group-hover:text-[#EA1E4D] transition-colors">
                    {other.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <EditorialFooter />
    </>
  );
};
