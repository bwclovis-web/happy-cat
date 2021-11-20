import { createGlobalStyle } from 'styled-components'
import font from '../assets/fonts/Chicle-Regular.ttf'
import bodyFont from '../assets/fonts/LibreFranklin-VariableFont_wght.ttf'
const Typography = createGlobalStyle`
  @font-face {
    font-family: Chicle-Regular;
    src: url(${font});
    font-weight: 300 700;
    font-display: fallback;
  }

  @font-face {
    font-family: LibreFranklin;
    src: url(${bodyFont});
    font-weight: 300 700;
    font-display: fallback;
  }
  html {
    font-family:"LibreFranklin", OpenSans-Regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
    font-size: clamp(1.8rem, 2vw, 2.2rem);
    line-height: 1.5;
    font-weight: 500;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
    font-family: 'Chicle-Regular';

  }

  h1, .h1 {
    font-size: clamp(7.6rem, 10vw, 10.8rem);
    line-height: 1;
    padding-bottom: clamp(1rem, 2vw, 2rem);
    font-family: 'Chicle-Regular';
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: -0.7rem 0.7rem rgba(0,0,0,0.4);
  }

  h2, .h2 {
    font-size: 5.6rem;
    margin: 0;
    font-family: 'Chicle-Regular';
    font-weight: 600;
    text-shadow: -0.32rem 0.32rem rgba(0,0,0,0.15);
    line-height: .9;
  }

  h3, .h3 {
    font-size: clamp(2.0rem, 2.5vw, 3.4rem);
    font-weight: 500;
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none; 
    color: inherit; 
    cursor: pointer;
  }

  button {
    background-color: transparent; 
    color:inherit; 
    border-width: 0; 
    padding: 0; 
    cursor:pointer;
  }


  .center {
    text-align: center;
  }
`

export default Typography
