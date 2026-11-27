import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  CANONICAL_ASSETS,
  getPublicWorkStories,
  LOCKED_CAPABILITIES,
} from '../../data/studioData';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import { Button } from '../common/Button';
import { PreviewPlaceholder } from '../common/PreviewPlaceholder';

interface EventMediaFrame {
  src: string;
  alt: string;
  caption: string;
}

interface ClearedEventShowcase {
  title: string;
  year: string;
  summary: string;
  media: EventMediaFrame[];
}

function resolveClearedEventShowcase(): ClearedEventShowcase | null {
  const astE01 = CANONICAL_ASSETS.find((asset) => asset.assetId === 'AST-E01');
  const astM02 = CANONICAL_ASSETS.find((asset) => asset.assetId === 'AST-M02');
  const hasClearedEventPermission = Boolean(
    (astE01?.permissionApproved && astE01.founderApproved) ||
      (astM02?.permissionApproved && astM02.founderApproved)
  );

  if (!hasClearedEventPermission) {
    return null;
  }

  const eventStory = getPublicWorkStories().find(
    (story) => story.categoryBadge === 'EVENT INITIATIVE'
  );
  if (!eventStory) {
    return null;
  }

  const uniqueSources = Array.from(
    new Set([eventStory.heroImage, ...(eventStory.galleryImages ?? [])].filter(Boolean))
  ).slice(0, 3);

  if (uniqueSources.length === 0) {
    return null;
  }

  return {
    title: eventStory.title,
    year: eventStory.year,
    summary: eventStory.description,
    media: uniqueSources.map((src, idx) => ({
      src,
      alt: `${eventStory.title} — verified documentary event frame 0${idx + 1}`,
      caption: `${eventStory.title} // FRAME 0${idx + 1}`,
    })),
  };
}

function getConfirmedEventDeliverables(): string[] {
  const capability = LOCKED_CAPABILITIES.find((item) => item.id === 'events-experiences');
  return capability?.confirmedDeliverables ?? [];
}

function getMediaGridClass(frameCount: number): string {
  if (frameCount === 1) {
    return 'grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-6 items-end';
  }
  if (frameCount === 2) {
    return 'grid grid-cols-1 md:grid-cols-2 gap-6';
  }
  return 'grid grid-cols-1 md:grid-cols-3 gap-6';
}

/**
 * Chapter 05 — Events & Experiences: Signature Orange Broadside Takeover (`Blueprint-3` pp. 44–46, 80)
 * - Surface: Full-bleed Signature Orange (#FD7D3C) + static <=5% halftone (`.surface-orange-halftone`)
 * - Strict WCAG 2.2 AAA Charcoal-Only Ink & Grid Rules (#111116, 7.32:1) directly on #FD7D3C
 * - Pre-clearance production renders a 4-cell gap-[1px] bg-[#111116] brutalist placard grid from confirmed event deliverables
 */
