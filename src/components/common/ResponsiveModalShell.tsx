import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { X } from 'lucide-react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useScrollLock } from '../../hooks/useScrollLock';

interface ResponsiveModalShellProps {
  isOpen: boolean;
  onClose: () => void;
  maxWidthClass?: string;
  zIndexClass?: string;
  panelClassName?: string;
  mobileFooter?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Portals dialogs directly to document.body (immune to ancestor transforms/filters).
 * Renders centered dialogs on desktop/laptop (>= 768px) and tactile swipe-down
 * bottom sheets on mobile (< 768px) with a sticky thumb footer.
 */
export const ResponsiveModalShell: React.FC<ResponsiveModalShellProps> = ({
  isOpen,
  onClose,
  maxWidthClass = 'max-w-3xl',
  zIndexClass = 'z-[120]',
  panelClassName = 'border border-white/10 bg-[#0A0C10] text-white',
  mobileFooter,
  children,
}) => {
  const isMobile = useIsMobile();
  const dragControls = useDragControls();

  useScrollLock(isMobile && isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 ${zIndexClass} flex ${
            isMobile
              ? 'items-end justify-center p-0 bg-black/85 backdrop-blur-xl'
              : 'items-start sm:items-center justify-center p-3 sm:p-8 pt-16 sm:pt-8 bg-black/95 backdrop-blur-2xl overflow-y-auto'
          }`}
          onClick={onClose}
        >
          {/* Desktop / Laptop Top-Right Floating Close Pill (>= 768px — 100% Preserved) */}
          {!isMobile && (
            <button
              type="button"
              onClick={onClose}
              className="fixed top-4 right-4 sm:top-6 sm:right-6 z-30 flex items-center justify-center gap-1.5 sm:gap-2 min-h-[44px] px-4 py-2 rounded-full border border-white/20 bg-black/85 text-white font-mono text-[11px] sm:text-xs uppercase tracking-widest hover:border-white transition-all cursor-pointer shadow-xl backdrop-blur-md touch-manipulation"
            >
              <span>Close</span>
              <X size={14} />
            </button>
          )}

          {isMobile ? (
            /* Mobile-Only Native Bottom Sheet with Top Drag-to-Dismiss Handle */
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 340 }}
              drag="y"
              dragControls={dragControls}
              dragListener={false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.45 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 90 || info.velocity.y > 380) {
                  onClose();
                }
              }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-h-[90dvh] rounded-t-[28px] overflow-hidden shadow-2xl flex flex-col ${panelClassName}`}
            >
              {/* Drag Handle & Dismiss Pill Header */}
              <div
                onPointerDown={(e) => dragControls.start(e)}
                className="relative flex items-center justify-center pt-3 pb-2.5 border-b border-white/10 shrink-0 cursor-grab active:cursor-grabbing touch-none select-none"
              >
                <span className="w-10 h-1 rounded-full bg-white/25 block" />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close sheet"
                  className="absolute right-3 top-1/2 -translate-y-1/2 min-w-[36px] min-h-[36px] rounded-full bg-white/10 text-white/80 flex items-center justify-center touch-manipulation"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Scrollable Sheet Interior */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                {children}
              </div>

              {/* Sticky Thumb Footer Bar */}
              {mobileFooter && (
                <div className="shrink-0 px-4 pt-3 pb-[max(0.9rem,env(safe-area-inset-bottom))] border-t border-white/10 bg-[#0A0C10]/95 backdrop-blur-md">
                  {mobileFooter}
                </div>
              )}
            </motion.div>
          ) : (
            /* Desktop Centered Editorial Modal (>= 768px — 100% Preserved) */
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`relative ${maxWidthClass} w-full my-auto mb-12 sm:mb-auto rounded-2xl overflow-hidden shadow-2xl ${panelClassName}`}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
