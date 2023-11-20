import { put,call,delay,takeEvery,all } from "@redux-saga/core/effects";
import { getProjects } from "./getProjects";
import { takeLatest } from "@redux-saga/core/effects";
import { setPojects, removeLoadingState,fetchProjects, fetchSucces, fetchError } from "./projectsSlice"

function* fetchProjectsHendler() {
  try {
    
    const projects = yield call(getProjects);
    console.log(projects)
    yield put(fetchSucces(projects));
  
  } catch (error) {
    yield put(fetchError(
      alert("NO jestem w saga")
    ))
    yield call(alert,"kolego coś nie jest dobrze")
   
  }
};
export function* projectsSaga() {
  yield takeEvery(fetchProjects.type, fetchProjectsHendler);
  
};