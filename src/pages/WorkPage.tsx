import React from 'react';
import { SelectedWorks } from '../components/work/SelectedWorks';
import { ScrollVelocityMarquee } from '../components/common/ScrollVelocityMarquee';
import { EditorialFooter } from '../components/footer/EditorialFooter';

export const WorkPage: React.FC = () => {
  return (
    <>
      <main className="w-full">
        <SelectedWorks standalone />

        {/* Marquee Banner */}
        <ScrollVelocityMarquee
          items={[
            'SOLANAS 5-PIECE ART SUITE',
            'DIKHEGA TOH BIKEGA',
            'MUSEUM-GRADE AD ART',
            'PREDATORY MATHEMATICAL SCALE',
            'HIGH-TICKET RAPID SCALE',
          ]}
          baseVelocity={1.4}
        />
      </main>

      <EditorialFooter />
    </>
  );
};
