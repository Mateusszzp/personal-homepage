import { useSelector } from "react-redux";
import { ProjectName, Til } from "./styled"
import { selectProjects } from "../Portfolio/projectsSlice";


const Tile = () => {

  const projects = useSelector(selectProjects)
  return (

    <>

      <Til >

        <ProjectName  >
          iuikoyu
        </ProjectName>

        <p>
          Opis projektu
        </p>
        <p> Demo:</p>
        <p>Code:</p>

      </Til>
    </>
  )
};
export default Tile;