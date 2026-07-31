import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      colors: {
        bg: "#F6F7F9",
        card: "#FFFFFF",
        ink: "#0E1016",
        muted: "#5B6270",
        border: "#E4E7EC",
        brand: {
          DEFAULT: "#3355FF",
          50: "#EEF1FF",
          100: "#DCE2FF",
          600: "#3355FF",
          700: "#2A44D6",
        },
        amber: {
          DEFAULT: "#FF7A45",
          50: "#FFF1EA",
          100: "#FFE1D0",
          600: "#FF7A45",
          700: "#E85F2A",
        },
        navy: {
          950: "#0B0D26",
          900: "#12153A",
          800: "#1A1F4D",
          700: "#1E2A6E",
        },
        success: "#1AA65C",
        danger: "#E03B3B",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(14,16,22,0.04), 0 8px 24px -8px rgba(14,16,22,0.08)",
        card: "0 1px 2px rgba(14,16,22,0.04), 0 12px 32px -12px rgba(14,16,22,0.12)",
        "card-hover": "0 1px 2px rgba(14,16,22,0.04), 0 20px 40px -12px rgba(14,16,22,0.18)",
        glow: "0 0 0 1px rgba(51,85,255,0.15), 0 12px 40px -8px rgba(51,85,255,0.35)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(60% 50% at 30% 20%, rgba(51,85,255,0.35) 0%, rgba(51,85,255,0) 70%), radial-gradient(50% 40% at 85% 15%, rgba(255,122,69,0.25) 0%, rgba(255,122,69,0) 70%)",
      },
      keyframes: {
        "pulse-travel": {
          "0%": { offsetDistance: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { offsetDistance: "100%", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-travel": "pulse-travel 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
