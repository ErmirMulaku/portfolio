export type SocialLink = {
  label: string;
  href: string;
};

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export type ApproachPillar = {
  title: string;
  description: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

/**
 * Profile content — name, headline, socials, skills, education.
 * All copy is accurate to the résumé / live products. See SPEC §1, §6, §7.
 */
export const profile = {
  name: 'Ermir Mulaku',
  monogram: 'EM',
  role: 'Software Engineer',
  location: 'Pristina, Kosovo',
  availableForWork: true,
  availabilityNote: 'Available for work — open to remote / relocation',

  // Hero. NOTE: "Senior" is intentionally absent from the headline (SPEC §1).
  headline: 'Software engineer shipping products across web, mobile & desktop.',
  subheadline:
    '5+ years building scalable, production-ready systems — from Swiss ed-tech to a full restaurant platform spanning web, iOS, Android and desktop. I own products end-to-end: frontend, backend, deployment, and the details in between.',

  email: 'ermirmulaku4@gmail.com',

  socials: {
    github: { label: 'GitHub', href: 'https://github.com/ErmirMulaku' } as SocialLink,
    linkedin: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ermir-mulaku-42059a137/',
    } as SocialLink,
  },

  resumeHref: '/resume.pdf',

  // Compact hero stat row (SPEC §4.2).
  stats: [
    { value: 5, suffix: '+', label: 'Years shipping' },
    { value: 5, label: 'Live products' },
    { value: 4, label: 'Platforms: web · iOS · Android · desktop' },
  ] as Stat[],

  // What I do / Approach — SPEC §4.5.
  approach: [
    {
      title: 'End-to-end delivery',
      description:
        'I own products from first commit to production — frontend, backend, deployment, and the details in between.',
    },
    {
      title: 'Frontend craft',
      description:
        'Fast, accessible, SEO-ready interfaces with advanced React patterns and a strong bar for polish and performance.',
    },
    {
      title: 'Scalable systems',
      description:
        'Clean, maintainable architecture built to grow — high-traffic platforms, real-time flows, and internationalized apps.',
    },
    {
      title: 'Ship & maintain',
      description:
        'CI/CD, cloud infrastructure, and deployment workflows that keep products live, reliable, and easy to iterate on.',
    },
  ] as ApproachPillar[],

  // Skills / stack — SPEC §6. Nothing invented; every entry is on the résumé.
  skills: [
    {
      label: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'C#', 'Java'],
    },
    {
      label: 'Frontend',
      items: [
        'React',
        'Next.js',
        'Angular',
        'Vue.js',
        'Redux Toolkit',
        'TanStack Query',
        'Zustand',
        'Tailwind CSS',
        'SCSS',
        'Advanced React patterns',
      ],
    },
    {
      label: 'Backend',
      items: ['NestJS', 'Node.js', 'Laravel', 'REST APIs', 'GraphQL', 'gRPC', 'Real-time / WebSockets'],
    },
    {
      label: 'Data',
      items: ['PostgreSQL / Prisma', 'MySQL', 'Queued jobs', 'Multi-tenant design'],
    },
    { label: 'Mobile', items: ['React Native / Expo', 'iOS + Android (both stores)'] },
    { label: 'Desktop', items: ['Electron', 'Shipped desktop app'] },
    {
      label: 'AI / ML',
      items: [
        'OpenAI function calling & embeddings',
        'RAG chatbots',
        'FAISS vector search',
        'LightGBM ranking',
        'AI-assisted development',
      ],
    },
    {
      label: 'Infra / DevOps',
      items: [
        'AWS',
        'Google Cloud',
        'Docker',
        'Kubernetes',
        'CI/CD (GitHub Actions)',
        'Vercel',
        'Prometheus',
      ],
    },
    {
      label: 'Testing',
      items: ['Jest', 'Playwright', 'Cypress', 'Testing Library', 'Storybook'],
    },
    {
      label: 'Practices',
      items: ['Scalable systems', 'Clean architecture', 'i18n / RTL', 'SEO / SSR', 'A/B testing'],
    },
  ] as SkillGroup[],

  certifications: [
    { name: 'Advanced React Component Patterns', issuer: 'Udemy', year: '2022' },
    { name: 'Functional Programming in JavaScript', issuer: 'Udemy', year: '2023' },
    { name: 'Advanced JavaScript & React', issuer: 'Beetroot Academy', year: '2021' },
  ] as Certification[],

  education: {
    degree: 'BSc Computer Science',
    school: 'University of Prishtina "Hasan Prishtina"',
    period: '2017 – 2021',
  },

  // About narrative — SPEC §4.7.
  about: [
    'I’m a software engineer from Kosovo who builds complete products, not just screens. I started as an intern at Kutia, moved into frontend, and grew into full-stack ownership at eduwo / the Swiss Innovation Hub.',
    'Since then I’ve shipped across every platform: a high-traffic Swiss ed-tech platform, a full restaurant operations system spanning web, iOS, Android and desktop, a two-sided tutoring marketplace, and enterprise sites for data-science and music companies.',
    'I care about the whole product — accessibility, performance, internationalization, and the deployment pipeline that keeps it all running. When in doubt, I remove decoration and let the work speak.',
  ],
} as const;

export type Profile = typeof profile;
