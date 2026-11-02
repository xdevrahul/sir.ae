import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx,mdx}",
    "./pages/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ===== Backgrounds =====
        ink: {
          deep: "#0a0612",
          soft: "#13091f",
          card: "#1a0f2e",
        },
        // ===== Brand purple =====
        brand: {
          50: "#f5f0ff",
          100: "#ebe0ff",
          200: "#d4b8ff",
          300: "#b794ff",
          400: "#9b6dff",
          500: "#7c3aed",
          600: "#6d28d9",
          700: "#5b21b6",
          800: "#4c1d95",
          900: "#3b0f7a",
        },
        // ===== Accents =====
        lilac: "#c4a7ff",
        glow: "#a855f7",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-purple": "linear-gradient(to right, #7c3aed, #a855f7)",
        "gradient-purple-soft":
          "linear-gradient(135deg, #13091f 0%, #1a0f2e 50%, #0a0612 100%)",
      },
      boxShadow: {
        "glow-purple": "0 8px 40px -10px rgba(168, 85, 247, 0.6)",
        "glow-purple-lg": "0 8px 50px -5px rgba(168, 85, 247, 0.9)",
        "glow-purple-sm": "0 4px 20px -8px rgba(168, 85, 247, 0.5)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "reveal-mask": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) forwards",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "reveal-mask": "reveal-mask 2.4s cubic-bezier(0.2, 0.7, 0.2, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;