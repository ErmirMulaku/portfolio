export type Platform = 'web' | 'ios' | 'android' | 'desktop';

export type ProjectLinkKind = 'live' | 'appstore' | 'playstore' | 'github' | 'dashboard' | 'menu';

export type ProjectLink = {
  label: string;
  href: string;
  kind: ProjectLinkKind;
};

export type ProjectMedia = {
  type: 'browser' | 'phone' | 'image';
  /**
   * Intended screenshot path. Screenshots are not yet captured, so cards render a
   * clearly-labeled DeviceFrame placeholder at the correct aspect ratio instead of a
   * broken <img>. Drop the real asset here and ProjectCard will show it automatically.
   * TODO(owner): replace with a live screenshot of the site referenced in `alt`.
   */
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string; // one line, what it is
  role: string; // e.g. "Frontend → Full-stack"
  timeframe?: string; // e.g. "2021 – present"
  summary: string; // 2–4 sentences, the story
  highlights: string[]; // 3–5 bullet outcomes / hard parts
  stack: string[]; // tech tags
  platforms: Platform[];
  featured: boolean; // flagship => larger card
  links: ProjectLink[];
  media?: ProjectMedia[];
};

/**
 * Single source of truth for portfolio project content.
 * Content verified from the live sites — see SPEC §5. Do not embellish.
 */
