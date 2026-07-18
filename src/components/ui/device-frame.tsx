import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type DeviceFrameProps = {
  variant: 'browser' | 'phone';
  /** Host shown in the browser URL bar, e.g. "eduwo.ch". */
  host?: string;
  /** Accessible description of what the frame previews. */
  label: string;
  className?: string;
};

/*
 * Device mockups (SPEC §5.2). Screenshots are not yet captured, so these render a
 * clearly-labeled placeholder at the correct aspect ratio — never a broken <img>.
 * TODO(owner): drop real screenshots in /public/screenshots and swap the placeholder
 * body for a next/image fill here.
 */

export function DeviceFrame({ variant, host, label, className }: DeviceFrameProps) {
  if (variant === 'phone') {
    return (
      <div
        role="img"
        aria-label={label}
        className={cn(
          'relative mx-auto aspect-[9/19] w-full max-w-[220px] rounded-[2rem] border border-border-strong',
          'bg-bg-elevated p-2 shadow-2xl shadow-black/40',
          className,
        )}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-surface">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/60" />
          <PlaceholderBody host={host} />
        </div>
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        'w-full overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-2xl shadow-black/40',
        className,
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-surface px-3.5 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </span>
        <span className="ml-2 flex-1 truncate rounded-md bg-bg px-3 py-1 text-center font-mono text-[0.7rem] text-fg-subtle">
          {host ?? 'preview'}
        </span>
      </div>
      <div className="relative aspect-[16/10] w-full bg-surface">
        <PlaceholderBody host={host} />
      </div>
    </div>
  );
}

/** Subtle gradient + icon placeholder. */
function PlaceholderBody({ host }: { host?: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(ellipse_at_top,_rgba(45,212,191,0.10),_transparent_60%)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <ImageIcon className="relative size-6 text-fg-subtle" aria-hidden="true" strokeWidth={1.5} />
      {host ? <span className="relative font-mono text-xs text-fg-subtle">{host}</span> : null}
    </div>
  );
}
