import { ServiceItem } from '../types';

export type CapabilityItem = ServiceItem;

export const CAPABILITIES_DATA: ServiceItem[] = [
  {
    id: 'brand-identity',
    index: '01',
    name: 'Brand & Identity',
    categoryTag: 'Identity, Systems & Stewardship',
    headline: 'MAKE YOUR BRAND MEAN SOMETHING.',
    shortDesc:
      'We build distinctive brand identities—and provide ongoing brand management & stewardship—so businesses hold a sharp voice, consistent visual language, and clear reason to stand apart.',
    fullDesc:
      'From emerging startups to established businesses, we design visual identities, positioning systems, and ongoing brand governance that ensure every touchpoint carries cultural weight and unmistakable clarity.',
    ctaText: 'EXPLORE BRAND & IDENTITY ↗',
    flagshipKPI: 'Distinctive Recognition',
    kpiLabel: 'Identity Systems & Stewardship',
    deliverables: [
      'Brand strategy and positioning',
      'Brand naming and verbal identity',
      'Logo and scalable visual systems',
      'Comprehensive brand guidelines',
      'Ongoing brand management & stewardship',
      'Graphic and communication design',
      'Packaging and promotional design',
      'Art direction',
    ],
    problemsAddressed: [
      'Brands that blend into generic industry templates and look indistinguishable from competitors.',
      'Inconsistent visual identity across packaging, social feeds, sales decks, and websites.',
      'Lack of strategic stewardship causing brand dilution after initial launch.',
    ],
    collaborationModel:
      'We begin with strategic discovery alongside founders, craft a tailored visual system, and optionally stay retained for ongoing brand stewardship across campaigns and launches.',
    relatedProjectIds: ['solanas-silk', 'solanas-steamer'],
  },
  {
    id: 'commercial-advertising',
    index: '02',
    name: 'Commercial Creative & Advertising',
    categoryTag: 'Campaigns & Motion Art',
    headline: 'MAKE PEOPLE STOP SCROLLING.',
    shortDesc:
      'We create visual-first advertising and commercial campaigns designed to capture attention, communicate value, and make brands impossible to forget.',
    fullDesc:
      'In feeds oversaturated with templated ads, we direct bold poster campaigns, punchy copywriting, culinary and product styling, and commercial reels engineered to halt the scroll.',
    ctaText: 'EXPLORE COMMERCIAL CREATIVE ↗',
    flagshipKPI: 'Scroll-Stopping Craft',
    kpiLabel: 'High-Attention Campaigns',
    deliverables: [
      'Commercial advertising concepts',
      'Creative direction & art supervision',
      'Multi-channel campaign development',
      'Product & culinary ad key visuals',
      'Promotional videos and reel direction',
      'Motion graphics and kinetic typography',
      'Social-first campaign creatives',
      'Print, OOH & digital campaign assets',
    ],
    problemsAddressed: [
      'Rising ad fatigue and low click-through rates caused by forgettable stock templates.',
      'Products that fail to communicate desirability or personality within the first two seconds.',
      'Disconnected seasonal promotions with no memorable central campaign idea.',
    ],
    collaborationModel:
      'Rapid campaign sprints: concept territories, shoot/art direction, asset production, and delivery sized cleanly across Meta, outdoor print, and storefront placements.',
    relatedProjectIds: ['solanas-baddies', 'solanas-sushi'],
  },
  {
    id: 'digital-growth',
    index: '03',
    name: 'Digital & Growth',
    categoryTag: 'Strategy & Acquisition',
    headline: 'ATTENTION IS GOOD. ACTION IS BETTER.',
    shortDesc:
      'We connect brands with the right audiences through disciplined digital communication, strategic content calendars, and targeted acquisition.',
    fullDesc:
      'Great creative demands strategic distribution. We pair platform-native content direction with disciplined paid social testing and analytics to convert attention into real demand.',
    ctaText: 'EXPLORE DIGITAL & GROWTH ↗',
    flagshipKPI: 'Disciplined Growth',
    kpiLabel: 'Targeted Acquisition',
    deliverables: [
      'Social media strategy and management',
      'Instagram & LinkedIn brand growth campaigns',
      'Content strategy & editorial calendars',
      'Digital advertising creative testing',
      'Audience acquisition strategy',
      'Campaign management & iteration',
      'Go-to-market marketing strategy',
      'Creative performance analysis',
    ],
    problemsAddressed: [
      'Posting consistently on social channels without generating measurable business inquiries.',
      'Running paid ads without creative-led testing or cohesive funnel messaging.',
      'Unclear audience targeting leading to wasted media spend.',
    ],
    collaborationModel:
      'Structured monthly or sprint-based growth partnerships uniting content strategy, creative testing, and transparent reporting.',
    relatedProjectIds: ['solanas-baddies', 'solanas-sushi'],
  },
  {
    id: 'technology-experiences',
    index: '04',
    name: 'Technology & Digital Experiences',
    categoryTag: 'Web, UX & Creative Tech',
    headline: 'TURN AMBITIOUS IDEAS INTO WORKING EXPERIENCES.',
    shortDesc:
      'We unite design thinking and modern engineering to build fast websites, interactive interfaces, and custom digital infrastructure that serve real business goals.',
    fullDesc:
      'No bloated page builders or sluggish templates. We craft responsive web experiences, UI/UX systems, custom web applications, and digital event portals with purposeful motion.',
    ctaText: 'EXPLORE TECHNOLOGY & DIGITAL ↗',
    flagshipKPI: 'Purposeful Craft & Speed',
    kpiLabel: 'Modern Web Engineering',
    deliverables: [
      'Custom websites and landing pages',
      'Editorial UI/UX interface design',
      'Interactive React web applications',
      'AI-enabled workflow integrations',
      'Digital process automation',
      'Event websites & ticketing hubs',
      'Interactive brand showcases',
    ],
    problemsAddressed: [
      'Generic SaaS or Webflow agency clones that undermine brand authority.',
      'Slow, awkward mobile websites that lose visitors before the core offer loads.',
      'Manual signups or fragmented event registration workflows.',
    ],
    collaborationModel:
      'Tight UI/UX prototyping followed by clean frontend engineering, device responsiveness testing, and launch deployment.',
    relatedProjectIds: ['dtc-accelerator-concept', 'hack-uttar-pradesh'],
  },
  {
    id: 'events-experiences',
    index: '05',
    name: 'Events, Experiences & Activations',
    categoryTag: 'Live Production & Festivals',
    headline: "WE DON'T JUST MAKE EVENTS. WE MAKE MOMENTS HAPPEN.",
    shortDesc:
      'From first announcement to final applause, we help organizations conceptualize, brand, promote, and execute live experiences that unite communities.',
    fullDesc:
      'Hackathons, Model UN assemblies, college festivals, and corporate activations require both electric visual identity and ironclad operational execution—we engineer both under one roof.',
    ctaText: 'EXPLORE EVENTS & EXPERIENCES ↗',
    flagshipKPI: 'Turnkey Live Execution',
    kpiLabel: 'Concept to Applause',
    deliverables: [
      'Event planning and management',
      'Hackathon conceptualization and execution',
      'MUN and conference management',
      'College festivals and youth events',
      'Corporate events and conferences',
      'Event branding and creative production',
      'Delegate and participant acquisition',
      'Sponsorship strategy and acquisition',
      'Event marketing and promotions',
      'Registration and ticketing infrastructure',
      'Event websites and digital experiences',
      'On-ground event coordination',
    ],
    problemsAddressed: [
      'Ambitious student festivals, hackathons, or conferences that struggle to attract sponsors and delegates.',
      'Disconnected event branding where websites, passes, stage LEDs, and reels feel unrelated.',
      'chaotic registration logistics that frustrate attendees before opening day.',
    ],
    collaborationModel:
      'Modular or turnkey event production partnering directly with organizing committees, founders, and institutional teams from launch campaign through venue coordination.',
    relatedProjectIds: ['hack-uttar-pradesh', 'horizon-mun'],
  },
];

export const SERVICES_DATA = CAPABILITIES_DATA;
