import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { ScrollVelocityMarquee } from '../components/common/ScrollVelocityMarquee';
import { ManifestoSection } from '../components/manifesto/ManifestoSection';
import { SelectedWorks } from '../components/work/SelectedWorks';
import { ServicesSection } from '../components/services/ServicesSection';
import { LeadershipSection } from '../components/leadership/LeadershipSection';
import { IntakeSection } from '../components/intake/IntakeSection';
import { EditorialFooter } from '../components/footer/EditorialFooter';

export const HomePage: React.FC = () => {
  return (
    <>
      <main className="w-full">
        <HeroSection />

        {/* Kinetic Velocity Marquee 01 */}
        <ScrollVelocityMarquee
          items={[
            'SOLANAS 5-PIECE ART SUITE',
            'DIKHEGA TOH BIKEGA',
            'MUSEUM-GRADE AD ART',
            'PREDATORY MATHEMATICAL SCALE',
            'HIGH-TICKET RAPID SCALE',
          ]}
          baseVelocity={1.4}
        />

        <SelectedWorks />

        {/* Kinetic Velocity Marquee 02 */}
        <ScrollVelocityMarquee
          items={[
            'SIX REVENUE DISCIPLINES',
            'SUB-0.8s LCP SPEED',
            'ZERO JUNIOR HANDOFFS',
            '₹400 CR+ SCALED REVENUE',
            'SENIOR FOUNDER SQUAD',
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

