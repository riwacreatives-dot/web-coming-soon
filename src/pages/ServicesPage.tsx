import React from 'react';
import { Link } from 'react-router-dom';
import { ServicesSection } from '../components/services/ServicesSection';
import { CAPABILITIES_DATA } from '../data/servicesData';
import { FinalCTASection } from '../components/home/FinalCTASection';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { ArrowUpRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  useDocumentMeta({
    title: 'Capabilities & Disciplines — Riwa Creatives',
    description:
      "Discover Riwa Creatives' five disciplines: Brand & Identity, Commercial Creative, Digital Growth, Technology, and Live Events & Activations.",
    ogTitle: 'Capabilities & Disciplines — Riwa Creatives',
    ogDescription:
      'Big ideas built from every angle across brand strategy, commercial advertising, digital growth, technology, and live experiences.',
  });

  return (
    <>
      <main className="w-full">
        {/* Interactive Capabilities Overview */}
        <ServicesSection standalone />

        {/* Dedicated Discipline Pages Directory */}
        <section className="w-full bg-[#F5F4F0] dark:bg-[#0B0B0F] text-[#111116] dark:text-white py-16 sm:py-24 px-4 sm:px-8 md:px-12 border-b border-[#111116]/15 dark:border-white/10 transition-colors">
          <div className="max-w-7xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 font-bold block mb-3">
              // DEDICATED DISCIPLINE DOSSIERS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight mb-10">
              DEEP-DIVE BY PRACTICE<span className="text-[#EA1E4D]">.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES_DATA.map((svc) => {
                const isEvents = svc.id === 'events-experiences';
                return (
                  <Link
                    key={svc.id}
                    to={`/services/${svc.id}`}
                    className={`p-6 sm:p-8 border flex flex-col justify-between transition-all group ${
                      isEvents
                        ? 'bg-[#FD7D3C] text-[#111116] border-[#111116] shadow-[6px_6px_0px_#111116]'
                        : 'bg-white dark:bg-[#14141A] text-[#111116] dark:text-white border-[#111116]/15 dark:border-white/15 hover:border-[#EA1E4D]'
                    }`}
                  >
                    <div>
                      <span
                        className={`font-mono text-xs font-bold block mb-3 ${
                          isEvents ? 'text-[#111116]' : 'text-[#EA1E4D]'
                        }`}
                      >
                        {svc.index} — {svc.categoryTag}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight mb-3">
                        {svc.name}
                      </h3>
                      <p
                        className={`font-sans text-sm leading-relaxed mb-6 ${
                          isEvents ? 'text-[#111116]/90 font-medium' : 'text-[#52525B] dark:text-white/70'
                        }`}
                      >
                        {svc.shortDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-current/15 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-wider">
                      <span>Open Full Scope</span>
                      <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <FinalCTASection />
      </main>

      <EditorialFooter />
    </>
  );
};
