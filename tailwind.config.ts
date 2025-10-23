import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,ts,js}'
  ],
  theme: {
    extend: {
      colors: {
        dartmouth: {
          green: '#00693E',
          ink: '#eaf2ed',
          panel: '#0f1412',
          bg: '#0b0f0d',
          accent: '#6CE0A9'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.25)'
      },
      borderRadius: {
        xl2: '18px'
      }
    }
  },
  plugins: []
} satisfies Config