import React from 'react';
import { ManifestoSection } from '../components/manifesto/ManifestoSection';
import { ScrollVelocityMarquee } from '../components/common/ScrollVelocityMarquee';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const VisionPage: React.FC = () => {
  useDocumentMeta({
    title: 'The RIWA Protocol — RIWA CREATIVES',
    description:
      'Our studio philosophy: obsessive commercial art meets disciplined brand growth. Zero junior handoffs. Senior founder-led craft on every sprint.',
    ogTitle: 'The RIWA Protocol — Provocative Art × Commercial Discipline',
    ogDescription:
      'We operate at the intersection where provocative commercial art meets disciplined brand growth. The founder-led studio framework.',
  });

  return (
    <>
      <main className="w-full">
        <ManifestoSection standalone />

        <ScrollVelocityMarquee
          items={[
            'THE RIWA PROTOCOL',
            'PROVOCATIVE VISUAL ART',
            'COMMERCIAL DISCIPLINE',
            'DIKHEGA TOH BIKEGA',
            'HONEST WORK · REAL RESULTS',
          ]}
          baseVelocity={-1.4}
        />
      </main>

      <EditorialFooter />
    </>
  );
};

