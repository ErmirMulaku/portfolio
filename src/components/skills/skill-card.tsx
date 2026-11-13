'use client';

import { motion } from 'motion/react';
import type { Skill, SkillCategory } from '@/content/skills';
import { staggerItem } from '@/lib/motion';
import { SPOTLIGHT_BG, SPOTLIGHT_LAYER, trackSpotlight } from '@/lib/spotlight';
import { cn } from '@/lib/utils';
import { SkillChip } from './skill-chip';

type SkillCardProps = {
  category: SkillCategory;
  skills: Skill[];
  /** False when another category is highlighted — the card dims instead of leaving the grid. */
  active: boolean;
};

export function SkillCard({ category, skills, active }: SkillCardProps) {
  const Icon = category.icon;
  const titleId = `skills-${category.id}`;

  return (
    <motion.li
      variants={staggerItem}
      className={cn(
        // Lift the card holding an open popover above its neighbours.
        'relative min-w-0 has-[[data-popover-open]]:z-20',
        category.size === 'wide' && 'sm:col-span-2',
      )}
    >
      <article
        aria-labelledby={titleId}
        onPointerMove={trackSpotlight}
        className={cn(
          'group/card relative flex h-full flex-col rounded-xl border p-6 transition-[opacity,transform,border-color,background-color] duration-500 ease-out-expo sm:p-7',
          'bg-surface/40 border-border hover:border-border-strong',
          active ? 'scale-100 opacity-100' : 'scale-[0.97] opacity-40',
        )}
      >
        <div
          aria-hidden="true"
          className={cn(SPOTLIGHT_LAYER, 'group-hover/card:opacity-100')}
          style={{ background: SPOTLIGHT_BG }}
        />

        <header className="relative flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-bg text-accent">
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <h3 id={titleId} className="text-lg font-semibold text-fg">
              {category.title}
            </h3>
          </div>
          <span className="shrink-0 pt-2.5 font-mono text-xs text-fg-muted">
            {skills.length} {skills.length === 1 ? 'tool' : 'tools'}
          </span>
        </header>

        <p className="relative mt-3 text-sm leading-relaxed text-fg-muted">
          {category.description}
        </p>

        <ul className="relative mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li key={skill.name} className="max-w-full">
              <SkillChip skill={skill} />
            </li>
          ))}
        </ul>
      </article>
    </motion.li>
  );
}
