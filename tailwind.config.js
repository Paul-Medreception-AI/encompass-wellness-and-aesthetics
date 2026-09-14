/** @type {import("tailwindcss").Config} */
const config = {
  // lib/ MUST be scanned: the service and condition data files carry Tailwind
  // classes (heroImage.pos, gallery fit). Without it those arbitrary classes are
  // emitted into the HTML but purged from the CSS, so they silently do nothing.
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}", "./lib/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: { primary: "#5f8f8f", dark: "#3d6463", light: "#e9f1ef", ink: "#1a2030", cream: "#fdfcfb", muted: "#64748b", border: "#f3eded", accent: "#5f8f8f", "accent-dark": "#47706f", sage: "#a8ccc0", gold: "#c49a6c" },
      fontFamily: { cormorant: ["var(--font-cormorant)", "Georgia", "serif"], sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
module.exports = config;