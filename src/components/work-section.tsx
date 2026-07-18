import { compactProjects, featuredProjects } from '@/content/projects';
import { FeaturedProjectCard, CompactProjectCard } from '@/components/project-card';
import { Reveal } from '@/components/ui/reveal';
import { SectionLabel } from '@/components/ui/section-label';

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="01">Selected work</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-section-title font-medium text-fg">
            Real products, shipped and live — across every platform.
          </h2>
        </Reveal>

        {/* Featured / flagship — large cards */}
        <div className="mt-14 flex flex-col gap-8 md:gap-10">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} y={28}>
              <FeaturedProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        {/* Supporting — compact cards */}
        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-2">
          {compactProjects.map((project) => (
            <Reveal key={project.slug} y={28}>
              <CompactProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
