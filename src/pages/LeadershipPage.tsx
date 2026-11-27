import React from 'react';
import { LeadershipSection } from '../components/leadership/LeadershipSection';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const LeadershipPage: React.FC = () => {
  useDocumentMeta({
    title: 'Studio Leadership & Creative Direction — Riwa Creatives',
    description:
      'Creative direction and studio leadership at Riwa Creatives — founded by Ranjan Kumar.',
    ogTitle: 'Studio Leadership — Riwa Creatives',
    ogDescription:
      'Discover how creative direction, strategy, digital craft, and live execution come together at Riwa Creatives.',
  });

  return (
    <>
      <main className="w-full">
        <LeadershipSection standalone />
      </main>

      <EditorialFooter />
    </>
  );
};
