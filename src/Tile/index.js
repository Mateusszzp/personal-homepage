import { useSelector } from "react-redux";
import { ProjectName, Til } from "./styled"
import { selectProjects } from "../Portfolio/projectsSlice";


export const Tile = () => {

  const projects = useSelector(selectProjects)
  return (

    <>
    {console.log(projects)}
        <Til>
          <ProjectName >
            Movies Browser
          </ProjectName>

          <p>
            Opis projektu
          </p>
          <p> Demo:
          </p>Code:
        </Til>
   
    </>
  )
};