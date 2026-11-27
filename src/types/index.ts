// Canonical Blueprint-3 TypeScript Contracts & Backward-Compatible Legacy Types

export type CapabilitySlug =
  | 'brand-identity'
  | 'creative-advertising'
  | 'digital-technology'
  | 'events-experiences'
  | 'brand-management-growth';

export type PortfolioCategoryBadge =
  | 'CLIENT PROJECT'
  | 'STUDIO IP'
  | 'STUDIO CULTURE'
  | 'EVENT INITIATIVE';

export type AssetId =
  | 'AST-C01'
  | 'AST-C02'
  | 'AST-S01'
  | 'AST-S02'
  | 'AST-R01'
  | 'AST-E01'
  | 'AST-M01'
  | 'AST-M02'
  | 'AST-M03'
  | 'AST-M04'
  | 'AST-M05'
  | 'AST-P01';

export type PublicationStatus =
  | 'APPROVED'
  | 'PROVISIONAL'
  | 'HOLD'
  | 'BLOCKED'
  | 'MISSING'
  | 'OPTIONAL'
  | 'PREVIEW_ONLY';

export type HeroTier = 1 | 2 | 3;

export interface HeroVisualState {
  activeTier: HeroTier;
  assetId: AssetId | null;
  src: string | null;
  alt: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  aspectRatio: string | null;
}

export interface CanonicalAssetEntry {
  assetId: AssetId;
  title: string;
  repoPath: string | null;
  supplementalRepoPaths?: string[];
  category: PortfolioCategoryBadge | 'BRAND IDENTITY' | 'MISSING' | 'PLACEHOLDER';
  permissionApproved: boolean;
  founderApproved: boolean;
  publicationStatus: PublicationStatus;
  intendedLocations: string[];
  notes: string;
}

export interface CaseCredits {
  riwaContribution: string;
  clientTeam?: string;
  externalCollaborators?: string;
}

// Unified Project & Case Study Type
export interface ProjectItem {
  id: string;
  archiveCode: string;
  categoryBadge: PortfolioCategoryBadge;
  permissionApproved: boolean;
  client: string;
  industry: string;
  isConcept?: boolean;
  title: string;
  category: string;
  headline: string;
  description: string;
  heroImage?: string;
  galleryImages?: string[];
  badge: string;
  metric: string;
  year: string;
  accentColor: string;
  deliverables: string[];
  brief: string;
  challenge: string;
  insight: string;
  role: string;
  execution: string;
  credits?: CaseCredits;
  verifiedOutcome?: string;
}

// Public-safe Case Study where heroImage is guaranteed non-null for verified rendered cards
export interface PublicProjectItem extends ProjectItem {
  heroImage: string;
}

export interface ArchiveArtefactEntry {
  id: string;
  assetId: AssetId;
  title: string;
  badge: 'STUDIO IP' | 'STUDIO CULTURE';
  year: string;
  medium: string;
  studioNote: string;
  src: string;
  width: number;
  height: number;
  permissionApproved: boolean;
}

// Canonical Capability & Legacy ServiceItem Compatibility
export interface ServiceItem {
  // Keep string union open (`CapabilitySlug | (string & {})`) until Phase 5 removes legacy `ServiceDetailPage` checks
  id: CapabilitySlug | (string & {});
  anchorId: `#${CapabilitySlug}`;
  index: string;
  name: string;
  categoryTag: string;
  headline: string;
  shortDesc: string;
  fullDesc: string;
  strategicValue: string;
  ctaText: string;
  contactHref: `/contact?service=${CapabilitySlug}`;
  flagshipKPI: string;
  kpiLabel: string;
  deliverables: string[];
  confirmedDeliverables: string[];
  optionalProposedDeliverables: string[];
  problemsAddressed: string[];
  collaborationModel: string;
  visualDirection: string;
  relatedProjectIds: string[];
  previewImage?: string;
}

export type StudioCapability = ServiceItem;

// Studio Leadership & Verified Principal Types
export interface FounderItem {
  name: string;
  role: string;
  department: string;
  bio: string | null;
  bioPlaceholder: string;
  founderCopyApproved: boolean;
  draftChapterHeadline?: string;
  trackRecord: string;
  specialties: string[];
  portraitImage?: string | null;
}

// Verified-Only Contact Display Config + Preserved Client-Side Intake Routing
export interface ContactConfig {
  canonicalUrl: 'https://riwacreatives.in';
  publicEmail: string | null;
  publicWhatsappUrl: string | null;
  instagramUrl: string | null;
  linkedinUrl: string | null;
  xUrl: string | null;
  city: string | null;
  // Strictly internal client-side mailto: dispatch target for preserved form submission (never rendered publicly until DEC-14 confirmed; zero server-side backend exists)
  clientSideMailtoHandlerEmail: string;
}

export interface MissingContentEntry {
  id: string;
  decisionId: 'DEC-09' | 'DEC-10' | 'DEC-11' | 'DEC-12' | 'DEC-13' | 'DEC-14' | 'DEC-15';
  assetId?: AssetId;
  slot: string;
  placeholderMarker: string;
  status: 'BLOCKED' | 'PROVISIONAL';
}

// World Clock type preserved for compatibility if referenced by unused data helpers
export interface ClockHub {
  city: string;
  country: string;
  timezone: string;
  coordinates: string;
  offsetHours: number;
  offsetMinutes: number;
}

// Intake Form types
export interface IntakeSubmissionPayload {
  selectedDisciplines: string[];
  selectedBudget: string;
  name: string;
  email: string;
  brandOrWebsite: string;
  projectVision: string;
  submittedAt: string;
}
