import {
  ArchiveArtefactEntry,
  CanonicalAssetEntry,
  ContactConfig,
  FounderItem,
  HeroVisualState,
  MissingContentEntry,
  ProjectItem,
  PublicProjectItem,
  StudioCapability,
} from '../types';

/**
 * Canonical Single-Source Studio Identity & Data Layer (Blueprint-3 Governing Baseline)
 * Rules enforced:
 * - Zero unapproved Solanas public exposure (`permissionApproved: false` until DEC-12)
 * - Zero unverified public email/WhatsApp/social/city links (`null` until DEC-14)
 * - Preserves internal client-side `mailto:` recipient separately so enquiry form opens user's email client
 * - Zero fabricated metrics, bios, operating claims, or invented projects
 */

export const STUDIO_IDENTITY = {
  name: 'Riwa Creatives',
  canonicalUrl: 'https://riwacreatives.in' as const,
  heroKicker: '01 // INDEPENDENT CREATIVE & GROWTH STUDIO',
  heroHeadline: {
    prefix: 'IDEAS, MADE',
    emphasis: 'unreasonable.',
  },
  descriptor: 'Independent Creative & Growth Studio.',
  founderName: 'Ranjan Kumar',
  defaultDocumentTitle: 'Riwa Creatives — Independent Creative & Growth Studio',
} as const;

export const CLOSING_INVITATION_COPY = {
  kicker: '07 // CONTACT', // LOCKED — CONFIRMED (`Blueprint-3` p. 48)
  // Explicit founder-copy approval gate (DEC-10) — gates Chapter 07 draft prompt headline & sub-line
  founderCopyApproved: false,
  draftHeadlinePrefix: 'Have a brief worth making',
  draftHeadlineEmphasis: 'unreasonable',
  draftSubline: 'Share what you are building, launching, or rethinking.',
} as const;

export const CONTACT_CONFIG: ContactConfig = {
  canonicalUrl: 'https://riwacreatives.in',
  // Strictly gated to `null` until explicitly confirmed by Ranjan Kumar (DEC-14):
  publicEmail: null,
  publicWhatsappUrl: null,
  instagramUrl: null,
  linkedinUrl: null,
  xUrl: null,
  city: null,
  // Preserved internal client-side `mailto:` routing target ONLY for form submission handlers
  // (No server-side backend exists; opens the visitor's default email client):
  clientSideMailtoHandlerEmail: 'riwacreatives@gmail.com',
};

