import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { CANONICAL_ASSETS, getPublicArchiveArtefacts } from '../../data/studioData';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import { ArchiveArtefactEntry } from '../../types';
import { Button } from '../common/Button';

interface WorkingCommitment {
  index: string;
  title: string;
  description: string;
}

const WORKING_COMMITMENTS: WorkingCommitment[] = [
  {
    index: '01',
    title: 'Clarity first',
    description:
      'Visual decisions start with a concrete understanding of the brief and audience.',
  },
  {
    index: '02',
    title: 'Coherent execution',
    description:
      'Identity, campaigns, websites, and events are designed to feel like one voice.',
  },
  {
    index: '03',
    title: 'Built for continuity',
    description: 'Brand work is structured to stay usable beyond launch day.',
  },
];

function resolveApprovedStudioIpVignette(): ArchiveArtefactEntry | undefined {
  const canonicalEntry = CANONICAL_ASSETS.find((asset) => asset.assetId === 'AST-S02');
  if (!canonicalEntry?.permissionApproved || !canonicalEntry.founderApproved) {
    return undefined;
  }

  return getPublicArchiveArtefacts().find(
    (item) => item.assetId === 'AST-S02' && item.badge === 'STUDIO IP'
  );
}

/**
 * Chapter 04 — How We Think: Full-Width Poster Disruption + 3-Column Brutalist Tri-Grid (`Blueprint-3` pp. 42–44, 80)
 * - Surface: Full-bleed Charcoal (#111116) with Warm White (#F5F4F0, 17.10:1 AAA), Muted Dark (#B4B4BE, 9.15:1 AAA), and Orange (#FD7D3C, 7.32:1 AAA)
 * - Exposed 3-column architectural tri-grid (#8E8E9A 5.81:1 borders) differentiates sharply from Chapter 02 vertical list
 * - #EA1E4D restricted strictly to >=40px stencil indices (4.29:1 Large AA on #111116)
 */
export const HowWeThinkSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useRevealOnScroll(sectionRef);
  const approvedStudioIp = resolveApprovedStudioIpVignette();

  return (
    <section
      id="how-we-think"
      ref={sectionRef}
      aria-labelledby="chapter-04-heading"
      data-visible={isVisible}
      className="focus-surface-dark w-full bg-[#111116] text-[#F5F4F0] border-b-2 border-[#111116]"
    >
      <div className="max-w-[90rem] mx-auto px-5 md:px-8 lg:px-12 min-[1440px]:px-16 py-16 md:py-24 lg:py-28">
        {/* Top Row: Full-Width Expressive Poster Statement (+ optional desktop AST-S02 spot) */}
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-y-8 gap-x-4 md:gap-x-5 lg:gap-x-6 items-end">
          <div className={approvedStudioIp ? 'md:col-span-8 lg:col-span-9 space-y-5' : 'md:col-span-8 lg:col-span-12 space-y-5'}>
            <p className="type-mono-label text-[#B4B4BE] uppercase">
              04 // HOW WE THINK
            </p>

            <h2 id="chapter-04-heading" className="text-[#F5F4F0]">
              <span className="block type-display-poster uppercase">
                Safe work rarely gets
              </span>
              <span className="block font-serif font-normal italic text-[clamp(2.75rem,1.35rem+5.2vw,6.25rem)] leading-[0.94] tracking-[-0.025em] text-[#FD7D3C]">
                remembered.
              </span>
            </h2>
          </div>

          {approvedStudioIp && (
            <div className="hidden lg:flex lg:col-span-3 lg:justify-end">
              <figure className="w-full max-w-[220px] rounded-[2px] border border-[#8E8E9A] bg-[#1B1B22] p-4 space-y-3">
                <div className="overflow-hidden rounded-[2px] border border-[#8E8E9A] bg-[#FFFFFF] p-3 flex items-center justify-center aspect-[4/5]">
                  <img
                    src={approvedStudioIp.src}
                    alt={`${approvedStudioIp.title} — ${approvedStudioIp.badge.toLowerCase()} editorial illustration`}
                    width={approvedStudioIp.width}
                    height={approvedStudioIp.height}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>
                <figcaption className="type-mono-micro text-[#B4B4BE] uppercase">
                  {approvedStudioIp.badge} // {approvedStudioIp.title}
                </figcaption>
              </figure>
            </div>
          )}
        </div>

        {/* Prose & Brutalist CTA Strip */}
        <div className="mt-10 lg:mt-14 pt-8 lg:pt-10 border-t border-[#8E8E9A] grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-y-6 gap-x-4 md:gap-x-5 lg:gap-x-6 items-end">
          <div className="md:col-span-8 lg:col-span-7">
            <p className="type-body-lead text-[#B4B4BE] max-w-[52ch]">
              Category templates make brands easy to approve internally and effortless for audiences to ignore. At Riwa, &ldquo;unreasonable&rdquo; means pushing past the obvious first draft—connecting clear positioning with disciplined craft across identity, campaigns, digital surfaces, and live rooms.
            </p>
          </div>

          <div className="md:col-span-8 lg:col-span-5 lg:flex lg:justify-end">
            <Button
              to="/about"
              variant="outline"
              surface="dark"
              className="w-full sm:w-auto"
            >
              <span>About Riwa Creatives</span>
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Lower Exposed 3-Column Brutalist Tri-Grid on Pure Charcoal (#111116) */}
        <ol
          data-visible={isVisible}
          className="reveal-below-fold mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 border border-[#8E8E9A] rounded-[2px] bg-[#111116] divide-y lg:divide-y-0 lg:divide-x divide-[#8E8E9A]"
        >
          {WORKING_COMMITMENTS.map((item) => (
            <li
              key={item.index}
              className="p-6 sm:p-8 flex flex-col justify-between gap-8 lg:min-h-[240px]"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  aria-hidden="true"
                  className="type-stencil-index text-[#EA1E4D] shrink-0"
                >
                  {item.index}
                </span>
                <span className="font-mono text-[11px] text-[#B4B4BE] uppercase tracking-[0.08em]">
                  PRINCIPLE // {item.index}
                </span>
              </div>

              <div className="space-y-2.5 min-w-0">
                <h3 className="type-h3-subhead text-[#F5F4F0]">
                  <span className="sr-only">{item.index}. </span>
                  {item.title}
                </h3>
                <p className="type-body-base text-[#B4B4BE]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
