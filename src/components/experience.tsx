'use client';

import { ArrowDown, ArrowUp } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Fragment } from 'react';
import { experience, type Employer, type Role } from '@/content/experience';
import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';
import { TechTag } from '@/components/ui/tech-tag';
import { EASE_OUT } from '@/lib/motion';
import { cn } from '@/lib/utils';

/** Renders **bold** spans so the key fact of each bullet is scannable. */
function Emphasis({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-medium text-fg">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/** Rail node, centred on the timeline line. */
function Node({ current, children }: { current?: boolean; children?: React.ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="absolute left-0 top-1 flex size-4 -translate-x-1/2 items-center justify-center"
    >
      {children ?? (
        <span
          className={cn(
            'inline-flex size-2.5 rounded-full border-2',
            current ? 'border-accent bg-accent' : 'border-border-strong bg-bg',
          )}
        />
      )}
    </span>
  );
}

function RoleEntry({ role }: { role: Role }) {
  const current = !role.end;
  return (
    <li className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
      <Node current={current} />

      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <h4 className="flex flex-wrap items-center gap-2.5 text-lg font-semibold text-fg">
          {role.title}
          {current ? (
            <span className="border-accent/40 rounded-full border bg-accent-muted px-2 py-0.5 font-mono text-[0.68rem] font-normal uppercase tracking-wider text-accent">
              Current
            </span>
          ) : null}
        </h4>
        <p className="font-mono text-xs text-fg-muted">
          {role.start} – {role.end ?? 'Present'}
          {role.duration ? ` · ${role.duration}` : null}
        </p>
      </div>

      <ul className="mt-4 space-y-2.5">
        {role.highlights.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
            <span
              className="mt-[0.6rem] size-1 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            <span>
              <Emphasis text={item} />
            </span>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${role.title} stack`}>
        {role.stack.map((tech) => (
          <li key={tech}>
            <TechTag>{tech}</TechTag>
          </li>
        ))}
      </ul>
    </li>
  );
}

/** Marks a promotion between two roles at the same employer. */
function Promotion({ role }: { role: Role }) {
  return (
    <li className="relative pb-12 pl-8 sm:pl-10">
      <Node>
        <span className="grid size-4 place-items-center rounded-full bg-bg text-accent">
          <ArrowUp className="size-3" />
        </span>
      </Node>
      <p className="font-mono text-xs text-fg-muted">
        Promoted to {role.title} · {role.start}
      </p>
    </li>
  );
}

function EmployerCard({ employer }: { employer: Employer }) {
  const prefersReduced = useReducedMotion();
  const newest = employer.roles[0];
  const oldest = employer.roles[employer.roles.length - 1];

  return (
    <article className="bg-surface/40 grid gap-8 rounded-xl border border-border p-6 transition-colors duration-300 hover:border-border-strong sm:p-8 lg:grid-cols-[15rem_1fr] lg:gap-12 lg:p-10">
      {/* Company */}
      <header className="lg:sticky lg:top-28 lg:self-start">
        <h3 className="text-2xl font-semibold tracking-tight text-fg">{employer.company}</h3>
        <p className="mt-1 text-sm text-fg-muted">{employer.location}</p>
        <p className="mt-3 font-mono text-xs text-accent">
          {oldest.start} – {newest.end ?? 'Present'}
        </p>
        {employer.projectSlug ? (
          <a
            href={`#${employer.projectSlug}`}
            className="mt-5 inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent"
          >
            <span className="link-underline">See the product</span>
            <ArrowDown className="size-3.5" aria-hidden="true" />
          </a>
        ) : null}
      </header>

      {/* Roles on a rail that draws itself in on scroll. */}
      <div className="relative ml-2">
        <span aria-hidden="true" className="absolute inset-y-1 left-0 w-px bg-border-strong" />
        <motion.span
          aria-hidden="true"
          className="via-accent/50 absolute inset-y-1 left-0 w-px origin-top bg-gradient-to-b from-accent to-transparent"
          initial={prefersReduced ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: EASE_OUT }}
        />
        <ol className="relative">
          {employer.roles.map((role, i) => (
            <Fragment key={role.title}>
              {i > 0 ? <Promotion role={employer.roles[i - 1]} /> : null}
              <RoleEntry role={role} />
            </Fragment>
          ))}
        </ol>
      </div>
    </article>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="03">Experience</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-section-title font-medium text-fg">
            From intern to full-stack ownership.
          </h2>
        </Reveal>

        {/* Career spine: one vertical line joining every employer, newest first. */}
        <div className="relative mt-14 pl-8 md:pl-14">
          <span
            aria-hidden="true"
            className="absolute bottom-8 left-3 top-8 w-px bg-border-strong md:left-5"
          />
          <ol className="space-y-6">
            {experience.map((employer, i) => {
              const current = !employer.roles[0].end;
              return (
                <Reveal key={employer.company} as="li" delay={i * 0.06} className="relative">
                  {/* Spine node, level with the company name. */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-5 top-8 flex size-4 -translate-x-1/2 items-center justify-center md:-left-9 lg:top-12"
                  >
                    <span
                      className={cn(
                        'inline-flex size-3 rounded-full border-2',
                        current ? 'border-accent bg-accent' : 'border-border-strong bg-bg',
                      )}
                    />
                  </span>
                  <EmployerCard employer={employer} />
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
