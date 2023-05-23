import { A, Article, Button, Image, Section, Span, Title, Wrapper } from "./styled";

import toggleMode from "../image/ToggleMode.png"


const Header = () => {

    return (
        <Section>
            <Image />
            <Button > DARK MODE OFF <img src={toggleMode} alt="" /></Button>
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