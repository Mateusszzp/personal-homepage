import  { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

html {
    
    box-sizing: border-box;
   }

*, ::after, ::before {
    box-sizing: inherit;
   }

  #root{
    background:${({ theme }) => theme.colors.lilic} ;
    font-family:'Inter', serif ;
    
   
} 
   `;



