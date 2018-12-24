import {
  NEW_RELEASES_FILTER_ALBUMS,
  NEW_RELEASES_FILTER_SINGLES,
  NEW_RELEASES_REQUEST,
  NEW_RELEASES_SUCCESS,
  NewReleasesFilterAlbums,
  NewReleasesFilterNone,
  NewReleasesFilterSingles,
  NewReleasesRequest,
  NewReleasesSuccess
} from "./new-releases.actions";
import { initialState, newReleasesReducers } from "./new-releases.reducers";
import mock from "../../mocks/new-releases";

describe("New Releases Reducer", () => {
  it(`Should handle ${NEW_RELEASES_REQUEST}`, () => {
    const action = new NewReleasesRequest(1);

    const state = newReleasesReducers(
      {
        ...initialState,
        isFetching: false
      },
      action
    );

    expect(state.isFetching).toBeTruthy();
  });

  it(`Should handle ${NEW_RELEASES_SUCCESS}`, () => {
    const releases = mock.slice(0, 10);

    const action = new NewReleasesSuccess({ releases, page: 1 });

    const state = newReleasesReducers(undefined, action);

    expect(state).toEqual({
      releases,
      currentPage: 1,
      limit: 10,
      releasesCount: 40,
      isFetching: false
    });
  });

  it(`Should handle ${NEW_RELEASES_FILTER_ALBUMS}`, () => {
    const action = new NewReleasesFilterAlbums();

    const state = newReleasesReducers(initialState, action);

    expect(state).toEqual({
      releases: [],
      currentPage: 1,
      limit: 10,
      releasesCount: 40,
      isFetching: false,
      filter: NEW_RELEASES_FILTER_ALBUMS
    });
  });

  it(`Should handle ${NEW_RELEASES_FILTER_SINGLES}`, () => {
    const action = new NewReleasesFilterSingles();

    const state = newReleasesReducers(initialState, action);

    expect(state).toEqual({
      releases: [],
      currentPage: 1,
      limit: 10,
      releasesCount: 40,
      isFetching: false,
      filter: NEW_RELEASES_FILTER_SINGLES
    });
  });

  it(`Should handle ${NEW_RELEASES_FILTER_ALBUMS}`, () => {
    const action = new NewReleasesFilterNone();

    const state = newReleasesReducers(initialState, action);

    expect(state).toEqual({
      releases: [],
      currentPage: 1,
      limit: 10,
      releasesCount: 40,
      isFetching: false,
      filter: undefined
    });
  });
});
