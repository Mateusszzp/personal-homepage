import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        status: "loading",
        project: [""],
        error: false
    },
    reducers: {

        fetchProjects: () => {

        },
        
       
        setProject: (state, { payload: project }) => {
            state.project = project
            
        },
        fetchLoading: (state) => {
            state.status = true
        },
        fetchSuccess: (state, {payload:success}) => {
            state.status = success
        },
        fetchError: (state) => {
            state.error = false
        },
    }
});

export const {
    setProject,
    fetchProjects,
    removeLoadingState,
    fetchLoading,
    fetchSuccess,
    fetchError,
} = projectsSlice.actions;

const selectProjectsState = state => state.projects;
export const selectProject = state => selectProjectsState(state).project
export default projectsSlice.reducer;