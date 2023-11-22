import styled from "styled-components";

// utworzyć grida 2 
// stworzyć plik json
// funkcja asynchoniczna 
// dodać louder
export const Til = styled.div`
    background-color:${({ theme })=> theme.colors.universal};
    padding:100px;
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
export const Button = styled.button`
min-width: 20px;
color: green;
padding: 35px;
font-size: 20px;
`;
export const Box = styled.div`
min-width: 25%;
border: black 5px;
`;

