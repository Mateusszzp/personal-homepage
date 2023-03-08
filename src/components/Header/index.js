import styled from "styled-components";


export const Section = styled.section`
    max-width:1216px;
    margin: auto ;
    margin-top: 115px;
    display:grid;
    grid-template-columns:repeat(2,auto);
   
    
    
     
    
   @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
   margin:0;
   
  }
`;

export const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction:column ;
margin-left: 66px;

@media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
 grid-row-start: 2;
 margin: 15px;
    

}
`


export const Image = styled.img`
    max-width: 368px ;
    max-height: 368px ;
    border-radius:100%;
    border:1px solid;
   
    


   @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
    margin:auto;
    max-width: 100%;
    max-height: 100%;
  }
`;
export const Span = styled.span`
    font-size: 12px;
    
    color:${({ theme }) => theme.colors.slateGray};
    text-transform: uppercase;
    font-weight: bold;

`;

export const Title = styled.h1`
    font-size: 38px;
    color:${({ theme }) => theme.colors.black};
    font-weight: 900;

   @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
    margin:5px;
    
  }
`;
export const Article = styled.article`
    
    font-size: 20px;
    
    line-height: 140%;
    color:${({ theme }) => theme.colors.slateGray};
    
    letter-spacing: 0.05em;




@media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
    
    
}

`;

export const A = styled.a`
    background:${({ theme }) => theme.colors.scienceBlue};
    color:${({ theme }) => theme.colors.white};
    text-decoration: none;
    height: 49px;
    width: 154px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content:center;
    margin-top: 32px;
   
`;

export const Button = styled.button`
    border: none;
    cursor: pointer;
    background: none;
    font-size: 12px;
    align-self: end;
    display:flex;
    align-items: center;
    padding:20px;
    align-content: space-around;
    
    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
   grid-row-start:span 1;
    
  }
`;