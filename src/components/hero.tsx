'use client';

import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { profile } from '@/content/profile';
import { StatCounter } from '@/components/ui/stat-counter';
import { EASE_OUT } from '@/lib/motion';

export function Hero() {
  const prefersReduced = useReducedMotion();

  // Staggered entrance for the hero (SPEC §2.2). Reduced-motion → no transform.
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.12, delayChildren: 0.1 } },
  };
  const item = prefersReduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
      };

  return (
    <section id="top" className="relative pt-32 md:pt-40">
      <div className="container-page">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-4xl">
          {/* Availability status */}
          <motion.div variants={item}>
            <span className="bg-surface/60 inline-flex items-center gap-2.5 rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-fg-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-pulse-dot rounded-full bg-accent" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {profile.availabilityNote}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mt-7 text-balance font-sans text-display font-medium text-fg"
          >
            {profile.headline}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted md:text-xl"
          >
            {profile.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-contrast transition-transform hover:-translate-y-0.5"
            >
              View work
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:bg-surface"
            >
              Get in touch
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </motion.div>

          {/* Stat row */}
          <motion.dl
            variants={item}
            className="mt-14 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:flex-wrap sm:gap-x-12"
          >
            {profile.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-sans text-3xl font-semibold text-fg">
                  <StatCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </dd>
                <span className="max-w-[16rem] font-mono text-xs uppercase tracking-wider text-fg-subtle">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
