import { Apple, Globe, Monitor, Smartphone } from 'lucide-react';
import type { Platform } from '@/content/projects';
import { cn } from '@/lib/utils';

const PLATFORM_META: Record<Platform, { label: string; Icon: typeof Globe }> = {
  web: { label: 'Web', Icon: Globe },
  ios: { label: 'iOS', Icon: Apple },
  android: { label: 'Android', Icon: Smartphone },
  desktop: { label: 'Desktop', Icon: Monitor },
};

type PlatformBadgeProps = {
  platform: Platform;
  className?: string;
};

/** Small pill showing a platform a product ships on (SPEC §5 — S2O shows all four). */
export function PlatformBadge({ platform, className }: PlatformBadgeProps) {
  const { label, Icon } = PLATFORM_META[platform];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-elevated px-2.5 py-1',
        'font-mono text-[0.7rem] uppercase tracking-wider text-fg-muted',
        className,
      )}
    >
      <Icon className="size-3.5 text-accent" aria-hidden="true" strokeWidth={2} />
      {label}
    </span>
  );
}

export function PlatformBadgeRow({
  platforms,
  className,
}: {
  platforms: Platform[];
  className?: string;
}) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)} aria-label="Platforms">
      {platforms.map((p) => (
        <li key={p}>
          <PlatformBadge platform={p} />
        </li>
      ))}
    </ul>
  );
}