// Canonical 12-ID Blueprint-3 Deliverable 6 Asset Register (`pp. 84–95`)
export const CANONICAL_ASSETS: CanonicalAssetEntry[] = [
  {
    assetId: 'AST-C01',
    title: 'Solanas Campaign — Primary Print Proof',
    repoPath: '/work/solanas-chilli-chicken.jpg',
    category: 'CLIENT PROJECT',
    permissionApproved: true, // Founder confirmed written Solanas Hero permission (2026-11-27)
    founderApproved: true,
    publicationStatus: 'APPROVED',
    intendedLocations: [
      'Hero Priority 1 (Approved for restored db4d0a2 Hero worktable)',
      '/work/solanas (pending verified brief copy before public case study unlock)',
    ],
    notes: '819x1024px (561,667 B). Hero publication confirmed; case-study narrative fields remain gated.',
  },
  {
    assetId: 'AST-C02',
    title: 'Solanas Campaign — Secondary Gallery Frame',
    repoPath: '/work/solanas-poster.jpg',
    supplementalRepoPaths: [
      '/work/solanas-sushi.png',
      '/work/solanas-steamer-dimsum.jpg',
      '/work/solanas-green-dimsum.png',
    ],
    category: 'CLIENT PROJECT',
    permissionApproved: true, // Founder confirmed written Solanas Hero permission (2026-11-27)
    founderApproved: true,
    publicationStatus: 'APPROVED',
    intendedLocations: ['Hero Digital Slate backdrop (db4d0a2)', '/work/solanas Final Work Gallery'],
    notes: 'Supplemental low-res assets (362–363px) restricted strictly to small thumbnails / muted slate backdrop.',
  },
  {
    assetId: 'AST-S01',
    title: 'Riwa Brand Identity — Official Logo & Crow Artwork',
    repoPath: '/brand/riwa-logo-official.png',
    supplementalRepoPaths: [
      '/brand/riwa-logo-transparent.png', // Duplicate of riwa-logo-official.png
      '/brand/riwa-crow-logo.svg', // Legacy #FF2A55
      '/brand/riwa-crow-vector.svg', // Legacy #FF2A55
      '/brand/riwa-r-logo.svg', // Legacy #FF2A55
      '/brand/riwa-crow-mascot.jpg',
    ],
    category: 'BRAND IDENTITY',
    permissionApproved: true, // Founder approved riwa-crow-mascot.jpg & official emblem (2026-11-28)
    founderApproved: true,
    publicationStatus: 'APPROVED',
    intendedLocations: ['Global Header', 'Favicon', 'Footer Brand Mark', 'Featured Work Showcase'],
    notes: 'Official crow emblem and 1024x1024 dark crow card approved for display.',
  },
  {
    assetId: 'AST-S02',
    title: 'Brand Dalal Mascot',
    repoPath: '/brand/dalal-mascot.png',
    category: 'STUDIO IP',
    permissionApproved: true, // Founder approved AST-S02 for Featured Work Showcase (2026-11-28)
    founderApproved: true,
    publicationStatus: 'APPROVED',
    intendedLocations: [
      'Featured Work Showcase (Studio IP)',
      '/work#creative-archive',
      '/services#brand-identity',
    ],
    notes: 'Canonical AST-S02 (280x492px transparent cutout). Rendered with archival studio backing & STUDIO IP label.',
  },
  {
    assetId: 'AST-R01',
    title: 'Riwa Recruitment Poster',
    repoPath: '/brand/riwa-hiring-poster.jpg',
    category: 'STUDIO CULTURE',
    permissionApproved: true, // Founder approved AST-R01 for Featured Work & About Culture (2026-11-28)
    founderApproved: true,
    publicationStatus: 'APPROVED',
    intendedLocations: [
      'Featured Work Showcase (Studio Culture)',
      '/about#studio-culture',
      '/work#creative-archive',
    ],
    notes: '791x1024px authentic in-house poster approved on 2026-11-28.',
  },
  {
    assetId: 'AST-E01',
    title: 'Hack Uttar Pradesh 2026',
    repoPath: null,
    category: 'EVENT INITIATIVE',
    permissionApproved: false, // BLOCKED — DEC-15
    founderApproved: false,
    publicationStatus: 'BLOCKED',
    intendedLocations: ['Home Ch. 05 Events (#FD7D3C)', '/services#events-experiences', 'Optional /work'],
    notes: 'Observed in public directories with conflicting dates. Pending DEC-15 verification and photography.',
  },
  {
    assetId: 'AST-M01',
    title: 'Ranjan Kumar Editorial Portrait',
    repoPath: null,
    category: 'MISSING',
    permissionApproved: false,
    founderApproved: false,
    publicationStatus: 'BLOCKED',
    intendedLocations: ['Home Ch. 06 Studio & Founder', '/about'],
    notes: 'Target ~1200x1500px 4:5 natural-light portrait (DEC-13).',
  },
  {
    assetId: 'AST-M02',
    title: 'Approved Documentary Event Photography / Collateral',
    repoPath: null,
    category: 'MISSING',
    permissionApproved: false,
    founderApproved: false,
    publicationStatus: 'BLOCKED',
    intendedLocations: ['Home Ch. 05 Events (#FD7D3C)', '/services#events-experiences'],
    notes: 'Wide 16:10 cleared event photography needed if Hack UP photos unavailable (DEC-15).',
  },
  {
    assetId: 'AST-M03',
    title: 'Additional Verified Client Case Sets',
    repoPath: null,
    category: 'MISSING',
    permissionApproved: false,
    founderApproved: false,
    publicationStatus: 'OPTIONAL',
    intendedLocations: ['Home Ch. 03 Spreads', '/work Featured Stories', '/services'],
    notes: 'Optional additional verified cases for Brand, Digital, and Growth.',
  },
  {
    assetId: 'AST-M04',
    title: 'Open Graph Social Share Card (og-image.png)',
    repoPath: null,
    category: 'MISSING',
    permissionApproved: false,
    founderApproved: false,
    publicationStatus: 'PROVISIONAL',
    intendedLocations: ['Global <meta property="og:image">'],
    notes: 'Static 1200x630px Riwa OG card to generate in Phase 10 after DEC-09 hex lock.',
  },
  {
    assetId: 'AST-M05',
    title: 'Optional Real Supporting Hero Artefact(s)',
    repoPath: null,
    category: 'MISSING',
    permissionApproved: false,
    founderApproved: false,
    publicationStatus: 'OPTIONAL',
    intendedLocations: ['Home Ch. 01 Worktable (only if real and approved)'],
    notes: 'Zero fabricated props permitted.',
  },
  {
    assetId: 'AST-P01',
    title: 'PreviewPlaceholder Dev-Only Component',
    repoPath: 'src/components/common/PreviewPlaceholder.tsx',
    category: 'PLACEHOLDER',
    permissionApproved: false,
    founderApproved: false,
    publicationStatus: 'PREVIEW_ONLY',
    intendedLocations: ['Local preview staging frames ONLY'],
    notes: 'Must be replaced or cleanly omitted before production release.',
  },
];

