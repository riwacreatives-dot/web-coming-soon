import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getPublicArchiveArtefacts, getPublicWorkStories } from '../../data/studioData';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import {
  ArchiveArtefactEntry,
  AssetId,
  PortfolioCategoryBadge,
  PublicProjectItem,
} from '../../types';
import { PreviewPlaceholder } from '../common/PreviewPlaceholder';

type SpreadLayout = 'wide-8-4' | 'staggered-5-7' | 'staggered-7-5';

interface EditorialPracticeDivision {
  roman: string;
  badge: PortfolioCategoryBadge;
  heading: string;
  scopeNote: string;
  to: string;
  ctaLabel: string;
}

const ARCHIVE_DIVISIONS: EditorialPracticeDivision[] = [
  {
    roman: 'I.',
    badge: 'CLIENT PROJECT',
    heading: 'Commissioned Stories',
    scopeNote:
      'External brand systems, commercial campaigns, and digital launches attributed transparently alongside client permissions.',
    to: '/work',
    ctaLabel: 'Open Work Index',
  },
  {
    roman: 'II.',
    badge: 'STUDIO IP',
    heading: 'Studio Artefacts & IP',
    scopeNote:
      'Original character systems, typographic posters, and self-initiated creative objects built inside the studio.',
    to: '/work#creative-archive',
    ctaLabel: 'Browse Creative Archive',
  },
  {
    roman: 'III.',
    badge: 'EVENT INITIATIVE',
    heading: 'Rooms & Live Formats',
    scopeNote:
      'Conferences, community hackathons, and physical brand activations aligning print collateral with room design.',
    to: '/services#events-experiences',
    ctaLabel: 'Explore Events Scope',
  },
];

const BADGE_STYLES: Record<PortfolioCategoryBadge, string> = {
  'CLIENT PROJECT': 'border-[#C4123D] bg-[#FFFFFF] text-[#C4123D]',
  'EVENT INITIATIVE': 'border-[#C4123D] bg-[#FFFFFF] text-[#C4123D]',
  'STUDIO IP': 'border-[#111116] bg-[#E7E7E9] text-[#111116]',
  'STUDIO CULTURE': 'border-[#111116] bg-[#E7E7E9] text-[#111116]',
};

const EDITORIAL_LINK_CLASS =
  'group/cta inline-flex items-center gap-2 min-h-[44px] py-2 font-sans text-[15px] font-semibold text-[#111116] underline underline-offset-4 decoration-2 decoration-[#111116] hover:text-[#C4123D] hover:decoration-[#EA1E4D] transition-colors duration-[180ms]';

const CategoryBadge: React.FC<{ label: PortfolioCategoryBadge }> = ({ label }) => (
  <span
    className={`inline-block w-fit font-mono type-mono-micro uppercase px-2.5 py-1 border rounded-[2px] ${BADGE_STYLES[label]}`}
  >
    {label}
  </span>
);

const SpreadLink: React.FC<{ to: string; label: string }> = ({ to, label }) => (
  <Link to={to} className={EDITORIAL_LINK_CLASS}>
    <span>{label}</span>
    <ArrowRight
      size={16}
      strokeWidth={1.5}
      aria-hidden="true"
      className="transition-transform duration-[180ms] ease-editorial group-hover/cta:translate-x-1"
    />
  </Link>
);

const SpreadGridRow: React.FC<{
  layout: SpreadLayout;
  mediaNode: React.ReactNode;
  copyNode: React.ReactNode;
  ariaLabel?: string;
}> = ({ layout, mediaNode, copyNode, ariaLabel }) => {
  const isCopyLeftOnDesktop = layout === 'staggered-5-7';
  const mediaCols =
    layout === 'wide-8-4'
      ? `md:col-span-8 lg:col-span-8 ${isCopyLeftOnDesktop ? 'lg:order-2' : ''}`
      : `md:col-span-8 lg:col-span-7 ${isCopyLeftOnDesktop ? 'lg:order-2' : ''}`;
  const copyCols =
    layout === 'wide-8-4'
      ? 'md:col-span-8 lg:col-span-4 lg:pt-2'
      : `md:col-span-8 lg:col-span-5 lg:pt-10 ${isCopyLeftOnDesktop ? 'lg:order-1' : ''}`;

  return (
    <article
      aria-label={ariaLabel}
      className="group/spread grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-y-6 lg:gap-y-0 gap-x-4 md:gap-x-5 lg:gap-x-6 items-start"
    >
      <div className={`${mediaCols} min-w-0`}>{mediaNode}</div>
      <div className={`${copyCols} space-y-4 min-w-0`}>{copyNode}</div>
    </article>
  );
};

interface ClearedSpreadProps {
  badge: PortfolioCategoryBadge;
  title: string;
  meta: string;
  summary: string;
  to: string;
  ctaLabel: string;
  src: string;
  alt: string;
  layout: SpreadLayout;
  width?: number;
  height?: number;
}

