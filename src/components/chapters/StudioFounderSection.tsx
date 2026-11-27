import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  CANONICAL_ASSETS,
  FOUNDER_PRINCIPAL,
  getPublicArchiveArtefacts,
  STUDIO_IDENTITY,
} from '../../data/studioData';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import { ArchiveArtefactEntry } from '../../types';
import { PreviewPlaceholder } from '../common/PreviewPlaceholder';

interface ClearedFounderPortrait {
  src: string;
  alt: string;
}

const EDITORIAL_BOX_LINK_CLASS =
  'group inline-flex items-center gap-2.5 min-h-[44px] px-5 py-3 rounded-[2px] border border-[#111116] bg-[#FFFFFF] text-[#111116] shadow-[3px_3px_0_0_#111116] hover:bg-[#111116] hover:text-[#F5F4F0] font-sans text-[15px] font-semibold transition-colors duration-[160ms]';

function resolveClearedFounderPortrait(): ClearedFounderPortrait | null {
  const astM01 = CANONICAL_ASSETS.find((asset) => asset.assetId === 'AST-M01');
  if (!astM01?.permissionApproved || !astM01.founderApproved) {
    return null;
  }

  const src = FOUNDER_PRINCIPAL.portraitImage ?? astM01.repoPath;
  if (!src) {
    return null;
  }

  return {
    src,
    alt: `${FOUNDER_PRINCIPAL.name} — ${FOUNDER_PRINCIPAL.role}, ${FOUNDER_PRINCIPAL.department}`,
  };
}

function resolveClearedCultureArtefact(): ArchiveArtefactEntry | undefined {
  const astR01 = CANONICAL_ASSETS.find((asset) => asset.assetId === 'AST-R01');
  if (!astR01?.permissionApproved || !astR01.founderApproved) {
    return undefined;
  }

  return getPublicArchiveArtefacts().find(
    (item) => item.assetId === 'AST-R01' && item.badge === 'STUDIO CULTURE'
  );
}

function resolveChapterHeadline(): string {
  if (FOUNDER_PRINCIPAL.founderCopyApproved && FOUNDER_PRINCIPAL.draftChapterHeadline) {
    return FOUNDER_PRINCIPAL.draftChapterHeadline;
  }
  // Verified confirmed founder name already in studioData.ts — avoids repeating Hero/Footer studio descriptor verbatim
  return `Founded by ${FOUNDER_PRINCIPAL.name}.`;
}

/**
 * Chapter 06 — Studio & Founder: Brutalist Accountability Dossier (`Blueprint-3` pp. 46–47, 80, 88–89, 92)
 * - Surface: Warm White (#F5F4F0)
 * - Desktop 12-col split: Left 5 cols high-contrast Dark Monogram Dossier / Approved Portrait | 1-col offset | Right 6 cols copy & box CTAs
 * - Mobile (<lg): Strict DOM order Kicker & Headline -> Monogram/Portrait -> Verified Copy & CTAs
 * - Decoupled gates preserved strictly: `founderCopyApproved` (headline) + `AST-M01` (portrait) + `AST-R01` (culture poster)
 */
