export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-01',
    question: 'What does Riwa Creatives do?',
    answer:
      'Riwa Creatives is an independent creative and growth studio working across brand development, commercial creative, digital marketing and technology-led experiences. We help businesses turn ambitious ideas into meaningful creative and digital outcomes.',
    category: 'Studio',
  },
  {
    id: 'faq-02',
    question: 'What kind of businesses do you work with?',
    answer:
      'We collaborate with startups, growing businesses, established brands, organizations and event teams. Our focus is on understanding the objective and finding the right creative approach.',
    category: 'Partnership',
  },
  {
    id: 'faq-03',
    question: 'Can I hire Riwa for just one project?',
    answer:
      'Absolutely. You can engage us for a specific project, campaign or creative requirement without committing to a long-term arrangement.',
    category: 'Engagement',
  },
  {
    id: 'faq-04',
    question: 'Do you offer ongoing creative and marketing support?',
    answer:
      'Yes. Depending on the requirement, we can discuss ongoing collaborations, campaign support and recurring creative engagements.',
    category: 'Engagement',
  },
  {
    id: 'faq-05',
    question: 'How does a project begin?',
    answer:
      "It starts with a conversation. Tell us about your business, what you're trying to achieve and where you need help. We'll understand the brief and discuss the next steps.",
    category: 'Process',
  },
  {
    id: 'faq-06',
    question: 'How much do your services cost?',
    answer:
      'Every project has different requirements. Pricing depends on the scope, complexity, deliverables and timeline. We provide a tailored proposal after understanding your brief.',
    category: 'Pricing',
  },
  {
    id: 'faq-07',
    question: 'Can we collaborate or partner with Riwa?',
    answer:
      "Yes. We're open to meaningful collaborations, partnerships, creative opportunities and projects that align with our work.",
    category: 'Collaboration',
  },
];
