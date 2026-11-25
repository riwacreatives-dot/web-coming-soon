import React, { useRef, useEffect } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from 'framer-motion';

interface MarqueeProps {
  items?: string[];
  baseVelocity?: number;
  className?: string;
}

const DEFAULT_ITEMS = [
  'SOLANAS CULINARY SUITE',
  'DIKHEGA TOH BIKEGA',
  'MUSEUM-GRADE AD ART',
  'PREDATORY MATHEMATICAL SCALE',
  'FOUNDING PARTNER DISCIPLINE',
  'HIGH-TICKET RAPID SCALE',
  'RAPID REVENUE SCALE',
];

export const ScrollVelocityMarquee: React.FC<MarqueeProps> = ({
  items = DEFAULT_ITEMS,
  baseVelocity = 1.2,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useRef<boolean>(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView.current = entry.isIntersecting;
      },
      { rootMargin: '250px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });

  const wrap = (min: number, max: number, v: number) => {
    const range = max - min;
    return ((((v - min) % range) + range) % range) + min;
  };

  const x = useTransform(baseX, (v) => `${wrap(-40, -20, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    // Zero-CPU culling when offscreen
    if (!isInView.current) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * Math.abs(velocityFactor.get());
    baseX.set(baseX.get() + moveBy * 0.4);
  });

  return (
    <div
      ref={containerRef}
      data-marquee="true"
      className={`relative w-full overflow-hidden py-6 sm:py-8 border-y border-line-border select-none bg-canvas-subtle/30 ${className}`}
    >
      <motion.div
        style={{ x }}
        className="flex whitespace-nowrap will-change-transform font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-text-secondary"
      >
        {[...Array(5)].map((_, repIdx) => (
          <div key={repIdx} className="flex items-center gap-8 shrink-0 pr-8">
            {items.map((item, itemIdx) => (
              <span key={itemIdx} className="inline-flex items-center gap-8 shrink-0">
                <span className="font-bold text-text-primary hover:text-brand-red transition-colors duration-200 cursor-default">
                  {item}
                </span>
                <span className="text-brand-red font-bold select-none text-xs">✦</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

