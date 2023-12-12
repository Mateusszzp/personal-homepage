import { SectionCenter } from "./Container/SectionCenter/styled";
import Header from "./Header";
import Learn from "./Learn";
import MySkills from "./MySkills";
import Portfolio from "./Portfolio";
import { Container, } from "./Container/styled";
import  Tile  from "./Portfolio/Tile";
import Footer from "./Footer";

function App() {
  return (

    <Container>
      <SectionCenter>
        <Header />
        <MySkills />
        <Learn />
        <Portfolio />
        <Tile />
        <Footer/>
      </SectionCenter>
    </Container>



  )
};

export default App;
