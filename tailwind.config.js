/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0edff',
          200: '#c7dcff',
          300: '#9dc2ff',
          400: '#699eff',
          500: '#3b76ff',
          600: '#1e4fff',
          700: '#1240eb',
          800: '#1434c4',
          900: '#16319d',
          950: '#0f1d5c',
        },
        secondary: {
          50: '#f6f8fd',
          100: '#eef1fb',
          200: '#dde3f7',
          300: '#c3cef0',
          400: '#a3b1e6',
          500: '#8490db',
          600: '#6670cc',
          700: '#5459b5',
          800: '#474a93',
          900: '#3d4076',
          950: '#242645',
        },
        accent: {
          50: '#fff4ed',
          100: '#ffe7d4',
          200: '#ffc9a9',
          300: '#ffa571',
          400: '#ff7436',
          500: '#ff4d0d',
          600: '#ff3500',
          700: '#cc2602',
          800: '#a11f09',
          900: '#821d0b',
          950: '#460b04',
        },
        dark: '#070B1A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-hover': '0 12px 40px 0 rgba(31, 38, 135, 0.25)',
        'soft-xl': '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
        'premium': '0 0 0 2px rgba(255, 255, 255, 0.1), 0 10px 40px -10px rgba(0, 0, 0, 0.2)',
      },
      backdropBlur: {
        'glass': '12px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};