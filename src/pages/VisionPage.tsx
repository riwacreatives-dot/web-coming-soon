import React from 'react';
import { ManifestoSection } from '../components/manifesto/ManifestoSection';
import { ScrollVelocityMarquee } from '../components/common/ScrollVelocityMarquee';
import { EditorialFooter } from '../components/footer/EditorialFooter';

export const VisionPage: React.FC = () => {
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

