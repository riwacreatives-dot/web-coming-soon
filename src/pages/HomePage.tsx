import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { SelectedProjectsSection } from '../components/home/SelectedProjectsSection';
import { ManifestoSection } from '../components/home/ManifestoSection';
import { CapabilitiesOverviewSection } from '../components/home/CapabilitiesOverviewSection';
import { FinalCTASection } from '../components/home/FinalCTASection';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { STUDIO_IDENTITY } from '../data/studioData';

/**
 * Project-First Editorial Homepage:
 * 01. Hero (Restored db4d0a2 Worktable)
 * 02. Featured Work (Interactive Kinetic Split-Aperture Exhibition Deck)
 * 03. Studio Credo / Manifesto ("We don't believe in ordinary.")
 * 04. What We Do (Compact 5 confirmed capabilities index)
 * 05. Closing CTA & Footer
 */
export const HomePage: React.FC = () => {
  useDocumentMeta({
    title: STUDIO_IDENTITY.defaultDocumentTitle,
    description:
      'Riwa Creatives is an independent creative and growth studio uniting brand identity, creative advertising, digital technology, events, and ongoing brand growth.',
    ogTitle: 'Riwa Creatives — Making Unreasonable Brands Happen',
    ogDescription:
      'We build brands, campaigns and experiences that move people.',
  });

  return (
    <>
      <main className="w-full">
        {/* SECTION 01 — HERO */}
        <HeroSection />

        {/* SECTION 02 — FEATURED WORK */}
        <SelectedProjectsSection />

        {/* SECTION 03 — STUDIO CREDO / MANIFESTO */}
        <ManifestoSection eyebrow="03 — STUDIO CREDO" />

        {/* SECTION 04 — WHAT WE DO */}
        <CapabilitiesOverviewSection />

        {/* SECTION 05 — CLOSING CTA */}
        <FinalCTASection eyebrow="05 — START A PROJECT" />
      </main>

      <EditorialFooter />
    </>
  );
};
