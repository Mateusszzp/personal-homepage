import { useSelector } from "react-redux";
import { H2, Li, Line, Section, Section2 } from "../Common/styled";
import { selectChangeLighte } from "../changeLighteSlice";
import { theme } from "../theme"




const MySkills = () => {
    const lightMode = useSelector(selectChangeLighte)


    return (
        <>
            <Section style={{ backgroundColor: lightMode ? theme.colors.white : theme.colors.orange }}>
                <H2 style={{color:lightMode ? theme.colors.black : theme.colors.white}}>
                    My skillset includes 🛠📂
                </H2>
                <Li style={{color:lightMode ? theme.colors.black : theme.colors.white}}>Semantic & accessible HTML</Li>
                <Li>Responsive Web Design</Li>
                <Li>Teamwork</Li>
                <Li>Immutability</Li>
                <Li>CSS BEM convention</Li>
                <Li>CSS Grid</Li>
                <Li>CSS Flexbox</Li>
                <Li>React Router</Li>
                <Li>Redux-Saga</Li>
                <Li>Redux (Toolkit)</Li>
                <Li>React Hooks</Li>
                <Li>Error handling</Li>
                <Li>React Hooks</Li>
                <Li>Working with API (fetch, axios)</Li>
                <Li>JavaScript: ES6+</Li>
                <Li>Promises, Async/Await</Li>
                <Li>GitHub Pull Requests & Review</Li>
                <Li>Scrum</Li>
                <Li>Trello</Li>
                <Li>NPM</Li>
                <Li>React</Li>
                <Li>Git</Li>
            </Section>
        </>

    )

};
export default MySkills;