import React from 'react';
import { motion } from 'framer-motion';
import { AboutRiwaSection } from '../components/home/AboutRiwaSection';
import { ManifestoSection } from '../components/home/ManifestoSection';
import { DifferenceSection } from '../components/home/DifferenceSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { WhoWeWorkWithSection } from '../components/home/WhoWeWorkWithSection';
import { BrandTicker } from '../components/home/BrandTicker';
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
      <main className="w-full pt-16 sm:pt-20">
        {/* About Section */}
        <AboutRiwaSection />

        {/* The Riwa Manifesto Callout */}
        <ManifestoSection />

        {/* Brand Ticker */}
        <BrandTicker />

        {/* The Riwa Difference */}
        <DifferenceSection />

        {/* Our Process */}
        <ProcessSection />

        {/* Who We Work With */}
        <WhoWeWorkWithSection />
      </main>

      <EditorialFooter />
    </>
  );
};
