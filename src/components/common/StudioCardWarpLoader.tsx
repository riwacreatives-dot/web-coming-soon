import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageTransition } from '../../contexts/TransitionContext';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Sparkles } from 'lucide-react';

interface HighResCard {
  id: string;
  title: string;
  client: string;
  image: string;
  badge: string;
  x: number;
  y: number;
  z: number;
  rotY: number;
  rotX: number;
  rotZ: number;
  wobbleY: number;
  wobbleRotX: number;
  wobbleRotZ: number;
  wobbleDuration: number;
  wobbleDelay: number;
}

// Strictly 100% high-resolution, unpixelated unique studio assets with spacious physical staging
const HIGH_RES_CARDS: HighResCard[] = [
  {
    id: 'dimsum-silk',
    title: 'Dim Sum Silk Dynamics',
    client: 'Solanas Luxury Culinary',
    image: '/work/solanas-poster.jpg',
    badge: '3D FLUID ART',
    x: -490,
    y: -70,
    z: -120,
    rotY: -22,
    rotX: 6,
    rotZ: -3,
    wobbleY: 15,
    wobbleRotX: 2.2,
    wobbleRotZ: 1.5,
    wobbleDuration: 3.8,
    wobbleDelay: 0.1,
  },
  {
    id: 'jade-dimsum',
    title: 'Jade Dim Sum Seigaiha',
    client: 'Solanas Seigaiha Edition',
    image: '/work/solanas-green-dimsum.png',
    badge: 'CRAFT AD ART',
    x: 490,
    y: -80,
    z: -140,
    rotY: 20,
    rotX: -6,
    rotZ: 3,
    wobbleY: 17,
    wobbleRotX: 2.5,
    wobbleRotZ: 1.8,
    wobbleDuration: 4.2,
    wobbleDelay: 0.35,
  },
  {
    id: 'steamer-craft',
    title: 'Artisanal Bamboo Craft',
    client: 'Solanas Culinary Editorial',
    image: '/work/solanas-steamer-dimsum.jpg',
    badge: 'COMMERCIAL ART',
    x: -400,
    y: 200,
    z: -80,
    rotY: -26,
    rotX: -8,
    rotZ: -5,
    wobbleY: 13,
    wobbleRotX: 2.0,
    wobbleRotZ: 1.2,
    wobbleDuration: 3.6,
    wobbleDelay: 0.6,
  },
  {
    id: 'founder-hiring',
    title: "Founder's Office Direction",
    client: 'Executive Commercial Sprint',
    image: '/brand/riwa-hiring-poster.jpg',
    badge: 'FOUNDER DESK',
    x: 400,
    y: 190,
    z: -100,
    rotY: 24,
    rotX: 8,
    rotZ: 4,
    wobbleY: 16,
    wobbleRotX: 2.4,
    wobbleRotZ: 1.6,
    wobbleDuration: 4.5,
    wobbleDelay: 0.2,
  },
  {
    id: 'hero-center',
    title: 'Hotter Than Baddies',
    client: 'Solanas Chinese • Thai',
    image: '/work/solanas-chilli-chicken.jpg',
    badge: 'VIRAL FLAGSHIP',
    x: 0,
    y: 0,
    z: 0,
    rotY: 0,
    rotX: 0,
    rotZ: 0,
    wobbleY: 9,
    wobbleRotX: 1.2,
    wobbleRotZ: 0.8,
    wobbleDuration: 3.2,
    wobbleDelay: 0,
  },
];

