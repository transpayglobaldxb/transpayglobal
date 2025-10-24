/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2C4A6E", // Deep Ocean Blue (from logo)
          50: "#F0F4F8",
          100: "#D9E6F2",
          200: "#B3CCE5",
          300: "#7FA8D1",
          400: "#5A89BC",
          500: "#2C4A6E",
          600: "#2C3E5F",
          700: "#2C3E5F",
          800: "#2C3E5F",
          900: "#2C3E5F",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#C4A962", // Luxe Gold (from logo rings)
          50: "#FAF8F3",
          100: "#F5F0E3",
          200: "#EBE1C7",
          300: "#DCC998",
          400: "#D0B97D",
          500: "#C4A962",
          600: "#B8945F",
          700: "#9A7A4D",
          800: "#7D603B",
          900: "#5F462A",
          foreground: "#1E3A5F",
        },
        accent: {
          DEFAULT: "#C4A962", // Alias for secondary (gold)
          50: "#FAF8F3",
          100: "#F5F0E3",
          200: "#EBE1C7",
          300: "#DCC998",
          400: "#D0B97D",
          500: "#C4A962",
          600: "#B8945F",
          700: "#9A7A4D",
          800: "#7D603B",
          900: "#5F462A",
          foreground: "#1E3A5F",
        },
        error: {
          DEFAULT: "#F44336",
          50: "#FFEBEE",
          100: "#FFCDD2",
          200: "#EF9A9A",
          300: "#E57373",
          400: "#EF5350",
          500: "#F44336",
          600: "#E53935",
          700: "#D32F2F",
          800: "#C62828",
          900: "#B71C1C",
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "#FF9800",
          50: "#FFF3E0",
          100: "#FFE0B2",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#FF9800",
          600: "#FB8C00",
          700: "#F57C00",
          800: "#EF6C00",
          900: "#E65100",
          foreground: "#212121",
        },
        info: {
          DEFAULT: "#2196F3",
          50: "#E3F2FD",
          100: "#BBDEFB",
          200: "#90CAF9",
          300: "#64B5F6",
          400: "#42A5F5",
          500: "#2196F3",
          600: "#1E88E5",
          700: "#1976D2",
          800: "#1565C0",
          900: "#0D47A1",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#F44336",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #2C4A6E 0%, #5A89BC 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #C4A962 0%, #DCC998 100%)",
        "gradient-luxury":
          "linear-gradient(135deg, #1E3A5F 0%, #2C4A6E 50%, #4A90E2 100%)",
        "gradient-hero":
          "linear-gradient(135deg, #F0F4F8 0%, #FFFFFF 50%, #FAF8F3 100%)",
        "gradient-elegant":
          "radial-gradient(circle at top right, #F0F4F8 0%, #FFFFFF 50%, #FAF8F3 100%)",
        "gradient-accent": "linear-gradient(135deg, #C4A962 0%, #D0B97D 100%)",
        shimmer:
          "linear-gradient(90deg, transparent, rgba(196, 169, 98, 0.1), transparent)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "0 2px 12px rgba(44, 74, 110, 0.06)",
        medium: "0 8px 24px rgba(44, 74, 110, 0.10)",
        hard: "0 16px 48px rgba(44, 74, 110, 0.15)",
        luxury: "0 8px 32px rgba(196, 169, 98, 0.15)",
        primary: "0 8px 24px rgba(44, 74, 110, 0.20)",
        secondary: "0 8px 24px rgba(196, 169, 98, 0.25)",
        elegant:
          "0 4px 20px rgba(30, 58, 95, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
        glow: "0 0 40px rgba(196, 169, 98, 0.3)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "slide-up": {
          from: { transform: "translateY(24px)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "scale-in": {
          from: { transform: "scale(0.95)", opacity: 0 },
          to: { transform: "scale(1)", opacity: 1 },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        gradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
            backgroundSize: "200% 200%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            backgroundSize: "200% 200%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fade-in 0.4s ease-out",
        "scale-in": "scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        shimmer: "shimmer 2s infinite",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxury: "0.025em",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
