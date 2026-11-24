import React from 'react';
import { ServicesSection } from '../components/services/ServicesSection';
import { ScrollVelocityMarquee } from '../components/common/ScrollVelocityMarquee';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const ServicesPage: React.FC = () => {
  useDocumentMeta({
    title: 'Branding, Advertising & Digital Growth — Riwa Creatives',
    description:
      "Discover Riwa Creatives' capabilities across brand identity, commercial creative, digital growth and technology-led experiences.",
    ogTitle: 'Capabilities & Services — Riwa Creatives',
    ogDescription:
      'Big ideas built from every angle: Brand & Identity, Commercial Creative & Advertising, Digital & Growth, and Technology & Experiences.',
  });

  return (
    <>
      <main className="w-full">
        <ServicesSection standalone />

        <ScrollVelocityMarquee
          items={[
            'SIX REVENUE DISCIPLINES',
            'DIRECT SENIOR ACCESS',
            'COMMERCIAL POSTER ART',
            'PAID MEDIA ACQUISITION',
            'FAST HEADLESS DIGITAL SITES',
          ]}
          baseVelocity={1.4}
        />
      </main>

      <EditorialFooter />
    </>
  );
};

