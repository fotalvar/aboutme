import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html{
    min-width: ${(props) => props.theme.breakpoints.xs};
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  font-family: ${(props) => props.theme.fonts.primary};
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

body {
  background-color: ${(props) => props.theme.colors.background};
}

img {
  max-width: 100%;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

button{
  cursor: pointer;
  font-family: inherit;
}

input{
  font-family: inherit;
}

.page{
  width: 100vw;
  height: 100vh;
}

`;

export default GlobalStyle;
