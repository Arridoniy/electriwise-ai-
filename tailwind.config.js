/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B5D3B',
        secondary: '#F4B400',
        background: '#FFFFFF',
      },
      borderRadius: {
        lg: '0.75rem',
      },
      backdropFilter: {
        'glass': 'blur(10px) brightness(110%)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
