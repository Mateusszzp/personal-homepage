import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        status: "loading",
        projects: true
    },
    reducers: {

        setPojects: (state, { payload: projects }) => {
            state.projects = projects
            state.loading = true
        },
       
        fetchProjects: (projects) => {
            projects.loading = false
        },
        removeLoadingState: (state) => {
            state.loading = true
        },
        setProject: (state, { payload: projects }) => {
            state.projects = projects
        },
        fetchLoading: (state) => {
            state.status = "loading"
        },
        fetchSucces: (state) => {
            state.status = "success"
        },
        fetchError: (state) => {
            state.status = "error"
        },
    }
});

export const {
    setPojects,
    fetchProjects,
    removeLoadingState,
    fetchLoading,
    fetchSucces,
    fetchError,
} = projectsSlice.actions;

const selectProjectsState = state => state.projects;

export const selectProjects = state => selectProjectsState(state).projects;

export default projectsSlice.reducer;