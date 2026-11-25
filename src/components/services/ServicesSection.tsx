import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA } from '../../data/servicesData';
import { ServiceRow } from './ServiceRow';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  standalone?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ standalone = false }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);

  const activeService =
    SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];
  const isActiveEvents = activeService.id === 'events-experiences';

  return (
    <div className="w-full bg-[#111116] text-white border-b border-white/10 transition-colors">
      <section
        id="services"
        className={`relative w-full ${
          standalone
            ? 'pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-28 md:py-36'
            : 'py-16 sm:py-24 md:py-36'
        } px-4 sm:px-8 md:px-12 max-w-7xl mx-auto`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Sticky Column: Headline + Tangible Visual Preview of Active Discipline */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div>
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-white/60 font-semibold block mb-3 select-none">
                {standalone ? 'OUR CAPABILITIES · FIVE CORE DISCIPLINES' : '03 / CAPABILITIES'}
              </span>

              <h2 className="font-display text-[clamp(2.25rem,5.8vw,4rem)] font-black uppercase tracking-tight text-white leading-[0.98]">
                <span>BIG IDEAS.</span><br />
                <span>BUILT FROM</span><br />
                <span className="font-serif italic font-normal tracking-normal text-[#EA1E4D] text-[1.14em] lowercase select-none">
                  every
                </span>{' '}
                <span>ANGLE</span><span className="text-[#EA1E4D]">.</span>
              </h2>
            </div>

            {/* Dynamic Selected Discipline Visual Preview Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="border border-white/15 bg-[#17171D] p-4 sm:p-5 space-y-4"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/50 pb-2.5 border-b border-white/10">
                  <span className={isActiveEvents ? 'text-[#FD7D3C] font-bold' : 'text-[#EA1E4D] font-bold'}>
                    PREVIEW // {activeService.index}
                  </span>
                  <span>{activeService.categoryTag}</span>
                </div>

                {/* Genuine Visual Artwork or Illustrative Events Stage Preview */}
                {activeService.previewImage ? (
                  <div className="aspect-[16/10] w-full overflow-hidden bg-black border border-white/10">
                    <img
                      src={activeService.previewImage}
                      alt={activeService.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/10] w-full bg-[#FD7D3C] text-[#111116] p-5 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest">
                      <span>RIWA / EXPERIENCES / 05</span>
                      <span className="px-2 py-0.5 bg-[#111116] text-white">ILLUSTRATIVE</span>
                    </div>
                    <div>
                      <p className="font-display text-2xl font-black uppercase leading-none tracking-tight">
                        WE MAKE MOMENTS HAPPEN.
                      </p>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider block mt-2">
                        HACKATHONS · MUNS · FESTIVALS · STAGE SYSTEMS
                      </span>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                    {activeService.shortDesc}
                  </p>
                  <Link
                    to={`/services/${activeService.id}`}
                    className={`inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider hover:underline ${
                      isActiveEvents ? 'text-[#FD7D3C]' : 'text-[#EA1E4D]'
                    }`}
                  >
                    <span>Explore Dedicated {activeService.name} Page</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Interactive Editorial Discipline List */}
          <div className="lg:col-span-7 border-t border-white/15">
            {SERVICES_DATA.map((service) => (
              <ServiceRow
                key={service.id}
                service={service}
                isOpen={activeServiceId === service.id}
                onToggle={() => setActiveServiceId(service.id)}
                onHoverStart={() => {}}
                onHoverEnd={() => {}}
                onMouseMove={() => {}}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
