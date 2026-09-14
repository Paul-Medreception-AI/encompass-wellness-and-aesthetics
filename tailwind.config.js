/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: { primary: "#c49a6c", dark: "#7f6446", light: "#f6f0e9", ink: "#1a2030", cream: "#fdfcfb", muted: "#64748b", border: "#f3eded", accent: "#5f8f8f", "accent-dark": "#47706f", sage: "#a8ccc0" },
      fontFamily: { cormorant: ["var(--font-cormorant)", "Georgia", "serif"], sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
module.exports = config;