import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ServicesSection } from '../components/services/ServicesSection';
import { CAPABILITIES_DATA } from '../data/servicesData';
import { FinalCTASection } from '../components/home/FinalCTASection';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const ServicesPage: React.FC = () => {
  const reduced = useReducedMotion();

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
          <motion.div
            initial={reduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.06 }}
            className="max-w-7xl mx-auto"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -12 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: STUDIO_EASE } },
              }}
              className="font-mono text-xs uppercase tracking-[0.22em] text-[#52525B] dark:text-white/60 font-bold block mb-3"
            >
              02 — DEDICATED DISCIPLINE DOSSIERS
            </motion.span>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight mb-10">
              <span className="block overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: '108%', opacity: 0 },
                    visible: { y: '0%', opacity: 1, transition: { duration: 0.7, delay: 0.05, ease: STUDIO_EASE } },
                  }}
                  className="block"
                >
                  DEEP-DIVE BY PRACTICE<span className="text-[#EA1E4D]">.</span>
                </motion.span>
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES_DATA.map((svc, idx) => {
                const isEvents = svc.id === 'events-experiences';
                return (
                  <motion.div
                    key={svc.id}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.97 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.58, delay: 0.08 + idx * 0.07, ease: STUDIO_EASE },
                      },
                    }}
                  >
                    <Link
                      to={`/services/${svc.id}`}
                      className={`h-full p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 active:scale-[0.99] ${
                        isEvents
                          ? 'bg-[#FD7D3C] text-[#111116] border-[#111116] shadow-[6px_6px_0px_#111116] hover:shadow-[9px_9px_0px_#111116]'
                          : 'bg-white dark:bg-[#14141A] text-[#111116] dark:text-white border-[#111116]/15 dark:border-white/15 hover:border-[#EA1E4D] hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_14px_30px_rgba(0,0,0,0.4)]'
                      }`}
                    >
                      <div>
                        <span
                          className={`font-mono text-xs font-bold block mb-3 ${
                            isEvents ? 'text-[#111116]' : 'text-[#C4123D] dark:text-[#FD7D3C]'
                          }`}
                        >
                          {svc.index} — {svc.categoryTag}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight mb-3">
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
                        <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        <FinalCTASection eyebrow="03 — START A PROJECT" />
      </main>

      <EditorialFooter />
    </>
  );
};
