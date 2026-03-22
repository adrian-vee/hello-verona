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
        brand: {
          // Core palette — extracted from Hello Verona logo
          primary:   "#8B7D6B",  // warm taupe (building outline)
          "primary-dark": "#6B5D4B",
          "primary-light": "#A89888",
          secondary: "#C4A882",  // terracotta/rose (heart element)
          "secondary-light": "#E8D9C0",
          accent:    "#D4C5A9",  // warm sand
          gold:      "#B8860B",  // CTA gold
          "gold-light": "#D4A820",
          bg:        "#FAF8F5",  // warm white
          "bg-alt":  "#F4EFE8",  // slightly warmer section bg
          text:      "#2D2926",  // dark charcoal
          muted:     "#7C6D63",  // muted taupe
          subtle:    "#9B8E82",  // lighter muted
          border:    "#E2D8CE",  // soft border
          "border-dark": "#C8B8AA",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:    ["var(--font-karla)", "system-ui", "sans-serif"],
        serif:   ["var(--font-cormorant)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem,7vw,5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.2rem,5vw,4rem)",  { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.6rem,3vw,2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        "card":       "0 2px 16px 0 rgba(45,41,38,0.06)",
        "card-hover": "0 8px 40px 0 rgba(45,41,38,0.13)",
        "glow":       "0 0 40px 0 rgba(184,134,11,0.15)",
        "navbar":     "0 1px 0 0 rgba(139,125,107,0.12)",
      },
      backgroundImage: {
        "gradient-warm": "linear-gradient(135deg, #FAF8F5 0%, #F4EFE8 50%, #EDE4D8 100%)",
        "gradient-gold": "linear-gradient(135deg, #B8860B 0%, #D4A820 100%)",
        "gradient-hero": "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(196,168,130,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(139,125,107,0.12) 0%, transparent 60%)",
      },
      animation: {
        "fade-up":      "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in":      "fadeIn 0.6s ease both",
        "scale-in":     "scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) both",
        "slide-right":  "slideRight 0.6s cubic-bezier(0.16,1,0.3,1) both",
        "shimmer":      "shimmer 2s linear infinite",
        "float":        "float 6s ease-in-out infinite",
        "pulse-soft":   "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%":   { opacity: "0", transform: "scale(0.94)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideRight: {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%":      { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.16,1,0.3,1)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
