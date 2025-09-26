import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'nh-beige': '#f5f7f0',
        'nh-yellow': '#fadf16',
        'nh-lightgreen': '#00cb64',
        'nh-blue': '#34CAE1',
        'nh-green': '#00a090',
        'nh-rosa': '#f0aabc',
        'nh-red': '#ea5a3c',
      },
      fontFamily: {
        sans: ['var(--font-quicksand)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config