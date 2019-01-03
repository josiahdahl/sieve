import {
  NEW_RELEASES_FILTER_ALBUMS,
  NEW_RELEASES_FILTER_NONE,
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
    const action = new NewReleasesRequest();

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
    const offset = 0;

    const action = new NewReleasesSuccess({ releases, offset });

    const state = newReleasesReducers(undefined, action);

    expect(state).toEqual({
      ...state,
      releases,
      isFetching: false
    });
  });

  it(`Should handle ${NEW_RELEASES_FILTER_ALBUMS}`, () => {
    const action = new NewReleasesFilterAlbums();

    const state = newReleasesReducers(initialState, action);

    expect(state).toEqual({
      ...state,
      filter: "album"
    });
  });

  it(`Should handle ${NEW_RELEASES_FILTER_SINGLES}`, () => {
    const action = new NewReleasesFilterSingles();

    const state = newReleasesReducers(initialState, action);

    expect(state).toEqual({
      ...state,
      filter: "single"
    });
  });

  it(`Should handle ${NEW_RELEASES_FILTER_NONE}`, () => {
    const action = new NewReleasesFilterNone();

    const state = newReleasesReducers(initialState, action);

    expect(state).toEqual({
      ...state,
      filter: undefined
    });
  });
});
