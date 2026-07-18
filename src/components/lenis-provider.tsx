'use client';

import { ReactLenis } from 'lenis/react';
import { useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

/**
 * Smooth scrolling via Lenis (SPEC §2.2). Mounted at the root so the whole page
 * inherits it. When the user prefers reduced motion, Lenis is skipped entirely and
 * native scrolling is used — motion must never fight accessibility settings.
 */
export function LenisProvider({ children }: { children: ReactNode }) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
