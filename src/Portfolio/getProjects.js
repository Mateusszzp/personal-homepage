export const getProjects = async () => {
    const response = await fetch("/personal-homepage/myProjects.json")

    if (!response.ok) {
        new Error(response.statusText)
    }
    return await response.json();
}