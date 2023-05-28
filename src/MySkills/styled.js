import styled from "styled-components";
import { ReactComponent as vector } from "../image/vector.svg"
import { ReactComponent as toggle } from "../image/toggle.svg"
import circle from "../image/circle.svg"


export const Section = styled.div`
    background: ${({ theme }) => theme.colors.white};
    margin-top: 63px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    min-height:500px;
    display: grid;
    justify-content: space-around;
    grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
`;

export const H2 = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    color:${({ theme }) => theme.colors.black};
    margin-left: 34px;
    grid-column-end: span  3 ;
    
@media (max-width:${({ theme }) => theme.breakpoints.medium}px) {
    grid-column-end: span  2;
}
@media (max-width:${({ theme }) => theme.breakpoints.small}px) {
    grid-column-end: span  1;
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
    color:${({ theme }) => theme.colors.slateGray};
    display: list-item;
    list-style-image: url(${circle}) ;
   
    

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
    line-height: 17px;
    }
`; 



// export const Button1 = styled.button`
//     /* display: flex;
//     width: 178px;
//     height:100px;
//     align-items:center;
//     cursor: pointer;
//     border-radius: 100%;
//     border: none;
//     background: none; */
//    `;