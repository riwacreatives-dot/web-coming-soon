/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--bg-canvas)',
        surface: 'var(--bg-surface)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-mono': 'var(--text-mono)',
        'line-border': 'var(--border-line)',
        'brand-red': 'var(--accent-red)',
        'brand-amber': 'var(--accent-amber)',
        'brand-orange': '#FD7D3C',
        'riwa-orange': '#FD7D3C',
        'warm-ivory': '#F4F1EA',
        'ink-black': '#171719',
        'concrete-grey': '#DAD8D1',
        'pure-white': '#FFFFFF',
        'muted-grey': '#767571',
        'brand-charcoal': '#171719',
        'warm-white': '#F4F1EA',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Manrope', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.18em',
      },
      lineHeight: {
        hero: '0.88',
      },
    },
  },
  plugins: [],
}

