import { Award, GraduationCap } from 'lucide-react';
import { profile } from '@/content/profile';
import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';
import { TechTag } from '@/components/ui/tech-tag';

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="03">Skills &amp; stack</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-section-title font-medium text-fg">
            The tools I ship with.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-fg-muted">
            Grouped by where each piece sits in the product — from the interface down to the
            pipeline that keeps it live.
          </p>
        </Reveal>

        {/* Skill groups — hairline rows, mono index per group. */}
        <dl className="mt-14 divide-y divide-border overflow-hidden rounded-xl border border-border">
          {profile.skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.04}>
              <div className="hover:bg-surface/50 group relative grid gap-4 px-5 py-6 transition-colors duration-300 md:grid-cols-[13rem_1fr] md:gap-8 md:px-8">
                {/* Left accent rule on hover. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-px bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <dt className="flex items-baseline gap-3">
                  <span
                    className="text-accent/60 font-mono text-xs transition-colors duration-300 group-hover:text-accent"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-label text-fg-subtle transition-colors duration-300 group-hover:text-fg">
                    {group.label}
                  </span>
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <TechTag className="transition-colors duration-300 hover:border-border-strong hover:text-fg">
                          {item}
                        </TechTag>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        {/* Certifications & education — hairline card pair. */}
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col bg-bg p-7 sm:p-8">
              <p className="section-label flex items-center gap-2">
                <Award className="size-4 text-accent" aria-hidden="true" />
                Certifications
              </p>
              <ul className="mt-5 space-y-3">
                {profile.certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3 text-sm text-fg-muted">
                    <span
                      className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {cert}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-5 font-mono text-xs text-fg-subtle">
                {profile.certificationSource}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex h-full flex-col bg-bg p-7 sm:p-8">
              <p className="section-label flex items-center gap-2">
                <GraduationCap className="size-4 text-accent" aria-hidden="true" />
                Education
              </p>
              <p className="mt-5 text-base font-medium text-fg">{profile.education.degree}</p>
              <p className="mt-1 text-sm text-fg-muted">{profile.education.school}</p>
              <p className="mt-auto pt-5 font-mono text-xs text-fg-subtle">
                {profile.education.period}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
