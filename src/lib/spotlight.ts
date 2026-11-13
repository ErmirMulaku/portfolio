import type { PointerEvent } from 'react';

/** Spotlight: a CSS variable follows the mouse; a glow layer reads --spot-x / --spot-y. */
export function trackSpotlight(e: PointerEvent<HTMLElement>) {
  if (e.pointerType !== 'mouse') return;
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
}

/** Classes for the glow layer: desktop pointers only, off under reduced motion. */
export const SPOTLIGHT_LAYER =
  'pointer-events-none absolute inset-0 hidden rounded-[inherit] opacity-0 transition-opacity duration-300 motion-reduce:!hidden [@media(hover:hover)]:block';

export const SPOTLIGHT_BG =
  'radial-gradient(360px circle at var(--spot-x, 50%) var(--spot-y, 0%), var(--accent-muted), transparent 70%)';
