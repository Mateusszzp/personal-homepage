import { Article, Image, Section, Title, A, Button, Span, Wrapper } from "./components/Header";
import mateuszP from "./image/mateuszP.jpg"
import toggleMode from "./image/ToggleMode.png"



function App() {
  return (

    <>
    <Section>
        <Image src={mateuszP} alt="" />
        <Button > DARK MODE OFF<img src={toggleMode} alt="" /></Button>
        <Wrapper>
        
          <Span>This is</Span>
          <Title>Mateusz Paśko</Title>
          <Article>⚒⏳ Progamowanie jest dla mnie nowym doświadczeniem i przyjemność. Odnalazłem swoje miejsce w IT</Article>
          <A href="mailto:mateusz.pasko.r@gmail.com">✉ Hire me</A>
        </Wrapper>
      </Section>
      </>


  );
}

export default App;
