import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    cursor: arrow;
    background-color: ${({ theme }) => theme.background};
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }  
`;
