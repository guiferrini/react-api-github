// CSS global
import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-logo.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 95% top;
  }

  body, input, button {
    font: 16px Lato, sans-serif;
  }

  /**base da aplicação */
  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;

//#F0F0F5
