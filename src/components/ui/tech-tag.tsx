import { cn } from '@/lib/utils';

type TechTagProps = {
  children: React.ReactNode;
  className?: string;
};

/** Monospace tech / metadata tag with a fine 1px border (SPEC §2.1, §6). */
export function TechTag({ children, className }: TechTagProps) {
  return (
    <span
      className={cn(
        'bg-surface/60 inline-flex items-center rounded-sm border border-border px-2.5 py-1',
        'font-mono text-xs leading-none text-fg-muted',
        className,
      )}
    >
      {children}
    </span>
  );
}