export const projects: Project[] = [
  {
    slug: 'eduwo',
    name: 'Eduwo',
    tagline: 'Swiss continuing-education platform with AI-based course matching.',
    role: 'Frontend Developer → Software Engineer (full-stack)',
    timeframe: '2021 – present',
    summary:
      'Eduwo helps people in Switzerland discover and compare further-education programmes. AI-based matching recommends courses in ~3 minutes; users compare offers side by side. Multilingual (German, French, Italian, English) with 300+ partner schools. My primary long-term product — grew from frontend into full-stack ownership.',
    highlights: [
      'AI-based matching flow',
      '300+ partner schools',
      '4-language i18n',
      'Comparison engine',
      'High-traffic production platform',
      'SEO-critical (Next.js / SSR)',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'i18n', 'SSR/SEO', 'Cloud infra', 'CI/CD'],
    platforms: ['web'],
    featured: true,
    links: [{ label: 'Visit eduwo.ch', href: 'https://eduwo.ch/en', kind: 'live' }],
    media: [
      {
        type: 'browser',
        src: '/screenshots/eduwo.png',
        alt: 'Screenshot of the Eduwo continuing-education platform homepage.',
      },
    ],
  },
  {
    slug: 'scan2order',
    name: 'Scan2Order',
    tagline:
      'Full restaurant operations platform — NFC web menu, mobile apps, and desktop, with real-time staff coordination.',
    role: 'Software Engineer (full-stack, multi-platform)',
    summary:
      'An all-in-one restaurant / hospitality system. Guests open an NFC-tag web menu at the table; staff use role-based dashboards (waiter / kitchen / bar) with real-time order tracking, scheduling / clock-in-out, and notifications. Ships as web + iOS + Android + a desktop app. Includes AI invoice scanning ("Skano Faturën") that reads supplier invoices and updates stock automatically.',
    highlights: [
      'Real-time order flow kitchen ↔ table',
      'Role-based dashboards (waiter / kitchen / bar)',
      'NFC web menu',
      'Native iOS + Android apps',
      'Desktop app (GitHub releases)',
      'AI invoice / stock scanning',
      'Multi-language (incl. Albanian)',
    ],
    stack: ['Next.js', 'React', 'WebSockets', 'React Native', 'Electron', 'AI/OCR'],
    platforms: ['web', 'ios', 'android', 'desktop'],
    featured: true,
    links: [
      {
        label: 'Web menu',
        href: 'https://s2o-menu-theta.vercel.app/',
        kind: 'menu',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/s2o-app/id6747823831',
        kind: 'appstore',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.s2o.app',
        kind: 'playstore',
      },
      {
        label: 'Desktop (GitHub Releases)',
        href: 'https://github.com/s2o-tech/s2o-desktop-app/releases/tag/latest',
        kind: 'github',
      },
    ],
    media: [
      {
        type: 'browser',
        src: '/screenshots/scan2order-menu.png',
        alt: 'Screenshot of the Scan2Order NFC web menu.',
      },
      {
        type: 'phone',
        src: '/screenshots/scan2order-app.png',
        alt: 'Screenshot of the Scan2Order staff mobile app.',
      },
    ],
  },
  {
    slug: 'tutorhub',
    name: 'TutorHub',
    tagline: 'Two-sided tutoring marketplace with real-time, timezone-aware booking.',
    role: 'Full-stack',
    summary:
      'A marketplace connecting learners with expert tutors across academics, languages, music, coding and test prep. Learners filter by subject / level / price / rating and book lessons in seconds; slots are timezone- and DST-aware, so the time you see is the time you get. A separate tutor dashboard app lets tutors manage their profile and availability. Fully internationalized including Arabic (RTL).',
    highlights: [
      'Two-sided marketplace + separate dashboard app',
      'Timezone / DST-aware scheduling',
      'i18n with English + Arabic RTL',
      'Search / filter',
      'Booking flow',
      'Reviews',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'i18n (RTL)', 'Scheduling logic'],
    platforms: ['web'],
    featured: true,
    links: [
      {
        label: 'Marketplace',
        href: 'https://tutorhub-marketplace.vercel.app/en',
        kind: 'live',
      },
      {
        label: 'Tutor dashboard',
        href: 'https://tutorhub-dashboard-nine.vercel.app/',
        kind: 'dashboard',
      },
    ],
    media: [
      {
        type: 'browser',
        src: '/screenshots/tutorhub.png',
        alt: 'Screenshot of the TutorHub tutoring marketplace.',
      },
    ],
  },
  {
    slug: 'spicy-analytics',
    name: 'Spicy Analytics',
    tagline: 'Enterprise data-science company site — "Data Science for Life Science."',
    role: 'Frontend / full-stack (marketing + product site)',
    summary:
      'Corporate platform for a data-science & AI firm serving healthcare, government, finance, energy, retail and manufacturing. Multilingual, content-rich, with industry solution pages, product pages (SAMI, PLAN@, MiSTO), a news section, and an extensive client / reference wall (Pfizer, Novartis, Roche, Vodafone, Deutsche Telekom, INTERPOL, and more).',
    highlights: [
      'Enterprise B2B site',
      'Multi-industry solution pages',
      'i18n',
      'Heavy media / reference handling',
      'SEO',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'i18n', 'SSR/SEO'],
    platforms: ['web'],
    featured: false,
    links: [
      {
        label: 'Visit spicyanalytics.com',
        href: 'https://www.spicyanalytics.com/en',
        kind: 'live',
      },
    ],
    media: [
      {
        type: 'browser',
        src: '/screenshots/spicy-analytics.png',
        alt: 'Screenshot of the Spicy Analytics data-science company site.',
      },
    ],
  },
  {
    slug: 'three60-music',
    name: 'Three60 Music',
    tagline: 'Artist management & global music distribution, with an integrated shop.',
    role: 'Frontend / full-stack',
    summary:
      'A full-service music company site — artist development, career management, and music distribution (360 Media) — including an e-commerce cart / shop flow.',
    highlights: [
      'Distribution + artist-management product',
      'E-commerce / cart',
      'Media-rich',
      'CDN assets',
    ],
    stack: ['Next.js', 'React', 'E-commerce'],
    platforms: ['web'],
    featured: false,
    links: [
      { label: 'Visit three60-music.com', href: 'https://www.three60-music.com/', kind: 'live' },
    ],
    media: [
      {
        type: 'browser',
        src: '/screenshots/three60-music.png',
        alt: 'Screenshot of the Three60 Music artist-management site.',
      },
    ],
  },
];

/** Featured (flagship) projects render first as large cards. */
export const featuredProjects = projects.filter((p) => p.featured);

/** Remaining projects render as compact cards. */
export const compactProjects = projects.filter((p) => !p.featured);
