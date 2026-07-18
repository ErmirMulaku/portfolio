import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { profile } from '@/content/profile';
import { siteConfig, SITE_URL } from '@/lib/site';
import { AnalyticsGate } from '@/components/analytics';
import { LenisProvider } from '@/components/lenis-provider';
import { Nav } from '@/components/nav';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.title,
    template: `%s — ${profile.name}`,
  },
  description: siteConfig.description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: siteConfig.url }],
  creator: profile.name,
  keywords: [
    'Ermir Mulaku',
    'Software Engineer',
    'Full-stack Developer',
    'Next.js',
    'React',
    'React Native',
    'TypeScript',
    'Web',
    'Mobile',
    'Desktop',
    'Kosovo',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: `${profile.name} — Portfolio`,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${profile.name} — Software Engineer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0b0d',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

// JSON-LD Person structured data (SPEC §7).
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  url: siteConfig.url,
  email: `mailto:${profile.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pristina',
    addressCountry: 'XK',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: profile.education.school,
  },
  sameAs: [profile.socials.linkedin.href, profile.socials.github.href],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="relative min-h-dvh antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-contrast"
        >
          Skip to content
        </a>
        <LenisProvider>
          <Nav />
          <main className="relative z-10">{children}</main>
        </LenisProvider>
        <AnalyticsGate />
      </body>
    </html>
  );
}
