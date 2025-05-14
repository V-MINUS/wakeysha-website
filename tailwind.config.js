/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5E17EB',
        'primary-dark': '#4812BE',
        secondary: '#0AEFFF',
        'secondary-light': '#7CF3FF',
        accent: '#F364FF',
        background: '#1A0B2E',
        'background-alt': '#2A1458',
        surface: 'rgba(17, 17, 34, 0.85)',
        'text-light': '#F5F5FF',
        'text-muted': '#C8B6FF',
        border: 'rgba(94, 23, 235, 0.3)',
        'border-glow': 'rgba(10, 239, 255, 0.2)',
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['4rem', { lineHeight: '1.1', letterSpacing: '0.02em', fontWeight: '800' }],
        'display-2': ['3rem', { lineHeight: '1.1', letterSpacing: '0.01em', fontWeight: '800' }],
        'heading-1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '0.005em', fontWeight: '700' }],
        'heading-2': ['2rem', { lineHeight: '1.2', letterSpacing: '0.005em', fontWeight: '700' }],
        'heading-3': ['1.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'body-xl': ['1.25rem', { lineHeight: '1.5' }],
        'body-lg': ['1.125rem', { lineHeight: '1.5' }],
        body: ['1rem', { lineHeight: '1.5' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '8xl': '96rem',
        '7xl': '80rem',
        '6xl': '72rem',
        '5xl': '64rem',
        '4xl': '56rem',
        '3xl': '48rem',
        '2xl': '40rem',
        xl: '32rem',
      },
      borderRadius: {
        'pill': '9999px',
      },
      animation: {
        'gradient-x': 'gradient 15s ease infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 5s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px 0 rgba(94, 23, 235, 0.4)' },
          '100%': { boxShadow: '0 0 20px 5px rgba(94, 23, 235, 0.7)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(90deg, #5E17EB, #9A4DFF)',
        'gradient-bg': 'linear-gradient(135deg, #1A0B2E 0%, #2A1458 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
