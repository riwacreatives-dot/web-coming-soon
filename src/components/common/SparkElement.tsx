import React from 'react';
import { motion } from 'framer-motion';
import { ChapterIndex } from '../../hooks/useChapterScroll';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface SparkElementProps {
  chapter: ChapterIndex;
  size?: number;
  className?: string;
  onOrange?: boolean;
}

/**
 * THE SPARK — One continuous visual signature transforming across all 7 chapters:
 * 0: Origin Red Dot -> 1: Brand Diamond -> 2: Campaign Crop Bar ->
 * 3: Digital Reticle -> 4: Events Stage Starburst -> 5: People Aperture Ring ->
 * 6: Visitor's New Orange Spark Seed
 */
export const SparkElement: React.FC<SparkElementProps> = ({
  chapter,
  size = 22,
  className = '',
  onOrange = false,
}) => {
  const reduced = useReducedMotion();

  const accentColor =
    chapter === 4
      ? onOrange
        ? '#111116'
        : '#FD7D3C'
      : chapter === 6
        ? '#FD7D3C'
        : '#EA1E4D';

  const transition = reduced
    ? { duration: 0 }
    : { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

  return (
    <motion.div
      aria-hidden="true"
      className={`relative flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
      animate={{ rotate: chapter === 1 ? 45 : 0 }}
      transition={transition}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className="overflow-visible"
      >
        {/* CH01: Origin Dot (and CH07: Visitor's Orange Dot) */}
        {(chapter === 0 || chapter === 6) && (
          <g>
            {!reduced && (
              <motion.circle
                cx="12"
                cy="12"
                r="8"
                stroke={accentColor}
                strokeWidth="1"
                style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                initial={{ scale: 0.6, opacity: 0.6 }}
                animate={{ scale: [0.7, 1.35, 0.7], opacity: [0.6, 0.08, 0.6] }}
                transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut' }}
              />
            )}
            <motion.circle
              cx="12"
              cy="12"
              r={chapter === 6 ? 4.5 : 3.5}
              fill={accentColor}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              initial={false}
              animate={{ scale: 1 }}
              transition={transition}
            />
          </g>
        )}

        {/* CH02: Brand Identity Construction Lozenge + Grid Hairlines */}
        {chapter === 1 && (
          <g>
            <line x1="12" y1="-4" x2="12" y2="28" stroke={accentColor} strokeWidth="0.75" opacity="0.35" />
            <line x1="-4" y1="12" x2="28" y2="12" stroke={accentColor} strokeWidth="0.75" opacity="0.35" />
            <motion.rect
              x="7"
              y="7"
              width="10"
              height="10"
              fill={accentColor}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              initial={reduced ? false : { scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={transition}
            />
          </g>
        )}

        {/* CH03: Commercial Campaign Crop Frame [ ▬ ] */}
        {chapter === 2 && (
          <g>
            <path d="M3 8V4H7M17 4H21V8M21 16V20H17M7 20H3V16" stroke={accentColor} strokeWidth="1.5" />
            <motion.rect
              x="6"
              y="11"
              width="12"
              height="2"
              fill={accentColor}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              initial={reduced ? false : { scaleX: 0.2 }}
              animate={{ scaleX: 1 }}
              transition={transition}
            />
          </g>
        )}

        {/* CH04: Digital Interface Crosshair Reticle ⌖ */}
        {chapter === 3 && (
          <g>
            <circle cx="12" cy="12" r="6" stroke={accentColor} strokeWidth="1.4" />
            <line x1="12" y1="1" x2="12" y2="6" stroke={accentColor} strokeWidth="1.4" />
            <line x1="12" y1="18" x2="12" y2="23" stroke={accentColor} strokeWidth="1.4" />
            <line x1="1" y1="12" x2="6" y2="12" stroke={accentColor} strokeWidth="1.4" />
            <line x1="18" y1="12" x2="23" y2="12" stroke={accentColor} strokeWidth="1.4" />
            <circle cx="12" cy="12" r="2" fill={accentColor} />
          </g>
        )}

        {/* CH05: Events Stage Starburst Spotlight ✦ */}
        {chapter === 4 && (
          <g>
            {!reduced && (
              <motion.circle
                cx="12"
                cy="12"
                r="10"
                fill={accentColor}
                opacity="0.12"
                style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                animate={{ scale: [0.9, 1.3, 0.9], opacity: [0.18, 0.05, 0.18] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
              />
            )}
            <path
              d="M12 2L13.7 10.3L22 12L13.7 13.7L12 22L10.3 13.7L2 12L10.3 10.3L12 2Z"
              fill={accentColor}
            />
          </g>
        )}

        {/* CH06: People Portrait Aperture Ring ○ */}
        {chapter === 5 && (
          <g>
            <circle cx="12" cy="12" r="8.5" stroke={accentColor} strokeWidth="1.6" />
            <circle cx="12" cy="12" r="4" stroke={accentColor} strokeWidth="1" opacity="0.45" />
            <circle cx="12" cy="12" r="1.5" fill={accentColor} />
          </g>
        )}
      </svg>
    </motion.div>
  );
};
