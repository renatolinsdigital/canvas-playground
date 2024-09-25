module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,scss}"],
  darkMode: "class", // Enables dark mode by adding a 'dark' class to a wrapper html tag
  theme: {
    // Every entry in 'theme' is to be aligned with a Design System and it will be nice
    // if this Design System takes in consideration what is already present in Tailwind
    extend: {
      colors: {
        // Visual Identity Colors
        primary: "#e63946",
        "primary-dark": "#b82635",

        secondary: "#1d3557",
        "secondary-dark": "#14233b",

        tertiary: "#f1faee",
        "tertiary-dark": "#c1d8ce",

        // Neutral Colors
        neutral: {
          dark: "#131313",
          white: "#ffffff",
          "gray-1": "#fcfcfc",
          "gray-2": "#ECECEC",
          "gray-3": "#d9d9d9",
          "gray-4": "#c3c3c3",
          "gray-5": "#999999",
          inherit: "inherit",
          transparent: "transparent",
        },

        // Semantic Colors
        semantic: {
          info: "#00BBFF",
          alert: "#F4973C",
          danger: "#dc3545",
          success: "#039B00",
          "info-dark": "#0f98ca",
          "alert-dark": "#c96d13",
          "danger-dark": "#c82333",
          "success-dark": "#068303",
        },

        // Colors for Light Mode
        light: {
          text: "#1d3557",
          heading: "#1d3557",
          "text-bold": "#1d3557",
          "button-text": "#ffffff",
          "app-background": "#ffffff",
          "button-background": "#e63946",
          "container-background": "#fcfcfc",
          "button-background-hover": "#b82635",
        },

        // Colors for Dark Mode
        dark: {
          text: "#ffffff",
          heading: "#ffffff",
          "text-bold": "#ffffff",
          "button-text": "#ffffff",
          "app-background": "#131313",
          "button-background": "#e63946",
          "container-background": "#1d3557",
          "button-background-hover": "#b82635",
        },
      },
      fontFamily: {
        text: ['"TitilliumWeb Regular"', "sans-serif"],
        "text-bold": ['"TitilliumWeb Bold"', "sans-serif"],
        "text-semi-bold": ['"TitilliumWeb SemiBold"', "sans-serif"],
      },
      fontSize: {
        smallest: "0.75rem", // Equivalent to text-xs
        smaller: "0.875rem", // Equivalent to text-sm
        default: "1rem", // Equivalent to text-base
        medium: "1.125rem", // Equivalent to text-lg
        large: "1.25rem", // Equivalent to text-xl
        bigger: "1.5rem", // Equivalent to text-2xl
        jumbo: "2rem", // Equivalent to text-3xl
        biggest: "2.25rem", // Equivalent to text-4xl
      },
      fontWeight: {
        regular: 400,
        semiBold: 600,
        bold: 700,
      },
      lineHeight: {
        small: "1",
        default: "1.2",
        tall: "1.5",
        taller: "1.8",
        big: "2",
        biggest: "2.4",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionProperty: {
        DEFAULT: "all",
      },
      transitionTimingFunction: {
        DEFAULT: "ease",
      },
    },
  },
  plugins: [],
};
