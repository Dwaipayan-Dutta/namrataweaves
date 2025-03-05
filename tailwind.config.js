/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant', 'serif'],
        garamond: ['EB Garamond', 'serif'],
      },
      colors: {
        dark: {
          bg: '#1A1412', // Dark wood brown black
          surface: '#251B17', // Slightly lighter wood brown
          surface2: '#2F221D', // Medium wood brown
          border: '#3A2925', // Rich wood brown
          text: '#F5F0EB', // Warm off-white
          muted: '#B3A69F' // Muted brown
        },
        woodbrown: {
          100: '#DEC3B0', // Light wood
          200: '#C5A08A', // Medium light wood
          300: '#AB7D64', // Medium wood
          400: '#925A3E', // Medium dark wood
          500: '#784318', // Dark wood
          600: '#5F3012', // Darker wood
          700: '#461D0C', // Very dark wood
          800: '#2D0A06', // Almost black wood
          900: '#140200', // Blackest wood
        },
        traditional: {
          50: '#F9F6F3', // Lightest cream
          100: '#F2EBE4', // Light cream
          200: '#E5D7CA', // Warm cream
          300: '#D8C3B0', // Light brown
          400: '#CBAF96', // Medium brown
          500: '#BE9B7C', // Traditional brown
          600: '#977B62', // Dark traditional
          700: '#705B49', // Deep traditional
          800: '#493C30', // Very deep traditional
          900: '#221D17', // Darkest traditional
        }
      },
      boxShadow: {
        'custom': '4px 4px 0 0 rgba(190, 155, 124, 0.1)',
        'custom-lg': '8px 8px 0 0 rgba(190, 155, 124, 0.1)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'grain': 'grain 8s steps(1) infinite',
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
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '20%': { transform: 'translate(5%, 5%)' },
          '30%': { transform: 'translate(-5%, 5%)' },
          '40%': { transform: 'translate(5%, -5%)' },
          '50%': { transform: 'translate(-5%, 0%)' },
          '60%': { transform: 'translate(5%, 0%)' },
          '70%': { transform: 'translate(0%, 5%)' },
          '80%': { transform: 'translate(0%, -5%)' },
          '90%': { transform: 'translate(-2%, 2%)' },
        },
      },
    },
  },
  plugins: [],
};