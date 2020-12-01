import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, #root{
    width: 100%;
  }

  *, button, input{
    border: 0;
    outline: 0;
    font-family: var(--font-primary);
  }

  :root {
    --background-color: #FFFFFF;
    --background-secundary: #F5F5F7; 
    --primary: #0C0B0B;
    --secondary: #2f3136;
    --iconMenu: #FFFFFF;
    --opacity: 0.3;
    --font-primary: 'Roboto';
    --font-secondary: 'Baloo Bhaina 2';  
  }
`;