export const StudioCardWarpLoader: React.FC = () => {
  const { isIntroActive, isBetweenActive, transitionTitle, finishIntro } = usePageTransition();
  const isMobile = useIsMobile();
  const [isWarpingOut, setIsWarpingOut] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(1);
  const counterRef = useRef<HTMLSpanElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const isActive = isIntroActive || isBetweenActive;

  const cardsToRender = isMobile
    ? HIGH_RES_CARDS.filter(
        (card) => card.id === 'hero-center' || card.id === 'dimsum-silk' || card.id === 'jade-dimsum'
      )
    : HIGH_RES_CARDS;

  // Responsive scale factor for 3D card layout offsets across viewports
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setScaleFactor(0.52);
      else if (w < 1024) setScaleFactor(0.76);
      else setScaleFactor(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ultra-smooth 60fps/120fps hardware-locked RAF counter (Zero React re-renders)
  useEffect(() => {
    if (!isActive) return;

    setIsWarpingOut(false);
    const duration = isBetweenActive ? 750 : isMobile ? 1100 : 1600;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Custom cubic easeOut curve
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const percentage = Math.round(easedProgress * 100);

      if (counterRef.current) {
        counterRef.current.textContent = `${percentage}`;
      }
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${percentage}%`;
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(updateCounter);
      } else {
        setIsWarpingOut(true);
        setTimeout(() => {
          if (isIntroActive) finishIntro();
        }, 600);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateCounter);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive, isBetweenActive, isIntroActive, finishIntro, isMobile]);

  if (!isActive) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1 }}
        animate={
          isWarpingOut
            ? {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                opacity: 0.9,
              }
            : {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                opacity: 1,
              }
        }
        exit={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', opacity: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[200] overflow-hidden bg-[#07080B] text-white flex flex-col justify-between p-6 sm:p-10 select-none cursor-default"
        style={{
          perspective: 1400,
          perspectiveOrigin: 'center center',
          willChange: 'clip-path, opacity',
        }}
      >
        {/* Soft Ambient Ethereal Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,42,85,0.08)_0%,_rgba(7,8,11,0.98)_72%)] pointer-events-none" />

        {/* Top Header Status & Skip Action */}
        <div className="relative z-30 flex items-center justify-between max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/70">
            <span className="w-2 h-2 rounded-full bg-brand-red" />
            <span className="font-bold text-white tracking-widest">RIWA CREATIVES</span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-white/40">3D STUDIO PORTAL</span>
          </div>

          <button
            type="button"
            onClick={finishIntro}
            className="flex items-center justify-center gap-2 min-h-[44px] sm:min-h-0 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white text-white font-mono text-[10px] uppercase tracking-widest transition-all cursor-pointer shadow-sm touch-manipulation"
          >
            <span>Skip [Esc]</span>
          </button>
        </div>

        {/* 3D Floating Cards Tunnel / Vortex with Organic Zero-Gravity Wobble */}
        <div
          className="relative w-full h-full flex items-center justify-center pointer-events-none"
          style={{
            transformStyle: 'preserve-3d',
            perspective: 1400,
          }}
        >
          {cardsToRender.map((card) => {
            const isCenter = card.id === 'hero-center';
            const targetX = card.x * scaleFactor;
            const targetY = card.y * scaleFactor;

            return (
              <motion.div
                key={card.id}
                initial={{
                  x: targetX,
                  y: targetY,
                  z: card.z - 250,
                  rotateY: card.rotY,
                  rotateX: card.rotX,
                  rotateZ: card.rotZ,
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={
                  isWarpingOut
                    ? {
                        // Smooth fly-through past the camera without pixel blowup
                        z: isCenter ? 460 : card.z + 650,
                        x: targetX * 1.45,
                        y: targetY * 1.45,
                        rotateX: card.rotX,
                        rotateY: card.rotY,
                        rotateZ: card.rotZ,
                        opacity: 0,
                        scale: 1.08,
                      }
                    : {
                        z: card.z,
                        x: targetX,
                        y: [targetY, targetY - card.wobbleY, targetY + card.wobbleY, targetY],
                        rotateX: [
                          card.rotX - card.wobbleRotX,
                          card.rotX + card.wobbleRotX,
                          card.rotX - card.wobbleRotX,
                        ],
                        rotateZ: [
                          card.rotZ - card.wobbleRotZ,
                          card.rotZ + card.wobbleRotZ,
                          card.rotZ - card.wobbleRotZ,
                        ],
                        opacity: isCenter ? 1 : 0.88,
                        scale: 1,
                      }
                }
                transition={
                  isWarpingOut
                    ? {
                        duration: 0.62,
                        ease: [0.16, 1, 0.3, 1],
                      }
                    : {
                        y: {
                          duration: card.wobbleDuration,
                          repeat: Infinity,
                          repeatType: 'reverse',
                          ease: 'easeInOut',
                          delay: card.wobbleDelay,
                        },
                        rotateX: {
                          duration: card.wobbleDuration * 1.15,
                          repeat: Infinity,
                          repeatType: 'reverse',
                          ease: 'easeInOut',
                          delay: card.wobbleDelay,
                        },
                        rotateZ: {
                          duration: card.wobbleDuration * 0.9,
                          repeat: Infinity,
                          repeatType: 'reverse',
                          ease: 'easeInOut',
                          delay: card.wobbleDelay,
                        },
                        z: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                        x: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.5, ease: 'easeOut' },
                        scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                      }
                }
                style={{
                  position: 'absolute',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  willChange: 'transform, opacity',
                }}
                className={`rounded-2xl border overflow-hidden bg-[#0D0F14] shadow-2xl transition-shadow ${
                  isCenter
                    ? 'w-[260px] sm:w-[330px] md:w-[370px] aspect-[4/5] z-20 border-brand-red/60 shadow-[0_20px_50px_rgba(255,42,85,0.15)]'
                    : 'w-[200px] sm:w-[260px] md:w-[290px] aspect-[4/5] z-10 border-white/20'
                }`}
              >
                {/* Top Frosted Chrome Pill */}
                <div className="flex items-center justify-between px-3.5 py-2 border-b border-white/10 bg-black/70 backdrop-blur-md font-mono text-[9px] uppercase tracking-wider text-white/80">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Sparkles size={10} className="text-brand-red" />
                    <span>{card.badge}</span>
                  </span>
                  <span className="text-white/40 truncate ml-2">{card.client}</span>
                </div>

                {/* 100% High-Resolution Artwork (Never Upscaled) */}
                <div className="relative w-full h-full overflow-hidden bg-black">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="eager"
                    decoding="sync"
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
                    style={{
                      transform: 'translateZ(0)',
                      imageRendering: '-webkit-optimize-contrast',
                      backfaceVisibility: 'hidden',
                    }}
                  />
                  {/* Subtle darkening vignette on center card for maximum counter contrast */}
                  <div
                    className={`absolute inset-0 pointer-events-none ${
                      isCenter
                        ? 'bg-gradient-to-t from-black/90 via-black/35 to-black/30'
                        : 'bg-gradient-to-t from-black/90 via-black/20 to-transparent'
                    }`}
                  />
                  <div className="absolute bottom-5 left-3.5 right-3.5 font-mono">
                    <h4 className="font-display text-xs sm:text-sm font-bold uppercase text-white truncate drop-shadow">
                      {card.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Central Telemetry Counter & Glowing Laser Load Bar (Guaranteed In Front of All 3D Cards) */}
        <motion.div
          animate={isWarpingOut ? { opacity: 0, scale: 1.05 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center pointer-events-none px-4"
        >
          <motion.div
            animate={{
              y: [-4, 4],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className="flex flex-col items-center"
          >
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-red font-bold block mb-1 drop-shadow-md">
              {transitionTitle}
            </span>
            <div className="font-display text-7xl sm:text-9xl md:text-[10rem] font-black uppercase tracking-tighter text-white drop-shadow-[0_12px_45px_rgba(0,0,0,0.98)] leading-none select-none">
              <span ref={counterRef}>0</span>
              <span className="text-brand-red text-4xl sm:text-6xl font-light ml-1">%</span>
            </div>

            {/* Tactical High-Contrast Glowing Red Laser Load Bar */}
            <div className="w-52 sm:w-72 h-1.5 sm:h-2 rounded-full bg-black/60 border border-white/20 overflow-hidden mt-3 shadow-2xl backdrop-blur-md p-0.5">
              <div
                ref={progressBarRef}
                className="h-full bg-brand-red rounded-full shadow-[0_0_14px_var(--accent-red)]"
                style={{ width: '0%', transition: 'width 0.05s linear' }}
              />
            </div>

            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white/80 mt-3 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 block drop-shadow-md">
              // AERIAL FORESIGHT · VISUAL GRAVITY · SCALE
            </span>
          </motion.div>
        </motion.div>

        {/* Bottom Status Line */}
        <div className="relative z-30 flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-white/10 font-mono text-[10px] text-white/40 uppercase tracking-widest max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 text-white/60">
            <span>OBSESSIVE AD ART</span>
            <span>·</span>
            <span className="text-brand-red font-bold">RUTHLESS GROWTH</span>
          </div>

          <div className="flex items-center gap-2 text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>EST. 2024 · THE RIWA PROTOCOL</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
