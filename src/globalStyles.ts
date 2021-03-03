import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap');

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
    color: inherit;
  }

  body, html {
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 120%;
    text-align: center;
  }
`;

export const mediaQuery = {
  sm: `@media (min-width: 361px)`
};

export const themeColors = {
  brandColorPrimary: `#1B31A8`,
  brandColorSecondary: `#0079FF`,
  blueGray10: `#F4F8FA`,
  blueGray100: `#CBD5DC`,
  blueGray300: `#8A9CA9`,
  blueGray400: `#708797`,
  blueGray600: `#4D6475`,
  blueGray900: `#1E2A32`
};

export default GlobalStyle;
