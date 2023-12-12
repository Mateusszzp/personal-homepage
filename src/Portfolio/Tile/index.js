import { useDispatch, useSelector } from "react-redux";
import { A, Box, BoxInside, Button, Code, Description, ProjectName, Span, Til } from "./styled"
import { fetchProjects, selectProject, setProject } from "../MyProjects/projectsSlice";
import { useEffect } from "react";
import { Section } from "../../Common/styled";



const Tile = () => {
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(fetchProjects(setProject))
  }, [dispatch])

  const projects = useSelector(selectProject);

  return (

    <Box>
      {projects.map(project => (
        <Til key={project.id}>
          <BoxInside>
            <ProjectName >
              {project.name}
            </ProjectName>
            <Description>
              Project description: {project.description}
            </Description>
            <Code>
              Demo:&nbsp;<A href={project.demo}>https://link.demo.com</A>
            </Code>
            <Code>
              Code:&nbsp;<A href={project.code}>&nbsp;https://link.code.com</A>
            </Code>
          </BoxInside>
        </Til>

      ))}

    </Box>





  )
};
export default Tile;