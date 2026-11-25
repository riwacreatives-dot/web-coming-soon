import React from 'react';
import { ServicesSection } from '../components/services/ServicesSection';
import { ScrollVelocityMarquee } from '../components/common/ScrollVelocityMarquee';
import { EditorialFooter } from '../components/footer/EditorialFooter';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <main className="w-full">
        <ServicesSection standalone />

        <ScrollVelocityMarquee
          items={[
            'SIX REVENUE DISCIPLINES',
            'ZERO JUNIOR HANDOFFS',
            'COMMERCIAL POSTER ART',
            'PREDATORY MEDIA STRATEGY',
            '3D PERFORMANCE WEB',
          ]}
          baseVelocity={1.4}
        />
      </main>

      <EditorialFooter />
    </>
  );
};

