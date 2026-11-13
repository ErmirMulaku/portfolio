import type { SkillCategory, SkillCategoryId } from '@/content/skills';
import { cn } from '@/lib/utils';

export type SkillFilter = 'all' | SkillCategoryId;

type CategoryFilterProps = {
  categories: SkillCategory[];
  active: SkillFilter;
  onChange: (filter: SkillFilter) => void;
};

/** Toggle pills — pressing the active category again returns to "All". */
export function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  const options: Array<{ id: SkillFilter; label: string }> = [
    { id: 'all', label: 'All' },
    ...categories.map((c) => ({ id: c.id, label: c.filterLabel })),
  ];

  return (
    <div role="group" aria-label="Highlight a skill category" className="flex flex-wrap gap-2">
      {options.map((option) => {
        const pressed = active === option.id;
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={pressed}
            onClick={() => onChange(pressed && option.id !== 'all' ? 'all' : option.id)}
            className={cn(
              'rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors duration-300',
              pressed
                ? 'border-accent bg-accent-muted text-fg'
                : 'border-border text-fg-muted hover:border-border-strong hover:text-fg',
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
