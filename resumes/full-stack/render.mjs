// Renders resume.html → Ermir-Mulaku-Full-Stack-Engineer.pdf (A4, backgrounds, real text, links).
//   node resumes/full-stack/render.mjs
// Uses the installed Google Chrome when present, otherwise Playwright's bundled Chromium.
import { chromium } from 'playwright';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, 'Ermir-Mulaku-Full-Stack-Engineer.pdf');

const browser = await chromium.launch({ channel: 'chrome' }).catch(() => chromium.launch());
const page = await browser.newPage();
await page.goto(pathToFileURL(join(here, 'resume.html')).href, { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'print' });

// Every .page is a fixed A4 sheet with overflow hidden, so clipped text would be silent.
const overflows = await page.$$eval('.page', (pages) =>
  pages.flatMap((p, i) =>
    [...p.querySelectorAll('.side, .main')]
      .map((col) => {
        const pad = parseFloat(getComputedStyle(col).paddingBottom);
        const bottom = Math.max(...[...col.children].map((c) => c.getBoundingClientRect().bottom));
        const limit = col.getBoundingClientRect().bottom - pad;
        return { page: i + 1, column: col.className, spare: Math.round(limit - bottom) };
      }),
  ),
);
for (const o of overflows) console.log(`page ${o.page} ${o.column}: ${o.spare}px spare`);

await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log(`wrote ${out}`);
if (overflows.some((o) => o.spare < 0)) {
  console.error('OVERFLOW: content runs past the bottom margin');
  process.exit(1);
}
