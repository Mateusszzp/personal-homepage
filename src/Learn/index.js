import { useSelector } from "react-redux";
import { H2, Li, Section } from "../Common/styled";
import { theme } from "../theme";
import { selectChangeLighte } from "../changeLighteSlice";



const Learn = () => {
  const lightMode = useSelector(selectChangeLighte)
  return (
    <>
      <Section second style={{ backgroundColor: lightMode ? theme.colors.white : theme.colors.orange }}>
        <H2>
          What I want to learn next 💪
        </H2>
        <Li>TypeScript</Li>
        <Li>React Context</Li>
        <Li>Node.js</Li>
        <Li>Unit Testing</Li>
        <Li>Nest.jse</Li>
        <Li>Graphql and rest api </Li>
      </Section>
    </>

  )
};

export default Learn;