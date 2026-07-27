import type { Config } from 'tailwindcss';

/**
 * Design tokens live here (colors, radii, fonts, spacing accents) and are mirrored
 * as CSS variables in src/styles/globals.css so both Tailwind utilities and raw CSS
 * stay in sync. Single source of truth for the "product engineer" visual language.
 */
const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces — near-black, not pure #000.
        bg: 'var(--bg)',
        'bg-elevated': 'var(--bg-elevated)',
        surface: 'var(--surface)',
        'surface-hover': 'var(--surface-hover)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        // Text.
        fg: 'var(--fg)',
        'fg-muted': 'var(--fg-muted)',
        'fg-subtle': 'var(--fg-subtle)',
        // Single confident accent — teal.
        accent: 'var(--accent)',
        'accent-muted': 'var(--accent-muted)',
        'accent-contrast': 'var(--accent-contrast)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '10px',
        lg: '16px',
        xl: '22px',
      },
      fontSize: {
        // Fluid display sizes for the hero + section headings.
        display: ['clamp(2.5rem, 6vw, 4.75rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'section-title': [
          'clamp(1.9rem, 3.5vw, 2.75rem)',
          { lineHeight: '1.08', letterSpacing: '-0.02em' },
        ],
      },
      letterSpacing: {
        label: '0.18em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.55', transform: 'scale(0.82)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
