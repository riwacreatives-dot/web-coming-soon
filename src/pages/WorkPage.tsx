import React from 'react';
import { SelectedWorks } from '../components/work/SelectedWorks';
import { FinalCTASection } from '../components/home/FinalCTASection';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const WorkPage: React.FC = () => {
  useDocumentMeta({
    title: 'The Creative Archive — Riwa Creatives',
    description:
      'Selected client stories, studio-initiated IP, and creative initiatives by Riwa Creatives.',
    ogTitle: 'The Creative Archive — Riwa Creatives',
    ogDescription:
      'Explore selected brand identity, commercial advertising, digital experience, and studio archive work by Riwa Creatives.',
  });

  return (
    <>
      <main className="w-full">
        {/* Full Portfolio, Featured Stories & Creative Archive */}
        <SelectedWorks standalone />

        {/* Closing Call to Action */}
        <FinalCTASection eyebrow="02 — START A PROJECT" />
      </main>

      <EditorialFooter />
    </>
  );
};
