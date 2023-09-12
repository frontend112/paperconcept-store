import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'malarski': "url('img/background1.jpg')",
        'bg1': "url('img/background1.jpg')",
        'bg2': "url('img/background2.jpg')",
        'bg3': "url('img/background3.jpg')",
        'bg4': "url('img/background4.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
