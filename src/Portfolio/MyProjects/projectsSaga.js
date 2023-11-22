import { put, call, delay, takeEvery, all } from "@redux-saga/core/effects";
import { getProjects } from "./getProjects";
import { takeLatest } from "@redux-saga/core/effects";
import { setProject, fetchError, fetchProjects, } from "./projectsSlice"

function* fetchProjectsHendler() {
  try {
    const projects = yield call(getProjects);
    yield put(setProject(projects));
console.log(projects)
  } catch (error) {
    yield put
    console.error("Sprawdź adres")

  }

};
export function* projectsSaga() {
  yield takeEvery(fetchProjects.type, fetchProjectsHendler);

};