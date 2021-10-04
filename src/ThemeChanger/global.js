import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  
  .styles_stickyContainer__hDKtn{
    background: ${({ theme }) => theme.body} !important;
  }

  path{
    fill:${({ theme }) => theme.text};
  }
  
  .loading svg circle{
    stroke:${({ theme }) => theme.text};
  }

  `