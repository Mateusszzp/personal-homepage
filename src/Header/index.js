import { A, Article,  ChangeColor, DarkMode, Image, Section, Span, Title, Toggle, Vector, Wrapper } from "./styled";




const Header = () => {

    return (
        <Section>
            <Image />
            <ChangeColor><DarkMode>Dark mode off</DarkMode><Vector/><Toggle /></ChangeColor>
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