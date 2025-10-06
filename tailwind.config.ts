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
        
        // Primary brand colors for backend developer
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        
        // Dark theme colors
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        
        // Accent colors for backend technologies
        accent: {
          green: "#10b981",
          blue: "#3b82f6",
          purple: "#8b5cf6",
          orange: "#f59e0b",
          red: "#ef4444",
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
