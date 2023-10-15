import { Container } from "./Container/styled";
import Header from "./Header";
import Learn from "./Learn";
import MySkills from "./MySkills";
import Portfolio from "./Portfolio";

function App() {
  return (
    <Container>
      <Header />
      <MySkills/>
      <Learn/>
      <Portfolio/>
    </Container>
  
  )
};

export default App;
