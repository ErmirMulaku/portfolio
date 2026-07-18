import { MapPin } from 'lucide-react';
import { profile } from '@/content/profile';
import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Photo slot — placeholder until a real photo is provided. */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              {/*
                TODO(owner): drop a professional photo at /public/ermir.jpg and swap this
                placeholder for a next/image fill. Placeholder avoids a broken <img>.
              */}
              <div
                role="img"
                aria-label={`Portrait placeholder for ${profile.name}`}
                className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border border-border bg-bg-elevated"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(45,212,191,0.12),_transparent_60%)]" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="text-fg-subtle/40 font-mono text-6xl font-semibold">
                    {profile.monogram}
                  </span>
                </div>
                <div className="bg-bg/80 absolute inset-x-0 bottom-0 flex items-center gap-2 border-t border-border px-4 py-3 backdrop-blur">
                  <MapPin className="size-4 text-accent" aria-hidden="true" />
                  <span className="font-mono text-xs text-fg-muted">{profile.location}</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Narrative */}
          <Reveal delay={0.08}>
            <div>
              <SectionLabel index="04">About</SectionLabel>
              <h2 className="mt-4 text-section-title font-medium text-fg">
                From Kosovo to Swiss production platforms.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-fg-muted md:text-lg">
                {profile.about.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
