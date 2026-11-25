import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface TextScrubRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  accentWords?: string[];
}

const Word: React.FC<{
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
  isAccent?: boolean;
}> = ({ children, range, progress, isAccent }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);

  return (
    <span className="inline-block mr-[0.28em] last:mr-0">
      <motion.span
        style={{ opacity }}
        className={`inline-block ${isAccent ? 'text-brand-red font-bold' : ''}`}
      >
        {children}
      </motion.span>
    </span>
  );
};

export const TextScrubReveal: React.FC<TextScrubRevealProps> = ({
  text,
  className = '',
  accentWords = [],
}) => {
  const elementRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start 0.9', 'start 0.4'],
  });

  const words = text.split(' ');

  return (
    <p ref={elementRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const clean = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').toLowerCase();
        const isAccent = accentWords.some((a) => clean.includes(a.toLowerCase()));

        return (
          <Word
            key={i}
            range={[start, end]}
            progress={scrollYProgress}
            isAccent={isAccent}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
};

