/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in-from-top': 'fade-in-from-top 0.5s ease-out',
      },
      keyframes: {
        'fade-in-from-top': {
          from: {
            transform: 'translateY(-30%)',
            opacity: 0,
          },
          to: {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
      },
      fontSize: {
        'heading-hg': ['6rem', '100%'],
        'heading-xl': ['3rem', '120%'],
        'heading-lg': ['2rem', '140%'],
        'heading-md': ['1.25rem', '140%'],
        'heading-sm': ['1rem', '140%'],
        'heading-xs': ['0.875rem', '140%'],
        lg: ['1.25rem', '140%'],
        md: ['1rem', '140%'],
        sm: ['0.875rem', '140%'],
        xs: ['0.75rem', '140%'],
      },
      colors: {
        gray: {
          100: '#FAFAFA',
          200: '#BFBFD4',
          300: '#ABABC4',
          400: '#7F7F98',
          500: '#3B3B54',
          600: '#22222F',
          700: '#1C1C27',
          800: '#16161F',
          900: '#13131A',
          secondary: '#1E1E29',
        },
        'blue-light': '#8FB2F5',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true, // Disable hover styles on mobile devices
  },
  plugins: [],
};
