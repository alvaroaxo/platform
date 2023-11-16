import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'blue-text': '#4843DF'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui( {
      addCommonColors: true,
        themes: {
          light: {
            // extend: "light", // <- inherit default values from light theme
            colors: {
              // background: "#0D001A",
              foreground: "#383838",
              primary: {
                50: "#FEECFE",
                100: "#F9F9F9",
                200: "#E5DDDC",
                300: "#D6BBD5",
                400: "#D7D6F6",
                500: "#520F83",
                600: "#3B096C",
                DEFAULT: "#7B1E7A",
                foreground: "#ffffff",
              },
              secondary: {
                DEFAULT: "#F9564F",
                foreground: "#ffffff",
              },
              success: {
                50: "#EBF4EB",
                100: "#DCF5EC",
                200: "#CEE0C5",
                300: "#DCE0C5",
                400: "#F5F9E0",
                DEFAULT: "#27BC51",
                foreground: "#ffffff",
              },
              focus: "#F182F6",
            },
            layout: {
              disabledOpacity: "0.3",
              radius: {
                small: "4px",
                medium: "6px",
                large: "12px",
              },
              borderWidth: {
                small: "1px",
                medium: "2px",
                large: "3px",
              },
            },
          },
        },
    },
      )
  ]
}
export default config
