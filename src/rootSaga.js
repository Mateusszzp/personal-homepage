import { all } from 'redux-saga/effects';
import { projectsSaga } from './Portfolio/projectsSaga';

export default function* rootSaga() {
    yield all([
        projectsSaga(),
    ])
}