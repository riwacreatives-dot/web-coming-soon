import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { BrandTicker } from '../components/home/BrandTicker';
import { SelectedWorks } from '../components/work/SelectedWorks';
import { ServicesSection } from '../components/services/ServicesSection';
import { DifferenceSection } from '../components/home/DifferenceSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { WhoWeWorkWithSection } from '../components/home/WhoWeWorkWithSection';
import { AboutRiwaSection } from '../components/home/AboutRiwaSection';
import { EventsTakeoverSection } from '../components/home/EventsTakeoverSection';
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
      'Riwa Creatives is an independent creative and growth studio bringing together brand identity, commercial advertising, digital growth, technology, and live experiences.',
    ogTitle: 'Riwa Creatives — Making Unreasonable Brands Happen',
    ogDescription:
      'We turn ambitious ideas into distinctive identities, disruptive campaigns and digital experiences.',
  });

  return (
    <>
      <main className="w-full">
        {/* 01. HERO (White #FFFFFF) */}
        <HeroSection />

        {/* TRANSITION STRIP */}
        <BrandTicker />

        {/* 02. SELECTED WORK / THE CREATIVE ARCHIVE (Concrete Grey #E7E7E9) */}
        <SelectedWorks />

        {/* 03. CAPABILITIES (Charcoal #111116) */}
        <ServicesSection />

        {/* 04. THE RIWA DIFFERENCE (Warm White #F5F4F0) */}
        <DifferenceSection />

        {/* 05. OUR PROCESS (Pure White #FFFFFF) */}
        <ProcessSection />

        {/* 06. WHO WE WORK WITH (Concrete Grey #E7E7E9) */}
        <WhoWeWorkWithSection />

        {/* 07. ABOUT RIWA (Warm White #F5F4F0) */}
        <AboutRiwaSection />

        {/* 08. EVENTS & EXPERIENCES — THE SIGNATURE ORANGE TAKEOVER (#FD7D3C) */}
        <EventsTakeoverSection />

        {/* 09. LEADERSHIP (Charcoal #111116) */}
        <LeadershipSection />

        {/* 10. MANIFESTO (Deep Black #07080B) */}
        <ManifestoSection />

        {/* 11. TESTIMONIALS & VERIFIED PROOF (White #FFFFFF) */}
        <TestimonialsSection />

        {/* 12. FAQ (Concrete Grey #E7E7E9) */}
        <FAQSection />

        {/* 13. FINAL CTA (Riwa Red #EA1E4D) */}
        <FinalCTASection />
      </main>

      {/* 14. FOOTER (Charcoal #111116) */}
      <EditorialFooter />
    </>
  );
};
