module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: "#4D13D1",
        black: "#1C2321",
        gray: "#595959",
        search: "#F9FAFB",
        card: "#E5E7EB",
        overlay: "#cec3f9",
      },
    },

    height: {
      sm: "520px",
      lg: "730px",
    },

    container: {
      center: true,
      padding: "2rem",
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1300px",
    },

    fontFamily: {
      archivo: ["Archivo", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
