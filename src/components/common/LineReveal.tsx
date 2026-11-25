import React from 'react';
import { motion } from 'framer-motion';

interface LineRevealProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  as?: 'div' | 'p' | 'h2' | 'h3';
}

export const LineReveal: React.FC<LineRevealProps> = ({
  lines,
  className = '',
  lineClassName = '',
  delay = 0,
  stagger = 0.1,
  as = 'div',
}) => {
  const Component = as as any;

  return (
    <Component className={className}>
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden">
          <motion.span
            initial={{ y: '120%', opacity: 0.2 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{
              duration: 1.05,
              delay: delay + idx * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`block ${lineClassName}`}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};

