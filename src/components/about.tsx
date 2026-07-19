import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { profile } from '@/content/profile';
import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Photo */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border border-border bg-bg-elevated">
                <Image
                  src="/screenshots/ermir.png"
                  alt={`${profile.name}, ${profile.role}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-center"
                />
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
