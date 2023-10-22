import { SectionCenter } from "./SectionCenter/styled";
import Header from "./Header";
import Learn from "./Learn";
import MySkills from "./MySkills";
import Portfolio from "./Portfolio";
import { Container,  } from "./Container/styled";
import { useSelector } from "react-redux";
import { selectChangeLighte } from "./changeLighteSlice";

function App() {
  const lightMode = useSelector(selectChangeLighte);


  return (

    <Container>
      <SectionCenter>
        <Header />
        <MySkills />
        <Learn />
        <Portfolio />
      </SectionCenter>
    </Container>



  )
};

export default App;
