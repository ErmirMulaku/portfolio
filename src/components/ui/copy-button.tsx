'use client';

import { Check, Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type CopyButtonProps = {
  value: string;
  label: string;
  className?: string;
};

/** Copies `value` to the clipboard and confirms for two seconds. */
export function CopyButton({ value, label, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Clipboard blocked (e.g. insecure context) — the mailto button still works.
    }
  };

  const Icon = copied ? Check : Copy;

  return (
    <button type="button" onClick={copy} className={className}>
      <Icon className={cn('size-4', copied && 'text-accent')} aria-hidden="true" />
      <span aria-live="polite">{copied ? 'Copied' : label}</span>
    </button>
  );
}
