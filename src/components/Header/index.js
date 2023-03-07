import styled from "styled-components";

export const Section = styled.section`
    max-width:1316px;
    margin:auto ;
    padding: 15px;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    
     
    

@media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
   margin:0;
   
}
`;


export const Image = styled.img`

max-width: 368px ;
max-height: 368px ;
border-radius:100%;
border:1px solid;
grid-column-start:1;
@media (min-width:${({ theme}) => theme.breakpoints.mobile}px){
    margin:auto;
    
}
`;
export const Span = styled.span`
font-size: 12px;
line-height: 130%;
color:${({ theme }) => theme.colors.slateGray};
align-self: center;
grid-column-start:2;
grid-column-end:span 3;
margin: auto 66px;



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
margin-top: 35px;
font-size: 20px;
align-self: end;
line-height: 140%;
color:${({ theme }) => theme.colors.slateGray};
line-height: 140%;
letter-spacing: 0.05em;
align-self: center;
justify-content:center;

@media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
    
    
}

`;

export const A = styled.a`
background:${({ theme }) => theme.colors.scienceBlue};
color:${({ theme }) => theme.colors.white};
text-decoration: none;
padding:6px;
height: 49px;
width: 154px;
font-size: 20px;
display: flex;
align-items: center;
text-align: center;
justify-content:center;
margin-top: 32px;
letter-spacing: 0.05em;
font-style: normal;

`;

export const Button = styled.button`
border: none;
cursor: pointer;
background: none;

font-size: 12px;



grid-column-start:3;
justify-self: end;
display:flex;
flex-direction:row;
justify-content: space-evenly;
align-items: center;
`;