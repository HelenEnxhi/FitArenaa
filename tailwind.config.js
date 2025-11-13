/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nordic-dark': '#0E0E0E',
        'nordic-accent': '#00FFD1',
        'nordic-white': '#FFFFFF',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00FFD1, 0 0 10px #00FFD1, 0 0 15px #00FFD1' },
          '100%': { boxShadow: '0 0 10px #00FFD1, 0 0 20px #00FFD1, 0 0 30px #00FFD1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

