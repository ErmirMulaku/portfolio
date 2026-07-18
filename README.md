# Ermir Mulaku — Portfolio

Personal portfolio for a software engineer whose differentiator is shipping complete
products across every platform — web, mobile, and desktop. Fast, dark-themed, and
evidence-first: real, live products presented as short case studies with device mockups,
live links, and store/GitHub badges.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · Motion (Framer Motion) ·
Lenis · lucide-react · Geist fonts.

---

## Getting started

Requirements: **Node.js ≥ 18.18** (Node 20+ recommended) and **npm**.

```bash
# 1. Install dependencies
npm install

# 2. (optional) configure environment
cp .env.example .env.local     # then edit values

# 3. Start the dev server
npm run dev                    # http://localhost:3000
```

### Scripts

| Command                | What it does                             |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the local dev server (hot reload)  |
| `npm run build`        | Production build                         |
| `npm run start`        | Serve the production build locally       |
| `npm run lint`         | Run ESLint                               |
| `npm run format`       | Format the codebase with Prettier        |
| `npm run format:check` | Check formatting without writing changes |

---

## Environment variables

Copy `.env.example` → `.env.local` and set:

| Variable                       | Required | Purpose                                                             |
| ------------------------------ | -------- | ------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | Prod     | Canonical URL for Open Graph, canonical tags, sitemap, robots.      |
| `NEXT_PUBLIC_ENABLE_ANALYTICS` | No       | `true` to enable privacy-friendly Vercel Analytics. Off by default. |

If `NEXT_PUBLIC_SITE_URL` is unset, it falls back to a placeholder domain — set it before
going live so metadata URLs are absolute.

---

## Editing content

All copy lives in one place — no need to touch components:

- **`src/content/profile.ts`** — name, headline, socials, stats, approach pillars, skills,
  certifications, education, about narrative, trust strip.
- **`src/content/projects.ts`** — the typed `Project[]` (single source of truth). Set
  `featured: true` for flagship projects (large cards); the rest render as compact cards.

### Adding real screenshots

Project media currently renders **clearly-labeled placeholder device frames** at the correct
aspect ratios (see `src/components/ui/device-frame.tsx`). To use real screenshots:

1. Drop the image in `public/screenshots/` (path already referenced in `projects.ts`).
2. Swap the placeholder body in `DeviceFrame` for a `next/image` fill using that `src`.

### Résumé

The "Résumé" button links to `/resume.pdf`. A placeholder PDF ships in `public/` —
replace `public/resume.pdf` with the real CV.

---

## Project structure

```
public/                 # resume.pdf, screenshots (add your own)
src/
  app/
    layout.tsx          # fonts, metadata, JSON-LD, Lenis + analytics providers
    page.tsx            # single-page composition
    opengraph-image.tsx # generated 1200x630 OG image
    icon.svg            # monogram favicon
    apple-icon.tsx      # generated Apple touch icon
    sitemap.ts / robots.ts
  components/
    nav, hero, marquee, work-section, project-card, approach,
    skills, about, contact, footer, lenis-provider, analytics
    ui/                 # Reveal, SectionLabel, TechTag, DeviceFrame,
                        # StatCounter, PlatformBadge, ProjectLinks
  content/              # profile.ts, projects.ts (all copy/data)
  lib/                  # motion variants, site config, utils
  styles/globals.css    # design tokens (CSS vars) + base styles
tailwind.config.ts      # design tokens (colors, fonts, radii, motion)
```

---

## Accessibility & performance

- WCAG AA contrast, full keyboard navigation, visible focus states, semantic landmarks.
- `prefers-reduced-motion` disables Lenis smooth scroll, scroll reveals, and the stat
  counters — motion never fights accessibility settings.
- Self-hosted fonts (no layout shift), static generation, and lightweight JS.

---

## Deploy (Vercel)

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new) — the Next.js preset is detected
   automatically.
3. Add environment variables (`NEXT_PUBLIC_SITE_URL`, optionally
   `NEXT_PUBLIC_ENABLE_ANALYTICS=true`) in **Project → Settings → Environment Variables**.
4. Deploy. Vercel runs `npm run build` and serves the static output.

To build and run the production bundle locally:

```bash
npm run build
npm run start
```

---

Built with [Next.js](https://nextjs.org). © Ermir Mulaku.
