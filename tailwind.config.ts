import type { Config } from "tailwindcss"
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
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
        gray: {
          5: "#FCFAFA",
          10: "#F1F1F1",
          25: "#DCDCDC",
          50: "#C4C4C4",
          100: "#A7A7A7",
          200: "#8A8A8A",
          300: "#6C6C6C",
          400: "#4F4F4F",
          500: "#424242",
          600: "#353535",
          700: "#282828",
          800: "#1A1A1A",
          900: "#101010",
        },
        primary: {
          25: "#D0D3DE",
          50: "#B1B5C8",
          100: "#8A90AC",
          200: "#636C90",
          300: "#3C4775",
          400: "#152259",
          500: "#121C4A",
          600: "#0E173B",
          700: "#0B112D",
          800: "#070B1E",
          900: "#040712",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          25: "#D5E7F6",
          50: "#B9D7F1",
          100: "#B9D7F1",
          200: "#73B0E2",
          300: "#509CDB",
          400: "#2D88D4",
          500: "#2671B1",
          600: "#1E5B8D",
          700: "#17446A",
          800: "#0F2D47",
          900: "#091B2A",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

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
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
      require("tailwindcss-animate"),
    addVariablesForColors,
      require('tailwind-scrollbar-hide')
  ],
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;