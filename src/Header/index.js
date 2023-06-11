
import { A, Article, BoxButton, ChangeColor, DarkMode, Image, Section, Span, Title, Toggle,  Vector, Wrapper } from "./styled";









const Header = () => {
    
    


      
            
        
    
    





return (
    <Section >
        <Image />
        <ChangeColor><DarkMode>Dark mode off</DarkMode>
            <BoxButton > 
                <Vector />
                <Toggle />
            </BoxButton>
        </ChangeColor>
        <Wrapper>
            <Span>This is</Span>
            <Title>Mateusz Paśko</Title>
            <Article>⚒⏳ Dopiero zaczynam moją kraierę z programowaniem i tak naprwande nie wiem co mnie czeka ale pozytywnie patrzę w przyszłość 😉</Article>
            <A href="mailto:mateusz.pasko.r@gmail.com"> ✉ Hire me </A>
        </Wrapper>
    </Section>
)
}
export default Header;