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
        ivn: {
          purple:        '#7C3AED',
          'purple-dark': '#4C1D95',
          'purple-mid':  '#6D28D9',
          'purple-light':'#EDE9FE',
          'purple-glow': '#DDD6FE',
          magenta:       '#A855F7',
          fuchsia:       '#D946EF',
          gold:          '#B8962E',
          'gold-light':  '#FEF3C7',
          rose:          '#F43F5E',
          teal:          '#0D9488',
          white:         '#FAFAFA',
          gray:          '#F3F4F6',
          text:          '#1F2937',
          muted:         '#6B7280',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body:    ['var(--font-body)'],
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
      },
    },
  },
  plugins: [],
}
