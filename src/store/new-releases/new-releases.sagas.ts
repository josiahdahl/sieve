import {
  NEW_RELEASES_CHANGE_PAGE,
  NEW_RELEASES_NEXT_PAGE,
  NEW_RELEASES_PREV_PAGE,
  NEW_RELEASES_REQUEST,
  NewReleasesChangePage,
  NewReleasesNextPage,
  NewReleasesPrevPage,
  NewReleasesRequest,
  NewReleasesSuccess,
  NewReleasesUpdateOffset
} from "./new-releases.actions";
import * as api from "../../services/api";
import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  selectLoadedReleaseCount,
  selectNewReleases
} from "./new-releases.selectors";

export function* fetchNewReleasesSaga(action: NewReleasesRequest) {
  const state = yield select();

  const { limit } = selectNewReleases(state);
  const { offset } = action.payload;

  const { data: releases } = yield call<number, number>(
    api.fetchNewReleases,
    offset,
    limit * 2
  );
  console.log(offset);

  yield put(new NewReleasesSuccess({ releases, offset }));
}

export function* handlePageChange(action: NewReleasesChangePage) {
  const state = yield select();

  const { limit } = selectNewReleases(state);
  const loadedReleases = selectLoadedReleaseCount(state);

  const { page } = action.payload;
  const offset = (page - 1) * limit;

  if (loadedReleases - 10 < offset + limit) {
    yield put(new NewReleasesRequest({ offset }));
  }

  yield put(new NewReleasesUpdateOffset({ offset }));
}

export function* watchNewReleases() {
  yield takeEvery<NewReleasesRequest>(
    NEW_RELEASES_REQUEST,
    fetchNewReleasesSaga
  );

  yield takeEvery<NewReleasesChangePage>(
    NEW_RELEASES_CHANGE_PAGE,
    handlePageChange
  );
}
