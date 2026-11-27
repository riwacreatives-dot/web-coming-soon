import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { getPublicWorkStories } from '../../data/studioData';

interface CampaignCraftPlate {
  code: string;
  title: string;
  medium: string;
  headline: string;
  note: string;
  src?: string;
}

const CAMPAIGN_TERRITORIES: CampaignCraftPlate[] = [
  {
    code: 'PLATE 01',
    title: 'Viral Street & Print Posters',
    medium: 'Print & Hero Art Direction',
    headline: 'HEADLINES WRITTEN TO TRAVEL IN THE REAL WORLD.',
    note: 'Tactile poster systems pairing bold display typography with crisp cultural wit designed to earn organic attention.',
  },
  {
    code: 'PLATE 02',
    title: 'Key Visual Art Direction',
    medium: 'Studio & Campaign Visuals',
    headline: 'CRAFTED VISUAL ANCHORS THAT STAND OUT FROM STOCK.',
    note: 'Art-directed culinary, product, and brand key visuals composed to stop the scroll within the first second.',
  },
  {
    code: 'PLATE 03',
    title: 'Kinetic Social Ad Suite',
    medium: 'Paid Social & Motion Crops',
    headline: 'SYSTEMATIC VARIATIONS SIZED FOR EVERY FEED.',
    note: 'Platform-native visual drops engineered across Instagram, Meta ads, and storefront placements without diluting brand voice.',
  },
  {
    code: 'PLATE 04',
    title: 'Print, OOH & Packaging Rollout',
    medium: 'Physical & Retention Touchpoints',
    headline: 'COHERENCE FROM BILLBOARD TO TABLETOP.',
    note: 'Print production specifications, menu anchors, and campaign collateral carrying one unmistakable creative signature.',
  },
];

const STORY_STAGES = [
  {
    id: 'brief',
    label: '01 / BRIEF',
    copy: 'Position ambitious brands as unmissable voices rather than competing on generic category discounts or look-alike templates.',
  },
  {
    id: 'thinking',
    label: '02 / THINKING',
    copy: 'Pair sharp cultural positioning and internet-native copywriting with intentional art direction so every campaign drop earns attention.',
  },
  {
    id: 'execution',
    label: '03 / EXECUTION',
    copy: 'Cohesive multi-format campaign systems spanning key visuals, print posters, paid social variations, and commercial launch toolkits.',
  },
];

interface TheAttentionProps {
  embedded?: boolean;
}

