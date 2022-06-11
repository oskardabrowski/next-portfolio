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
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #000B3D;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 25px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to top, #0062ff, #ff007b);
}
`;
