import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,
        padding: "3rem",
      },
    },
  },
  plugins: [forms],
} satisfies Config;