// Deterministic Three-Tier Permission-Aware Hero Resolution (`Blueprint-3` pp. 34, 37–39)
export function resolveHeroVisualState(): HeroVisualState {
  const solanas = CANONICAL_ASSETS.find((a) => a.assetId === 'AST-C01');
  if (solanas?.permissionApproved && solanas.repoPath) {
    return {
      activeTier: 1,
      assetId: 'AST-C01',
      src: solanas.repoPath,
      alt: 'Solanas viral street campaign print proof mounted on warm paper studio table',
      caption: 'CLIENT PROJECT // SOLANAS CAMPAIGN',
      width: 819,
      height: 1024,
      aspectRatio: '4 / 5',
    };
  }

  const recruitment = CANONICAL_ASSETS.find((a) => a.assetId === 'AST-R01');
  if (recruitment?.founderApproved && recruitment.repoPath) {
    return {
      activeTier: 2,
      assetId: 'AST-R01',
      src: recruitment.repoPath,
      alt: 'Riwa Creatives studio recruitment poster proof',
      caption: 'STUDIO CULTURE // RIWA CREATIVES',
      width: 791,
      height: 1024,
      aspectRatio: '3 / 4',
    };
  }

  const brandDalal = CANONICAL_ASSETS.find((a) => a.assetId === 'AST-S02');
  if (brandDalal?.founderApproved && brandDalal.repoPath) {
    return {
      activeTier: 2,
      assetId: 'AST-S02',
      src: brandDalal.repoPath,
      alt: 'Brand Dalal character mascot — Riwa Studio IP',
      caption: 'STUDIO IP // BRAND DALAL',
      width: 280,
      height: 492,
      aspectRatio: '4 / 5',
    };
  }

  // Priority 3: Restrained typographic / editorial composition with deliberate negative space
  return {
    activeTier: 3,
    assetId: null,
    src: null,
    alt: null,
    caption: null,
    width: null,
    height: null,
    aspectRatio: null,
  };
}

