import { all } from 'redux-saga/effects';
import { projectsSaga } from './Portfolio/MyProjects/projectsSaga';

export default function* rootSaga() {
    yield all([
        projectsSaga(),
    ])
}