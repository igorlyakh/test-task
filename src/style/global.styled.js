import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.mainFont};
    color: ${({ theme }) => theme.colors.mainGray};
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: contain;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    font-family: inherit;
    cursor: pointer;  
      border: none;
      padding: 0;
  }
  
  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }`;
