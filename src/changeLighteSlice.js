import { createSlice } from '@reduxjs/toolkit';


const changeLighteSlice = createSlice({
    name: "changeLighte",
    initialState: {
        status: false,
    },

    reducers: {
        fetchChangeLighte: state => {
            state.status = !state.status
           
        }
    }
});

export const {
    fetchChangeLighte,
} = changeLighteSlice.actions;

export const selectChangeLighte = state => state.status.changeLighte;
//export const selectChangeLighteN = state => selectChangeLighte(state).status


export default changeLighteSlice.reducer;
