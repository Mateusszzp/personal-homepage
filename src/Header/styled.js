import styled from "styled-components";
import { ReactComponent as mateuszP } from "../image/mateuszP.svg"

export const Section = styled.section`
   
    
    display:grid;
    grid-template-columns:repeat(2,auto);
    grid-template-rows:  repeat(3fr auto);

  @media (max-width:${({ theme }) => theme.breakpoints.full}px) {
    max-width: 80vw;
    margin:auto;

   
   }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column ;
    margin-left: 66px;
    margin-right: 10px;
   
  @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
    grid-row-start:4;
    grid-column-end: span 2;
    margin: 15px;
  }
`;

export const Image = styled(mateuszP)`
    width: 398px ;
    height: 398px ;
    border-radius:100%;
    border:1px solid;
    grid-row-end:span 3;
    
    
   
  @media (max-width:${({ theme }) => theme.breakpoints.medium}px){
    width: 28vw ;
    height: 28vw ;
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
    margin:12px 0 35px ;

  @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top:8px;
    margin-bottom: 16px;
  }
`;
export const Article = styled.article`
    font-size: 20px;
    line-height: 140%;
    color:${({ theme }) => theme.colors.slateGray};
    letter-spacing: 0.05em;
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

  @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top:24px;
    margin-bottom: 46px;
  }
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
    justify-self: end;
    
  @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
    grid-column-start:-1;
    color:transparent;
  }
`;