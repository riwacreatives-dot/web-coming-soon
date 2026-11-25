import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SplitHeadingProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
  stagger?: number;
  trigger?: 'inView' | 'mount';
  accentWord?: string | string[];
  accentChar?: string;
  serifWord?: string | string[];
}

export const SplitHeading: React.FC<SplitHeadingProps> = ({
  children,
  className = '',
  as = 'h1',
  delay = 0,
  stagger = 0.02,
  trigger = 'inView',
  accentWord,
  accentChar,
  serifWord,
}) => {
  const words = children.split(' ');
  const serifList = Array.isArray(serifWord) ? serifWord : serifWord ? [serifWord] : [];
  const accentList = Array.isArray(accentWord) ? accentWord : accentWord ? [accentWord] : [];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const charVariants: Variants = {
    hidden: { y: '115%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
      transitionEnd: {
        transform: 'none',
      },
    },
  };

  const content = (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      {...(trigger === 'mount'
        ? { animate: 'visible' }
        : {
            whileInView: 'visible',
            viewport: { once: true, margin: '150px 0px 0px 0px', amount: 0.02 },
          })}
      className="inline flex-wrap items-baseline"
    >
      {words.map((word, wordIdx) => {
        const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').toLowerCase();
        const isSerif = serifList.some((s) => cleanWord.includes(s.toLowerCase()));
        const isAccent = accentList.some((a) => cleanWord.includes(a.toLowerCase()));

        return (
          <span
            key={wordIdx}
            className={`inline-block whitespace-nowrap mr-[0.25em] last:mr-0 align-baseline ${
              isSerif ? 'font-serif italic font-normal tracking-normal text-[1.12em]' : ''
            }`}
          >
            {word.split('').map((char, charIdx) => {
              const isCharAccent = accentChar && char === accentChar;

              return (
                <span
                  key={charIdx}
                  className="inline-block overflow-hidden align-baseline pb-[0.12em] -mb-[0.12em]"
                >
                  <motion.span
                    variants={charVariants}
                    className={`inline-block ${
                      isCharAccent || isAccent ? 'text-brand-red' : ''
                    }`}
                  >
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </motion.span>
  );

  const Component = as as any;
  return <Component className={className}>{content}</Component>;
};