export const EventsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useRevealOnScroll(sectionRef);
  const clearedEvent = resolveClearedEventShowcase();
  const confirmedDeliverables = getConfirmedEventDeliverables();
  const isPreviewMode = !import.meta.env.PROD;

  return (
    <section
      id="events"
      ref={sectionRef}
      aria-labelledby="chapter-05-heading"
      data-visible={isVisible}
      className="surface-orange-halftone w-full bg-[#FD7D3C] text-[#111116] border-b-2 border-[#111116]"
    >
      <div className="relative max-w-[90rem] mx-auto px-5 md:px-8 lg:px-12 min-[1440px]:px-16 py-16 md:py-24 lg:py-28">
        {/* Top Masthead Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-[#111116]">
          <p className="type-mono-label text-[#111116] uppercase">
            05 // EVENTS &amp; EXPERIENCES
          </p>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] px-2.5 py-1 border border-[#111116] rounded-[2px] text-[#111116]">
            PHYSICAL &amp; HYBRID FORMATS
          </span>
        </div>

        {/* Broadside Split: 7-Col Oversized Display + 5-Col Summary & Sharp Charcoal Slab CTA */}
        <div className="pt-8 lg:pt-10 grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-y-8 gap-x-4 md:gap-x-5 lg:gap-x-6 items-end">
          <div className="md:col-span-8 lg:col-span-7 min-w-0">
            <h2 id="chapter-05-heading" className="type-display-poster uppercase text-[#111116]">
              Ideas built for physical rooms, not only screens.
            </h2>
          </div>

          <div className="md:col-span-8 lg:col-span-5 space-y-6 min-w-0">
            <p className="type-body-lead text-[#111116] max-w-[46ch]">
              We work on event production, conferences, hackathons, and brand activations—bringing identity, physical collateral, and room experience together.
            </p>

            <div>
              <Button
                to="/services#events-experiences"
                variant="primary"
                surface="orange"
                className="w-full sm:w-auto"
              >
                <span>Explore Events &amp; Experiences</span>
                <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>

        {/* Verified Event Media (1–3 Frames) OR Dev Staging OR 4-Cell Brutalist Placard Matrix */}
        {clearedEvent ? (
          <div
            data-visible={isVisible}
            className="reveal-below-fold mt-12 lg:mt-16 pt-10 lg:pt-12 border-t-2 border-[#111116] space-y-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div className="space-y-2">
                <span className="inline-block font-mono type-mono-micro uppercase px-2.5 py-1 border border-[#111116] rounded-[2px] text-[#111116]">
                  EVENT INITIATIVE
                </span>
                <h3 className="type-h3-subhead text-[#111116]">
                  {clearedEvent.title}
                </h3>
              </div>
              <p className="type-mono-micro text-[#111116] uppercase">
                {clearedEvent.year}
              </p>
            </div>

            <div className={getMediaGridClass(clearedEvent.media.length)}>
              {clearedEvent.media.map((frame) => (
                <figure
                  key={frame.src}
                  className={`group rounded-[2px] border-2 border-[#111116] bg-[#FD7D3C] shadow-[4px_4px_0_0_#111116] overflow-hidden transition-transform duration-[220ms] ease-editorial hover:-translate-y-[2px] ${
                    clearedEvent.media.length === 1 ? 'md:col-span-8 lg:col-span-8' : ''
                  }`}
                >
                  <div
                    className={
                      clearedEvent.media.length === 1
                        ? 'aspect-[16/10] overflow-hidden bg-[#111116]'
                        : 'aspect-[4/3] overflow-hidden bg-[#111116]'
                    }
                  >
                    <img
                      src={frame.src}
                      alt={frame.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="px-4 py-3 border-t-2 border-[#111116] type-mono-micro uppercase text-[#111116] group-hover:underline underline-offset-4">
                    {frame.caption}
                  </figcaption>
                </figure>
              ))}

              {clearedEvent.media.length === 1 && (
                <div className="md:col-span-8 lg:col-span-4 space-y-3">
                  <p className="type-mono-micro text-[#111116] uppercase">
                    VERIFIED BRIEF // EVENTS
                  </p>
                  <p className="type-body-base text-[#111116]">{clearedEvent.summary}</p>
                </div>
              )}
            </div>
          </div>
        ) : isPreviewMode ? (
          <div
            data-visible={isVisible}
            aria-label="Preview layout staging for event initiative verification"
            className="reveal-below-fold mt-12 lg:mt-16 pt-10 lg:pt-12 border-t-2 border-[#111116] grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-y-8 gap-x-4 md:gap-x-5 lg:gap-x-6 items-start"
          >
            <div className="md:col-span-8 lg:col-span-5 space-y-4 min-w-0">
              <span className="inline-block font-mono type-mono-micro uppercase px-2.5 py-1 border border-[#111116] rounded-[2px] text-[#111116]">
                EVENT INITIATIVE · DEC-15
              </span>
              <h3 className="type-h3-subhead text-[#111116]">
                Event Verification Pending
              </h3>
              <p className="type-body-base text-[#111116]">
                [PREVIEW PLACEHOLDER — REQUIRES RIWA CONFIRMATION BEFORE LAUNCH: Hack Uttar Pradesh 2026 appears in public hackathon listings under Riwa Creatives, with conflicting date ranges across directories. Before publishing here, Ranjan Kumar must confirm Riwa&apos;s exact role, official dates, venues, partners, permissions, and cleared documentary photography.]
              </p>
              <p className="type-mono-micro text-[#111116] uppercase">
                PREVIEW STAGING · MCR-07 / DEC-15
              </p>
            </div>

            <div className="md:col-span-8 lg:col-span-7 min-w-0">
              <PreviewPlaceholder
                decisionId="DEC-15"
                assetId="AST-E01"
                aspectRatio="16 / 10"
                surface="orange"
                label="Cleared documentary event photography, posters, or badges (AST-E01 / AST-M02 pending DEC-15)"
              />
            </div>
          </div>
        ) : (
          confirmedDeliverables.length > 0 && (
            <div
              data-visible={isVisible}
              className="reveal-below-fold mt-12 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#111116] border-2 border-[#111116] rounded-[2px] shadow-[6px_6px_0_0_#111116]"
            >
              {confirmedDeliverables.map((item, idx) => (
                <div
                  key={item}
                  className="bg-[#FD7D3C] p-6 sm:p-7 flex flex-col justify-between gap-10 min-h-[164px]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold text-[#111116] uppercase">
                      ROOM // 0{idx + 1}
                    </span>
                    <span
                      aria-hidden="true"
                      className="w-2.5 h-2.5 border border-[#111116] bg-[#111116]"
                    />
                  </div>
                  <p className="font-display font-bold text-xl sm:text-2xl leading-tight tracking-[-0.02em] text-[#111116] uppercase">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </section>
  );
};
