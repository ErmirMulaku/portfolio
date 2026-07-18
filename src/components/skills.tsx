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
        </Reveal>

        <dl className="mt-14 divide-y divide-border border-y border-border">
          {profile.skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.04}>
              <div className="grid gap-4 py-6 md:grid-cols-[200px_1fr] md:gap-8">
                <dt className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
                  {group.label}
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <TechTag>{item}</TechTag>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        {/* Certifications & education */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <Reveal>
            <div>
              <p className="section-label">Certifications</p>
              <ul className="mt-4 space-y-2">
                {profile.certifications.map((cert) => (
                  <li key={cert} className="text-sm text-fg-muted">
                    {cert}
                  </li>
                ))}
              </ul>
              <p className="mt-3 font-mono text-xs text-fg-subtle">{profile.certificationSource}</p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div>
              <p className="section-label">Education</p>
              <p className="mt-4 text-sm font-medium text-fg">{profile.education.degree}</p>
              <p className="mt-1 text-sm text-fg-muted">{profile.education.school}</p>
              <p className="mt-1 font-mono text-xs text-fg-subtle">{profile.education.period}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
