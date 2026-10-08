/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#06090a",
        "bg-2": "#0b110d",
        panel: "#0d1510",
        border: "#1a2a1e",
        green: {
          DEFAULT: "#7CFF6B",
          dim: "#4c9a45",
        },
        amber: "#FFB347",
        ink: "#b8c8b8",
        dim: "#5a6b5a",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 8px rgba(124,255,107,.55), 0 0 24px rgba(124,255,107,.25)",
        "glow-lg": "0 0 12px rgba(124,255,107,.55), 0 0 40px rgba(124,255,107,.25)",
        "glow-inset": "inset 0 0 40px rgba(124,255,107,.06)",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        scanline: "scanline 8s linear infinite",
      },
    },
  },
  plugins: [],
};