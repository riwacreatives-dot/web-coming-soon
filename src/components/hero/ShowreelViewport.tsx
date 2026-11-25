import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Pause,
  Play,
  Sparkles,
  X,
} from 'lucide-react';
import { LiquidArtworkCanvas } from '../common/LiquidArtworkCanvas';
import { useIsMobile } from '../../hooks/useIsMobile';

export interface CarouselSlide {
  id: string;
  image: string;
  title: string;
  headline: string;
  badge: string;
  metric: string;
  client: string;
}

const SLIDES: CarouselSlide[] = [
  {
    id: 'baddies',
    image: '/work/solanas-chilli-chicken.jpg',
    title: 'Hotter Than Baddies',
    headline: 'Chilli Garlic Chicken Viral Street Poster',
    badge: 'VIRAL POP-ART SUITE',
    metric: '+420% Weekend Orders',
    client: 'Solanas Chinese • Thai',
  },
  {
    id: 'silk',
    image: '/work/solanas-poster.jpg',
    title: 'Dim Sum Silk Dynamics',
    headline: 'Liquid Silk & Overhead Dumpling Composition',
    badge: '3D FLUID ART DIRECTION',
    metric: '+340% Dinner Inbounds',
    client: 'Solanas Chinese • Thai',
  },
  {
    id: 'sushi',
    image: '/work/solanas-sushi.png',
    title: 'Sushi Condensed Key Art',
    headline: 'Kinetic Brutalist Typography Platter',
    badge: 'KINETIC BRUTALIST',
    metric: '6.2% CTR on Meta Ads',
    client: 'Solanas Chinese • Thai',
  },
  {
    id: 'jade',
    image: '/work/solanas-green-dimsum.png',
    title: 'Jade Dim Sum Seigaiha',
    headline: 'Traditional Bamboo Steamer & Japanese Waves',
    badge: 'CRAFT AD ART DIRECTION',
    metric: '+280% Crave Rate',
    client: 'Solanas Chinese • Thai',
  },
  {
    id: 'steamer',
    image: '/work/solanas-steamer-dimsum.jpg',
    title: 'Artisanal Bamboo Craft',
    headline: 'Overhead Dumpling Editorial & Dip Dynamics',
    badge: 'COMMERCIAL FOOD SUITE',
    metric: '99.4% Client Retention',
    client: 'Solanas Chinese • Thai',
  },
];