const ClearedSpreadCard: React.FC<ClearedSpreadProps> = ({
  badge,
  title,
  meta,
  summary,
  to,
  ctaLabel,
  src,
  alt,
  layout,
  width,
  height,
}) => {
  const isPortraitArtefact =
    typeof width === 'number' && typeof height === 'number' && height > width;
  const aspectClass =
    layout === 'wide-8-4' ? 'aspect-[4/3] sm:aspect-[16/10]' : 'aspect-[4/5] sm:aspect-[4/3]';

  return (
    <SpreadGridRow
      layout={layout}
      mediaNode={
        <figure
          className={`overflow-hidden rounded-[2px] border-2 border-[#111116] shadow-[6px_6px_0_0_#111116] ${aspectClass} ${
            isPortraitArtefact
              ? 'bg-[#FFFFFF] p-6 sm:p-8 flex items-center justify-center'
              : 'bg-[#E7E7E9]'
          }`}
        >
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            className={`w-full h-full transition-transform duration-[420ms] ease-editorial group-hover/spread:scale-[1.02] ${
              isPortraitArtefact ? 'object-contain' : 'object-cover'
            }`}
          />
        </figure>
      }
      copyNode={
        <>
          <div className="space-y-2.5">
            <CategoryBadge label={badge} />
            <p className="type-mono-micro text-[#55555F] uppercase">{meta}</p>
            <h3 className="type-h3-subhead text-[#111116]">{title}</h3>
          </div>
          <p className="type-body-base text-[#55555F]">{summary}</p>
          <div className="pt-1">
            <SpreadLink to={to} label={ctaLabel} />
          </div>
        </>
      }
    />
  );
};

interface PreviewStagingSlotProps {
  layout: SpreadLayout;
  decisionId: string;
  assetId: AssetId;
  aspectRatio: string;
  frameLabel: string;
  badge: PortfolioCategoryBadge;
  heading: string;
  placeholderCopy: string;
  trackingCode: string;
  ariaLabel: string;
}

const PreviewStagingSpread: React.FC<PreviewStagingSlotProps> = ({
  layout,
  decisionId,
  assetId,
  aspectRatio,
  frameLabel,
  badge,
  heading,
  placeholderCopy,
  trackingCode,
  ariaLabel,
}) => (
  <SpreadGridRow
    layout={layout}
    ariaLabel={ariaLabel}
    mediaNode={
      <PreviewPlaceholder
        decisionId={decisionId}
        assetId={assetId}
        aspectRatio={aspectRatio}
        surface="light"
        label={frameLabel}
      />
    }
    copyNode={
      <>
        <div className="space-y-2.5">
          <CategoryBadge label={badge} />
          <h3 className="type-h3-subhead text-[#111116]">{heading}</h3>
        </div>
        <p className="type-body-base text-[#55555F]">{placeholderCopy}</p>
        <p className="type-mono-micro text-[#55555F] uppercase">{trackingCode}</p>
      </>
    }
  />
);

function selectPrimaryArchiveIp(items: ArchiveArtefactEntry[]): ArchiveArtefactEntry | undefined {
  return items.find((item) => item.badge === 'STUDIO IP');
}

function mapStoryToSpreadProps(
  story: PublicProjectItem,
  layout: 'wide-8-4' | 'staggered-7-5'
): ClearedSpreadProps {
  return {
    badge: story.categoryBadge,
    title: story.title,
    meta: `${story.client} · ${story.category}`,
    summary: story.description,
    to: `/work/${story.id}`,
    ctaLabel: 'Read Story',
    src: story.heroImage,
    alt: `${story.title} — ${story.categoryBadge.toLowerCase()} documentation`,
    layout,
  };
}

/**
 * Chapter 03 — Selected Work: Brutalist Proof Spreads & Practice Catalogue (`Blueprint-3` pp. 40–42, 80)
 * - Surface: Warm White (#F5F4F0)
 * - Cleared spreads mount in sharp 2px #111116 poster frames
 * - When client/IP clearances are pending in production, renders a confident 3-column Brutalist Archive Index without inventing work or apologetic empty blocks
 */
