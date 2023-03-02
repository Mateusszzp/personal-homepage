import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

html {
    
    box-sizing: border-box;
   }

*, ::after, ::before {
    box-sizing: inherit;
   }

  #root{
    background:${({ theme }) => theme.colors.mercury} ;
    width: 1920px;
    height: 2668px;
} 
   `;



