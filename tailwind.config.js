/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: "var(--destructive)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          lime: "var(--accent-lime)",
          orange: "var(--accent-orange)",
          cobalt: "var(--accent-cobalt)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      boxShadow: {
        positivus: "0px 5px 0px 0px #191A23",
        "positivus-lg": "0px 7px 0px 0px #191A23",
        "positivus-dark": "0px 5px 0px 0px #B9FF66",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        grotesk: ["var(--font-grotesk)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
    },
  },
  plugins: [],
};
