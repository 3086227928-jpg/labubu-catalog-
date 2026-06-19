/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a26',
          600: '#242438',
        },
        pink: {
          400: '#f472b6',
          300: '#f9a8d4',
          200: '#fce7f3',
        },
        lavender: {
          400: '#a78bfa',
          300: '#c4b5fd',
        },
        gold: {
          400: '#fbbf24',
          300: '#fcd34d',
        },
        text: {
          primary: '#f1f1f6',
          secondary: '#a0a0b8',
          muted: '#6b6b80',
        },
      },
      fontFamily: {
        display: ['Quicksand', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glow-pink': '0 0 20px rgba(244, 114, 182, 0.15)',
        'glow-lavender': '0 0 20px rgba(167, 139, 250, 0.15)',
        card: '0 4px 24px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 12px 40px rgba(244, 114, 182, 0.2)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(244, 114, 182, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(244, 114, 182, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
