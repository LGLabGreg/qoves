import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          DEFAULT: "#efefef",
          medium: "#aebcbf",
          dark: "#232c2d",
        },
        border: {
          DEFAULT: "#efefef",
          strong: colors.slate[800],
        },
        background: {
          DEFAULT: colors.white,
          grey: "#efefef",
          medium: "#aebcbf",
          dark: "#263135",
        },
        foreground: {
          DEFAULT: "#232c2d",
          muted: "#808082",
        },
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
