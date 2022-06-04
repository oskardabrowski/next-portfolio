import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: "Arimo";
  background-color: #000B3D;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;
