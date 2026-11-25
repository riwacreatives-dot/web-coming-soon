import React from 'react';
import { LeadershipSection } from '../components/leadership/LeadershipSection';
import { ScrollVelocityMarquee } from '../components/common/ScrollVelocityMarquee';
import { EditorialFooter } from '../components/footer/EditorialFooter';

export const LeadershipPage: React.FC = () => {
  return (
    <>
      <main className="w-full">
        <LeadershipSection standalone />

        <ScrollVelocityMarquee
          items={[
            'DIRECT FOUNDER SQUAD',
            'ZERO JUNIOR DELEGATION',
            'EX-HYPERGROWTH PARTNERS',
            'SENIOR ART DIRECTORS',
            'EST. 2024 · MSME REGISTERED',
          ]}
          baseVelocity={-1.4}
        />
      </main>

      <EditorialFooter />
    </>
  );
};

