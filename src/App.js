import { SectionCenter } from "./SectionCenter/styled";
import Header from "./Header";
import Learn from "./Learn";
import MySkills from "./MySkills";
import Portfolio from "./Portfolio";
import { Container, ContainerMode } from "./Container/styled";
import { useSelector } from "react-redux";
import { selectChangeLighte } from "./changeLighteSlice";
import { theme, themeBlack } from "./theme"
import styled from "styled-components";

function App() {
  const lightMode = useSelector(selectChangeLighte);


  return (

    <Container style={
      {backgroundColor: lightMode ? theme.colors.nav : theme.colors.black}}>
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
