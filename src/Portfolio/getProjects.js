
export const getProjects = async () => {
    const response = await fetch('personal-homepage/myProjects.json')
    console.log(response)
    
    if (!response.ok) {
       throw new Error(response.statusText);
        
    }
    console.log("co jest")
    
    return await response.json();
}