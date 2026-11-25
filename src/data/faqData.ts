export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-01',
    question: 'What services does Riwa Creatives offer?',
    answer:
      'Riwa Creatives operates across five connected disciplines: Brand & Identity (including ongoing brand stewardship), Commercial Creative & Advertising, Digital & Growth, Technology & Digital Experiences, and Events, Experiences & Activations.',
    category: 'Services',
  },
  {
    id: 'faq-02',
    question: 'Can Riwa manage events, hackathons, MUNs, or festivals end-to-end?',
    answer:
      'Yes. We conceptualize, brand, promote, and coordinate live experiences including hackathons, Model UN conferences, college festivals, and corporate summits—handling identity design, sponsorship decks, participant acquisition, ticketing sites, and on-ground coordination.',
    category: 'Events',
  },
  {
    id: 'faq-03',
    question: 'How does pricing work for a project or engagement?',
    answer:
      'Every engagement is scoped based on objectives, deliverables, timeline, and complexity. After an initial brief review, we share a clear, structured proposal before any commitment.',
    category: 'Pricing',
  },
  {
    id: 'faq-04',
    question: 'Can I hire Riwa for a single project or ongoing collaboration?',
    answer:
      'Both. You can commission us for a single brand identity, campaign, website, or event—or partner with us on ongoing brand stewardship and multi-sprint growth.',
    category: 'Collaboration',
  },
  {
    id: 'faq-05',
    question: 'How does a project begin with Riwa?',
    answer:
      'Share what you are building through the Commission page or email riwacreatives@gmail.com. We review your brief directly at the founder desk and schedule a kickoff conversation to align on direction and scope.',
    category: 'Initiation',
  },
  {
    id: 'faq-06',
    question: 'Are we open to creative collaborations or partnerships?',
    answer:
      'Yes. We regularly collaborate with ambitious founders, organizing committees, specialized creators, and technology partners on work that shares our standard of craft.',
    category: 'Collaboration',
  },
];
