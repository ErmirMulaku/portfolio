'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';
import type { ElementType, ReactNode } from 'react';
import { EASE_OUT } from '@/lib/motion';

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay before the reveal starts, in seconds. */
  delay?: number;
  /** Vertical offset the element drifts up from, in px. */
  y?: number;
  /** Render as a different element (e.g. 'li', 'section'). */
  as?: ElementType;
  /** Re-trigger every time it enters the viewport instead of once. */
  once?: boolean;
};

/**
 * Scroll-reveal in-view wrapper (SPEC §2.2). Fades + drifts content up when it
 * enters the viewport. When the user prefers reduced motion, content renders
 * immediately with no transform or fade.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  as = 'div',
  once = true,
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  // motion is a proxy: motion['div'] === motion.div. Works for any HTML tag string.
  const MotionTag = (motion as unknown as Record<string, ElementType>)[as as string];

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: EASE_OUT, delay },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2, margin: '0px 0px -10% 0px' }}
    >
      {children}
    </MotionTag>
  );
}
