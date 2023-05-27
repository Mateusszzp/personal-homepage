import { A, Article, Button, ChangeColor, Image, Section, Span, Title, Toggle, Vector, Wrapper } from "./styled";

import toggleMode from "../image/ToggleMode.png"


const Header = () => {

    return (
        <Section>
            <Image />
            <ChangeColor><Vector/><Toggle /></ChangeColor>
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