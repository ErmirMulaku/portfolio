import type { ProjectSlug } from './skills';

/**
 * Work history for the Experience timeline. Titles, dates and bullets mirror the
 * résumé (public/resume.pdf) — keep the two in sync and don't embellish.
 * Wrap the key fact of a bullet in **double asterisks** to bold it.
 */

export type Role = {
  title: string;
  start: string;
  /** Omit for the current role. */
  end?: string;
  /** Length of a finished role, e.g. "4 yrs". Kept static so it never goes stale. */
  duration?: string;
  highlights: string[];
  stack: string[];
};

export type Employer = {
  company: string;
  location: string;
  /** Links the company to its card in the work section. */
  projectSlug?: ProjectSlug;
  /** Most recent role first. */
  roles: Role[];
};

export const experience: Employer[] = [
  {
    company: 'eduwo',
    location: 'Prishtina, Kosovo · Hybrid',
    projectSlug: 'eduwo',
    roles: [
      {
        title: 'Software Engineer',
        start: 'Jul 2025',
        highlights: [
          'Ship production React 19 / Next.js 15 features on a Swiss education marketplace serving **20,000+ users**, across four locales with SSR and PWA support.',
          'Built the customer-facing AI end to end: a **FAISS vector-search service** and a recommendation chatbot, plus OpenAI-powered content generation in the admin.',
          'Design, build and document Laravel REST APIs — auth, queued jobs, transactional email — consumed by the web app, the admin and native clients.',
          'Own quality and uptime for what I ship: Jest, Playwright E2E, pre-commit gates and production monitoring.',
        ],
        stack: ['React 19', 'Next.js 15', 'TypeScript', 'Laravel', 'FAISS', 'OpenAI', 'Playwright'],
      },
      {
        title: 'Frontend Developer',
        start: 'Jul 2021',
        end: 'Jul 2025',
        duration: '4 yrs',
        highlights: [
          'Built complex single-page applications with React, Redux Toolkit and TypeScript, with a hard bar on performance and UX detail; tracked **Core Web Vitals**.',
          'Ran **A/B tests** and product analytics, using production data to decide what to build and fix next.',
          'Designed REST API contracts with backend and native consumers, and built Next.js API routes as a BFF layer.',
          'Implemented interfaces from scratch in SCSS — responsive layouts, animation, charts, maps and PWA.',
        ],
        stack: ['React', 'Redux Toolkit', 'TypeScript', 'Next.js', 'SCSS', 'A/B testing'],
      },
    ],
  },
  {
    company: 'Kutia',
    location: 'Prishtina, Kosovo',
    roles: [
      {
        title: 'Intern Front-End Developer',
        start: 'Feb 2021',
        end: 'Jun 2021',
        duration: '5 mos',
        highlights: [
          'Built responsive, accessible UI components inside a cross-functional product team, strengthening fundamentals in JavaScript, React, HTML5, CSS3 and Git workflows.',
        ],
        stack: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Git'],
      },
    ],
  },
];
