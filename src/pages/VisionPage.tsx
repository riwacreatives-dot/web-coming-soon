import React from 'react';
import { ManifestoSection } from '../components/manifesto/ManifestoSection';
import { ScrollVelocityMarquee } from '../components/common/ScrollVelocityMarquee';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const VisionPage: React.FC = () => {
  useDocumentMeta({
    title: 'The RIWA Protocol — RIWA CREATIVES',
    description:
      'Our uncompromising manifesto: obsessive commercial art meets ruthless mathematical scale. Zero junior handoffs. Senior founder-led execution on every sprint.',
    ogTitle: 'The RIWA Protocol — Obsessive Art × Ruthless Math',
    ogDescription:
      'We operate at the razor-edge where provocative art meets predatory math. The anti-agency growth framework.',
  });

  return (
    <>
      <main className="w-full">
        <ManifestoSection standalone />

        <ScrollVelocityMarquee
          items={[
            'THE RIWA PROTOCOL',
            'MATHEMATICAL CONVERSION',
            'COMMERCIAL VISUAL GRAVITY',
            'PREDATORY MATH MODELING',
            'SUB-0.8s LCP SPEED',
          ]}
          baseVelocity={-1.4}
        />
      </main>

      <EditorialFooter />
    </>
  );
};

