import { profile } from '@/content/profile';

/**
 * Canonical site URL. Set NEXT_PUBLIC_SITE_URL in the environment (and in Vercel) to
 * the production domain so Open Graph / canonical / sitemap URLs are absolute.
 * TODO(owner): confirm the final production domain.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ermirmulaku.com').replace(
  /\/$/,
  '',
);

export const siteConfig = {
  name: profile.name,
  title: `${profile.name} — Software Engineer`,
  description:
    'Software engineer shipping products across web, mobile & desktop. 5+ years building scalable, production-ready systems — from Swiss ed-tech to a full restaurant platform spanning web, iOS, Android and desktop.',
  url: SITE_URL,
  ogImage: `${SITE_URL}/opengraph-image`,
  locale: 'en_US',
};