export const SelectedWorkSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useRevealOnScroll(sectionRef);

  const publicStories = getPublicWorkStories();
  const publicArchive = getPublicArchiveArtefacts();

  const primaryStory = publicStories[0];
  const secondaryStory = publicStories[1];
  const primaryArchiveIp = selectPrimaryArchiveIp(publicArchive);

  const hasAnyClearedSpread = Boolean(primaryStory || primaryArchiveIp || secondaryStory);
  const isPreviewMode = !import.meta.env.PROD;

  return (
    <section
      id="selected-work"
      ref={sectionRef}
      aria-labelledby="chapter-03-heading"
      data-visible={isVisible}
      className="w-full bg-[#F5F4F0] text-[#111116] border-b-2 border-[#111116]"
    >
      <div className="max-w-[90rem] mx-auto px-5 md:px-8 lg:px-12 min-[1440px]:px-16 py-16 md:py-24 lg:py-28">
        {/* Chapter 03 Masthead */}
        <header className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-y-6 gap-x-4 md:gap-x-5 lg:gap-x-6 pb-10 lg:pb-12 border-b-2 border-[#111116] items-end">
          <div className="md:col-span-8 lg:col-span-8 space-y-4">
            <div className="flex items-center gap-4">
              <p className="type-mono-label text-[#111116] uppercase">
                03 // SELECTED WORK
              </p>
              <span aria-hidden="true" className="font-mono text-xs text-[#55555F]">
                THREE-TIER ARCHIVE
              </span>
            </div>

            <h2 id="chapter-03-heading" className="type-h2-section text-[#111116]">
              Selected work and studio artefacts.
            </h2>

            <p className="type-body-lead text-[#55555F] max-w-[54ch]">
              Recent client work, studio-created intellectual property, and selected initiatives.
            </p>
          </div>

          <div className="md:col-span-8 lg:col-span-4 lg:flex lg:justify-end">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 min-h-[44px] px-5 py-3 rounded-[2px] border border-[#111116] bg-[#FFFFFF] text-[#111116] shadow-[3px_3px_0_0_#111116] hover:bg-[#111116] hover:text-[#F5F4F0] font-sans text-[15px] font-semibold transition-colors duration-[160ms]"
            >
              <span>Explore All Work &amp; Archive</span>
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
                className="transition-transform duration-[160ms] ease-editorial group-hover:translate-x-1"
              />
            </Link>
          </div>
        </header>

        {/* Cleared Spreads OR Dev AST-P01 Staging OR Brutalist Archive Index */}
        <div
          data-visible={isVisible}
          className="reveal-below-fold pt-10 lg:pt-14 space-y-12 lg:space-y-24 min-[1280px]:space-y-28"
        >
          {primaryStory ? (
            <ClearedSpreadCard {...mapStoryToSpreadProps(primaryStory, 'wide-8-4')} />
          ) : (
            isPreviewMode && (
              <PreviewStagingSpread
                layout="wide-8-4"
                ariaLabel="Preview layout staging for primary client proof spread"
                decisionId="DEC-12"
                assetId="AST-C01"
                aspectRatio="16 / 10"
                frameLabel="8-column wide visual frame reserved for written client publishing permission (DEC-12)"
                badge="CLIENT PROJECT"
                heading="Commissioned Case Proof"
                placeholderCopy="[PLACEHOLDER — REQUIRES RIWA INPUT: Factual 1-sentence brief and studio contribution once written publishing permission is confirmed.]"
                trackingCode="PREVIEW STAGING · MCR-04 / DEC-12"
              />
            )
          )}

          {primaryArchiveIp ? (
            <ClearedSpreadCard
              badge={primaryArchiveIp.badge}
              title={primaryArchiveIp.title}
              meta={`${primaryArchiveIp.year} · ${primaryArchiveIp.medium}`}
              summary={primaryArchiveIp.studioNote}
              to="/work#creative-archive"
              ctaLabel="View in Archive"
              src={primaryArchiveIp.src}
              alt={`${primaryArchiveIp.title} — ${primaryArchiveIp.badge.toLowerCase()} artefact`}
              layout="staggered-5-7"
              width={primaryArchiveIp.width}
              height={primaryArchiveIp.height}
            />
          ) : (
            isPreviewMode && (
              <PreviewStagingSpread
                layout="staggered-5-7"
                ariaLabel="Preview layout staging for studio intellectual property spread"
                decisionId="DEC-13"
                assetId="AST-S02"
                aspectRatio="4 / 3"
                frameLabel="7-column asymmetric studio IP frame awaiting founder publishing sign-off (DEC-13)"
                badge="STUDIO IP"
                heading="Studio-Initiated Artefact"
                placeholderCopy="[PLACEHOLDER — REQUIRES RIWA INPUT: Short factual studio note once founder publishing sign-off is granted.]"
                trackingCode="PREVIEW STAGING · MCR-05 / DEC-13"
              />
            )
          )}

          {secondaryStory && (
            <ClearedSpreadCard {...mapStoryToSpreadProps(secondaryStory, 'staggered-7-5')} />
          )}

          {/* Production Portfolio Architecture Matrix when clearances are still pending */}
          {!hasAnyClearedSpread && !isPreviewMode && (
            <div className="grid grid-cols-1 lg:grid-cols-3 border-2 border-[#111116] rounded-[2px] bg-[#FFFFFF] shadow-[6px_6px_0_0_#111116] divide-y lg:divide-y-0 lg:divide-x divide-[#111116]">
              {ARCHIVE_DIVISIONS.map((division) => (
                <article
                  key={division.badge}
                  className="p-6 sm:p-8 flex flex-col justify-between gap-8 min-w-0 bg-[#FFFFFF]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4 border-b border-[#111116]/20 pb-4">
                      <CategoryBadge label={division.badge} />
                      <span
                        aria-hidden="true"
                        className="font-display font-extrabold text-2xl text-[#111116]"
                      >
                        {division.roman}
                      </span>
                    </div>

                    <h3 className="type-h3-subhead text-[#111116]">
                      {division.heading}
                    </h3>

                    <p className="type-body-base text-[#55555F]">
                      {division.scopeNote}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#111116]/20">
                    <SpreadLink to={division.to} label={division.ctaLabel} />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
