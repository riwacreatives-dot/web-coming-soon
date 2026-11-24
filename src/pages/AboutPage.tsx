import React from 'react';
import { motion } from 'framer-motion';
import { AboutRiwaSection } from '../components/home/AboutRiwaSection';
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
        <section className="py-20 sm:py-28 px-4 sm:px-8 md:px-12 max-w-5xl mx-auto border-t border-line-border text-center">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-brand-red font-bold block mb-4 select-none">
            09 / THE RIWA MANIFESTO
          </span>

          <h2 className="font-display text-[clamp(2.4rem,7vw,5rem)] font-black uppercase tracking-tight text-text-primary leading-[1.05] mb-8">
            WE DON'T BELIEVE IN{' '}
            <span className="font-serif italic font-normal tracking-normal text-brand-red lowercase text-[1.12em]">
              ordinary
            </span><span className="text-brand-red font-black">.</span>
          </h2>

          <div className="space-y-6 font-mono text-sm sm:text-base md:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            <p>
              We believe in questions that challenge. Ideas that disrupt. Design that communicates. Work that means something.
            </p>
            <p>
              We believe that brands deserve more than templates. That creativity deserves discipline. That execution matters as much as imagination. And that the best work is always worth pushing further.
            </p>
            <p className="font-display font-bold text-lg sm:text-2xl uppercase tracking-wider text-text-primary pt-4">
              THAT'S THE RIWA WAY<span className="text-brand-red">.</span>
            </p>
          </div>
        </section>

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
