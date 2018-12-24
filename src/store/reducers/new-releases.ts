import {
  Actions,
  NEW_RELEASES_REQUEST,
  NEW_RELEASES_SUCCESS
} from "../actions/new-releases";
import { createSelector, RootState, selectFeature } from "./index";

export interface NewReleasesState {
  releases: any[];
  currentPage: number;
  limit: number;
  releasesCount: number;
  isFetching: boolean;
}

export const initialState: NewReleasesState = {
  releases: [],
  currentPage: 1,
  limit: 10,
  releasesCount: 40,
  isFetching: false
};

function reducer(state = initialState, action: Actions): NewReleasesState {
  switch (action.type) {
    case NEW_RELEASES_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case NEW_RELEASES_SUCCESS: {
      const { page = state.currentPage, releases } = action.payload;

      const { limit } = state;

      if (releases.length === 0 || page < 1) {
        return state;
      }

      return {
        ...state,
        isFetching: false,
        currentPage: page,
        releases: [
          ...state.releases.slice(0, limit * (page - 1)),
          ...releases,
          ...state.releases.slice(limit * page)
        ]
      };
    }
    default:
      return state;
  }
}

export const selectNewReleases = selectFeature<RootState>("newReleases");

export const selectReleasesForPage = createSelector(
  selectNewReleases,
  (state: NewReleasesState) => {
    const { currentPage, limit, releases } = state;
    return releases.slice((currentPage - 1) * limit, currentPage * limit);
  }
);

export const newReleases = reducer;
