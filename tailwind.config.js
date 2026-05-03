/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        chocolat: {
          bg: '#faf8f5',
          surface: '#ffffff',
          fg: '#1a1a1a',
          muted: '#6b6b6b',
          border: '#e8e4df',
          accent: '#8B4513',
          gold: '#c9a962',
          cream: '#f5f0e8',
          dark: '#2c1810',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}