import styled from "styled-components";
import { ReactComponent as vector } from "../image/vector.svg"
import { ReactComponent as toggle } from "../image/toggle.svg"


export const Section = styled.div`
background: ${({ theme }) => theme.colors.white};
margin-top: 63px;
box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
border-radius: 4px;
display:flex;
flex-direction:column;
max-height: 404px;
display: grid;
    grid-template-columns: repeat(auto-fit, minmax(608px, 1fr));
    
`;

export const H2 = styled.h2`
grid-column-end: span 2;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    color:${({ theme }) => theme.colors.black};
    margin-left: 34px;
`;

export const Li = styled.li`
justify-self: center;
   margin-left: 32px;
   
   

    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color:${({ theme }) => theme.colors.slateGray};
    list-style-image: blue;
   
`; 

export const Toggle= styled(toggle)`
    width:85px;
    height:85px;
    align-self: center;
    position: absolute;
    margin-inline: 5px;
    transition:all 0.8s ease-out;
 

&:checked{
   transform: rotate(180deg);
   translate: 90px;
   color:blue;
    
}
`;
export const Vector = styled(vector)`
    width: 250px;
    height: 200px;
    pointer-events: none;
`;
export const Button1 = styled.button`
display: flex;
width: 178px;
height:100px;
align-items:center;
cursor: pointer;
border-radius: 100%;
border: none;
background: none;
pointer-events: painted;

;
`