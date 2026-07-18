import { ArrowUp } from 'lucide-react';
import { profile } from '@/content/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-md border border-border-strong bg-surface font-mono text-sm font-semibold text-accent">
            {profile.monogram}
          </span>
          <p className="text-sm text-fg-muted">
            © {year} {profile.name}. Built with{' '}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-fg"
            >
              Next.js
            </a>
            .
          </p>
        </div>

        <a
          href="#top"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg-subtle transition-colors hover:text-fg"
        >
          Back to top
          <ArrowUp className="size-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
