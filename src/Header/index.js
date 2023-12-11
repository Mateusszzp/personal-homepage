import { A, Article, BoxButton, ChangeColor, DarkModeText, Image, Section, Span, Title, Toggle, ToggleBlack, Vector, VectorBalck, Wrapper } from "./styled";
import { fetchChangeLighte, selectChangeLighte } from "../changeLighteSlice";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {

  const dispatch = useDispatch();
  const changeLighte = useSelector(selectChangeLighte);

  return (
    <Section >
      <Image />
      <ChangeColor><DarkModeText>Dark mode {changeLighte ? "on" : "off"}</DarkModeText>
        <BoxButton onClick={() => dispatch(fetchChangeLighte())}>
          {changeLighte ? <Vector /> : <VectorBalck />}
          {changeLighte ? <Toggle /> : <ToggleBlack />}
        </BoxButton>
      </ChangeColor>
      <Wrapper>
        <Span>This is</Span>
        <Title >Mateusz Paśko</Title>
        <Article>⚒⏳ Dopiero zaczynam moją kraierę z programowaniem i tak naprwande nie wiem co mnie czeka ale pozytywnie patrzę w przyszłość 😉</Article>
        <A href="mailto:mateusz.pasko.r@gmail.com"> ✉ Hire me </A>
      </Wrapper>
    </Section>
  )
}
export default Header;