export const ShowreelViewport: React.FC = () => {
  const isMobile = useIsMobile();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxSlide, setLightboxSlide] = useState<CarouselSlide>(SLIDES[0]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalCards = SLIDES.length;

  const nextCard = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const prevCard = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  const selectCard = (idx: number) => {
    if (isMobile) setIsPlaying(false);
    setCurrentIdx(idx);
  };

  // Continuous auto-flow on repeat (idle slower on mobile & yields permanently on manual touch)
  useEffect(() => {
    if (!isPlaying || isLightboxOpen) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextCard();
    }, isMobile ? 4200 : 2800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isLightboxOpen, nextCard, isMobile]);

  // Keyboard navigation for lightbox & carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      } else if (!isLightboxOpen) {
        if (e.key === 'ArrowRight') nextCard();
        if (e.key === 'ArrowLeft') prevCard();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, nextCard, prevCard]);

  const openLightbox = (slide: CarouselSlide) => {
    if (isMobile) setIsPlaying(false);
    setLightboxSlide(slide);
    setIsLightboxOpen(true);
  };

  const activeSlide = SLIDES[currentIdx];

  // Drag swipe sensitivity handler
  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold || info.velocity.x < -250) {
      if (isMobile) setIsPlaying(false);
      nextCard();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > 250) {
      if (isMobile) setIsPlaying(false);
      prevCard();
    }
  };

  return (
    <>
      {/* Frameless Continuous 3D Flowing Carousel (No Outer Hard Box) */}
      <div className="relative w-full py-4 sm:py-6 select-none overflow-visible">
        {/* Subtle Ambient Backlight Glow (Frameless, blending into page canvas via pure CSS gradient ramp) */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-3/4 h-3/4 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(255, 42, 85, 0.28) 0%, rgba(255, 184, 0, 0.12) 40%, rgba(255, 42, 85, 0.04) 65%, transparent 75%)',
            }}
          />
        </div>

        {/* 3D Rotating Cards Stage (Open Perspective Deck) */}
        <div
          className="relative w-full h-[395px] sm:h-[500px] md:h-[560px] flex items-center justify-center overflow-visible"
          style={{ perspective: 1200 }}
        >
          {SLIDES.map((slide, idx) => {
            // Compute circular difference from currentIdx
            let diff = idx - currentIdx;
            if (diff > totalCards / 2) diff -= totalCards;
            if (diff < -totalCards / 2) diff += totalCards;

            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;
            const isFarLeft = diff === -2;
            const isFarRight = diff === 2;
            const isVisible = Math.abs(diff) <= 2;

            if (!isVisible) return null;

            // Spacing to keep ~80% of side cards visible on desktop; clean edge peek on mobile
            let xOffset = '0%';
            let scale = 1;
            let rotateY = 0;
            let zIndex = 30;
            let opacity = 1;

            if (isCenter) {
              xOffset = '0%';
              scale = 1;
              rotateY = 0;
              zIndex = 30;
              opacity = 1;
            } else if (isRight) {
              xOffset = isMobile ? '84%' : '68%';
              scale = isMobile ? 0.9 : 0.88;
              rotateY = isMobile ? -6 : -8;
              zIndex = 20;
              opacity = 0.85;
            } else if (isLeft) {
              xOffset = isMobile ? '-84%' : '-68%';
              scale = isMobile ? 0.9 : 0.88;
              rotateY = isMobile ? 6 : 8;
              zIndex = 20;
              opacity = 0.85;
            } else if (isFarRight) {
              xOffset = isMobile ? '140%' : '130%';
              scale = 0.72;
              rotateY = -15;
              zIndex = 10;
              opacity = 0;
            } else if (isFarLeft) {
              xOffset = isMobile ? '-140%' : '-130%';
              scale = 0.72;
              rotateY = 15;
              zIndex = 10;
              opacity = 0;
            }

            return (
              <motion.div
                key={slide.id}
                animate={{
                  x: xOffset,
                  scale,
                  rotateY,
                  zIndex,
                  opacity,
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.16, 1, 0.3, 1],
                }}
                drag={isCenter ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                onClick={() => {
                  if (isCenter) {
                    openLightbox(slide);
                  } else {
                    selectCard(idx);
                  }
                }}
                data-cursor-text={isCenter ? 'EXPAND' : 'ROTATE'}
                className={`absolute w-[78vw] max-w-[292px] sm:max-w-none sm:w-[310px] md:w-[350px] h-[365px] sm:h-[450px] md:h-[510px] rounded-[26px] sm:rounded-[34px] overflow-hidden border border-black/10 dark:border-white/15 bg-black cursor-pointer shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] will-change-transform ${
                  isCenter
                    ? 'ring-2 ring-brand-red/50 shadow-2xl'
                    : 'hover:opacity-95'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  touchAction: isCenter ? 'pan-y' : 'auto',
                }}
              >
                {/* Full-Cover Artwork inside Card (WebGL hover on desktop; lag-free touch swipe on mobile) */}
                <div className="relative w-full h-full overflow-hidden bg-black">
                  {isCenter ? (
                    <LiquidArtworkCanvas
                      imageSrc={slide.image}
                      alt={slide.title}
                      interactive={!isMobile}
                      className="w-full h-full"
                    />
                  ) : (
                    <img
                      src={slide.image}
                      alt={slide.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top filter brightness-95 contrast-105 pointer-events-none"
                    />
                  )}

                  {/* Gradient Scrim for Pristine Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/20 pointer-events-none" />

                  {/* Top Badge inside Card */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 font-mono text-xs uppercase tracking-wider text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                      <span>{slide.badge}</span>
                    </span>

                    {isCenter && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openLightbox(slide);
                        }}
                        title="View Full High-Resolution Artwork"
                        className="p-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white/90 hover:text-white hover:border-white transition-all cursor-pointer"
                      >
                        <Maximize2 size={13} />
                      </button>
                    )}
                  </div>

                  {/* Bottom Content inside Card (Matching Sample Aesthetic) */}
                  <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                    <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold block mb-1">
                      {slide.client}
                    </span>

                    <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight leading-none drop-shadow-md mb-2">
                      {slide.title}
                    </h3>

                    <p className="font-mono text-xs sm:text-sm text-white/80 line-clamp-2 drop-shadow mb-3">
                      {slide.headline}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-white/15 font-mono text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-red text-white font-bold uppercase tracking-wider">
                        {slide.metric}
                      </span>
                      <span className="text-white/60 uppercase tracking-wider">
                        {isCenter
                          ? isMobile
                            ? '✦ Tap to Expand'
                            : '✦ Click to Zoom'
                          : isMobile
                            ? '✦ Tap to Focus'
                            : '✦ Click to View'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimalist Floating Controls Dock */}
        <div className="relative z-20 mt-3 md:mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 font-mono text-xs">
          {/* Mobile-Only Touch Progress HUD (< 768px) */}
          <div className="md:hidden w-full max-w-[330px] flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-full border border-line-border bg-surface shadow-sm">
            <button
              type="button"
              onClick={() => {
                setIsPlaying(false);
                prevCard();
              }}
              aria-label="Previous artwork"
              className="min-w-[40px] min-h-[40px] rounded-full text-text-secondary hover:text-text-primary flex items-center justify-center active:scale-90 touch-manipulation cursor-pointer shrink-0"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex-1 flex flex-col items-center gap-1 min-w-0 px-1">
              <div className="flex items-center justify-between w-full text-[10px] uppercase tracking-wider">
                <span className="font-bold text-brand-red">
                  0{currentIdx + 1} / 0{totalCards}
                </span>
                <span className="text-text-secondary truncate max-w-[120px] font-medium">
                  SWIPE · TAP
                </span>
              </div>
              <div className="w-full h-1 rounded-full bg-line-border overflow-hidden">
                <div
                  className="h-full bg-brand-red rounded-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / totalCards) * 100}%` }}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsPlaying(false);
                nextCard();
              }}
              aria-label="Next artwork"
              className="min-w-[40px] min-h-[40px] rounded-full text-text-secondary hover:text-text-primary flex items-center justify-center active:scale-90 touch-manipulation cursor-pointer shrink-0"
            >
              <ChevronRight size={16} />
            </button>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause Auto-Flow' : 'Resume Auto-Flow'}
              className="min-w-[40px] min-h-[40px] rounded-full border border-line-border bg-canvas/70 flex items-center justify-center active:scale-90 touch-manipulation cursor-pointer shrink-0"
            >
              {isPlaying ? (
                <Pause size={13} className="text-brand-red" />
              ) : (
                <Play size={13} className="text-emerald-400" />
              )}
            </button>
          </div>

          {/* Desktop Navigation Pill (>= 768px — 100% Preserved) */}
          <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full border border-line-border bg-surface/40 backdrop-blur-md shadow-sm">
            {/* Prev Arrow */}
            <button
              type="button"
              onClick={prevCard}
              data-cursor-text="PREV"
              aria-label="Previous artwork"
              className="p-1 rounded-full text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Interactive Flowing Dots */}
            <div className="flex items-center gap-1.5 px-1">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => selectCard(idx)}
                  aria-label={`Jump to ${slide.title}`}
                  data-cursor-text={`0${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentIdx === idx
                      ? 'w-7 h-2 bg-brand-red'
                      : 'w-2 h-2 bg-line-border hover:bg-text-secondary'
                  }`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={nextCard}
              data-cursor-text="NEXT"
              aria-label="Next artwork"
              className="p-1 rounded-full text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>

            <span className="text-line-border">|</span>

            {/* Play / Pause Toggle */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Pause Continuous Flow' : 'Resume Continuous Flow'}
              data-cursor-text={isPlaying ? 'PAUSE' : 'PLAY'}
              className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause size={12} className="text-brand-red" />
                  <span className="font-semibold text-text-primary">Flowing</span>
                </>
              ) : (
                <>
                  <Play size={12} className="text-emerald-400" />
                  <span className="font-semibold text-text-secondary">Paused</span>
                </>
              )}
            </button>
          </div>

          {/* Active Card Callout */}
          <div className="hidden md:flex items-center gap-2 text-text-secondary">
            <span className="font-bold text-brand-red">0{currentIdx + 1}</span>
            <span>·</span>
            <span className="text-text-primary font-bold uppercase truncate max-w-[220px]">
              {activeSlide.title}
            </span>
            <span>·</span>
            <span className="text-brand-red font-bold font-mono">
              {activeSlide.metric}
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox Deep Zoom Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-xl"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 z-20 flex items-center justify-center gap-2 min-h-[44px] sm:min-h-0 px-4 py-2 rounded-full border border-white/20 bg-black/75 text-white font-mono text-xs uppercase tracking-widest hover:border-white cursor-pointer touch-manipulation"
            >
              <span>Close</span>
              <X size={15} />
            </button>

            <div
              className="relative max-h-[88vh] max-w-[92vw] overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxSlide.image}
                alt={lightboxSlide.title}
                loading="eager"
                decoding="sync"
                className="max-h-[82vh] w-auto max-w-full object-contain mx-auto"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-6 text-white font-mono">
                <span className="text-xs uppercase text-brand-red font-bold">
                  {lightboxSlide.client} · {lightboxSlide.badge}
                </span>
                <h4 className="font-display text-2xl sm:text-3xl font-extrabold uppercase mt-1">
                  {lightboxSlide.title}
                </h4>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  {lightboxSlide.headline} —{' '}
                  <span className="text-brand-red font-bold">
                    {lightboxSlide.metric}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
