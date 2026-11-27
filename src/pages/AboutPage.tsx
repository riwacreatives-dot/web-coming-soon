import React from 'react';
import { ManifestoSection } from '../components/home/ManifestoSection';
import { DifferenceSection } from '../components/home/DifferenceSection';
import { AboutRiwaSection } from '../components/home/AboutRiwaSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { WhoWeWorkWithSection } from '../components/home/WhoWeWorkWithSection';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const AboutPage: React.FC = () => {
  useDocumentMeta({
    title: 'About Riwa Creatives — Our Story & Approach',
    description:
      'Meet Riwa Creatives, an independent creative and growth studio built around ambitious ideas and thoughtful execution.',
    ogTitle: 'About Riwa Creatives — Independent Creative & Growth Studio',
    ogDescription:
      'Founded by Ranjan Kumar. We bring strategy, creative thinking and technology together to make brands impossible to overlook.',
  });

  return (
    <>
      <main className="w-full">
        {/* 01. We Don't Believe In Ordinary (Studio Credo) */}
        <ManifestoSection eyebrow="01 — THE RIWA WAY" standalone />

        {/* 02. Not Another Agency Playing It Safe */}
        <DifferenceSection />

        {/* 03. About Riwa Creatives */}
        <AboutRiwaSection />

        {/* 04. Our Process */}
        <ProcessSection />

        {/* 05. Who We Work With */}
        <WhoWeWorkWithSection />
      </main>

      <EditorialFooter />
    </>
  );
};
