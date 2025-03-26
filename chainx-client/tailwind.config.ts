import type { Config } from 'tailwindcss'
import { COLOR } from './src/shared/constants/color.constant'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      ...COLOR,
      transparent: 'transparent'
    }
  },
  plugins: []
} satisfies Config
