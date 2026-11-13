import { cn } from '@/lib/utils';

/** Solid accent dot that leads every skill chip. */
export function LevelDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn('inline-block size-2 shrink-0 rounded-full bg-accent', className)}
    />
  );
}
