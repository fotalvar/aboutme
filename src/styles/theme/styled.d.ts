import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      lightPink: string;
      darkPink: string;
      lightGrey: string;
      aqua: string;
      background: string;
    };

    fonts: {
      primary: string;
      title: string;
      titleStyled: string;
    };

    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
export default DefaultTheme;
