import { AppProps } from 'next/app';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Libre Baskerville, Georgia, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 20px;
    background-color: #f4f4f4;
  }

  * {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    display: block;
  }

  p {
    font-family: Cutive Mono, Courier New, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 20px;
    line-height: 1.6;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;
    font-weight: 500;
    color: #00613a;
  }

  hr {
    background-color: #00613a;
    color: #00613a;
    height: 0.5px;
    border: none;
    margin: 40px 0;
  }

  section {
    margin-bottom: 48px;
  }
`;

const theme = {
  colors: {
    main: '#00613a',
    accent: '#ffffff', // ffc2ce
    background: '#f4f4f4', // d7f3eb
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
