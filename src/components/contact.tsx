import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '@/content/profile';
import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="05">Contact</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-balance text-section-title font-medium text-fg">
            Have a product to build across web, mobile, or desktop? Let’s talk.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-fg-muted">
            I’m open to remote work and relocation. The fastest way to reach me is email — I read
            everything.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex items-center gap-3 text-2xl font-medium text-fg sm:text-4xl"
          >
            <Mail className="size-6 text-accent sm:size-8" aria-hidden="true" />
            <span className="link-underline">{profile.email}</span>
            <ArrowUpRight
              className="size-6 text-fg-subtle transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:size-8"
              aria-hidden="true"
            />
          </a>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={profile.socials.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-accent"
            >
              <Linkedin className="size-5" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={profile.socials.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-accent"
            >
              <Github className="size-5" aria-hidden="true" />
              GitHub
            </a>
            <span className="inline-flex items-center gap-2 font-mono text-sm text-fg-subtle">
              <MapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
