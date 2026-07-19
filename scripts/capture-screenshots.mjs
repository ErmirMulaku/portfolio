// Capture live screenshots of each project's site and save them to public/screenshots.
// Run with: node scripts/capture-screenshots.mjs
// Requires the `playwright` dev dependency + `npx playwright install chromium`.
//
// Screenshots feed the device frames on the work cards (see src/components/ui/device-frame.tsx).
// Re-run whenever a site's design changes.

import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'screenshots');

// NOTE: Scan2Order's screenshots (s2o-menu / s2o-app / s2o-desktop-app) are provided
// manually — its web-menu URL is an NFC gate, so it can't be auto-captured here.
/** @type {{file: string, url: string, viewport: {width:number, height:number}}[]} */
const targets = [
  { file: 'eduwo.png', url: 'https://eduwo.ch/en', viewport: { width: 1280, height: 800 } },
  {
    file: 'tutorhub.png',
    url: 'https://tutorhub-marketplace.vercel.app/en',
    viewport: { width: 1280, height: 800 },
  },
  {
    file: 'spicy-analytics.png',
    url: 'https://www.spicyanalytics.com/en',
    viewport: { width: 1280, height: 800 },
  },
  {
    file: 'three60-music.png',
    url: 'https://www.three60-music.com/',
    viewport: { width: 1280, height: 800 },
  },
];

// Privacy-preserving: decline non-essential cookies (necessary-only). Never "accept all".
const CONSENT_TEXTS = [
  'Only necessary',
  'Accept Neccessary', // note: some sites ship this typo
  'Accept Necessary',
  'Reject all',
  'Reject',
  'Decline',
  'Continue without accepting',
  'Ablehnen',
  'Nur notwendige',
  'Refuser',
  'Save choices',
  'Got it',
];

async function dismissConsent(page) {
  for (const text of CONSENT_TEXTS) {
    try {
      const btn = page.getByRole('button', { name: new RegExp(`^\\s*${text}`, 'i') }).first();
      if (await btn.isVisible({ timeout: 800 })) {
        await btn.click({ timeout: 1500 });
        await page.waitForTimeout(400);
        return;
      }
    } catch {
      // try next candidate
    }
  }
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();

  for (const t of targets) {
    const context = await browser.newContext({
      viewport: t.viewport,
      deviceScaleFactor: 2,
      userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36',
    });
    const page = await context.newPage();
    try {
      await page.goto(t.url, { waitUntil: 'networkidle', timeout: 45000 });
      await dismissConsent(page);
      await page.waitForTimeout(1500); // let fonts/images settle
      await page.screenshot({ path: join(outDir, t.file) });
      console.log(`✓ ${t.file}  <-  ${t.url}`);
    } catch (err) {
      console.error(`✗ ${t.file}  <-  ${t.url}\n   ${err.message}`);
    } finally {
      await context.close();
    }
  }

  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
