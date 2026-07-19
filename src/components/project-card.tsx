import { Check } from 'lucide-react';
import type { Project } from '@/content/projects';
import { DeviceFrame } from '@/components/ui/device-frame';
import { PlatformBadgeRow } from '@/components/ui/platform-badge';
import { ProjectLinks } from '@/components/ui/project-links';
import { TechTag } from '@/components/ui/tech-tag';
import { cn, hostFromUrl } from '@/lib/utils';

function primaryHost(project: Project): string {
  const primary = project.links[0]?.href;
  return primary ? hostFromUrl(primary) : '';
}

/** Media block — browser frame, plus overlapping phone frame(s) for multi-platform apps. */
function ProjectMedia({ project }: { project: Project }) {
  const browser = project.media?.find((m) => m.type === 'browser');
  const phones = project.media?.filter((m) => m.type === 'phone') ?? [];
  const host = primaryHost(project);

  return (
    <div className="relative transition-transform duration-500 ease-out-expo group-hover:scale-[1.03]">
      <DeviceFrame
        variant="browser"
        host={host}
        src={browser?.src}
        label={browser?.alt ?? `${project.name} preview`}
      />
      {phones.length > 0 ? (
        <div className="absolute -bottom-6 right-0 flex items-end gap-2 sm:-right-4">
          {phones.map((phone) => (
            <div key={phone.src} className="w-[24%] min-w-[84px] max-w-[120px]">
              <DeviceFrame variant="phone" src={phone.src} label={phone.alt} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
      {items.map((h) => (
        <li key={h} className="flex items-start gap-2 text-sm text-fg-muted">
          <Check
            className="mt-0.5 size-4 shrink-0 text-accent"
            aria-hidden="true"
            strokeWidth={2.5}
          />
          <span>{h}</span>
        </li>
      ))}
    </ul>
  );
}

/** Large flagship card (SPEC §5). Alternates media side by index for rhythm. */
export function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const mediaRight = index % 2 === 0;

  return (
    <article className="bg-surface/40 group relative rounded-xl border border-border p-6 transition-colors duration-300 hover:border-border-strong hover:bg-surface sm:p-8 lg:p-10">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Content */}
        <div className={cn('order-2', mediaRight ? 'lg:order-1' : 'lg:order-2')}>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="font-sans text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              {project.name}
            </h3>
            {project.timeframe ? (
              <span className="font-mono text-xs text-fg-subtle">{project.timeframe}</span>
            ) : null}
          </div>

          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">
            {project.role}
          </p>

          <p className="mt-4 text-base leading-relaxed text-fg-muted">{project.summary}</p>

          <div className="mt-6">
            <PlatformBadgeRow platforms={project.platforms} />
          </div>

          <div className="mt-6">
            <Highlights items={project.highlights} />
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech}>
                <TechTag>{tech}</TechTag>
              </li>
            ))}
          </ul>

          <ProjectLinks className="mt-7" links={project.links} />
        </div>

        {/* Media */}
        <div
          className={cn('order-1 px-2 pb-6 pt-2 sm:pb-2', mediaRight ? 'lg:order-2' : 'lg:order-1')}
        >
          <ProjectMedia project={project} />
        </div>
      </div>
    </article>
  );
}

/** Compact card for supporting projects (SPEC §5 ordering rule). */
export function CompactProjectCard({ project }: { project: Project }) {
  const host = primaryHost(project);
  const browser = project.media?.find((m) => m.type === 'browser');

  return (
    <article className="bg-surface/40 group flex h-full flex-col rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface">
      <div className="mb-6 overflow-hidden rounded-lg">
        <div className="transition-transform duration-500 ease-out-expo group-hover:scale-[1.03]">
          <DeviceFrame
            variant="browser"
            host={host}
            src={browser?.src}
            label={browser?.alt ?? `${project.name} preview`}
          />
        </div>
      </div>

      <h3 className="font-sans text-xl font-semibold tracking-tight text-fg">{project.name}</h3>
      <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-wider text-accent">
        {project.role}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-fg-muted">{project.tagline}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((tech) => (
          <li key={tech}>
            <TechTag>{tech}</TechTag>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <ProjectLinks links={project.links} />
      </div>
    </article>
  );
}
