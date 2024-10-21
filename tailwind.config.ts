import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['HeyWow', 'sans-serif'],
        'heywow': ['HeyWow', 'sans-serif']
      },
      colors: {
        background: 'hsl(var(--background))',
        'cool-horizon': 'hsl(var(--cool-horizon))'
      }
    },
  },
  plugins: [],
}

export default config
