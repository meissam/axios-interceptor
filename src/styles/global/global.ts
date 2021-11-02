import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html {
    font-size: ${({ theme }) => theme.typography.fontSize.lead};
    box-sizing: border-box;
  }

  *,*:before,*:after {
    box-sizing:inherit
  }

  body {
    background: ${({ theme }) => theme.color.darkGreen};;
    color: ${({ theme }) => theme.color.white};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: 300;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  p {
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.darkGray};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.gray};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.darkGray};
  }
`;
