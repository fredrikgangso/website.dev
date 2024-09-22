import plugin from "tailwindcss/plugin";
// import figmaTypes from "./design-tokens/generated/tailwind-typography.generated";
// import figmaColors from "./design-tokens/generated/tailwind-colors.generated";

export default plugin(
  ({ addComponents }) => {
    addComponents({
      // ...figmaTypes,
    });
  },
  {
    darkMode: "class",
    theme: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      extend: {
        colors: {
          current: "currentColor",
          // ...figmaColors,
        },
        fontSize: {
          base: "1rem",
          mini: "0.8rem",
          small: "0.867rem",
          subtitle: "1.2rem",
          title: "1.467rem",
        },
        transitionTimingFunction: {
          "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
          "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        },
        boxShadow: {
          dropdown: "0px 4px 9px 0px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  }
);
