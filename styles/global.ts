import { createGlobalStyle } from "styled-components";

    const GlobalStyle = createGlobalStyle`
      body {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition for dark mode */
      }

      // ... other styles, using theme.text, theme.background, etc.

      img {
        max-width: 100%; /* Prevent images from overflowing */
        height: auto;
      }
    `;

    export default GlobalStyle;
