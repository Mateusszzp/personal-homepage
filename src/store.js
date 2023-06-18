import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {

    },
    middleware: [sagaMiddleware] 
});

export default store;