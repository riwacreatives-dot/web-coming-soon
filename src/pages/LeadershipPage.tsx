import React from 'react';
import { LeadershipSection } from '../components/leadership/LeadershipSection';
import { ScrollVelocityMarquee } from '../components/common/ScrollVelocityMarquee';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const LeadershipPage: React.FC = () => {
  useDocumentMeta({
    title: 'Studio Leadership & Creative Direction — Riwa Creatives',
    description:
      'Meet the team shaping the ideas and experiences at Riwa Creatives — founded by Ranjan Kumar.',
    ogTitle: 'Studio Leadership — Riwa Creatives',
    ogDescription:
      'Behind every project is a team of people who think, challenge, build and execute. Meet the minds at Riwa Creatives.',
  });

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

