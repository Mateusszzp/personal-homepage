import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core'
import changeLighteSliceReducer from "./changeLighteSlice"
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        changeLighteSlice: changeLighteSliceReducer,
    },
    middleware: [sagaMiddleware] 
});

export default store;