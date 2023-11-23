import { useDispatch, useSelector } from "react-redux";
import { Box, Button, ProjectName, Til } from "./styled"
import { fetchProjects, selectProject, setProject } from "../MyProjects/projectsSlice";
import { useEffect } from "react";



const Tile = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(fetchProjects(setProject))
  }, [dispatch])

  const projects = useSelector(selectProject);
  console.log(projects)
  return (
  
    <Box>
    {projects.map(project =>  (
      <Til key={project.id}>
        
      
        <ProjectName >
          {project.name}

        </ProjectName>

        <p>
          Opis projektu: {project.discryption}
        </p>
        <p> Demo:</p>< a href={project.demo}>https://link.demo.com</a> 
        <p>Code:</p><a href={project.code}>https://link.code.com</a>
        
      </Til>

   ) )}
      
    </Box>
      
  
      
        

    )
};
export default Tile;