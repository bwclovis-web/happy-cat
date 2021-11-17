import { createGlobalStyle } from 'styled-components'
import font from '../assets/fonts/Chicle-Regular.ttf'

const Typography = createGlobalStyle`
  @font-face {
    font-family: Chicle-Regular;
    src: url(${font});
  }
  html {
    font-family: OpenSans-Regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
    font-size: 1.8rem;
    line-height: 1.5;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
    
  }

  h1, .h1 {
    font-size: clamp(3.6rem, 5vw, 6.8rem);
    line-height: 1;
    padding-bottom: clamp(1rem, 2vw, 2rem);
    font-family: 'Chicle-Regular';
    text-decoration: none;
  }

  h2, .h2 {
    font-size: clamp(2.4rem, 2.5vw, 4.8rem);
    margin: 0;
  }

  h3, .h3 {
    font-size: clamp(2.0rem, 2.5vw, 3.4rem);
  }
  ul {
    margin: 0;
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
