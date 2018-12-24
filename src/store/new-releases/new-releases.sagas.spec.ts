import { fetchNewReleasesSaga, watchNewReleases } from "./new-releases.sagas";
import * as api from "../../services/api";
import mockReleases from "../../mocks/new-releases";
import {
  NEW_RELEASES_REQUEST,
  NewReleasesRequest,
  NewReleasesSuccess
} from "./new-releases.actions";
import { call, put, takeLatest } from "redux-saga/effects";

describe("New Releases Sagas", () => {
  it("fetches new releases", () => {
    const data = mockReleases.slice(0, 2);

    const generator = fetchNewReleasesSaga(new NewReleasesRequest({ page: 1 }));

    generator.next();

    expect(generator.next({ newReleases: { limit: 20 } }).value).toEqual(
      call(api.fetchNewReleases, 1, 20)
    );

    expect(generator.next({ data }).value).toEqual(
      put(new NewReleasesSuccess({ releases: data, page: 1 }))
    );

    expect(generator.next().done).toBeTruthy();
  });

  it("watches for new releases", () => {
    const generator = watchNewReleases();

    expect(generator.next().value).toEqual(
      takeLatest(NEW_RELEASES_REQUEST, fetchNewReleasesSaga)
    );
  });
});