// Five Locked Iteration-1 Capabilities & Permanent Anchors (`Blueprint-3` pp. 6, 39–40, 49–52)
export const LOCKED_CAPABILITIES: StudioCapability[] = [
  {
    id: 'brand-identity',
    anchorId: '#brand-identity',
    index: '01',
    name: 'Brand & Identity',
    categoryTag: 'Strategy, Naming & Visual Systems',
    headline: 'Shape what the brand stands for and how it is recognized.',
    shortDesc:
      'Brand strategy, naming, logos, visual systems, and identity guidelines.',
    fullDesc:
      'We shape what a brand stands for and craft the visual identity system that expresses it clearly across physical and digital touchpoints.',
    strategicValue:
      'Clear positioning and coherent identity guidelines reduce visual drift across channels and help audiences recognize your brand consistently.',
    ctaText: 'Discuss Brand & Identity',
    contactHref: '/contact?service=brand-identity',
    flagshipKPI: 'Brand Systems',
    kpiLabel: 'Core Capability 01',
    confirmedDeliverables: [
      'Brand strategy',
      'Naming',
      'Logo',
      'Visual identity',
      'Brand guidelines',
    ],
    optionalProposedDeliverables: [
      'Verbal identity & tone of voice',
      'Typography & color systems',
      'Print & packaging collateral',
      'Character / mascot systems',
    ],
    deliverables: [
      'Brand strategy',
      'Naming',
      'Logo',
      'Visual identity',
      'Brand guidelines',
    ],
    problemsAddressed: [
      'Brands blending into predictable category templates.',
      'Visual drift across packaging, digital surfaces, and campaign touchpoints.',
    ],
    collaborationModel:
      'Direct discovery and structured visual identity delivery tailored to your brief.',
    visualDirection:
      'Clean layout featuring verified identity artwork or STUDIO IP Brand Dalal once approved (no fabricated mock brand books).',
    relatedProjectIds: [],
  },
  {
    id: 'creative-advertising',
    anchorId: '#creative-advertising',
    index: '02',
    name: 'Creative & Advertising',
    categoryTag: 'Campaigns, Art Direction & Content',
    headline: 'Campaign concepts built to stand out from predictable templates.',
    shortDesc:
      'Campaign concepts, art direction, advertising, and visual content.',
    fullDesc:
      'We conceptualize, art-direct, and execute campaigns, advertising, and visual marketing content designed to stand out from predictable category templates.',
    strategicValue:
      'Sharp campaign concepts and disciplined art direction give commercial communications a clear, recognizable voice across print and digital placements.',
    ctaText: 'Discuss a Campaign',
    contactHref: '/contact?service=creative-advertising',
    flagshipKPI: 'Campaign Craft',
    kpiLabel: 'Core Capability 02',
    confirmedDeliverables: [
      'Campaigns',
      'Art direction',
      'Advertising',
      'Content & marketing',
    ],
    optionalProposedDeliverables: [
      'Launch campaigns',
      'Print & OOH key visuals',
      'Campaign copywriting',
      'Social-first creative toolkits',
    ],
    deliverables: [
      'Campaigns',
      'Art direction',
      'Advertising',
      'Content & marketing',
    ],
    problemsAddressed: [
      'Generic templated advertising that gets ignored in feeds and print.',
      'Fragmented launches lacking a central visual idea.',
    ],
    collaborationModel:
      'Focused campaign concepting, art direction, and production adapted to print and digital channels.',
    visualDirection:
      'Large-format print framing anchored by permission-cleared campaign work (never unapproved client previews).',
    relatedProjectIds: [],
  },
  {
    id: 'digital-technology',
    anchorId: '#digital-technology',
    index: '03',
    name: 'Digital & Technology',
    categoryTag: 'Websites, UI/UX & Interactive Builds',
    headline: 'Digital surfaces engineered cleanly around the brand system.',
    shortDesc:
      'Websites, UI/UX, digital products, and purposeful interactive experiences.',
    fullDesc:
      'We design and build websites, user interfaces, digital products, and purposeful interactive experiences aligned tightly with the brand system.',
    strategicValue:
      'Keeping brand clarity, interface design, and front-end engineering aligned ensures digital surfaces stay fast, readable, and consistent with the identity.',
    ctaText: 'Discuss Digital & Technology',
    contactHref: '/contact?service=digital-technology',
    flagshipKPI: 'Web & UI Craft',
    kpiLabel: 'Core Capability 03',
    confirmedDeliverables: [
      'Websites',
      'UI/UX',
      'Digital products',
      'Interactive experiences',
    ],
    optionalProposedDeliverables: [
      'Component libraries',
      'Campaign microsites',
      'Responsive front-end development',
      'Technical SEO & accessibility setup',
    ],
    deliverables: [
      'Websites',
      'UI/UX',
      'Digital products',
      'Interactive experiences',
    ],
    problemsAddressed: [
      'Web experiences that feel disconnected from the core brand identity.',
      'Heavy, inaccessible interfaces that obstruct reading and navigation.',
    ],
    collaborationModel:
      'Aligned interface design and front-end engineering verified across desktop and mobile viewports.',
    visualDirection:
      'Flat, uncluttered viewport frames showcasing genuine verified web/UI builds once supplied (no fabricated device mockups).',
    relatedProjectIds: [],
  },
  {
    id: 'events-experiences',
    anchorId: '#events-experiences',
    index: '04',
    name: 'Events & Experiences',
    categoryTag: 'Production, Conferences & Activations',
    headline: 'Ideas built for physical rooms, not only screens.',
    shortDesc:
      'Event production, conferences, hackathons, and brand activations.',
    fullDesc:
      'We plan, brand, and produce physical and hybrid events—including conferences, hackathons, and brand activations—bringing visual coherence into live spaces.',
    strategicValue:
      'Aligning event identity, physical collateral, and attendee touchpoints turns live gatherings into tangible brand moments.',
    ctaText: 'Discuss Events & Experiences',
    contactHref: '/contact?service=events-experiences',
    flagshipKPI: 'Live Rooms',
    kpiLabel: 'Core Capability 04',
    confirmedDeliverables: [
      'Event production',
      'Conferences',
      'Hackathons',
      'Activations',
    ],
    optionalProposedDeliverables: [
      'Event visual identity',
      'Environmental signage',
      'Printed passes & posters',
      'Attendee swag collateral',
    ],
    deliverables: [
      'Event production',
      'Conferences',
      'Hackathons',
      'Activations',
    ],
    problemsAddressed: [
      'Events where digital promotion, passes, and venue environments feel disconnected.',
    ],
    collaborationModel:
      'Integrated event visual identity, collateral planning, and coordination tailored to the room.',
    visualDirection:
      'Signature #FD7D3C Orange accent band using Charcoal #111116 foreground ink ONLY (7.32:1 AAA) with cleared documentary imagery.',
    relatedProjectIds: [],
  },
  {
    id: 'brand-management-growth',
    anchorId: '#brand-management-growth',
    index: '05',
    name: 'Brand Management & Growth',
    categoryTag: 'Ongoing Strategy & Stewardship',
    headline: 'Continuity and disciplined growth beyond launch day.',
    shortDesc:
      'Ongoing brand strategy, stewardship, and disciplined growth marketing.',
    fullDesc:
      'We support brands beyond initial launch through ongoing strategy, brand stewardship, and disciplined growth marketing aligned with business goals.',
    strategicValue:
      'Consistent brand management protects visual and verbal coherence as channels expand, pairing creative direction with ongoing execution.',
    ctaText: 'Discuss Brand Management & Growth',
    contactHref: '/contact?service=brand-management-growth',
    flagshipKPI: 'Stewardship',
    kpiLabel: 'Core Capability 05',
    confirmedDeliverables: [
      'Ongoing strategy',
      'Brand building',
      'Growth marketing',
    ],
    optionalProposedDeliverables: [
      'Monthly creative stewardship',
      'Campaign calendar execution',
      'Content direction',
      'Brand consistency reviews',
    ],
    deliverables: [
      'Ongoing strategy',
      'Brand building',
      'Growth marketing',
    ],
    problemsAddressed: [
      'Post-launch brand dilution across recurring campaigns and channels.',
    ],
    collaborationModel:
      'Ongoing creative stewardship and strategic collaboration post-launch (zero unverified growth guarantees).',
    visualDirection:
      'Structured editorial grid showcasing verified ongoing campaign/content work once supplied (zero invented performance charts).',
    relatedProjectIds: [],
  },
];

