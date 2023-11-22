import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core'
import changeLighteSliceReducer from "./changeLighteSlice"
import projectsReducer from './Portfolio/MyProjects/projectsSlice'
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        changeLighteSlice: changeLighteSliceReducer,
        projects: projectsReducer,

    },
    middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;