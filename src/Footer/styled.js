import styled, { css } from "styled-components";
import { ReactComponent as github } from "../image/github.svg"
import { ReactComponent as facebook } from "../image/facebook.svg"
import { ReactComponent as linkedin } from "../image/linkedin.svg"
import { ReactComponent as instagram } from "../image/instagram.svg"

export const Wrraper = styled.div`
    max-width: 691px;
    max-height: 282px;
    padding: 10px;
    display:flex;
    flex-direction: column;
`;

export const Span = styled.span`
    font-size: 12px;
    color:${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    font-weight: 700;
    `;
export const Email = styled.span`
    font-size: 32px;
    font-weight: 900;
    line-height: 38,73px;
    letter-spacing: 5%;
    color:${({ theme }) => theme.colors.project};
`;
export const Article = styled.article`
    font-size: 18px;
    font-weight: 400px;
    line-height: 25,2px;
    letter-spacing: 5%;
`;

export const Icon = styled.div`
flex-direction: row;


`;
export const Github = styled(github)`
    max-width: 48px;
    max-height:48px;
    margin-right: 24px;
    cursor: pointer;
  :hover{
        filter:brightness(120%);
    }
`;
export const Facebook = styled(facebook)`
    max-width: 48px;
    max-height:48px;
    margin-right: 24px;
  :hover{
        filter:brightness(120%);
    }
`;
export const Linkedin = styled(linkedin)`
    max-width: 48px;
    max-height:48px;
    margin-right: 24px;
  :hover{
        filter:brightness(120%);
    }
`;
export const Instagram = styled(instagram)`
    max-width: 48px;
    max-height:48px;
    margin-right: 24px;
  :hover{
        filter:brightness(120%);
    }
`;