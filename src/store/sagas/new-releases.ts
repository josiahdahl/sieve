import {
  NEW_RELEASES_REQUEST,
  NewReleasesRequest,
  NewReleasesSuccess
} from "../actions/new-releases";
import * as api from "../../services/api";
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { selectNewReleases } from '../reducers/new-releases';

export function* fetchNewReleasesSaga(action: NewReleasesRequest) {
  const { page } = action.payload;
  const state = yield select();
  const { limit } = selectNewReleases(state);

  const { data } = yield call<number, number>(
    api.fetchNewReleases,
    page,
    limit
  );

  yield put(new NewReleasesSuccess(data, page));
}

export function* watchNewReleases() {
  yield takeLatest<NewReleasesRequest>(
    NEW_RELEASES_REQUEST,
    fetchNewReleasesSaga
  );
}
