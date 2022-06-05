import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: "Arimo";
  background-color: #000B3D;
  font-weight: 500;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;
