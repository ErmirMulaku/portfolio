import { cn } from '@/lib/utils';

type SectionLabelProps = {
  /** Two-digit index, e.g. "01". */
  index?: string;
  children: React.ReactNode;
  className?: string;
};

/** Monospace + small-caps section eyebrow, e.g. "01 — SELECTED WORK" (SPEC §2.1). */
export function SectionLabel({ index, children, className }: SectionLabelProps) {
  return (
    <p className={cn('section-label flex items-center gap-3', className)}>
      {index ? (
        <span className="text-accent" aria-hidden="true">
          {index}
        </span>
      ) : null}
      {index ? <span aria-hidden="true">—</span> : null}
      <span>{children}</span>
    </p>
  );
}