export const TheAttention: React.FC<TheAttentionProps> = ({ embedded = false }) => {
  const clearedStories = getPublicWorkStories();
  const primaryCleared = clearedStories[0];
  const hasApprovedGallery = Boolean(
    primaryCleared && primaryCleared.galleryImages && primaryCleared.galleryImages.length > 0
  );

  const plates: CampaignCraftPlate[] =
    hasApprovedGallery && primaryCleared?.galleryImages
      ? primaryCleared.galleryImages.slice(0, 4).map((src, idx) => ({
          code: `PLATE 0${idx + 1}`,
          title: `${primaryCleared.title} — Drop 0${idx + 1}`,
          medium: primaryCleared.category,
          headline: primaryCleared.headline,
          note: primaryCleared.description,
          src,
        }))
      : CAMPAIGN_TERRITORIES;

  const [activePlateIdx, setActivePlateIdx] = useState(0);
  const [mobileStoryTab, setMobileStoryTab] = useState<'brief' | 'thinking' | 'execution'>('brief');

  const activePlate = plates[activePlateIdx] || plates[0];

  return (
    <section
      id="creative-advertising-showcase"
      className="relative w-full bg-[#F5F4F0] dark:bg-[#0F0F13] text-[#111116] dark:text-white overflow-hidden transition-colors"
    >
      <div className="max-w-7xl mx-auto py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12">
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="w-4 h-[2px] bg-[#EA1E4D] inline-block" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#C4123D] dark:text-[#FD7D3C] font-bold">
            02 — COMMERCIAL CREATIVE &amp; ADVERTISING
          </span>
        </div>

        <h2 className="font-display text-[clamp(2.2rem,6vw,4.8rem)] font-extrabold uppercase tracking-tighter text-[#111116] dark:text-white leading-[0.92] mb-12 sm:mb-16 max-w-4xl">
          <span className="block">MAKE THEM LOOK.</span>
          <span className="block">MAKE THEM FEEL.</span>
          <span className="block font-serif italic font-normal tracking-tight text-[#EA1E4D] text-[1.06em] lowercase mt-1">
            make them act.
          </span>
        </h2>

        {/* 7/5 Exhibition Stage with Red Corner Crop Marks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#111116]/20 dark:border-white/25 mb-6 overflow-hidden">
          <div className="lg:col-span-7 relative bg-[#111116] text-white overflow-hidden min-h-[300px] sm:min-h-[400px] lg:min-h-[460px] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#111116]/20 dark:border-white/20">
            {/* Corner Crop Marks */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#EA1E4D] z-20 pointer-events-none" aria-hidden="true" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#EA1E4D] z-20 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#EA1E4D] z-20 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#EA1E4D] z-20 pointer-events-none" aria-hidden="true" />

            {activePlate.src ? (
              <>
                <img
                  src={activePlate.src}
                  alt={activePlate.title}
                  className="w-full h-full object-cover object-center min-h-[300px] sm:min-h-[400px] lg:min-h-[460px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111116]/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    {activePlate.title}
                  </span>
                  <span className="font-mono text-[10px] text-[#FD7D3C] uppercase font-bold">
                    {activePlate.code}
                  </span>
                </div>
              </>
            ) : (
              <div className="relative z-10 p-8 sm:p-12 h-full flex flex-col justify-between min-h-[300px] sm:min-h-[400px] lg:min-h-[460px]">
                <div className="flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-widest">
                  <span className="text-[#FD7D3C] font-bold">
                    {activePlate.code} // {activePlate.medium}
                  </span>
                  <span className="text-[#B4B4BE]">CAMPAIGN CRAFT</span>
                </div>

                <div className="my-auto py-6 space-y-4 max-w-xl">
                  <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-[0.98]">
                    {activePlate.headline}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#B4B4BE] leading-relaxed">
                    {activePlate.note}
                  </p>
                </div>

                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[#B4B4BE] pt-4 border-t border-white/10">
                  <span>{activePlate.title}</span>
                  <span>SELECT PLATE BELOW</span>
                </div>
              </div>
            )}
          </div>

          {/* Right 5 Cols: Brief -> Thinking -> Execution Narrative */}
          <div className="lg:col-span-5 bg-white dark:bg-[#1A1A21] p-5 sm:p-8 lg:p-9 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#111116]/15 dark:border-white/10">
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2.5 font-mono text-[10px] uppercase tracking-widest">
                  <span className="px-2.5 py-0.5 bg-[#111116] dark:bg-white text-white dark:text-[#111116] font-bold">
                    {primaryCleared ? primaryCleared.categoryBadge : 'CAMPAIGN METHODOLOGY'}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#111116] dark:text-white leading-tight mb-1">
                  {primaryCleared ? primaryCleared.title : 'VISUAL-FIRST CAMPAIGNS'}
                </h3>
                <p className="font-mono text-xs text-[#C4123D] dark:text-[#FD7D3C] font-bold tracking-widest uppercase">
                  {primaryCleared ? primaryCleared.client : 'CONCEPT · DIRECTION · PRODUCTION'}
                </p>
              </div>

              {/* Desktop Narrative */}
              <div className="hidden md:block space-y-4 text-sm font-sans">
                {STORY_STAGES.map((stage, i) => (
                  <div
                    key={stage.id}
                    className={`border-l-2 pl-3.5 ${
                      i === 0 ? 'border-[#EA1E4D]' : 'border-[#111116]/20 dark:border-white/20'
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] uppercase tracking-widest font-bold block mb-0.5 ${
                        i === 0 ? 'text-[#C4123D] dark:text-[#FD7D3C]' : 'text-[#52525B] dark:text-[#B4B4BE]'
                      }`}
                    >
                      {stage.label}
                    </span>
                    <p className="text-[#3F3F46] dark:text-white/85 leading-relaxed text-[13px]">
                      {stage.copy}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mobile Compact Switcher */}
              <div className="md:hidden space-y-4">
                <div className="grid grid-cols-3 border border-[#111116]/15 dark:border-white/15 font-mono text-[10px] font-bold uppercase">
                  {(['brief', 'thinking', 'execution'] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setMobileStoryTab(t)}
                      className={`min-h-[40px] py-2 text-center border-r last:border-r-0 border-[#111116]/15 dark:border-white/15 cursor-pointer ${
                        mobileStoryTab === t
                          ? 'bg-[#C4123D] text-white'
                          : 'text-[#52525B] dark:text-white/70'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="min-h-[88px] p-4 bg-[#F5F4F0] dark:bg-[#121218] border border-[#111116]/10 dark:border-white/10">
                  <p className="font-sans text-xs text-[#3F3F46] dark:text-white/85 leading-relaxed">
                    {STORY_STAGES.find((s) => s.id === mobileStoryTab)?.copy}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-[#111116]/10 dark:border-white/10 flex items-center justify-between">
              <Link
                to={primaryCleared ? `/work/${primaryCleared.id}` : '/contact?service=creative-advertising'}
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#C4123D] dark:text-[#FD7D3C] hover:text-[#111116] dark:hover:text-white transition-colors uppercase tracking-wider"
              >
                <span>{primaryCleared ? 'OPEN FULL CASE STUDY' : 'COMMISSION A CAMPAIGN'}</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              {!embedded && (
                <Link
                  to="/work"
                  className="font-mono text-[10px] font-bold text-[#52525B] dark:text-[#B4B4BE] hover:underline uppercase"
                >
                  THE ARCHIVE →
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Interactive 4-Plate Campaign Selector */}
        <div className="mobile-snap-track flex md:grid md:grid-cols-4 gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 md:mx-0 md:px-0">
          {plates.map((plate, i) => {
            const isSelected = activePlateIdx === i;
            return (
              <button
                key={plate.code}
                type="button"
                onClick={() => setActivePlateIdx(i)}
                className={`snap-start shrink-0 w-[64vw] sm:w-[40vw] md:w-auto text-left group cursor-pointer border p-3.5 transition-all ${
                  isSelected
                    ? 'border-[#C4123D] bg-[#C4123D]/10 dark:bg-[#EA1E4D]/15'
                    : 'border-[#111116]/15 dark:border-white/15 bg-white dark:bg-[#16161C] hover:border-[#111116]/45'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider mb-1.5">
                  <span className={`font-bold ${isSelected ? 'text-[#C4123D] dark:text-[#FD7D3C]' : 'text-[#52525B] dark:text-[#B4B4BE]'}`}>
                    {plate.code}
                  </span>
                  <span className="text-[9px] text-[#52525B] dark:text-white/50 truncate ml-2">
                    {plate.medium}
                  </span>
                </div>
                <p className="font-display text-sm font-extrabold uppercase tracking-tight text-[#111116] dark:text-white leading-snug">
                  {plate.title}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
