import styled from "styled-components";
import { ReactComponent as Shape } from "../image/shape.svg"

export const Box = styled.div`
    margin-top: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const Cat = styled(Shape)`
    width: 40px;
`;
export const Projects = styled.span`
    color:${({ theme }) => theme.colors.heading};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin-bottom: 15px;
`;



