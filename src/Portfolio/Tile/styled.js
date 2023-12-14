import styled from "styled-components";

export const Box = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(400px,1fr));
   grid-template-rows: 322px;
   grid-gap: 20px;
   margin-top:24px;

  @media(max-width:${({ theme }) => theme.breakpoints.full}px){
    margin:auto;
  }
`;

export const Til = styled.div`
    background-color:${({ theme }) => theme.colors.universal};
    max-width: 592px;
    max-height: 322px;
    color:${({ theme }) => theme.colors.text};
    border: 1px solid black;
    box-shadow: 5px -5px 4px 1px rgba(66, 68, 90, 1);
   
    
  @media(max-width:${({ theme }) => theme.breakpoints.medium}px){
    max-width: calc(100vw - 2px);
  }
`;

export const BoxInside = styled.div`
    margin:calc(3vw - 2px);
  
`;

export const ProjectName = styled.a`
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.project};
    height: 29.05px;
    cursor: pointer;
    text-decoration: none;
  :hover {
        filter:brightness(120%);
    }
  
   

`;
export const Description = styled.article`
    font-size: 18px;
    line-height: 25,2px;
    letter-spacing: 5%;
    color:${({ theme }) => theme.colors.text};
    margin-top: 24px;


`;

export const Code = styled.p`
    font-size: 18px;
    line-height: 25,2px;
    letter-spacing: 5%;
    color:${({ theme }) => theme.colors.text};
`;
export const A = styled.a`
    color:${({ theme }) => theme.colors.project};

  :hover{
    :hover {
        filter:brightness(120%);
    };
}
  :visited{
    color:none;
  }
`;




