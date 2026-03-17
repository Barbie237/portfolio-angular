/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#FF6B9D',
        secondary: '#C239B3',
        accent:    '#FEC163',
        dark:      '#1A1A2E',
        light:     '#F8F9FA',
        purple:    '#8B5CF6',
        blue:      '#3B82F6',
        green:     '#10B981',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        body:    ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
