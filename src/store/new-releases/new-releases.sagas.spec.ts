import { fetchNewReleasesSaga, watchNewReleases } from "./new-releases.sagas";
import * as api from "../../services/api";
import mockReleases from "../../mocks/new-releases";
import {
  NEW_RELEASES_REQUEST,
  NewReleasesRequest,
  NewReleasesSuccess
} from "./new-releases.actions";
import { call, put, takeEvery } from "redux-saga/effects";

describe("New Releases Sagas", () => {
  it("fetches new releases", () => {
    const data = mockReleases.slice(0, 20);

    const generator = fetchNewReleasesSaga(new NewReleasesRequest());

    generator.next();

    expect(
      generator.next({ newReleases: { limit: 20, offset: 0 } }).value
    ).toEqual(call(api.fetchNewReleases, 0, 20));

    expect(generator.next({ data }).value).toEqual(
      put(new NewReleasesSuccess({ releases: data, limit: 20, offset: 0 }))
    );

    expect(generator.next().done).toBeTruthy();
  });

  it("watches for new releases", () => {
    const generator = watchNewReleases();

    expect(generator.next().value).toEqual(
      takeEvery(NEW_RELEASES_REQUEST, fetchNewReleasesSaga)
    );
  });
});
