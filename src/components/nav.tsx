'use client';

import { useEffect, useState } from 'react';
import { FileText, Github, Linkedin, Menu, X } from 'lucide-react';
import { profile } from '@/content/profile';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close the menu on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || menuOpen
          ? 'bg-bg/80 border-b border-border backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"
          aria-label={`${profile.name} — home`}
        >
          <span className="grid size-8 place-items-center rounded-md border border-border-strong bg-surface text-accent transition-colors group-hover:border-accent">
            {profile.monogram}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-sm text-fg-muted">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-underline transition-colors hover:text-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
            >
              <FileText className="size-3.5" aria-hidden="true" />
              Résumé
            </a>
            <IconLinks />
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="grid size-9 place-items-center rounded-md border border-border text-fg md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen ? (
        <div
          id="mobile-menu"
          className="container-page flex flex-col gap-1 border-t border-border pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-lg text-fg-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-4">
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm text-fg"
            >
              <FileText className="size-4" aria-hidden="true" />
              Résumé
            </a>
            <IconLinks />
          </div>
        </div>
      ) : null}
    </header>
  );
}

function IconLinks() {
  return (
    <div className="flex items-center gap-3">
      <a
        href={profile.socials.github.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-fg-muted transition-colors hover:text-accent"
      >
        <Github className="size-5" />
      </a>
      <a
        href={profile.socials.linkedin.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-fg-muted transition-colors hover:text-accent"
      >
        <Linkedin className="size-5" />
      </a>
    </div>
  );
}
