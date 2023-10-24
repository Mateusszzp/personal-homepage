import styled from "styled-components";


export const Til = styled.div`
    background-color:${({ theme })=> theme.colors.universal};
    padding:50px;
    max-width: 592px;
    max-height: 322px;
    color:${({ theme }) => theme.colors.text};
    margin-top: 5%;
`;

export const ProjectName = styled.h3`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.project};
    height: 29.05px;
    
`;


