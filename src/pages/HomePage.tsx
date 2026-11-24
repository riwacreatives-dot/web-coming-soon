import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { ScrollVelocityMarquee } from '../components/common/ScrollVelocityMarquee';
import { ManifestoSection } from '../components/manifesto/ManifestoSection';
import { SelectedWorks } from '../components/work/SelectedWorks';
import { ServicesSection } from '../components/services/ServicesSection';
import { LeadershipSection } from '../components/leadership/LeadershipSection';
import { IntakeSection } from '../components/intake/IntakeSection';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const HomePage: React.FC = () => {
  useDocumentMeta({
    title: 'RIWA CREATIVES — We Make It Happen',
    description:
      'Independent commercial ad art studio & brand growth engine. Museum-grade poster design, high-conversion web, and disciplined performance scaling. ₹400 Cr+ client revenue delivered.',
    ogTitle: 'RIWA CREATIVES — We Make It Happen',
    ogDescription:
      'Engineered Growth. Unapologetic Design. Commercial poster design, 3D web funnels, and performance scaling.',
  });

  return (
    <>
      <main className="w-full">
        <HeroSection />

        {/* Kinetic Velocity Marquee 01 */}
        <ScrollVelocityMarquee
          items={[
            'SOLANAS RETRO POP-ART',
            'DIKHEGA TOH BIKEGA',
            'COMMERCIAL POSTER DIRECTION',
            'WORK THAT STOPS THE SCROLL',
            '86,000+ ORGANIC SHARES',
            'THINKS LIKE A FOUNDER',
          ]}
          baseVelocity={1.4}
        />

        <SelectedWorks />

        {/* Kinetic Velocity Marquee 02 */}
        <ScrollVelocityMarquee
          items={[
            'BUILT BY ARTISTS',
            'SCALED WITH DISCIPLINE',
            'ZERO VANITY METRICS',
            'DIRECT FOUNDER ACCESS',
            'CULINARY ART DIRECTION',
            'HONEST WORK · REAL RESULTS',
          ]}
          baseVelocity={-1.4}
        />

        <ManifestoSection />
        <ServicesSection />
        <LeadershipSection />
        <IntakeSection />
      </main>

      <EditorialFooter />
    </>
  );
};

