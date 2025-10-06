import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        white: "#ffffff",
        black: "#000000",
        
        // Neon Green Primary Colors (Dark Theme)
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",  // Main neon green
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        
        // Neon accent (brighter green for highlights)
        neon: {
          green: "#39ff14",  // Bright neon green
          glow: "#00ff41",   // Neon glow effect
          dark: "#0d9488",   // Darker teal-green
        },
        
        // Dark theme colors (darker backgrounds)
        dark: {
          50: "#18181b",   // Lighter dark
          100: "#27272a",  // Card backgrounds
          200: "#3f3f46",  // Borders
          300: "#52525b",  // Disabled
          400: "#71717a",  // Muted text
          500: "#a1a1aa",  // Secondary text
          600: "#d4d4d8",  // Primary text
          700: "#e4e4e7",  // Headings
          800: "#09090b",  // Main background
          900: "#000000",  // Deepest black
        },
        
        // Accent colors for technologies
        accent: {
          green: "#22c55e",
          blue: "#3b82f6",
          purple: "#a855f7",
          orange: "#f59e0b",
          red: "#ef4444",
          cyan: "#06b6d4",
        },
        
        // Legacy colors for compatibility
        "heading-color": "#1e293b",
        "bg-shade": "#f8fafc",
        body: "#475569",
        dimgray: "#64748b",
        
        // Keep some existing colors for backwards compatibility
        mediumslateblue: {
          "100": "#8b5cf6",
          "200": "rgba(139, 92, 246, 0.09)",
        },
        gray: {
          "100": "#1e293b",
          "200": "rgba(30, 41, 59, 0.55)",
          "300": "rgba(30, 41, 59, 0.12)",
          "400": "rgba(30, 41, 59, 0.5)",
        },
        deeppink: {
          "100": "#ec4899",
          "200": "#db2777",
        },
      },
      spacing: {},
      fontFamily: {
        "body-02": "Roboto",
      },
      borderRadius: {
        "7xs-3": "5.3px",
        "2xl-3": "21.3px",
        "2xs-7": "10.7px",
        "10xs-5": "2.5px",
        "11xs-3": "1.3px",
        "11xs-9": "1.9px",
        "8xs": "5px",
        "11xs-5": "1.5px",
        "12xs": "1px",
        "9xs-9": "3.9px",
      },
    },
    fontSize: {
      base: "1rem",
      "13xl": "2rem",
      lgi: "1.19rem",
      "7xl": "1.63rem",
      sm: "0.88rem",
      "5xl": "1.5rem",
      lg: "1.13rem",
      "29xl": "3rem",
      "10xl": "1.81rem",
      "19xl": "2.38rem",
      "37xl": "3.5rem",
      "15xl": "2.13rem",
      "26xl": "2.81rem",
      "17xl": "2.25rem",
      "3xl": "1.38rem",
      "lg-7": "1.17rem",
      "2xl-3": "1.33rem",
      mid: "1.06rem",
      "45xl": "4rem",
      "32xl": "3.19rem",
      "7xs-6": "0.35rem",
      mini: "0.94rem",
      "8xs": "0.31rem",
      "5xs-5": "0.47rem",
      "8xs-4": "0.28rem",
      "mid-5": "1.09rem",
      "9xs-9": "0.24rem",
      "9xs-4": "0.21rem",
      "xs-7": "0.73rem",
      "7xs-8": "0.36rem",
      inherit: "inherit",
    },
    screens: {
      mq1800: {
        raw: "screen and (max-width: 1800px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
export default config;
