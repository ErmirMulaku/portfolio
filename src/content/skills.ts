import {
  Cloud,
  Database,
  FlaskConical,
  MonitorSmartphone,
  PanelsTopLeft,
  Server,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

/**
 * Skills & stack content — the "03 — Skills & stack" section renders entirely from
 * this file. Nothing invented: every entry is on the résumé or in projects.ts.
 *
 * To add a skill, add one line to `skills`, e.g.
 *   { name: 'Vitest', category: 'testing', level: 'experienced' },
 * Add `usedIn` (project slugs from projects.ts) to give the chip a "Where I used it" popover.
 */

export type SkillLevel = 'daily' | 'experienced' | 'familiar';

export type SkillCategoryId =
  'frontend' | 'backend' | 'data' | 'ai' | 'cloud' | 'testing' | 'mobile';

/** Slugs of projects in projects.ts — chips link to `#<slug>` in the work section. */
export type ProjectSlug = 'eduwo' | 'scan2order' | 'tutorhub' | 'spicy-analytics' | 'three60-music';

export type Skill = {
  name: string;
  category: SkillCategoryId;
  level: SkillLevel;
  usedIn?: ProjectSlug[];
};

export type SkillCategory = {
  id: SkillCategoryId;
  title: string;
  /** Short label for the filter pill. */
  filterLabel: string;
  description: string;
  icon: LucideIcon;
  /** Wide cards span two bento columns (tablet + desktop). */
  size: 'wide' | 'narrow';
};

export const levelLabels: Record<SkillLevel, string> = {
  daily: 'Use daily',
  experienced: 'Experienced',
  familiar: 'Familiar',
};

// Order = bento order. Desktop rows: [frontend, backend] [ai, data, cloud] [testing, mobile].
export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    filterLabel: 'Frontend',
    description:
      'My day-to-day at eduwo: fast, accessible, multilingual interfaces built for search.',
    icon: PanelsTopLeft,
    size: 'wide',
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    filterLabel: 'Backend',
    description: 'The APIs, real-time updates and event-driven services behind the UI.',
    icon: Server,
    size: 'wide',
  },
  {
    id: 'ai',
    title: 'AI',
    filterLabel: 'AI',
    description: 'LLM features built into products: RAG chat, embeddings and Python services.',
    icon: Sparkles,
    size: 'narrow',
  },
  {
    id: 'data',
    title: 'Data',
    filterLabel: 'Data',
    description: 'Schema design, SQL, and running the database servers themselves.',
    icon: Database,
    size: 'narrow',
  },
  {
    id: 'cloud',
    title: 'Cloud & tooling',
    filterLabel: 'Cloud',
    description: 'Build, deploy and monitor: the pipeline that keeps products live.',
    icon: Cloud,
    size: 'wide',
  },
  {
    id: 'testing',
    title: 'Testing',
    filterLabel: 'Testing',
    description: 'Unit, component and end-to-end tests, plus UI documented in Storybook.',
    icon: FlaskConical,
    size: 'wide',
  },
  {
    id: 'mobile',
    title: 'Mobile & desktop',
    filterLabel: 'Mobile',
    description:
      'React Native and Electron apps shipped to the App Store, Google Play and desktop.',
    icon: MonitorSmartphone,
    size: 'wide',
  },
];

const ALL_WEB: ProjectSlug[] = [
  'eduwo',
  'scan2order',
  'tutorhub',
  'spicy-analytics',
  'three60-music',
];

