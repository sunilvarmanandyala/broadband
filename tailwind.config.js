/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      animation: {
        scrollBg: 'scrollBg 10s linear infinite',
        pulseSlow: 'pulse 6s ease-in-out infinite',
      },
      keyframes: {
        scrollBg: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
      },
    },
  },
  plugins: [],

  extend: {
      keyframes: {
        scrollBg: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
      },
      animation: {
        scrollBg: 'scrollBg 20s linear infinite',
      },
    }
    
}

