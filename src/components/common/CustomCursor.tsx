import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

export const CustomCursor: React.FC = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Magnetic snap coordinates
  const targetX = useMotionValue(-100);
  const targetY = useMotionValue(-100);

  // Elastic spring physics for buttery follower motion
  const springConfig = { damping: 24, stiffness: 380, mass: 0.5 };
  const cursorX = useSpring(targetX, springConfig);
  const cursorY = useSpring(targetY, springConfig);

  // Velocity stretch & orientation as pure motion values (Zero React re-renders on mouse movement)
  const stretchSpring = { damping: 22, stiffness: 320 };
  const cursorScaleX = useSpring(1, stretchSpring);
  const cursorScaleY = useSpring(1, stretchSpring);
  const cursorAngle = useSpring(0, stretchSpring);

  const prevPos = useRef({ x: 0, y: 0, time: performance.now() });

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let lastTarget: EventTarget | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const dt = Math.max(1, now - prevPos.current.time);
      const dx = e.clientX - prevPos.current.x;
      const dy = e.clientY - prevPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy) / dt;

      // Compute liquid velocity stretch without triggering React state diffing
      if (speed > 0.15 && !cursorText) {
        const deg = Math.atan2(dy, dx) * (180 / Math.PI);
        const stretch = Math.min(1.35, 1 + speed * 0.1);
        const squeeze = Math.max(0.75, 1 - speed * 0.05);
        cursorScaleX.set(stretch);
        cursorScaleY.set(squeeze);
        cursorAngle.set(deg);
      } else {
        cursorScaleX.set(1);
        cursorScaleY.set(1);
      }

      prevPos.current = { x: e.clientX, y: e.clientY, time: now };

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;

      // Only perform DOM element boundary queries when crossing element nodes
      if (e.target !== lastTarget) {
        lastTarget = e.target;
        if (!target) return;

        const interactive = target.closest(
          'button, a, input, textarea, [role="button"], .cursor-pointer'
        ) as HTMLElement | null;

        setIsHovered(!!interactive);

        if (interactive) {
          const rect = interactive.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          targetX.set(centerX * 0.35 + e.clientX * 0.65);
          targetY.set(centerY * 0.35 + e.clientY * 0.65);
        } else {
          targetX.set(e.clientX);
          targetY.set(e.clientY);
        }

        const customLabel = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
        setCursorText(customLabel || null);
      } else {
        targetX.set(e.clientX);
        targetY.set(e.clientY);
      }
    };

    const handleMouseDown = () => {
      setIsMouseDown(true);
      cursorScaleX.set(0.8);
      cursorScaleY.set(0.8);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
      cursorScaleX.set(1);
      cursorScaleY.set(1);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY, targetX, targetY, cursorText, cursorScaleX, cursorScaleY, cursorAngle]);

  if (!isVisible) return null;

  const isDark = theme === 'dark';

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[140] select-none">
      {/* Optical Circular Gradient Spotlight Aura (Gives white text a soft glowing crimson hue under cursor) */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed w-36 h-36 rounded-full pointer-events-none z-[138] bg-[radial-gradient(circle,rgba(255,42,85,0.25)_0%,rgba(255,42,85,0.09)_45%,transparent_72%)] filter blur-md"
      />

      {/* Central Precision Needle Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed w-1.5 h-1.5 rounded-full bg-brand-red pointer-events-none z-[143]"
      />

      {/* Elastic Putty & Magnetic Follower Capsule */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          rotate: cursorAngle,
          scaleX: cursorScaleX,
          scaleY: cursorScaleY,
        }}
        animate={{
          width: cursorText ? 'auto' : isHovered ? 52 : 32,
          height: cursorText ? 32 : isHovered ? 52 : 32,
          paddingLeft: cursorText ? 16 : 0,
          paddingRight: cursorText ? 16 : 0,
          backgroundColor: cursorText
            ? isDark
              ? 'rgba(255, 255, 255, 0.95)'
              : 'rgba(12, 14, 18, 0.95)'
            : isHovered
            ? 'rgba(255, 42, 85, 0.12)'
            : 'transparent',
          borderColor: isHovered
            ? 'var(--accent-red)'
            : isDark
            ? 'rgba(255, 255, 255, 0.3)'
            : 'rgba(0, 0, 0, 0.28)',
          boxShadow: isHovered
            ? '0 0 25px rgba(255, 42, 85, 0.25)'
            : '0 0 0px transparent',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 420,
          mass: 0.45,
        }}
        className="fixed rounded-full border border-solid flex items-center justify-center pointer-events-none z-[142] backdrop-blur-[2px]"
      >
        {cursorText && (
          <span
            className={`font-mono text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap leading-none ${
              isDark ? 'text-black' : 'text-white'
            }`}
          >
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
