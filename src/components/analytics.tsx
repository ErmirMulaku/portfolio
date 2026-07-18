import { Analytics } from '@vercel/analytics/next';

/**
 * Privacy-friendly analytics, opt-in via env flag (SPEC §7). Set
 * NEXT_PUBLIC_ENABLE_ANALYTICS=true to enable; otherwise nothing is loaded.
 */
export function AnalyticsGate() {
  if (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== 'true') return null;
  return <Analytics />;
}
