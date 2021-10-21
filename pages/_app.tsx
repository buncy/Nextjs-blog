import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #121111;
    --gray-1: #00afff;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --yellow-1:#29e31d;
    --white : white;
    --black: black;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url("/fonts/RobotoMono-Regular.ttf");
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url("/fonts/Montserrat-SemiBold.ttf");
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url("/fonts/Montserrat-Bold.ttf");
    font-style: normal;
  }
  html{
    font-family: 'RobotoMono Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'RobotoMono Regular';
    color: var(--yellow-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat SemiBold'
  }

`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <NavMenu />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
