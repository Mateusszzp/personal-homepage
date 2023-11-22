import { useDispatch, useSelector } from "react-redux";
import { Box, Button, ProjectName, Til } from "./styled"
import { fetchProjects, selectProject, setProject } from "../MyProjects/projectsSlice";
import { useEffect } from "react";



const Tile = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProject())
    dispatch(fetchProjects(setProject))
  }, [dispatch])

  const projects = useSelector(selectProject);
  console.log(projects)
  return (
  
    <Box>
    
      <Til>
        
      
          <ProjectName >

          </ProjectName>

          <p>
            Opis projektu
          </p>
          <p> Demo:</p>
          <p>Code:</p>
          
        </Til>

    </Box>
      
  
      
        

    )
};
export default Tile;