import type { Variants } from 'motion/react';

/*
 * Shared Framer Motion variants. Durations 0.4–0.6s, easeOut — calm, not gimmicky
 * (SPEC §2.2). Reduced-motion is handled by <Reveal> (which drops the offset) plus
 * the global prefers-reduced-motion CSS override.
 */

export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Fade + small upward drift for a single revealed element. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

/** Container that staggers its children into view. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Child item for staggered containers. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

/** Reduced-motion-safe variants: fade only, no transform. */
export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: EASE_OUT } },
};
