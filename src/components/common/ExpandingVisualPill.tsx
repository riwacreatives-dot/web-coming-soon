import React from 'react';
import { motion } from 'framer-motion';

interface ExpandingVisualPillProps {
  mediaSrc?: string;
  mediaType?: 'image' | 'video';
  alt?: string;
  className?: string;
  targetWidth?: string;
  delay?: number;
}

export const ExpandingVisualPill: React.FC<ExpandingVisualPillProps> = ({
  mediaSrc = '/work/solanas-poster.jpg',
  mediaType = 'image',
  alt = 'Visual preview',
  className = '',
  targetWidth = '6.5rem',
  delay = 0.3,
}) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const finalWidth = isMobile ? '3.4rem' : targetWidth;

  return (
    <motion.span
      initial={{ width: '0rem', opacity: 0, margin: '0 0' }}
      whileInView={{
        width: finalWidth,
        opacity: 1,
        margin: '0 0.3em',
      }}
      viewport={{ once: true, margin: '150px 0px 0px 0px', amount: 0.05 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`inline-block align-middle overflow-hidden rounded-full border border-line-border shadow-md bg-canvas-subtle select-none cursor-pointer group shrink-0 ${className}`}
      style={{
        verticalAlign: 'middle',
        height: '0.72em',
        minHeight: '28px',
        maxHeight: '76px',
      }}
    >
      <span className="relative block w-full h-full overflow-hidden">
        {mediaType === 'video' ? (
          <video
            src={mediaSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <img
            src={mediaSrc}
            alt={alt}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
        )}
        <span className="absolute inset-0 bg-brand-red/10 mix-blend-overlay pointer-events-none" />
      </span>
    </motion.span>
  );
};