// Master Work Stories Registry (Filtered strictly by `permissionApproved === true` for public UI)
export const WORK_STORIES: ProjectItem[] = [
  {
    id: 'solanas',
    archiveCode: 'CP—001 / CLIENT PROJECT',
    categoryBadge: 'CLIENT PROJECT',
    permissionApproved: false, // BLOCKED — DEC-12 written client permission required
    client: 'Solanas',
    industry: 'Hospitality',
    isConcept: false,
    title: 'Solanas Campaign',
    category: 'Creative & Advertising',
    headline: '[PLACEHOLDER — REQUIRES RIWA INPUT: Approved Solanas campaign title/headline]',
    description:
      '[PLACEHOLDER — REQUIRES RIWA INPUT: 1-sentence factual description of the Solanas campaign brief and Riwa\'s contribution.]',
    heroImage: '/work/solanas-chilli-chicken.jpg',
    galleryImages: ['/work/solanas-chilli-chicken.jpg', '/work/solanas-poster.jpg'],
    badge: 'CLIENT PROJECT',
    metric: '',
    year: '2026',
    accentColor: '#111116',
    deliverables: ['Campaign artwork & print proof (exact scope pending DEC-12)'],
    brief: '[PLACEHOLDER — REQUIRES RIWA INPUT: Factual Solanas brief summary]',
    challenge: '[PLACEHOLDER — REQUIRES RIWA INPUT: Problem space]',
    insight: '[PLACEHOLDER — REQUIRES RIWA INPUT: Creative framing]',
    role: '[PLACEHOLDER — REQUIRES RIWA INPUT: Verified Riwa contribution split]',
    execution: '[PLACEHOLDER — REQUIRES RIWA INPUT: Concrete execution summary]',
    credits: {
      riwaContribution: '[PLACEHOLDER — REQUIRES RIWA INPUT: Riwa Creatives role]',
      clientTeam: 'Solanas',
      externalCollaborators: '[Optional / pending DEC-12]',
    },
  },
  {
    id: 'hack-uttar-pradesh',
    archiveCode: 'EV—001 / EVENT INITIATIVE',
    categoryBadge: 'EVENT INITIATIVE',
    permissionApproved: false, // BLOCKED — DEC-15 role, dates, partners & photos unverified
    client: 'Hack Uttar Pradesh 2026',
    industry: 'Events & Experiences',
    isConcept: false,
    title: 'Hack Uttar Pradesh 2026',
    category: 'Events & Experiences',
    headline: '[PLACEHOLDER — REQUIRES RIWA INPUT: Clarify role & verified dates]',
    description:
      '[PREVIEW PLACEHOLDER — REQUIRES RIWA CONFIRMATION BEFORE LAUNCH: Hack Uttar Pradesh 2026 appears in public hackathon listings with conflicting dates. Confirm Riwa role, dates, partners, and cleared photography.]',
    heroImage: undefined, // Never mount Solanas food art onto event cards
    galleryImages: [],
    badge: 'EVENT INITIATIVE',
    metric: '',
    year: 'Pending Verification',
    accentColor: '#FD7D3C',
    deliverables: ['Pending DEC-15 scope confirmation'],
    brief: '[PLACEHOLDER — REQUIRES RIWA INPUT: Verified Hack Uttar Pradesh 2026 scope]',
    challenge: '[PLACEHOLDER — REQUIRES RIWA INPUT: Event challenge]',
    insight: '[PLACEHOLDER — REQUIRES RIWA INPUT: Creative approach]',
    role: '[PLACEHOLDER — REQUIRES RIWA INPUT: Organizer vs. design/production partner role]',
    execution: '[PLACEHOLDER — REQUIRES RIWA INPUT: Cleared documentary photos & execution]',
    credits: {
      riwaContribution: '[Pending DEC-15]',
      externalCollaborators: '[Pending DEC-15 partner attributions]',
    },
  },
];

