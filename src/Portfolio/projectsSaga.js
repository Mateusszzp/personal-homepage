import { put,call } from "@redux-saga/core/effects";
import { getProjects } from "./getProjects";
import { takeLatest } from "@redux-saga/core/effects";
import { setPojects, removeLoadingState,fetchProjects } from "./projectsSlice"

function* fetchProjectsHendler() {
  try {
    const projects = yield call(getProjects);
    yield put(setPojects(projects));
  } catch (error) {
    yield put(removeLoadingState(
      alert("imbecyle"),
      console.log("Przykro mi ale coś poszło nie tak")));

  }
};
export function* projectsSaga() {
  yield takeLatest(fetchProjects.type, fetchProjectsHendler);
};