import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { BrandTicker } from '../components/home/BrandTicker';
import { SelectedWorks } from '../components/work/SelectedWorks';
import { ServicesSection } from '../components/services/ServicesSection';
import { DifferenceSection } from '../components/home/DifferenceSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { ControlRoomSection } from '../components/home/ControlRoomSection';
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
    title: 'Riwa Creatives — Controlled Chaos | Independent Creative & Growth Studio',
    description:
      'Riwa Creatives is an independent creative and growth studio uniting brand identity, commercial advertising, digital experiences, growth, and live events.',
    ogTitle: 'Riwa Creatives — Making Unreasonable Brands Happen',
    ogDescription:
      'We turn ambitious ideas into distinctive identities, disruptive campaigns, digital experiences, and live brand moments.',
  });

  return (
    <>
      <main className="w-full">
        {/* SECTION 01 — HERO (White #FFFFFF) */}
        <HeroSection />

        {/* TRANSITION BAND — DISCIPLINE TICKER (Charcoal #111116) */}
        <BrandTicker />

        {/* SECTION 02 — SELECTED WORK CAMPAIGN WALL (Concrete Grey #E7E7E9) */}
        <SelectedWorks />

        {/* SECTION 03 — CAPABILITIES (Charcoal #111116) */}
        <ServicesSection />

        {/* SECTION 04 — THE RIWA DIFFERENCE: TYPOGRAPHIC INTERRUPTION (Riwa Orange #FD7D3C) */}
        <DifferenceSection />

        {/* SECTION 05 — OUR PROCESS TIMELINE (White #FFFFFF) */}
        <ProcessSection />

        {/* FEATURE — THE RIWA CONTROL ROOM (Charcoal #111116 Interactive Console) */}
        <ControlRoomSection />

        {/* SECTION 06 — WHO WE WORK WITH (Warm White #F5F4F0) */}
        <WhoWeWorkWithSection />

        {/* SECTION 07 — ABOUT RIWA MAGAZINE SPREAD (Concrete Grey #E7E7E9) */}
        <AboutRiwaSection />

        {/* SECTION 08 — EVENTS / THE ORANGE TAKEOVER (Official Riwa Orange #FD7D3C) */}
        <EventsTakeoverSection />

        {/* SECTION 09 — LEADERSHIP & SQUADS (Charcoal #111116) */}
        <LeadershipSection />

        {/* SECTION 10 — RIWA MANIFESTO (Deep Black #07080B) */}
        <ManifestoSection />

        {/* SECTION 11 — DOCUMENTED PROOF & OUTCOMES (White #FFFFFF) */}
        <TestimonialsSection />

        {/* SECTION 12 — FAQ (Concrete Grey #E7E7E9) */}
        <FAQSection />

        {/* SECTION 13 — FINAL CALL TO ACTION (Riwa Red #EA1E4D) */}
        <FinalCTASection />
      </main>

      {/* EDITORIAL FOOTER (Charcoal #111116) */}
      <EditorialFooter />
    </>
  );
};
