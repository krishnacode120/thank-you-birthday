// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.main};
    cursor: none; /* We will use custom cursor */
  }

  body {
    background: url('/party-bg.jpg') no-repeat center center fixed;
    background-size: cover;
    overflow-x: hidden;
    color: ${({ theme }) => theme.colors.white};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-weight: bold;
  }
`;

export default GlobalStyle;
