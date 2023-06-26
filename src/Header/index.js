
import { useState } from "react";
import { A, Article, BoxButton, ChangeColor, DarkMode, Image, Section, Span, Title, Toggle, ToggleBlack, Vector, VectorBalck, Wrapper } from "./styled";
import { fetchChangeLighte } from "../changeLighteSlice";
import { useDispatch } from "react-redux";
 console.log(fetchChangeLighte())
const Header = () => {
//const dispatch = useDispatch();


    const [newStyle, setStyle] = useState(true);

    const HendlerStyling = () => {
        setStyle(ToggleStyle => !ToggleStyle);
    };


    console.log(newStyle)

    return (
        <Section >
            <Image />
            <ChangeColor><DarkMode>Dark mode off</DarkMode>
                <BoxButton onClick={HendlerStyling}>
                    {newStyle ? <Vector /> : <VectorBalck />}
                    {newStyle ? <Toggle /> : <ToggleBlack />}
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