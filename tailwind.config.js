/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
    screens: {
      xs: '375px',
      lg: '1440px'
    }
  },
  plugins: []
}
