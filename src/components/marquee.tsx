import { profile } from '@/content/profile';

/**
 * Trust strip (SPEC §4.3) — subtle scrolling row of products & notable clients,
 * framed honestly. The CSS marquee animation is disabled under prefers-reduced-motion
 * by the global override in globals.css, leaving a static, readable row.
 */
export function Marquee() {
  const { label, items } = profile.trustStrip;
  // Duplicate the list so the loop is seamless.
  const doubled = [...items, ...items];

  return (
    <section aria-label={label} className="bg-bg-elevated/40 border-y border-border py-6">
      <div className="container-page">
        <p className="section-label mb-4">{label}</p>
      </div>
      <div className="group relative overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent" />
        <ul
          className="flex w-max animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {doubled.map((item, i) => (
            <li
              key={`${item}-${i}`}
              className="whitespace-nowrap font-mono text-sm uppercase tracking-wider text-fg-subtle"
            >
              {item}
            </li>
          ))}
        </ul>
        {/* Static, screen-reader-friendly list */}
        <ul className="sr-only">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
