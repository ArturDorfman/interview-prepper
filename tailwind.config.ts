import type { Config } from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography'

export default <Partial<Config>> {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-text)',
        title: 'var(--color-title)',
      },
      fontFamily: {
        sans: ['DM Sans']
      }
    }
  },
  darkMode: 'class',
  plugins: [tailwindTypography],
}
