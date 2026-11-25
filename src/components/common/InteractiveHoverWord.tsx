import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useIsTouchDevice } from '../../hooks/useIsMobile';

interface InteractiveHoverWordProps {
  children: React.ReactNode;
  previewImage?: string;
  previewLabel?: string;
  tag?: string;
  className?: string;
}

export const InteractiveHoverWord: React.FC<InteractiveHoverWordProps> = ({
  children,
  previewImage,
  previewLabel,
  tag,
  className = '',
}) => {
  const isTouch = useIsTouchDevice();
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchOpen, setIsTouchOpen] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [clampedLeft, setClampedLeft] = useState<number>(0);
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    if (isTouch) return;
    setIsHovered(true);
  };

  const handleTouchToggle = (e: React.MouseEvent) => {
    if (!isTouch || !previewImage) return;
    e.stopPropagation();

    if (!isTouchOpen && spanRef.current && typeof window !== 'undefined') {
      const rect = spanRef.current.getBoundingClientRect();
      const cardHalfWidth = 88; // w-44 = 176px / 2
      const desiredCenterX = rect.left + rect.width / 2;
      const minCenterX = cardHalfWidth + 12;
      const maxCenterX = window.innerWidth - cardHalfWidth - 12;
      const safeCenterX = Math.max(minCenterX, Math.min(desiredCenterX, maxCenterX));
      setClampedLeft(safeCenterX - rect.left);
    }

    setIsTouchOpen((prev) => !prev);
  };

  // Dismiss touch peek card on scroll or outside tap
  useEffect(() => {
    if (!isTouch || !isTouchOpen) return;

    const handleDismiss = () => setIsTouchOpen(false);
    const handleOutside = (e: Event) => {
      if (spanRef.current && !spanRef.current.contains(e.target as Node)) {
        setIsTouchOpen(false);
      }
    };

    window.addEventListener('scroll', handleDismiss, { passive: true });
    document.addEventListener('touchstart', handleOutside, { passive: true });
    document.addEventListener('click', handleOutside);
    return () => {
      window.removeEventListener('scroll', handleDismiss);
      document.removeEventListener('touchstart', handleOutside);
      document.removeEventListener('click', handleOutside);
    };
  }, [isTouch, isTouchOpen]);

  const showPreview = (isTouch ? isTouchOpen : isHovered) && !!previewImage;

  return (
    <span
      ref={spanRef}
      role={isTouch ? 'button' : undefined}
      tabIndex={isTouch ? 0 : undefined}
      onClick={handleTouchToggle}
      className={`relative inline-block cursor-pointer font-semibold underline decoration-brand-red/40 decoration-1 underline-offset-4 hover:decoration-brand-red hover:text-brand-red transition-colors ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => !isTouch && setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      {isTouch && previewImage && (
        <sup className="ml-0.5 text-[9px] text-brand-red not-italic font-bold select-none">✦</sup>
      )}

      <AnimatePresence>
        {showPreview && previewImage && (
          <motion.span
            initial={{ opacity: 0, scale: 0.85, y: isTouch ? -6 : 10, rotate: isTouch ? 0 : -4 }}
            animate={{ opacity: 1, scale: 1, y: isTouch ? -12 : -90, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: isTouch ? -6 : 10, rotate: isTouch ? 0 : -4 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            style={{
              left: isTouch ? `${clampedLeft}px` : `${coords.x}px`,
              pointerEvents: isTouch ? 'auto' : 'none',
            }}
            onClick={(e) => {
              if (isTouch) {
                e.stopPropagation();
                setIsTouchOpen(false);
              }
            }}
            className="absolute bottom-full z-50 -translate-x-1/2 w-44 rounded-xl overflow-hidden border border-line-border bg-canvas shadow-2xl p-1.5"
          >
            {isTouch && (
              <span className="absolute top-2 right-2 z-10 w-5 h-5 rounded-full bg-black/75 text-white flex items-center justify-center">
                <X size={10} />
              </span>
            )}
            <span className="block w-full h-24 rounded-lg overflow-hidden mb-1.5 bg-surface">
              <img
                src={previewImage}
                alt={previewLabel || 'Preview'}
                className="w-full h-full object-cover object-top filter contrast-105 transition-all duration-300"
              />
            </span>
            {(previewLabel || tag) && (
              <span className="flex items-center justify-between px-1 font-mono text-[9px] uppercase tracking-wider text-text-secondary">
                <span className="truncate mr-1">{previewLabel}</span>
                {tag && <span className="text-brand-red font-bold shrink-0">{tag}</span>}
              </span>
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};
