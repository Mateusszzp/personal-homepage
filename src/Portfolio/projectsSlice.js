import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        loading: true,
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
    }
});

export const {
    setPojects,
    fetchProjects,
    removeLoadingState
} = projectsSlice.actions;

const selectProjectsState = state => state.projects;

export const selectProjects = state => selectProjectsState(state).projects;

export default projectsSlice.reducer;