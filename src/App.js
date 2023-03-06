import { Article, Image, Section, Title, A, Button, } from "./components/Header";
import mateuszP from "./image/mateuszP.jpg"
import toggleMode from "./image/ToggleMode.png"



function App() {
  return (

    <div>
<Button><img src={toggleMode} alt=""/></Button>
      <Section>
        <Image src={mateuszP} alt="" />
        
        <Title>Mateusz Paśko
          <Article>⚒⏳ Progamowanie jest dla mnie nowym doświadczeniem i przyjemność. Odnalazłem swoje miejsce w IT</Article>
          <A href="mailto:mateusz.pasko.r@gmail.com">✉ Hire me</A>
        </Title>

      </Section>
      
    </div>


  );
}

export default App;
