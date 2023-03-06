import styled from "styled-components";

export const Section = styled.section`
    margin:auto 354px;
    padding: 15px;
    display: flex;

@media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
    margin:auto;
    display: flex;
    flex-direction:column;
    justify-content: center;
    
}
`;
export const Image = styled.img`
margin-top: 115px ;
width: 368px;
height: 368px;
border-radius:100%;

`;

export const Title = styled.h1`
display: flex;
flex-direction: column;
justify-content:space-around;
align-content: space-around;
font-size: 38px;
color:${({ theme }) => theme.colors.black};
align-self: start;
margin-top: 211px;
margin-left:66px ;
@media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
    margin:0%;
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
word-wrap:break-word;
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
display: grid;
grid-template-columns: 1fr auto;
align-self: end;


`