// Standalone Studio Archive Artefacts (`STUDIO IP` / `STUDIO CULTURE` — gated on `permissionApproved`)
export const ARCHIVE_ARTEFACTS: ArchiveArtefactEntry[] = [
  {
    id: 'brand-dalal',
    assetId: 'AST-S02',
    title: 'Brand Dalal Mascot',
    badge: 'STUDIO IP',
    year: 'Studio IP',
    medium: 'Character / Mascot Design',
    studioNote:
      '[PLACEHOLDER — REQUIRES RIWA INPUT: 1-sentence factual note on the Brand Dalal character/mascot created by Riwa.]',
    src: '/brand/dalal-mascot.png',
    width: 280,
    height: 492,
    permissionApproved: false, // HOLD — DEC-13 founder sign-off
  },
  {
    id: 'riwa-recruitment-poster',
    assetId: 'AST-R01',
    title: 'Riwa Recruitment Poster',
    badge: 'STUDIO CULTURE',
    year: 'Studio Culture',
    medium: 'In-House Poster Print',
    studioNote:
      '[PLACEHOLDER — REQUIRES RIWA INPUT: Short studio note for the Founder\'s Office hiring poster.]',
    src: '/brand/riwa-hiring-poster.jpg',
    width: 791,
    height: 1024,
    permissionApproved: false, // HOLD — DEC-13 founder sign-off
  },
];

// Public-safe selectors guaranteeing unapproved assets never appear in public UI
export function getPublicWorkStories(): PublicProjectItem[] {
  return WORK_STORIES.filter(
    (entry): entry is PublicProjectItem =>
      entry.permissionApproved && typeof entry.heroImage === 'string' && entry.heroImage.length > 0
  );
}

