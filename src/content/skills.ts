import {
  Braces,
  Cloud,
  Database,
  FlaskConical,
  MonitorSmartphone,
  PanelsTopLeft,
  Server,
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
  'languages' | 'frontend' | 'backend' | 'mobile' | 'data' | 'testing' | 'cloud';

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

// Order = bento order. Desktop rows: [languages, frontend] [backend, mobile] [data, testing, cloud].
export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    filterLabel: 'Languages',
    description: 'The languages I write production code in.',
    icon: Braces,
    size: 'wide',
  },
  {
    id: 'frontend',
    title: 'Frontend',
    filterLabel: 'Frontend',
    description: 'Frameworks for fast, accessible, multilingual interfaces.',
    icon: PanelsTopLeft,
    size: 'wide',
  },
  {
    id: 'backend',
    title: 'Backend',
    filterLabel: 'Backend',
    description: 'Runtimes and frameworks behind the APIs and services.',
    icon: Server,
    size: 'wide',
  },
  {
    id: 'mobile',
    title: 'Mobile & desktop',
    filterLabel: 'Mobile',
    description: 'Cross-platform apps for the App Store, Google Play and desktop.',
    icon: MonitorSmartphone,
    size: 'wide',
  },
  {
    id: 'data',
    title: 'Databases',
    filterLabel: 'Databases',
    description: 'Relational databases and the ORM on top.',
    icon: Database,
    size: 'narrow',
  },
  {
    id: 'testing',
    title: 'Testing',
    filterLabel: 'Testing',
    description: 'Unit, component and end-to-end test frameworks.',
    icon: FlaskConical,
    size: 'narrow',
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    filterLabel: 'Cloud',
    description: 'Where products are built, deployed and hosted.',
    icon: Cloud,
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

// One line per skill — languages and frameworks only, no concepts or practices.
// prettier-ignore
export const skills: Skill[] = [
  // Languages
  { name: 'TypeScript', category: 'languages', level: 'daily', usedIn: ['eduwo', 'tutorhub', 'spicy-analytics'] },
  { name: 'JavaScript', category: 'languages', level: 'daily' },
  { name: 'PHP', category: 'languages', level: 'experienced' },
  { name: 'Python', category: 'languages', level: 'experienced' },
  { name: 'SQL', category: 'languages', level: 'daily' },
  { name: 'Elixir', category: 'languages', level: 'familiar', usedIn: ['tutorhub'] },

  // Frontend
  { name: 'React', category: 'frontend', level: 'daily', usedIn: ALL_WEB },
  { name: 'Next.js', category: 'frontend', level: 'daily', usedIn: ALL_WEB },
  { name: 'Angular', category: 'frontend', level: 'experienced', usedIn: ['tutorhub'] },
  { name: 'Vue.js', category: 'frontend', level: 'familiar' },

  // Backend
  { name: 'Node.js', category: 'backend', level: 'daily' },
  { name: 'NestJS', category: 'backend', level: 'experienced', usedIn: ['tutorhub'] },
  { name: 'Laravel', category: 'backend', level: 'experienced' },
  { name: 'Phoenix', category: 'backend', level: 'familiar', usedIn: ['tutorhub'] },

  // Mobile & desktop
  { name: 'React Native', category: 'mobile', level: 'experienced', usedIn: ['scan2order'] },
  { name: 'Electron', category: 'mobile', level: 'experienced', usedIn: ['scan2order'] },

  // Databases
  { name: 'PostgreSQL', category: 'data', level: 'experienced', usedIn: ['tutorhub'] },
  { name: 'MySQL', category: 'data', level: 'experienced' },
  { name: 'MariaDB', category: 'data', level: 'experienced' },
  { name: 'Prisma', category: 'data', level: 'experienced' },

  // Testing
  { name: 'Jest', category: 'testing', level: 'experienced' },
  { name: 'Playwright', category: 'testing', level: 'experienced' },
  { name: 'Cypress', category: 'testing', level: 'experienced' },

  // Cloud & DevOps
  { name: 'AWS', category: 'cloud', level: 'experienced' },
  { name: 'Vercel', category: 'cloud', level: 'daily', usedIn: ['scan2order', 'tutorhub'] },
  { name: 'Docker', category: 'cloud', level: 'experienced' },
  { name: 'GitHub Actions', category: 'cloud', level: 'daily' },
];

export function skillsIn(category: SkillCategoryId): Skill[] {
  return skills.filter((s) => s.category === category);
}
