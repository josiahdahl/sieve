import {
  fetchNewReleasesSaga,
  handlePageChange,
  watchNewReleases
} from "./new-releases.sagas";
import * as api from "../../services/api";
import mockReleases from "../../mocks/new-releases";
import {
  NEW_RELEASES_NEXT_PAGE,
  NEW_RELEASES_PREV_PAGE,
  NEW_RELEASES_REQUEST,
  NewReleasesNextPage,
  NewReleasesPrevPage,
  NewReleasesRequest,
  NewReleasesSuccess
} from "./new-releases.actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { initialState } from "./new-releases.reducers";

describe("New Releases Sagas", () => {
  it("fetches new releases", () => {
    const data = mockReleases.slice(0, 20);

    const generator = fetchNewReleasesSaga();

    generator.next();

    expect(
      generator.next({ newReleases: { limit: 10, offset: 0 } }).value
    ).toEqual(call(api.fetchNewReleases, 0, 20));

    expect(generator.next({ data }).value).toEqual(
      put(new NewReleasesSuccess({ releases: data, offset: 0 }))
    );

    expect(generator.next().done).toBeTruthy();
  });

  it("handles next page change when not at maximum offset", () => {
    const action = new NewReleasesNextPage();
    const generator = handlePageChange(action);

    generator.next();

    expect(
      generator.next({
        newReleases: {
          offset: 0,
          limit: 10,
          releases: Array.from(Array(20))
        }
      }).value
    ).toEqual(put(new NewReleasesRequest({ offset: 10 })));
  });

  it("handles next page change when at maximum offset", () => {
    const action = new NewReleasesNextPage();
    const generator = handlePageChange(action);

    generator.next();

    expect(
      generator.next({
        newReleases: {
          offset: 5,
          limit: 10,
          releases: Array.from(Array(10)),
          releasesCount: 10
        }
      }).value
    ).toEqual(put(new NewReleasesRequest({ offset: 5 })));
  });

  it("handles previous page change at regular offset", () => {
    const action = new NewReleasesPrevPage();
    const generator = handlePageChange(action);

    generator.next();

    expect(
      generator.next({
        newReleases: {
          offset: 50,
          limit: 10
        }
      }).value
    ).toEqual(put(new NewReleasesRequest({ offset: 40 })));
  });

  it("handles previous page change at bottom offset", () => {
    const action = new NewReleasesPrevPage();
    const generator = handlePageChange(action);

    generator.next();

    expect(
      generator.next({
        newReleases: {
          offset: 5,
          limit: 10
        }
      }).value
    ).toEqual(put(new NewReleasesRequest({ offset: 0 })));
  });

  it("watches new release actions", () => {
    const generator = watchNewReleases();

    expect(generator.next().value).toEqual(
      takeEvery(NEW_RELEASES_REQUEST, fetchNewReleasesSaga)
    );
    expect(generator.next().value).toEqual(
      takeEvery(NEW_RELEASES_NEXT_PAGE, handlePageChange)
    );
    expect(generator.next().value).toEqual(
      takeEvery(NEW_RELEASES_PREV_PAGE, handlePageChange)
    );
  });
});
