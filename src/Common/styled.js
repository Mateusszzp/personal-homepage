import styled, { css } from "styled-components";
import circle from "../image/circle.svg"

export const Section = styled.div`
    color:${({ theme }) => theme.colors.universal} ;
    background-color: ${({ theme }) => theme.colors.universal};
    margin-top: 63px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    min-height:500px;
    display: grid;
    justify-content: space-around;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    
    // tu mieliśmy auto potrzebna responsywność 
 
  ${({ second }) => second && css`
    min-height:151px;
    `}
    @media (max-width:${({ theme }) => theme.breakpoints.full}px) {
    /* max-width: 80vw; */
    margin-inline: 20px;
    
}
`;

export const H2 = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    color:${({ theme }) => theme.colors.heading};
    grid-column-end: span  3 ;
    margin-inline: 5%;
    display: block;

  ${({ second }) => second && css`
    margin:0;
    padding:0;
    `}
    
@media (max-width:${({ theme }) => theme.breakpoints.medium}px) {
   font-size:celc;
}
@media (max-width:${({ theme }) => theme.breakpoints.small}px) {
   
}
@media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
    line-height: 22px;
}
`;
export const Li = styled.li`
    justify-self: start;
    margin: 8px 32px;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color:${({ theme }) => theme.colors.text};
    display: list-item;
    list-style-image: url(${circle});
    padding-bottom: 5%;
   
@media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
    line-height: 17px;
    }
`; 