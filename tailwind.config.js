/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontSize: {
      xs: '0.6rem', // 6px
      sm: '0.8rem', // 8px
      base: '1rem', // 10px
      lg: '1.2rem', // 12px
      xl: '1.4rem', // 14px
      '2xl': '1.6rem', // 16px
      '3xl': '1.8rem', // 18px
      '4xl': '2rem', // 20px
      '5xl': '2.4rem', // 24px
      '6xl': '2.8rem', // 28px
      '7xl': '3.2rem', // 32px
      '8xl': '3.6rem', // 36px
      '9xl': '4rem', // 40px
    },
  },
  plugins: ['@tailwindcss/line-clamp'],
};
