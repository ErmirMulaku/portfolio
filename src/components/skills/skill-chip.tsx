'use client';

import { ArrowUpRight } from 'lucide-react';
import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { projects } from '@/content/projects';
import { levelLabels, type Skill } from '@/content/skills';
import { cn } from '@/lib/utils';
import { LevelDot } from './level-dot';

const CHIP_BASE =
  'inline-flex max-w-full items-center gap-2 rounded-sm border px-2.5 py-1.5 text-left font-mono text-xs leading-snug';

const CHIP_LEVEL: Record<Skill['level'], string> = {
  daily: 'border-border-strong bg-surface text-fg',
  experienced: 'bg-surface/60 border-border text-fg-muted',
  familiar: 'border-border text-fg-muted',
};

/**
 * A skill chip. Chips with `usedIn` become a disclosure button whose popover lists
 * the projects: opens on mouse hover, keyboard focus, or tap (toggle). Esc closes.
 */
export function SkillChip({ skill }: { skill: Skill }) {
  const usedIn = (skill.usedIn ?? [])
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p) => p !== undefined);

  const content = (
    <>
      <LevelDot />
      <span className="min-w-0 break-words">{skill.name}</span>
      <span className="sr-only">({levelLabels[skill.level]})</span>
    </>
  );

  if (usedIn.length === 0) {
    return <span className={cn(CHIP_BASE, CHIP_LEVEL[skill.level])}>{content}</span>;
  }

  return <InteractiveChip skill={skill} projects={usedIn} content={content} />;
}

type InteractiveChipProps = {
  skill: Skill;
  projects: Array<{ slug: string; name: string }>;
  content: React.ReactNode;
};

function InteractiveChip({ skill, projects: usedIn, content }: InteractiveChipProps) {
  const [hovered, setHovered] = useState(false);
  const [keyboardFocused, setKeyboardFocused] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [alignRight, setAlignRight] = useState(false);
  const open = hovered || keyboardFocused || pinned;

  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  // Set by Esc so returning focus to the button doesn't immediately reopen the popover.
  const dismissedRef = useRef(false);
  const popoverId = useId();

  const close = () => {
    setHovered(false);
    setKeyboardFocused(false);
    setPinned(false);
  };

  // Close on outside tap/click and on Escape.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) close();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      dismissedRef.current = true;
      close();
      if (wrapRef.current?.contains(document.activeElement)) buttonRef.current?.focus();
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  // Keep the popover inside the viewport: flip to right-aligned near the right edge.
  useLayoutEffect(() => {
    if (!open || !wrapRef.current || !popoverRef.current) return;
    const chip = wrapRef.current.getBoundingClientRect();
    const width = popoverRef.current.offsetWidth;
    setAlignRight(chip.left + width > window.innerWidth - 16);
  }, [open]);

  return (
    <div
      ref={wrapRef}
      data-popover-open={open || undefined}
      className="relative inline-block max-w-full"
      onPointerEnter={(e) => e.pointerType === 'mouse' && setHovered(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setHovered(false)}
      onFocus={(e) => {
        // Only keyboard focus opens it; taps are handled by onClick.
        if (!dismissedRef.current && e.target.matches(':focus-visible')) setKeyboardFocused(true);
      }}
      onBlur={(e) => {
        if (wrapRef.current?.contains(e.relatedTarget as Node)) return;
        dismissedRef.current = false;
        setKeyboardFocused(false);
        setPinned(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={popoverId}
        onClick={() => setPinned((p) => !p)}
        className={cn(
          CHIP_BASE,
          CHIP_LEVEL[skill.level],
          'group/chip cursor-pointer transition-colors duration-200 hover:border-accent hover:text-fg',
          open && 'border-accent text-fg',
        )}
      >
        {content}
        <ArrowUpRight
          aria-hidden="true"
          className={cn(
            'size-3 shrink-0 transition-colors duration-200 group-hover/chip:text-accent',
            open ? 'text-accent' : 'text-fg-muted',
          )}
        />
      </button>

      {/* pt-2 bridges the gap so the pointer can travel from chip to popover. */}
      <div
        ref={popoverRef}
        id={popoverId}
        className={cn(
          'absolute top-full z-30 w-max max-w-[min(16rem,calc(100vw-2rem))] pt-2 duration-200 ease-out-expo',
          alignRight ? 'right-0' : 'left-0',
          open
            ? 'visible translate-y-0 opacity-100 transition-[opacity,transform]'
            : 'invisible -translate-y-1 opacity-0 transition-[opacity,transform,visibility]',
        )}
      >
        <div className="rounded-lg border border-border-strong bg-bg-elevated p-3 shadow-xl shadow-black/50">
          <p className="font-mono text-[0.68rem] uppercase tracking-label text-fg-muted">Used in</p>
          <ul className="mt-2 space-y-1.5">
            {usedIn.map((project) => (
              <li key={project.slug}>
                <a
                  href={`#${project.slug}`}
                  onClick={close}
                  className="link-underline text-sm text-fg hover:text-accent"
                >
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 flex items-center gap-2 border-t border-border pt-2 font-mono text-[0.68rem] text-fg-muted">
            <LevelDot />
            {levelLabels[skill.level]}
          </p>
        </div>
      </div>
    </div>
  );
}
