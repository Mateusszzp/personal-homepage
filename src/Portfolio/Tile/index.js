import { useDispatch, useSelector } from "react-redux";
import { Box, BoxInside, Button, Code, Description, ProjectName, Span, Til } from "./styled"
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
              Demo:&nbsp;< a href={project.demo}>https://link.demo.com</a>
            </Code>
            <Code>
              Code:&nbsp;<a href={project.code}>https://link.code.com</a>
            </Code>
          </BoxInside>
        </Til>

      ))}

    </Box>





  )
};
export default Tile;