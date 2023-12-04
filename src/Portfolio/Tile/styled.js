import styled from "styled-components";



export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px,1fr));
  grid-template-rows: 322px;
  grid-gap: 20px;
  margin-top:24px;

  @media(max-width:${({theme}) => theme.breakpoints.full}px){
    margin:auto;
  }
  `;



export const Til = styled.div`
    background-color:${({ theme })=> theme.colors.universal};
    min-width: 592px;
    max-height: 322px;
    
    color:${({ theme }) => theme.colors.text};
   
    border: 1px solid black;
    box-shadow: 5px -5px 4px 1px rgba(66, 68, 90, 1);
`;

export const BoxInside = styled.div`
  margin:calc(3vw - 2px);
`;

export const ProjectName = styled.h3`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.project};
    height: 29.05px;

`;
export const Description = styled.article`
  font-size: 18px;
  line-height: 25,2px;
  letter-spacing: 5%;
  color:${({theme}) => theme.colors.text};
`;

export const Code = styled.p`
  font-size: 18px;
  line-height: 25,2px;
  letter-spacing: 5%;
  color:${({theme}) => theme.colors.text};
`;




