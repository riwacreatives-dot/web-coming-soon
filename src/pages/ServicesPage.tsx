import React from 'react';
import { ServicesSection } from '../components/services/ServicesSection';
import { ScrollVelocityMarquee } from '../components/common/ScrollVelocityMarquee';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const ServicesPage: React.FC = () => {
  useDocumentMeta({
    title: 'Six Revenue Disciplines — RIWA CREATIVES',
    description:
      'Commercial poster design, paid performance media, 3D web funnels, AI search dominance, lifecycle CRM, and growth intelligence. Six synchronized revenue disciplines.',
    ogTitle: 'Six Revenue Disciplines — RIWA CREATIVES',
    ogDescription:
      'From ad fatigue to predictable 8-figure run rates. Six synchronized capabilities executed directly by senior architects.',
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

