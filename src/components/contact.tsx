import {
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  type LucideIcon,
} from 'lucide-react';
import { profile } from '@/content/profile';
import { CopyButton } from '@/components/ui/copy-button';
import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';

type Channel = {
  label: string;
  value: string;
  icon: LucideIcon;
  href?: string;
  external?: boolean;
};

const channels: Channel[] = [
  {
    label: 'LinkedIn',
    value: 'Ermir Mulaku',
    icon: Linkedin,
    href: profile.socials.linkedin.href,
    external: true,
  },
  {
    label: 'GitHub',
    value: '@ErmirMulaku',
    icon: Github,
    href: profile.socials.github.href,
    external: true,
  },
  { label: 'Résumé', value: 'PDF', icon: FileText, href: profile.resumeHref, external: true },
  { label: 'Based in', value: `${profile.location} · CET`, icon: MapPin },
];

function ChannelRow({ channel }: { channel: Channel }) {
  const Icon = channel.icon;
  const body = (
    <>
      <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-bg text-accent">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-xs uppercase tracking-label text-fg-muted">
          {channel.label}
        </span>
        <span className="mt-0.5 block truncate text-sm text-fg">{channel.value}</span>
      </span>
      {channel.href ? (
        <ArrowUpRight
          className="size-4 shrink-0 text-fg-muted transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          aria-hidden="true"
        />
      ) : null}
    </>
  );
  const rowClass = 'flex items-center gap-4 px-5 py-4 sm:px-6';

  if (!channel.href) return <div className={rowClass}>{body}</div>;

  return (
    <a
      href={channel.href}
      {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group ${rowClass} transition-colors duration-300 hover:bg-surface`}
    >
      {body}
      {channel.external ? <span className="sr-only">(opens in a new tab)</span> : null}
    </a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="06">Contact</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-balance text-section-title font-medium text-fg">
            Have a product to build across web, mobile, or desktop? Let’s talk.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          {/* Primary: email */}
          <Reveal className="h-full">
            <div className="bg-surface/40 relative flex h-full flex-col overflow-hidden rounded-xl border border-border p-6 sm:p-8 lg:p-10">
              {/* Soft accent glow anchoring the card. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(480px circle at 0% 0%, var(--accent-muted), transparent 70%)',
                }}
              />

              <div className="relative flex h-full flex-col">
                <span className="bg-bg/60 inline-flex items-center gap-2.5 self-start rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-fg-muted">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-pulse-dot rounded-full bg-accent" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent" />
                  </span>
                  {profile.availabilityNote}
                </span>

                <p className="mt-8 max-w-md text-lg text-fg-muted">
                  Email is the fastest way to reach me — I read everything.
                </p>

                <a
                  href={`mailto:${profile.email}`}
                  className="mt-3 break-all text-2xl font-medium text-fg sm:text-3xl"
                >
                  <span className="link-underline">{profile.email}</span>
                </a>

                <div className="mt-10 flex flex-wrap gap-3 lg:mt-auto lg:pt-10">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-contrast transition-transform hover:-translate-y-0.5"
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    Send an email
                  </a>
                  <CopyButton
                    value={profile.email}
                    label="Copy address"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:bg-surface"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Secondary: other channels */}
          <Reveal delay={0.08} className="h-full">
            <ul className="bg-surface/40 flex h-full flex-col divide-y divide-border overflow-hidden rounded-xl border border-border">
              {channels.map((channel) => (
                <li key={channel.label} className="flex-1 [&>*]:h-full">
                  <ChannelRow channel={channel} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