// One line per skill — keep it scannable.
// prettier-ignore
export const skills: Skill[] = [
  // Frontend
  { name: 'TypeScript', category: 'frontend', level: 'daily', usedIn: ['eduwo', 'tutorhub', 'spicy-analytics'] },
  { name: 'JavaScript', category: 'frontend', level: 'daily' },
  { name: 'React', category: 'frontend', level: 'daily', usedIn: ALL_WEB },
  { name: 'Next.js', category: 'frontend', level: 'daily', usedIn: ALL_WEB },
  { name: 'Tailwind CSS', category: 'frontend', level: 'daily' },
  { name: 'SEO / SSR', category: 'frontend', level: 'daily', usedIn: ['eduwo', 'spicy-analytics'] },
  { name: 'i18n / RTL', category: 'frontend', level: 'experienced', usedIn: ['eduwo', 'tutorhub', 'spicy-analytics'] },
  { name: 'Redux Toolkit', category: 'frontend', level: 'experienced' },
  { name: 'TanStack Query', category: 'frontend', level: 'experienced' },
  { name: 'Zustand', category: 'frontend', level: 'experienced' },
  { name: 'Angular', category: 'frontend', level: 'experienced', usedIn: ['tutorhub'] },
  { name: 'NgRx', category: 'frontend', level: 'experienced' },
  { name: 'RxJS', category: 'frontend', level: 'experienced' },
  { name: 'SCSS', category: 'frontend', level: 'experienced' },
  { name: 'CSS animations', category: 'frontend', level: 'experienced' },
  { name: 'A/B testing', category: 'frontend', level: 'familiar' },
  { name: 'Vue.js', category: 'frontend', level: 'familiar' },

  // Backend & APIs
  { name: 'Node.js', category: 'backend', level: 'daily' },
  { name: 'REST APIs', category: 'backend', level: 'daily' },
  { name: 'NestJS', category: 'backend', level: 'experienced', usedIn: ['tutorhub'] },
  { name: 'GraphQL', category: 'backend', level: 'experienced', usedIn: ['tutorhub'] },
  { name: 'WebSockets / Socket.IO', category: 'backend', level: 'experienced', usedIn: ['scan2order'] },
  { name: 'Laravel', category: 'backend', level: 'experienced' },
  { name: 'PHP', category: 'backend', level: 'experienced' },
  { name: 'gRPC', category: 'backend', level: 'familiar' },
  { name: 'Kafka / outbox', category: 'backend', level: 'familiar', usedIn: ['tutorhub'] },
  { name: 'Elixir / Phoenix', category: 'backend', level: 'familiar', usedIn: ['tutorhub'] },

  // AI
  { name: 'Python AI services', category: 'ai', level: 'experienced' },
  { name: 'OpenAI API', category: 'ai', level: 'experienced' },
  { name: 'Claude API', category: 'ai', level: 'experienced' },
  { name: 'RAG chat', category: 'ai', level: 'experienced' },
  { name: 'Embeddings / FAISS', category: 'ai', level: 'familiar' },
  { name: 'AI-assisted development', category: 'ai', level: 'daily' },

  // Data
  { name: 'SQL', category: 'data', level: 'daily' },
  { name: 'PostgreSQL', category: 'data', level: 'experienced', usedIn: ['tutorhub'] },
  { name: 'Prisma', category: 'data', level: 'experienced' },
  { name: 'MySQL', category: 'data', level: 'experienced' },
  { name: 'MariaDB (server admin)', category: 'data', level: 'experienced' },
  { name: 'Queued jobs', category: 'data', level: 'experienced' },
  { name: 'Multi-tenant design', category: 'data', level: 'experienced' },

  // Cloud & tooling
  { name: 'Vercel', category: 'cloud', level: 'daily', usedIn: ['scan2order', 'tutorhub'] },
  { name: 'GitHub Actions', category: 'cloud', level: 'daily' },
  { name: 'Docker', category: 'cloud', level: 'experienced' },
  { name: 'AWS (ECS)', category: 'cloud', level: 'experienced' },
  { name: 'Cloudflare', category: 'cloud', level: 'experienced' },
  { name: 'Google Cloud', category: 'cloud', level: 'familiar' },
  { name: 'esbuild', category: 'cloud', level: 'familiar' },
  { name: 'Prometheus', category: 'cloud', level: 'familiar' },

  // Testing
  { name: 'Jest', category: 'testing', level: 'experienced' },
  { name: 'Testing Library', category: 'testing', level: 'experienced' },
  { name: 'Playwright', category: 'testing', level: 'experienced' },
  { name: 'Cypress', category: 'testing', level: 'experienced' },
  { name: 'Jasmine / Karma', category: 'testing', level: 'experienced' },
  { name: 'Storybook', category: 'testing', level: 'experienced', usedIn: ['tutorhub'] },

  // Mobile & desktop
  { name: 'React Native / Expo', category: 'mobile', level: 'experienced', usedIn: ['scan2order'] },
  { name: 'iOS + Android releases', category: 'mobile', level: 'experienced', usedIn: ['scan2order'] },
  { name: 'Electron', category: 'mobile', level: 'experienced', usedIn: ['scan2order'] },
];

export function skillsIn(category: SkillCategoryId): Skill[] {
  return skills.filter((s) => s.category === category);
}
