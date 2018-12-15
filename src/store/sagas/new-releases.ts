import * as actions from "../actions/new-releases";
import {
  FetchNewReleases,
  NEW_RELEASES,
  REQUEST
} from "../actions/new-releases";
import * as api from "../../services/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosPromise } from "axios";

const { newReleases } = actions;

export function* fetchNewReleasesSaga(action: FetchNewReleases) {
  const { page, limit } = action.payload;
  const { data } = yield call<AxiosPromise<any[]>>(
    api.fetchNewReleases,
    page,
    limit
  );

  yield put(newReleases.success({ page, limit, response: data }));
}

export function* watchNewReleases() {
  yield takeLatest<FetchNewReleases>(
    NEW_RELEASES[REQUEST],
    fetchNewReleasesSaga
  );
}
