import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CAPABILITIES_DATA } from '../data/servicesData';
import { PROJECTS_DATA } from '../data/projectsData';
import { ThePointOfView } from '../components/chapters/ThePointOfView';
import { TheAttention } from '../components/chapters/TheAttention';
import { TheWorld } from '../components/chapters/TheWorld';
import { TheRealWorld } from '../components/chapters/TheRealWorld';
import { BrandGrowthShowcase } from '../components/services/BrandGrowthShowcase';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const reduced = useReducedMotion();

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
        <span className="font-mono text-xs uppercase tracking-widest text-[#FD7D3C] font-bold mb-3">
          DISCIPLINE NOT FOUND
        </span>
        <h1 className="font-display text-4xl font-extrabold uppercase mb-6">
          Service Page Unavailable.
        </h1>
        <Link
          to="/services"
          className="px-6 py-3 rounded-full bg-white text-[#111116] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FD7D3C] transition-colors"
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

  const renderShowcase = () => {
    switch (service.id) {
      case 'brand-identity':
        return <ThePointOfView embedded />;
      case 'creative-advertising':
        return <TheAttention embedded />;
      case 'digital-technology':
        return <TheWorld embedded />;
      case 'events-experiences':
        return <TheRealWorld embedded />;
      case 'brand-management-growth':
        return <BrandGrowthShowcase />;
      default:
        return null;
    }
  };

  return (
    <>
      <main
        className={`w-full pt-28 sm:pt-36 transition-colors ${isEvents
          ? 'bg-[#FD7D3C] text-[#111116]'
          : 'bg-[#111116] dark:bg-[#F5F4F0] text-white dark:text-[#111116]'
          }`}
      >
        {/* Top Discipline Hero */}
        <section
          className={`max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pb-14 sm:pb-20 border-b ${isEvents ? 'border-[#111116]/25' : 'border-white/15 dark:border-[#111116]/15'
            }`}
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/services"
              className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold transition-colors ${isEvents
                ? 'text-[#111116] hover:underline'
                : 'text-[#B4B4BE] dark:text-[#52525B] hover:text-white dark:hover:text-[#111116]'
                }`}
            >
              <ArrowLeft size={14} aria-hidden="true" />
              <span>All Capabilities</span>
            </Link>

            <span
              className={`font-mono text-xs font-bold uppercase tracking-widest ${isEvents ? 'text-[#111116]' : 'text-[#FD7D3C] dark:text-[#C4123D]'
                }`}
            >
              DISCIPLINE {service.index} / 05 · {service.categoryTag}
            </span>
          </div>

          <motion.div
            key={service.id}
            initial={reduced ? false : 'hidden'}
            animate="visible"
            className="max-w-4xl space-y-5"
          >
            <h1 className="font-display text-[clamp(2.3rem,6.5vw,5rem)] font-extrabold uppercase tracking-tighter leading-[0.94]">
              <span className="block overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: '108%', opacity: 0 },
                    visible: { y: '0%', opacity: 1, transition: { duration: 0.72, delay: 0.04, ease: STUDIO_EASE } },
                  }}
                  className="block"
                >
                  {service.name}
                  <span style={{ color: isEvents ? '#111116' : accentHex }}>.</span>
                </motion.span>
              </span>
            </h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.14, ease: STUDIO_EASE } },
              }}
              className={`font-display text-xl sm:text-2xl font-bold uppercase tracking-tight ${isEvents ? 'text-[#111116]' : 'text-white/95 dark:text-[#111116]'
                }`}
            >
              {service.headline}
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.22, ease: STUDIO_EASE } },
              }}
              className={`font-sans text-base sm:text-xl leading-relaxed ${isEvents ? 'text-[#111116]/90 font-medium' : 'text-[#B4B4BE] dark:text-[#3F3F46]'
                }`}
            >
              {service.fullDesc}
            </motion.p>
          </motion.div>
        </section>

        {/* Dedicated Interactive Showcase Relocated From Previous Homepage */}
        {renderShowcase()}

        {/* Core Breakdown: Problems Addressed, Deliverables, & Collaboration Model */}
        <section
          className={`w-full py-16 sm:py-24 border-y border-[#111116]/15 dark:border-white/15 transition-colors ${isEvents
            ? 'bg-[#FFFFFF] dark:bg-[#14141A] text-[#111116] dark:text-white'
            : 'bg-[#FFFFFF] dark:bg-[#E7E7E9] text-[#111116]'
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 7 Cols: Problems We Solve & Collaboration Model */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <span
                  className={`font-mono text-xs uppercase tracking-[0.22em] font-bold block mb-4 ${isEvents ? 'text-[#C4123D] dark:text-[#FD7D3C]' : 'text-[#C4123D]'
                    }`}
                >
                  // PROBLEMS WE ADDRESS
                </span>
                <div className="space-y-4">
                  {service.problemsAddressed.map((prob, idx) => (
                    <div
                      key={prob}
                      className={`p-5 border flex items-start gap-4 ${isEvents
                        ? 'border-[#111116]/15 dark:border-white/15 bg-[#F5F4F0] dark:bg-[#1C1C24]'
                        : 'border-[#111116]/15 bg-[#F5F4F0] dark:bg-white'
                        }`}
                    >
                      <span
                        className={`font-mono text-xs font-bold shrink-0 pt-0.5 ${isEvents ? 'text-[#C4123D] dark:text-[#FD7D3C]' : 'text-[#C4123D]'
                          }`}
                      >
                        0{idx + 1}
                      </span>
                      <p
                        className={`font-sans text-sm sm:text-base leading-relaxed ${isEvents ? 'text-[#111116] dark:text-white/90' : 'text-[#111116]'
                          }`}
                      >
                        {prob}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`p-6 sm:p-8 border-l-4 border-[#EA1E4D] ${isEvents ? 'bg-[#F5F4F0] dark:bg-[#1C1C24]' : 'bg-[#F5F4F0] dark:bg-white'
                  }`}
              >
                <span
                  className={`font-mono text-xs uppercase tracking-[0.2em] font-bold block mb-2 ${isEvents ? 'text-[#C4123D] dark:text-[#FD7D3C]' : 'text-[#C4123D]'
                    }`}
                >
                  // HOW COLLABORATION WORKS
                </span>
                <p
                  className={`font-sans text-base sm:text-lg leading-relaxed ${isEvents ? 'text-[#111116] dark:text-white/90' : 'text-[#111116]'
                    }`}
                >
                  {service.collaborationModel}
                </p>
              </div>
            </div>

            {/* Right 5 Cols: Complete Deliverables Scope & Commission CTA */}
            <div className="lg:col-span-5">
              <div
                className={`p-6 sm:p-8 border space-y-6 ${isEvents
                  ? 'bg-[#111116] dark:bg-[#F5F4F0] text-white dark:text-[#111116] border-[#111116] dark:border-white/20'
                  : 'bg-[#111116] text-white border-[#111116]'
                  }`}
              >
                <div>
                  <span
                    className={`font-mono text-xs uppercase tracking-[0.2em] font-bold block mb-2 ${isEvents ? 'text-[#FD7D3C] dark:text-[#C4123D]' : 'text-[#FD7D3C]'
                      }`}
                  >
                    ✦ COMPLETE DELIVERABLES
                  </span>
                  <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight">
                    What Riwa Delivers
                  </h2>
                </div>

                <ul
                  className={`space-y-3 font-mono text-xs sm:text-sm pt-5 border-t ${isEvents
                    ? 'text-white/90 dark:text-[#111116] border-white/15 dark:border-[#111116]/15'
                    : 'text-white/90 border-white/15'
                    }`}
                >
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={15}
                        className={`shrink-0 mt-0.5 ${isEvents ? 'text-[#FD7D3C] dark:text-[#C4123D]' : 'text-[#FD7D3C]'
                          }`}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`pt-4 border-t ${isEvents ? 'border-white/15 dark:border-[#111116]/15' : 'border-white/15'
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => navigate(`/contact?service=${service.id}`)}
                    className={`w-full min-h-[48px] py-4 px-6 rounded-full font-mono text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2 ${isEvents
                      ? 'bg-[#FD7D3C] text-[#111116]'
                      : 'bg-[#C4123D] text-white hover:bg-[#EA1E4D]'
                      }`}
                  >
                    <span>{service.ctaText || 'Start a Conversation'}</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Cleared Projects */}
        {relatedProjects.length > 0 && (
          <section className="w-full bg-[#E7E7E9] dark:bg-[#14141A] text-[#111116] dark:text-white py-16 sm:py-24 border-b border-[#111116]/15 dark:border-white/15 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] dark:text-[#B4B4BE] font-bold">
                  // RELEVANT ARCHIVE ENTRIES
                </span>
                <Link
                  to="/work"
                  className="font-mono text-xs font-bold text-[#C4123D] dark:text-[#FD7D3C] hover:underline uppercase tracking-wider"
                >
                  Open Creative Archive →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProjects.map((proj) => (
                  <Link
                    key={proj.id}
                    to={`/work/${proj.id}`}
                    className="group bg-white dark:bg-[#1B1B22] border border-[#111116]/15 dark:border-white/15 p-5 sm:p-6 block hover:border-[#EA1E4D] transition-colors"
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden bg-[#111116] mb-4">
                      <img
                        src={proj.heroImage}
                        alt={proj.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-[#C4123D] dark:text-[#FD7D3C] mb-1">
                      <span>{proj.archiveCode}</span>
                    </div>
                    <h3 className="font-display text-xl font-extrabold uppercase text-[#111116] dark:text-white group-hover:text-[#EA1E4D] transition-colors">
                      {proj.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Sibling Discipline Navigation */}
        <section className="w-full bg-[#F5F4F0] dark:bg-[#0B0B0F] text-[#111116] dark:text-white py-12 sm:py-16 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] dark:text-[#B4B4BE] font-bold block mb-6">
              // OTHER CAPABILITIES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CAPABILITIES_DATA.filter((s) => s.id !== service.id).map((other) => (
                <Link
                  key={other.id}
                  to={`/services/${other.id}`}
                  className="p-5 bg-white dark:bg-[#14141A] border border-[#111116]/15 dark:border-white/15 hover:border-[#EA1E4D] transition-colors flex flex-col justify-between group"
                >
                  <span className="font-mono text-xs font-bold text-[#C4123D] dark:text-[#FD7D3C] mb-2 block">
                    {other.index} —
                  </span>
                  <span className="font-display text-base font-extrabold uppercase text-[#111116] dark:text-white group-hover:text-[#EA1E4D] transition-colors">
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
