import { createSlice } from '@reduxjs/toolkit';


const changeLighteSlice = createSlice({
    name: "changeLighte",
    initialState: {
        status: false,
    },

    reducers: {
        fetchChangeLighte: state => {
            state.changeLighte = !state.changeLighte
           
        }
    }
});

export const {
    fetchChangeLighte,
} = changeLighteSlice.actions;

export const selectChangeLighte = state => state.status.changeLighte;


export default changeLighteSlice.reducer;
