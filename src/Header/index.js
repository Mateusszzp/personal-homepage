
import { A, Article, BoxButton, ChangeColor, DarkMode, Image, Section, Span, Title, Toggle, ToggleBlack, Vector, VectorBalck, Wrapper } from "./styled";
import { fetchChangeLighte, selectChangeLighte } from "../changeLighteSlice";
import { useDispatch, useSelector } from "react-redux";
import {theme} from "../theme"

const Header = () => {

  const dispatch = useDispatch();
  const changeLighte = useSelector(selectChangeLighte);

  return (
    <Section >
      <Image />
      <ChangeColor><DarkMode>Dark mode off</DarkMode>
        <BoxButton onClick={() => dispatch(fetchChangeLighte())}>
          {changeLighte ? <Vector /> : <VectorBalck />}
          {changeLighte ? <Toggle /> : <ToggleBlack />}
        </BoxButton>
      </ChangeColor>
      <Wrapper>
        <Span>This is</Span>
        <Title style={{color:changeLighte ? theme.colors.black : theme.colors.white}}>Mateusz Paśko</Title>
        <Article>⚒⏳ Dopiero zaczynam moją kraierę z programowaniem i tak naprwande nie wiem co mnie czeka ale pozytywnie patrzę w przyszłość 😉</Article>
        <A href="mailto:mateusz.pasko.r@gmail.com"> ✉ Hire me </A>
      </Wrapper>
    </Section>
  )
}
export default Header;