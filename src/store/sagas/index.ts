import { watchNewReleases } from "./new-releases";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchNewReleases()]);
}
