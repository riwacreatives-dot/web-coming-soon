import React from 'react';
import { IntakeSection } from '../components/intake/IntakeSection';
import { EditorialFooter } from '../components/footer/EditorialFooter';

export const ContactPage: React.FC = () => {
  return (
    <>
      <main className="w-full">
        <IntakeSection standalone />
      </main>

      <EditorialFooter />
    </>
  );
};

