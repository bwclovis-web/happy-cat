import { createGlobalStyle } from 'styled-components'
const Typography = createGlobalStyle`

  html {
    font-family:"Libre Franklin", OpenSans-Regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }

  p, li {
    letter-spacing: 0.5px;
    font-size: clamp(1.6rem, 2vw, 2rem);
    line-height: 1.5;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
    font-family: 'Chicle';

  }

  h1, .h1 {
    font-size: clamp(5.6rem, 10vw, 10.8rem);
    line-height: 1;
    padding-bottom: clamp(1rem, 2vw, 2rem);
    font-family: 'Chicle';
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: -0.3rem 0.3rem rgba(0,0,0,0.4);

    @media(min-width: 786px) {
      text-shadow: -0.7rem 0.7rem rgba(0,0,0,0.4);
    }
  }

  h2, .h2 {
    font-size: clamp(4.8rem, 10vw, 6.6rem);
    margin: 0;
    font-family: 'Chicle';
    font-weight: 600;
    text-shadow: -0.32rem 0.32rem rgba(0,0,0,0.15);
    line-height: .9;
    padding-bottom:clamp(1.2rem, 4vw, 4rem);
  }

  h3, .h3 {
    font-size: clamp(2rem, 2.5vw, 3.4rem);
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

  .call-out {
    font-size: rem;
    text-align: center;
  }
`

export default Typography
