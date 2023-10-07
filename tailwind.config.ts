import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        moveBgRightFirstImage: {
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(0)' },
        },
        moveBgLeftSecondImage: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100vw)' },
        },
        moveBgRightSecondImage: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        moveBgLeftThirdImage: {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'sliding-right-first-image': 'moveBgRightFirstImage 500ms linear forwards',
        'sliding-left-second-image': 'moveBgLeftSecondImage 500ms linear forwards',
        'sliding-right-second-image': 'moveBgRightSecondImage 500ms linear forwards',
        'sliding-left-third-image': 'moveBgLeftThirdImage 500ms linear forwards',
      }
    },
  },
  plugins: [],
}
export default config
