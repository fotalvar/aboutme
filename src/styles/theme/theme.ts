import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    lightPink: "#ED3C7D",
    darkPink: "#684257",
    lightGrey: "#9A9A9A",
    aqua: "#41D7D9",
    background: "#fff",
  },

  fonts: {
    primary: "'Outfit', sans-serif",
    title: "'Patua One', cursive",
    titleStyled: "'Lily Script One', cursive",
  },

  breakpoints: {
    xs: "360px",
    sm: "640px",
    md: "875px",
    lg: "1024px",
    xl: "1280px",
  },
};

export default theme;