export function getPublicArchiveArtefacts(): ArchiveArtefactEntry[] {
  return ARCHIVE_ARTEFACTS.filter((item) => item.permissionApproved);
}

export const FOUNDER_PRINCIPAL: FounderItem = {
  name: 'Ranjan Kumar',
  role: 'Founder',
  department: 'Riwa Creatives',
  bio: null,
  bioPlaceholder:
    '[PLACEHOLDER — REQUIRES RANJAN KUMAR INPUT: 120–180 verified words supplied or approved by Ranjan Kumar describing Riwa\'s founding intent and studio approach.]',
  // Explicit founder-copy approval flag (DEC-10 / DEC-13) — intentionally independent from AST-M01 portrait permission
  founderCopyApproved: false,
  draftChapterHeadline: 'Independent by design.',
  trackRecord: 'Founder, Riwa Creatives',
  specialties: [
    'Brand & Identity',
    'Creative & Advertising',
    'Digital & Technology',
    'Events & Experiences',
    'Brand Management & Growth',
  ],
  portraitImage: null, // AST-M01 missing — DEC-13
};

// Preview Missing Content Tracking Ledger (Seeds Phase 11 MISSING_CONTENT_REPORT.md)
export const MISSING_CONTENT_REPORT_ENTRIES: MissingContentEntry[] = [
  {
    id: 'MCR-01',
    decisionId: 'DEC-09',
    assetId: 'AST-S01',
    slot: 'Official #FD7D3C Vector Logo SVG + Raster Consolidation',
    placeholderMarker: '[PLACEHOLDER — REQUIRES RIWA INPUT: Approve #FD7D3C vector SVG replacing #FF2A55 SVGs]',
    status: 'PROVISIONAL',
  },
  {
    id: 'MCR-02',
    decisionId: 'DEC-10',
    slot: 'Draft Headings, Chapter Copy & Optional /services Deliverables',
    placeholderMarker: '[REQUIRES FOUNDER APPROVAL: Review/trim draft copy across Home & Services]',
    status: 'PROVISIONAL',
  },
  {
    id: 'MCR-03',
    decisionId: 'DEC-11',
    slot: 'Organization vs. ProfessionalService Address & Conditional /privacy Scope',
    placeholderMarker: '[PLACEHOLDER — REQUIRES RIWA INPUT: Confirm physical PostalAddress / entity details if any]',
    status: 'PROVISIONAL',
  },
  {
    id: 'MCR-04',
    decisionId: 'DEC-12',
    assetId: 'AST-C01',
    slot: 'Solanas Permission, Brief, Credits & Priority 2 vs. Priority 3 Hero Sign-off',
    placeholderMarker: '[PLACEHOLDER — REQUIRES RIWA INPUT: Written permission + factual brief & credit split]',
    status: 'BLOCKED',
  },
  {
    id: 'MCR-05',
    decisionId: 'DEC-13',
    assetId: 'AST-M01',
    slot: 'Founder Bio (120–180 words), Portrait Photo & Sign-off on AST-S01/AST-S02/AST-R01',
    placeholderMarker: '[PLACEHOLDER — REQUIRES RANJAN KUMAR INPUT: Verified portrait + bio + #studio-culture copy]',
    status: 'BLOCKED',
  },
  {
    id: 'MCR-06',
    decisionId: 'DEC-14',
    assetId: 'AST-M04',
    slot: 'Canonical Email, WhatsApp URL, Socials, City & riwacreatives.in Crawlability',
    placeholderMarker: '[PLACEHOLDER — REQUIRES RIWA INPUT: Confirm public email/WhatsApp/social URLs & Vercel config]',
    status: 'BLOCKED',
  },
  {
    id: 'MCR-07',
    decisionId: 'DEC-15',
    assetId: 'AST-E01',
    slot: 'Hack Uttar Pradesh 2026 Role, Dates, Partners & Cleared Event Photos (AST-E01 / AST-M02)',
    placeholderMarker: '[PREVIEW PLACEHOLDER — REQUIRES RIWA CONFIRMATION BEFORE LAUNCH: Hack UP dates/role & photos]',
    status: 'BLOCKED',
  },
];
