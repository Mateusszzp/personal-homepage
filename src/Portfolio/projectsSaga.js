import { put } from "@redux-saga/effects";
import { getProjects } from "./getProjects";

function* fetchProjectsHendler() {
    try {
        const projects = yield call(getProjects);
        yield put()
    }catch (error) {
        yield (alert("ruchał was pies"))
    }
}