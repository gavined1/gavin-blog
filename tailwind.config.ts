import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "hsl(var(--foreground))",
            a: {
              color: "hsl(var(--primary))",
              textDecoration: "underline",
              textUnderlineOffset: "2px",
              "&:hover": {
                color: "hsl(var(--primary) / 0.8)",
              },
            },
            h1: {
              color: "hsl(var(--foreground))",
              fontWeight: "700",
            },
            h2: {
              color: "hsl(var(--foreground))",
              fontWeight: "600",
            },
            h3: {
              color: "hsl(var(--foreground))",
              fontWeight: "600",
            },
            h4: {
              color: "hsl(var(--foreground))",
              fontWeight: "600",
            },
            h5: {
              color: "hsl(var(--foreground))",
              fontWeight: "600",
            },
            h6: {
              color: "hsl(var(--foreground))",
              fontWeight: "600",
            },
            strong: {
              color: "hsl(var(--foreground))",
              fontWeight: "600",
            },
            code: {
              color: "hsl(var(--foreground))",
              backgroundColor: "hsl(var(--muted))",
              padding: "0.125rem 0.25rem",
              borderRadius: "0.25rem",
              fontSize: "0.875em",
              fontFamily: "var(--font-jetbrains-mono)",
            },
            pre: {
              backgroundColor: "hsl(var(--muted))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.5rem",
              padding: "1rem",
              overflowX: "auto",
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
              borderRadius: "0",
              fontSize: "0.875rem",
            },
            blockquote: {
              borderLeft: "4px solid hsl(var(--border))",
              paddingLeft: "1rem",
              fontStyle: "italic",
              color: "hsl(var(--muted-foreground))",
            },
            table: {
              width: "100%",
              borderCollapse: "collapse",
            },
            th: {
              border: "1px solid hsl(var(--border))",
              padding: "0.75rem",
              backgroundColor: "hsl(var(--muted))",
              fontWeight: "600",
              textAlign: "left",
            },
            td: {
              border: "1px solid hsl(var(--border))",
              padding: "0.75rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
