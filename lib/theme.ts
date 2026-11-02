// lib/theme.ts (create this)
export const theme = {
  // Backgrounds
  bg: {
    base: "#0a0612",        // near-black purple (page bg)
    deep: "#13091f",        // darker purple sections
    soft: "#1a0f2e",        // cards, elevated
  },
  // Primary purple scale
  purple: {
    50:  "#f5f0ff",
    100: "#ebe0ff",
    200: "#d4b8ff",
    300: "#b794ff",
    400: "#9b6dff",
    500: "#7c3aed",   // main brand purple
    600: "#6d28d9",
    700: "#5b21b6",
    800: "#4c1d95",
    900: "#3b0f7a",
  },
  // Accents
  accent: {
    lilac: "#c4a7ff",       // soft accent text
    glow:  "#a855f7",       // glow/hover
  },
  // Neutrals
  white: "#ffffff",
  muted: "rgba(255,255,255,0.65)",
  dim:   "rgba(255,255,255,0.45)",
  // Glass
  glass: {
    bg:     "rgba(255,255,255,0.05)",
    bgHover:"rgba(255,255,255,0.08)",
    border: "rgba(255,255,255,0.12)",
    borderHover: "rgba(196,167,255,0.4)",
    blur:   "backdrop-blur-xl",
  },
};