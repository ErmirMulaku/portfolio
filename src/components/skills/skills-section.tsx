'use client';

import { Award, GraduationCap } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { profile } from '@/content/profile';
import { skillCategories, skillsIn } from '@/content/skills';
import { staggerContainer } from '@/lib/motion';
import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';
import { CategoryFilter, type SkillFilter } from './category-filter';
import { SkillCard } from './skill-card';

export function SkillsSection() {
  const [filter, setFilter] = useState<SkillFilter>('all');
  const prefersReduced = useReducedMotion();
  const highlighted = skillCategories.find((c) => c.id === filter);

  return (
    <section id="skills" className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="04">Skills &amp; stack</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-section-title font-medium text-fg">
            Full-stack, from interface to infrastructure.
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <CategoryFilter categories={skillCategories} active={filter} onChange={setFilter} />
        </Reveal>

        <p className="sr-only" aria-live="polite">
          {highlighted ? `Highlighting ${highlighted.title}` : ''}
        </p>

        {/* Bento: 1 col on mobile, 2 on tablet, 4 on desktop; wide cards span 2. */}
        <motion.ul
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial={prefersReduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category) => (
            <SkillCard
              key={category.id}
              category={category}
              skills={skillsIn(category.id)}
              active={filter === 'all' || filter === category.id}
            />
          ))}
        </motion.ul>
        {/* Certifications & education — hairline card pair. */}
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col bg-bg p-7 sm:p-8">
              <p className="section-label flex items-center gap-2">
                <Award className="size-4 text-accent" aria-hidden="true" />
                Certifications
              </p>
              <ul className="mt-5 space-y-3">
                {profile.certifications.map((cert) => (
                  <li key={cert.name} className="flex items-start gap-3 text-sm text-fg-muted">
                    <span
                      className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span>
                      {cert.name}
                      <span className="mt-0.5 block font-mono text-xs text-fg-subtle">
                        {cert.issuer} · {cert.year}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex h-full flex-col bg-bg p-7 sm:p-8">
              <p className="section-label flex items-center gap-2">
                <GraduationCap className="size-4 text-accent" aria-hidden="true" />
                Education
              </p>
              <p className="mt-5 text-base font-medium text-fg">{profile.education.degree}</p>
              <p className="mt-1 text-sm text-fg-muted">{profile.education.school}</p>
              <p className="mt-auto pt-5 font-mono text-xs text-fg-subtle">
                {profile.education.period}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