export const StudioFounderSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useRevealOnScroll(sectionRef);

  const chapterHeadline = resolveChapterHeadline();
  const clearedPortrait = resolveClearedFounderPortrait();
  const clearedCulture = resolveClearedCultureArtefact();
  const hasAnyClearedVisual = Boolean(clearedPortrait || clearedCulture);
  const verifiedBio =
    typeof FOUNDER_PRINCIPAL.bio === 'string' && FOUNDER_PRINCIPAL.bio.trim().length > 0
      ? FOUNDER_PRINCIPAL.bio.trim()
      : null;
  const isPreviewMode = !import.meta.env.PROD;

  return (
    <section
      id="studio-founder"
      ref={sectionRef}
      aria-labelledby="chapter-06-heading"
      data-visible={isVisible}
      className="w-full bg-[#F5F4F0] text-[#111116]"
    >
      <div className="max-w-[90rem] mx-auto px-5 md:px-8 lg:px-12 min-[1440px]:px-16 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-y-8 lg:gap-y-6 gap-x-4 md:gap-x-5 lg:gap-x-6 items-start">
          {/* DOM Block 1: Kicker & Headline — Top on Mobile, Cols 7–12 Row 1 on Desktop */}
          <div className="md:col-span-8 lg:col-start-7 lg:col-span-6 lg:row-start-1 space-y-4 min-w-0">
            <p className="type-mono-label text-[#111116] uppercase">
              06 // STUDIO &amp; FOUNDER
            </p>

            <h2 id="chapter-06-heading" className="type-h2-section text-[#111116]">
              {chapterHeadline}
            </h2>
          </div>

          {/* DOM Block 2: Left 5 Cols Approved Visual OR Charcoal Brutalist Monogram Dossier */}
          <div
            data-visible={isVisible}
            className="reveal-below-fold md:col-span-8 lg:col-start-1 lg:col-span-5 lg:row-start-1 lg:row-span-2 min-w-0"
          >
            {hasAnyClearedVisual ? (
              <div className="space-y-6">
                {clearedPortrait && (
                  <figure className="overflow-hidden rounded-[2px] border-2 border-[#111116] bg-[#FFFFFF] shadow-[6px_6px_0_0_#111116]">
                    <div className="aspect-[4/5] overflow-hidden bg-[#E7E7E9]">
                      <img
                        src={clearedPortrait.src}
                        alt={clearedPortrait.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <figcaption className="px-4 py-3 border-t-2 border-[#111116] type-mono-micro uppercase text-[#111116]">
                      FOUNDER // {FOUNDER_PRINCIPAL.name}
                    </figcaption>
                  </figure>
                )}

                {clearedCulture && (
                  <figure className="overflow-hidden rounded-[2px] border-2 border-[#111116] bg-[#FFFFFF] shadow-[6px_6px_0_0_#111116]">
                    <div className="aspect-[3/4] overflow-hidden bg-[#FFFFFF] p-4 sm:p-6 flex items-center justify-center">
                      <img
                        src={clearedCulture.src}
                        alt={`${clearedCulture.title} — ${clearedCulture.badge.toLowerCase()} artefact`}
                        width={clearedCulture.width}
                        height={clearedCulture.height}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <figcaption className="px-4 py-3 border-t-2 border-[#111116] flex items-center justify-between gap-3">
                      <span className="type-mono-micro uppercase text-[#111116]">
                        {clearedCulture.badge}
                      </span>
                      <span className="type-mono-micro uppercase text-[#55555F]">
                        {clearedCulture.title}
                      </span>
                    </figcaption>
                  </figure>
                )}

                {isPreviewMode && !clearedPortrait && (
                  <PreviewPlaceholder
                    decisionId="DEC-13"
                    assetId="AST-M01"
                    aspectRatio="4 / 5"
                    surface="light"
                    label="Natural-light editorial portrait of Ranjan Kumar (~1200x1500px 4:5, DEC-13)"
                  />
                )}
                {isPreviewMode && !clearedCulture && (
                  <PreviewPlaceholder
                    decisionId="DEC-13"
                    assetId="AST-R01"
                    aspectRatio="3 / 4"
                    surface="light"
                    label="Confirmed Studio Culture artefact awaiting founder publishing sign-off (DEC-13 -> /about#studio-culture)"
                  />
                )}
              </div>
            ) : isPreviewMode ? (
              <div
                aria-label="Preview layout staging for founder portrait and studio culture artefact"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"
              >
                <PreviewPlaceholder
                  decisionId="DEC-13"
                  assetId="AST-M01"
                  aspectRatio="4 / 5"
                  surface="light"
                  label="Natural-light portrait of Ranjan Kumar (~1200x1500px 4:5, DEC-13)"
                />
                <PreviewPlaceholder
                  decisionId="DEC-13"
                  assetId="AST-R01"
                  aspectRatio="3 / 4"
                  surface="light"
                  label="Studio Culture poster awaiting founder sign-off (DEC-13 -> /about#studio-culture)"
                />
              </div>
            ) : (
              /* Production Fallback: Charcoal Brutalist Dossier Monolith (Zero placeholder text, zero invented claims) */
              <div className="rounded-[2px] border-2 border-[#111116] bg-[#111116] text-[#F5F4F0] shadow-[6px_6px_0_0_#FD7D3C] p-6 sm:p-8 flex flex-col justify-between gap-10 min-h-[300px]">
                <div className="flex items-center justify-between gap-4">
                  <span className="type-mono-micro text-[#B4B4BE] uppercase">
                    STUDIO RECORD // VERIFIED
                  </span>
                  <span className="px-2 py-0.5 bg-[#FD7D3C] text-[#111116] font-mono text-[11px] font-semibold uppercase">
                    06
                  </span>
                </div>

                <div aria-hidden="true" className="select-none space-y-1">
                  <span className="block font-display font-extrabold text-[clamp(2.75rem,1.75rem+3.2vw,4.5rem)] leading-[0.88] tracking-[-0.04em] text-[#F5F4F0]">
                    RK<span className="text-[#EA1E4D]">/</span>
                  </span>
                  <span className="block font-display font-extrabold text-[clamp(2.75rem,1.75rem+3.2vw,4.5rem)] leading-[0.88] tracking-[-0.04em] text-[#FD7D3C]">
                    RIWA
                  </span>
                </div>

                <div className="pt-5 border-t border-[#8E8E9A] flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-display font-semibold text-lg text-[#F5F4F0]">
                    {FOUNDER_PRINCIPAL.name}
                  </p>
                  <p className="font-mono text-xs uppercase text-[#FD7D3C]">
                    {FOUNDER_PRINCIPAL.role}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* DOM Block 3: Verified Core Line, Bio Slot, Attribution & Brutalist Box Links */}
          <div className="md:col-span-8 lg:col-start-7 lg:col-span-6 lg:row-start-2 space-y-6 min-w-0">
            <p className="type-body-lead text-[#111116] max-w-[48ch]">
              {STUDIO_IDENTITY.name} is an {STUDIO_IDENTITY.descriptor.replace(/\.$/, '')} founded by{' '}
              {FOUNDER_PRINCIPAL.name}.
            </p>

            {verifiedBio ? (
              <p className="type-body-base text-[#55555F] max-w-[54ch]">{verifiedBio}</p>
            ) : (
              isPreviewMode && (
                <div className="space-y-2">
                  <p className="type-body-base text-[#55555F] max-w-[54ch]">
                    [PLACEHOLDER — REQUIRES RANJAN KUMAR INPUT: 2–3 verified sentences supplied or approved by Ranjan Kumar describing Riwa&apos;s founding intent and studio approach. Do not invent quotes, operating-layer claims, or external biographical details.]
                  </p>
                  <p className="type-mono-micro text-[#55555F] uppercase">
                    PREVIEW STAGING · MCR-05 / DEC-13
                  </p>
                </div>
              )
            )}

            <div className="pt-5 border-t border-[#111116]/25 space-y-1">
              <p className="type-h3-subhead text-[#111116]">{FOUNDER_PRINCIPAL.name}</p>
              <p className="type-mono-label text-[#55555F] uppercase">
                {FOUNDER_PRINCIPAL.role}, {FOUNDER_PRINCIPAL.department}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link to="/about" className={EDITORIAL_BOX_LINK_CLASS}>
                <span>About Riwa Creatives</span>
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="transition-transform duration-[160ms] ease-editorial group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/about#studio-culture"
                className="group inline-flex items-center gap-2 min-h-[44px] py-2 px-1 font-sans text-[15px] font-semibold text-[#111116] underline underline-offset-4 decoration-2 decoration-[#111116] hover:text-[#C4123D] hover:decoration-[#EA1E4D] transition-colors duration-[160ms]"
              >
                <span>Studio Culture</span>
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="transition-transform duration-[160ms] ease-editorial group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
