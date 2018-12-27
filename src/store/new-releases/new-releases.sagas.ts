import {
  NEW_RELEASES_REQUEST,
  NewReleasesRequest,
  NewReleasesSuccess
} from "./new-releases.actions";
import * as api from "../../services/api";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { selectNewReleases } from "./new-releases.selectors";

export function* fetchNewReleasesSaga() {
  const state = yield select();

  const { offset: stateOffset, limit } = selectNewReleases(state);

  const offset = stateOffset * 2;

  const { data: releases } = yield call<number, number>(
    api.fetchNewReleases,
    offset,
    limit
  );

  yield put(new NewReleasesSuccess({ releases, offset, limit }));
}

export function* watchNewReleases() {
  yield takeEvery<NewReleasesRequest>(
    NEW_RELEASES_REQUEST,
    fetchNewReleasesSaga
  );
}
