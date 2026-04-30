/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
  extend: {
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: "hsl(var(--primary))",
      secondary: "hsl(var(--secondary))",
      destructive: "hsl(var(--destructive))",
      muted: "hsl(var(--muted))",
      accent: "hsl(var(--accent))",
      popover: "hsl(var(--popover))",
      card: "hsl(var(--card))",
    },
  },
},
  plugins: [
    require("@tailwindcss/line-clamp"), // ✅ tambahan plugin
  ],
}
