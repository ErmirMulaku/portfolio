import { profile } from '@/content/profile';
import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="02">What I do</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-section-title font-medium text-fg">
            One engineer, the whole product.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {profile.approach.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.06}>
              <div className="flex h-full flex-col bg-bg p-7 transition-colors duration-300 hover:bg-surface sm:p-8">
                <span className="font-mono text-sm text-accent">{`0${i + 1}`}</span>
                <h3 className="mt-4 text-lg font-semibold text-fg">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
