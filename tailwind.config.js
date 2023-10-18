/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        // backgrounds on homePage
        moveBgRightFirstImage: {
          "0%": { transform: "translateX(-100vw)" },
          "100%": { transform: "translateX(0)" },
        },
        moveBgLeftSecondImage: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100vw)" },
        },
        moveBgRightSecondImage: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100vw)" },
        },
        moveBgLeftThirdImage: {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(0)" },
        },
        // cart
        hideCart: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        showCart: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "sliding-right-first-image":
          "moveBgRightFirstImage 500ms linear forwards",
        "sliding-left-second-image":
          "moveBgLeftSecondImage 500ms linear forwards",
        "sliding-right-second-image":
          "moveBgRightSecondImage 500ms linear forwards",
        "sliding-left-third-image":
          "moveBgLeftThirdImage 500ms linear forwards",
        "hide-cart": "hideCart 500ms linear forwards",
        "show-cart": "showCart 500ms linear forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
