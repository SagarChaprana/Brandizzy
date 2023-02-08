import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  *,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  background-color: ${(props) => props.theme.bgColor};
}
h1, h2, h3, h5, h6 {
    font-family: ${(props) => props.theme.fontLato};
}
p, a, span, button, input, textarea, label {
    font-family: ${(props) => props.theme.fontKarla} !important;
}
`;
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
}
