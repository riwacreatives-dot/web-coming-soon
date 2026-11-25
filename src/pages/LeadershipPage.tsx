import React from 'react';
import { LeadershipSection } from '../components/leadership/LeadershipSection';
import { ScrollVelocityMarquee } from '../components/common/ScrollVelocityMarquee';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const LeadershipPage: React.FC = () => {
  useDocumentMeta({
    title: 'Studio Leadership & Architects — RIWA CREATIVES',
    description:
      'Founder-led, artist-built. Meet the senior architects behind RIWA Creatives — Abhinav Singh, Chief Growth Architect, and the senior sprint squad.',
    ogTitle: 'Studio Leadership — RIWA CREATIVES',
    ogDescription:
      'We reject the traditional model of delegating delivery to entry-level interns. Every sprint is architected by senior partners.',
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

