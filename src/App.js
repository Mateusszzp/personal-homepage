import { Article, Image, Section, Title, A, Button, Span } from "./components/Header";
import mateuszP from "./image/mateuszP.jpg"
import toggleMode from "./image/ToggleMode.png"



function App() {
  return (

    <div><Button ><img src={toggleMode} alt=""/>DARK MODE ON</Button>
        <Section>
      
        <Image src={mateuszP} alt=""/>
        <Span>This is
        <Title>Mateusz Paśko</Title>
          <Article>⚒⏳ Progamowanie jest dla mnie nowym doświadczeniem i przyjemność. Odnalazłem swoje miejsce w IT</Article>
          <A href="mailto:mateusz.pasko.r@gmail.com">✉ Hire me</A>
          </Span>
        
      </Section>
      
    </div>


  );
}

export default App;
