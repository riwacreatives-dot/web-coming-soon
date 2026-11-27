import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { LOCKED_CAPABILITIES } from '../../data/studioData';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

/**
 * Chapter 02 — What We Do: Brutalist Capabilities Specimen Ledger (`Blueprint-3` pp. 39–40, 80)
 * - Surface: Matte Light Grey (#E7E7E9) inset with crisp Warm White (#F5F4F0) framed table & 1px/2px Charcoal (#111116) rules
 * - Desktop 12-col split: Left 4 cols sticky stencil header + CTA box; Right 8 cols 5 brutalist rows inverting to #111116 on hover
 * - Zero fabricated metrics or unapproved assets
 */
export const WhatWeDoSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useRevealOnScroll(sectionRef);

  return (
    <section
      id="what-we-do"
      ref={sectionRef}
      aria-labelledby="chapter-02-heading"
      data-visible={isVisible}
      className="w-full bg-[#E7E7E9] text-[#111116] border-b-2 border-[#111116]"
    >
      <div className="max-w-[90rem] mx-auto px-5 md:px-8 lg:px-12 min-[1440px]:px-16 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-y-10 gap-x-4 md:gap-x-5 lg:gap-x-6 items-start">
          {/* Left 4 Columns: Sticky Section Stencil Intro & Brutalist Capabilities Link */}
          <div className="md:col-span-8 lg:col-span-4 lg:sticky lg:top-[var(--sticky-offset)] space-y-5">
            <div className="flex items-end justify-between gap-4 border-b border-[#111116] pb-4">
              <p className="type-mono-label text-[#111116] uppercase">
                02 // WHAT WE DO
              </p>
              <span aria-hidden="true" className="type-stencil-index text-[#EA1E4D]">
                02
              </span>
            </div>

            <h2 id="chapter-02-heading" className="type-h2-section text-[#111116]">
              One studio. Five disciplines.
            </h2>

            <p className="type-body-base text-[#55555F]">
              From brand foundations and campaigns to digital products, live rooms, and ongoing stewardship—built under one roof.
            </p>

            <div className="pt-2">
              <Link
                to="/services"
                className="group inline-flex items-center justify-between gap-3 min-h-[44px] px-5 py-3 rounded-[2px] border border-[#111116] bg-[#F5F4F0] text-[#111116] shadow-[3px_3px_0_0_#111116] hover:bg-[#111116] hover:text-[#F5F4F0] font-sans text-[15px] font-semibold transition-colors duration-[160ms]"
              >
                <span>See Full Capabilities</span>
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="transition-transform duration-[160ms] ease-editorial group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Right 8 Columns: Five Locked Brutalist Specimen Rows on Paper Inset Frame */}
          <div
            data-visible={isVisible}
            className="reveal-below-fold md:col-span-8 lg:col-span-8 border-2 border-[#111116] rounded-[2px] bg-[#F5F4F0] shadow-[6px_6px_0_0_#111116] divide-y divide-[#111116]"
          >
            {LOCKED_CAPABILITIES.map((capability) => (
              <Link
                key={capability.id}
                to={`/services#${capability.id}`}
                className="group relative flex items-start justify-between gap-4 min-h-[76px] md:min-h-[88px] px-5 sm:px-7 py-6 sm:py-7 text-[#111116] hover:bg-[#111116] focus-visible:bg-[#111116] transition-colors duration-[180ms] ease-editorial"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6 min-w-0">
                  <span className="font-display font-bold text-2xl sm:text-3xl leading-none tracking-[-0.03em] text-[#55555F] group-hover:text-[#FD7D3C] group-focus-visible:text-[#FD7D3C] shrink-0 transition-colors duration-[180ms]">
                    {capability.index}
                  </span>

                  <div className="space-y-2 min-w-0">
                    <h3 className="type-h3-subhead text-[#111116] group-hover:text-[#F5F4F0] group-focus-visible:text-[#F5F4F0] transition-colors duration-[180ms]">
                      {capability.name}
                    </h3>
                    <p className="type-body-sm text-[#55555F] group-hover:text-[#B4B4BE] group-focus-visible:text-[#B4B4BE] max-w-[56ch] transition-colors duration-[180ms]">
                      {capability.shortDesc}
                    </p>
                    <p className="pt-1 font-mono text-[11px] uppercase tracking-[0.06em] text-[#111116] group-hover:text-[#F5F4F0] group-focus-visible:text-[#F5F4F0] transition-colors duration-[180ms]">
                      {capability.confirmedDeliverables.join(' · ')}
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={20}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="text-[#111116] group-hover:text-[#FD7D3C] group-focus-visible:text-[#FD7D3C] shrink-0 mt-1 transition-all duration-[180ms] ease-editorial group-hover:translate-x-1 group-focus-visible:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
