import { fetchNewReleasesSaga, watchNewReleases } from "./new-releases";
import * as api from "../../services/api";
import {
  FetchNewReleases,
  NEW_RELEASES,
  newReleases,
  REQUEST
} from "../actions/new-releases";
import { call, put, takeLatest } from "redux-saga/effects";

describe("New Releases Sagas", () => {
  it("fetches new releases", () => {
    const data = ["some", "data"];

    const generator = fetchNewReleasesSaga(new FetchNewReleases());

    expect(generator.next().value).toEqual(call(api.fetchNewReleases, 1, 20));

    expect(generator.next({ data }).value).toEqual(
      put(newReleases.success({ page: 1, limit: 20, releases: data }))
    );

    expect(generator.next().done).toBeTruthy();
  });

  it("watches for new releases", () => {
    const generator = watchNewReleases();

    expect(generator.next().value).toEqual(
      takeLatest(NEW_RELEASES[REQUEST], fetchNewReleasesSaga)
    );
  });
});
