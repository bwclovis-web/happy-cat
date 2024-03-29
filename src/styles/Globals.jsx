import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --black: rgb(9, 13, 13);
    --coral: rgb(252, 146, 126);
    --cayman: rgb(82, 204, 186);
    --peacock: rgb(22, 195, 219);
    --success: rgb(28, 140, 77);
    --marino: rgba(128, 74, 64);
    --white: #efe;
    --radius: .5rem;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    line-height: 1.5;
    scrollbar-width: thin;
    scrollbar-color: var(--peacock) var(--white);
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  .container {
      margin: 0 auto;
      padding-top: clamp(2.6rem, 6vw, 10rem); 
      padding-bottom: clamp(2.6rem, 6vw, 10rem);
      width: 100%;
      max-width: 2000px;
      padding-left: clamp(1rem, 3vw, 2rem);
      padding-right: clamp(1rem, 3vw, 2rem);

      &-condensed {
        max-width: 1600px;
        padding-left: clamp(1rem, 3vw, 4rem);
        padding-right: clamp(1rem, 3vw, 4rem);
      }
  }

  input {
    border: none;
    background: transparent;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--pictonBlue) inset;
    background-color: transparent;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
  
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  section {
    p:not(:last-child) {
      padding-bottom: 4rem;
    }
  }

  .cart-open {
    overflow: hidden;
  }

`

export default GlobalStyles
