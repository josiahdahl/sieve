import { watchNewReleases } from "./new-releases/new-releases.sagas";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchNewReleases()]);
}
