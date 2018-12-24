import {
  NEW_RELEASES_REQUEST,
  NEW_RELEASES_SUCCESS,
  NewReleasesRequest,
  NewReleasesSuccess
} from '../actions/new-releases';
import { initialState, newReleases } from './new-releases';
import mock from '../../mocks/new-releases';

describe("New Releases Reducer", () => {
  it(`Should handle ${NEW_RELEASES_REQUEST}`, () => {
    const action = new NewReleasesRequest(1);

    const state = newReleases(
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

    const action = new NewReleasesSuccess({releases, page: 1});

    const state = newReleases(undefined, action);

    expect(state).toEqual({
      releases,
      currentPage: 1,
      limit: 10,
      releasesCount: 40,
      isFetching: false
    });
  });
});
