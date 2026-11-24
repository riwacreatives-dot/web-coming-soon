import React from 'react';
import { IntakeSection } from '../components/intake/IntakeSection';
import { EditorialFooter } from '../components/footer/EditorialFooter';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const ContactPage: React.FC = () => {
  useDocumentMeta({
    title: 'Start a Project with Riwa Creatives',
    description:
      'Have a brand, campaign or digital project in mind? Start a conversation with Riwa Creatives.',
    ogTitle: "Let's Make Something Happen — Riwa Creatives",
    ogDescription:
      'Have a project in mind? A brand to build? A campaign to launch? Or an idea that needs the right people behind it? Tell us what you are working on.',
  });

  return (
    <>
      <main className="w-full">
        <IntakeSection standalone />
      </main>

      <EditorialFooter />
    </>
  );
};

