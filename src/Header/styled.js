import styled from "styled-components";
import { ReactComponent as mateuszP } from "../image/mateuszP.svg"
import { ReactComponent as vector } from "../image/vector.svg";
import { ReactComponent as vectorBlack } from "../image/vectorBlack.svg";
import { ReactComponent as toggle } from "../image/toggle.svg";
import { ReactComponent as toggleBlack } from "../image/toggleBlack.svg";

export const Section = styled.section`
    background-color: ${({ theme }) => theme.colors.universal};
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-template-rows:  repeat(3fr auto);
    margin-top: 115px;

  @media (max-width:${({ theme }) => theme.breakpoints.full}px) {
    /* max-width: 80vw; */
    margin-inline: 20px;
    
}
@media (max-width:${({ theme }) => theme.breakpoints.medium}px){
    grid-template-columns:1fr;
    margin-inline: 20px;
}`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column ;
    margin-left: 66px;
    margin-right: 10px;
   

  @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
    grid-row-start:5;
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
    
    @media (max-width:${({ theme }) => theme.breakpoints.full}px){
      margin-left: 20px;
    }
    @media (max-width:${({ theme }) => theme.breakpoints.small}px){
      width:calc(70% - 1vw);
      height:calc(80% - 1em);
      
  }
   
  @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
    min-width:calc(100% + 30vw /4 );
    grid-row-end: 2;
    margin-top: 30px;
    
  }
`;
export const ChangeColor = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-end;
   
   
  @media (max-width:${({ theme }) => theme.breakpoints.medium}px) {
    grid-row-start:1;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.small}px) {
    color:transparent;
    margin: 0;
    grid-row-start:1;
    
  
  }
`;
export const DarkModeText = styled.span`
    margin-right: 2%;
 `;

export const BoxButton = styled.div`
display: flex;
cursor: pointer;
`
export const Vector = styled(vector)`
    width: 98px;
    height: 47px;
    border: none;
    position: relative;
`;

export const VectorBalck = styled(vectorBlack)`
    width: 98px;
    height: 47px;
    border: none;
    position: relative;
  `;

export const Toggle = styled(toggle)`
    width:40px;
    height:40px;
    margin-inline:10px;
    transition:all 1s ;
    position: absolute;
    align-self: center;
    
    
  `;
export const ToggleBlack = styled(toggleBlack)`
    width:40px;
    height:40px;
    margin-inline:10px;
    transition:all 1s ;
    position: absolute;
    touch-action: auto;
    align-self: center;
    translate: 100%;
    
    
   
  `;
export const Span = styled.span`
    font-size: 12px;
    color:${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    font-weight: 700;

    
`;

export const Title = styled.h1`
    font-size: 38px;
    color:${({ theme }) => theme.colors.heading};
    font-weight: 900;
    margin:12px 0 35px ;

  @media (max-width:${({ theme }) => theme.breakpoints.medium}px){
    font-size: calc(4vw + 2px);
  }

  @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top:8px;
    margin-bottom: 16px;
    font-size: 22px;
   
  }
`;
export const Article = styled.article`
    font-size: 20px;
    line-height: 140%;
    color:${({ theme }) => theme.colors.text};
    letter-spacing: 0.05em;

    @media (max-width:${({ theme }) => theme.breakpoints.small}px) {
      margin-top:0 ;
    }
    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
      font-size: 17px;
    }
`;

export const A = styled.a`
    background:${({ theme }) => theme.colors.post};
    color:${({ theme }) => theme.colors.universal};
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
  @media (max-width:${({ theme }) => theme.breakpoints.medium}px){
    margin-top:24px;
    margin-bottom: 46px;
}
`;

/* Vector */




