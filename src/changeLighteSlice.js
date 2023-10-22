import { createSlice } from '@reduxjs/toolkit';


const changeLighteSlice = createSlice({
    name: 'changeLighte',
    initialState: {
        status: true,
        color: "theme",
    },

    reducers: {
        fetchChangeLighte: state => {
          state.status= !state.status 
        },
        fetchchangeColor: state => {
            state.color = "themeBlack" 
        }
    }
});

export const {
    fetchChangeLighte,
} = changeLighteSlice.actions;

const selectChangeLighteState = state => state.changeLighteSlice;

export const selectChangeLighte = state => selectChangeLighteState(state).status;

export default changeLighteSlice.reducer;
