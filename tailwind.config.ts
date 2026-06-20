import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#1E293B',
        accentBlue: '#2563EB',
        accentCyan: '#06B6D4',
        success: '#22C55E',
        surface: '#F8FAFC',
        borderc: '#E2E8F0',
        textPrimary: '#0F172A',
        textSecondary: '#475569',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        h1: ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        h2: ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        h3: ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        h4: ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        site: '1440px',
        content: '1280px',
      },
      boxShadow: {
        elev1: '0 1px 2px rgba(15, 23, 42, 0.04)',
        elev2: '0 8px 30px rgba(15, 23, 42, 0.08)',
        elev3: '0 24px 60px rgba(15, 23, 42, 0.12)',
        glow: '0 0 0 3px rgba(37, 99, 235, 0.18)',
      },
      transitionDuration: {
        250: '250ms',
      },
      backdropBlur: {
        xs: '2px',
        glass: '20px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(20px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-15px, 15px) scale(0.97)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-12px, 20px) rotate(8deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        float: 'float 14s ease-in-out infinite',
        'float-slow': 'floatSlow 18s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
