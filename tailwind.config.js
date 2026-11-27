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
        'brand-red': '#EA1E4D',
        'brand-red-text': '#C4123D',
        'brand-amber': 'var(--accent-amber)',
        'brand-orange': '#FD7D3C',
        'riwa-orange': '#FD7D3C',
        'brand-charcoal': '#111116',
        'warm-white': '#F5F4F0',
        'warm-ivory': '#F5F4F0',
        'ink-black': '#111116',
        'concrete-grey': '#E7E7E9',
        'pure-white': '#FFFFFF',
      },
      fontFamily: {
        display: ['Syne', '"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.18em',
      },
      lineHeight: {
        hero: '0.88',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
