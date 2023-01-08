import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset};

* {
    box-sizing:border-box;
  }

input {
  outline: none;
}

button, a {
  cursor: pointer;
}


`;

export default GlobalStyles;
