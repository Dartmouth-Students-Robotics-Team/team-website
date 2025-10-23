import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,ts,js}'
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        panel: 'var(--color-panel)',
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        'muted-strong': 'var(--color-muted-strong)',
        accent: 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        'accent-border': 'var(--color-accent-border)',
        'accent-border-strong': 'var(--color-accent-border-strong)',
        'border-subtle': 'var(--color-border-subtle)',
        border: 'var(--color-border)',
        'border-strong': 'var(--color-border-strong)',
      },
      borderRadius: {
        xl2: 'var(--radius-xl2)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
      },
    },
  },
  plugins: []
} satisfies Config