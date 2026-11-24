import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { BrandTicker } from '../components/home/BrandTicker';
import { SelectedWorks } from '../components/work/SelectedWorks';
import { ServicesSection } from '../components/services/ServicesSection';
import { DifferenceSection } from '../components/home/DifferenceSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { WhoWeWorkWithSection } from '../components/home/WhoWeWorkWithSection';
import { AboutRiwaSection } from '../components/home/AboutRiwaSection';
import { LeadershipSection } from '../components/leadership/LeadershipSection';
import { ManifestoSection } from '../components/home/ManifestoSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCTASection } from '../components/home/FinalCTASection';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const HomePage: React.FC = () => {
  useDocumentMeta({
    title: 'Riwa Creatives — Independent Creative & Growth Studio',
    description:
      'Riwa Creatives is an independent creative and growth studio bringing together branding, commercial advertising, digital marketing and technology to help ambitious businesses build distinctive brands and experiences.',
    ogTitle: 'Riwa Creatives — Making Unreasonable Brands Happen',
    ogDescription:
      'We turn ambitious ideas into distinctive identities, disruptive campaigns and digital experiences. Making unreasonable brands happen.',
  });

  return (
    <>
      <main className="w-full">
        {/* SECTION 01 — HERO */}
        <HeroSection />

        {/* SECTION 02 — BRAND TICKER */}
        <BrandTicker />

        {/* SECTION 03 — SELECTED WORK */}
        <SelectedWorks />

        {/* SECTION 04 — OUR CAPABILITIES */}
        <ServicesSection />

        {/* SECTION 05 — THE RIWA DIFFERENCE */}
        <DifferenceSection />

        {/* SECTION 06 — OUR PROCESS */}
        <ProcessSection />

        {/* SECTION 07 — WHO WE WORK WITH */}
        <WhoWeWorkWithSection />

        {/* SECTION 08 — ABOUT RIWA */}
        <AboutRiwaSection />

        {/* SECTION 08 — LEADERSHIP */}
        <LeadershipSection />

        {/* SECTION 09 — THE RIWA MANIFESTO */}
        <ManifestoSection />

        {/* SECTION 10 — TESTIMONIALS */}
        <TestimonialsSection />

        {/* SECTION 11 — FAQ */}
        <FAQSection />

        {/* SECTION 12 — FINAL CTA */}
        <FinalCTASection />
      </main>

      {/* FOOTER */}
      <EditorialFooter />
    </>
  );
};
