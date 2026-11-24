import React from 'react';
import { ServicesSection } from '../components/services/ServicesSection';
import { ScrollVelocityMarquee } from '../components/common/ScrollVelocityMarquee';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const ServicesPage: React.FC = () => {
  useDocumentMeta({
    title: 'Brand, Advertising, Technology & Events — Riwa Creatives',
    description:
      "Discover Riwa Creatives' 5 core capabilities: Brand & Identity, Commercial Creative, Digital Growth, Technology, and Live Events & Activations.",
    ogTitle: 'Capabilities & Services — Riwa Creatives',
    ogDescription:
      'Big ideas built from every angle: Brand & Identity, Commercial Creative & Advertising, Digital & Growth, Technology, and Events, Experiences & Activations.',
  });

  return (
    <>
      <main className="w-full">
        <ServicesSection standalone />

        <ScrollVelocityMarquee
          items={[
            'FIVE CORE DISCIPLINES',
            'BRAND & IDENTITY',
            'COMMERCIAL AD ART',
            'DIGITAL & GROWTH',
            'TECHNOLOGY & PLATFORMS',
            'LIVE EVENTS & ACTIVATIONS',
            'DIRECT SENIOR ACCESS',
          ]}
          baseVelocity={1.4}
        />
      </main>

      <EditorialFooter />
    </>
  );
};

