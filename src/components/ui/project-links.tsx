import {
  Apple,
  ArrowUpRight,
  BookOpen,
  Github,
  LayoutDashboard,
  Package,
  Play,
  QrCode,
  type LucideIcon,
} from 'lucide-react';
import type { ProjectLink, ProjectLinkKind } from '@/content/projects';
import { cn } from '@/lib/utils';

const LINK_ICON: Record<ProjectLinkKind, LucideIcon> = {
  live: ArrowUpRight,
  appstore: Apple,
  playstore: Play,
  github: Github,
  dashboard: LayoutDashboard,
  menu: QrCode,
  storybook: BookOpen,
  npm: Package,
};

/** Kinds rendered as prominent "store" badges vs. plain text links. */
const BADGE_KINDS: ProjectLinkKind[] = ['appstore', 'playstore', 'github', 'storybook', 'npm'];

function LinkButton({ link, prominent }: { link: ProjectLink; prominent: boolean }) {
  const Icon = LINK_ICON[link.kind];
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group/link inline-flex items-center gap-2 rounded-md border px-3.5 py-2',
        'font-mono text-xs transition-colors duration-200',
        prominent
          ? 'border-border bg-bg-elevated text-fg hover:border-border-strong hover:bg-surface-hover'
          : 'border-transparent bg-accent-muted text-accent hover:bg-accent hover:text-accent-contrast',
      )}
    >
      <Icon className="size-4" aria-hidden="true" strokeWidth={2} />
      <span>{link.label}</span>
      {!prominent ? (
        <ArrowUpRight
          className="size-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          aria-hidden="true"
        />
      ) : null}
    </a>
  );
}

/** Renders a project's external links as accessible, new-tab-safe badges (SPEC §5.2). */
export function ProjectLinks({ links, className }: { links: ProjectLink[]; className?: string }) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2.5', className)}>
      {links.map((link) => (
        <LinkButton key={link.href} link={link} prominent={BADGE_KINDS.includes(link.kind)} />
      ))}
    </div>
  );
}
