import { useState } from "react";
import { A, Article, BoxButton, ChangeColor, DarkMode, Image, Section, Span, Title, Toggle, ToggleBlack, Vector, Wrapper } from "./styled";
import { useEffect } from "react";







const Header = () => {
    const [style, setStyle] = useState(<Toggle/>);
    


    const styleHendler = () => {
        setStyle(style === <Toggle/> ? <ToggleBlack/> : <Toggle/> )
        
    };
    
console.log(style)




return (
    <Section>
        <Image />
        <ChangeColor><DarkMode>Dark mode off</DarkMode>
            <BoxButton onClick={styleHendler}> 
                {<Vector />}
                {<Toggle /> } 
            </BoxButton>
        </ChangeColor>
        <Wrapper>
            <Span>This is</Span>
            <Title>Mateusz Paśko</Title>
            <Article>⚒⏳ Progamowanie jest dla mnie nowym doświadczeniem i przyjemność. Odnalazłem swoje miejsce w IT</Article>
            <A href="mailto:mateusz.pasko.r@gmail.com"> ✉ Hire me </A>
        </Wrapper>
    </Section>
)
}
export default Header;