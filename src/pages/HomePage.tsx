import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { BrandTicker } from '../components/home/BrandTicker';
import { SelectedWorks } from '../components/work/SelectedWorks';
import { ServicesSection } from '../components/services/ServicesSection';
import { DifferenceSection } from '../components/home/DifferenceSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { ManifestoSection } from '../components/home/ManifestoSection';
import { LeadershipSection } from '../components/leadership/LeadershipSection';
import { StudioBeliefSection } from '../components/home/StudioBeliefSection';
import { WhyRiwaSection } from '../components/home/WhyRiwaSection';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCTASection } from '../components/home/FinalCTASection';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const HomePage: React.FC = () => {
  useDocumentMeta({
    title: 'Riwa Creatives — Independent Creative & Growth Studio',
    description:
      'Riwa Creatives is an independent creative and growth studio bringing together branding, commercial advertising, digital experiences and event activations to help ambitious businesses build distinctive brands.',
    ogTitle: 'Riwa Creatives — Making Unreasonable Brands Happen',
    ogDescription:
      'We turn ambitious ideas into distinctive identities, disruptive campaigns and digital experiences. Making unreasonable brands happen.',
  });

  return (
    <>
      <main className="w-full">
        {/* SECTION 01 — HERO (Warm Ivory #F4F1EA) */}
        <HeroSection />

        {/* BRAND DISCIPLINE TICKER */}
        <BrandTicker />

        {/* SECTION 02 — SELECTED WORK (Pure White #FFFFFF) */}
        <SelectedWorks />

        {/* SECTION 03 — WHAT WE DO (Ink Black #171719) */}
        <ServicesSection />

        {/* SECTION 04 — NOT ANOTHER AGENCY (Concrete Grey #DAD8D1) */}
        <DifferenceSection />

        {/* SECTION 05 — FROM FIRST THOUGHT TO FINAL FRAME (Warm Ivory #F4F1EA) */}
        <ProcessSection />

        {/* SECTION 06 — SIGNATURE BRAND MANIFESTO (ACTUAL RIWA ORANGE #FD7D3C) */}
        <ManifestoSection />

        {/* SECTION 07 — DIFFERENT MINDS. ONE DIRECTION. (Ink Black #171719) */}
        <LeadershipSection />

        {/* SECTION 08 — STUDIO BELIEF (Deep Black #0A0A0C) */}
        <StudioBeliefSection />

        {/* SECTION 09 — WHY RIWA (Warm Ivory #F4F1EA) */}
        <WhyRiwaSection />

        {/* SECTION 10 — FAQ (Pure White #FFFFFF) */}
        <FAQSection />

        {/* SECTION 11 — CONTACT CTA (Ink Black #171719) */}
        <FinalCTASection />
      </main>

      {/* SECTION 12 — EDITORIAL FOOTER (Ink Black #171719) */}
      <EditorialFooter />
    </>
  );
};
