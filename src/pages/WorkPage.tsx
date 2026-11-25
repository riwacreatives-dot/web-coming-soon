import React from 'react';
import { SelectedWorks } from '../components/work/SelectedWorks';
import { FinalCTASection } from '../components/home/FinalCTASection';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const WorkPage: React.FC = () => {
  useDocumentMeta({
    title: 'The Creative Archive — Riwa Creatives',
    description:
      "A curated collection of things we've imagined, designed, built and brought to life at Riwa Creatives.",
    ogTitle: 'The Creative Archive — Riwa Creatives',
    ogDescription:
      'Explore selected branding, commercial advertising, digital experience, and conceptual work by Riwa Creatives.',
    ogImage: 'https://riwacreatives.in/work/solanas-chilli-chicken.jpg',
  });

  return (
    <>
      <main className="w-full">
        {/* 01 Opening Statement, 02 Featured Story, 03 Supporting Stories, 04 Further Work */}
        <SelectedWorks standalone />

        {/* 05 Final Project CTA */}
        <FinalCTASection />
      </main>

      <EditorialFooter />
    </>
  );
};
