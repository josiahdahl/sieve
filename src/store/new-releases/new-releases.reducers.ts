import {
  Actions,
  NEW_RELEASES_FILTER_ALBUMS,
  NEW_RELEASES_FILTER_NONE,
  NEW_RELEASES_FILTER_SINGLES,
  NEW_RELEASES_REQUEST,
  NEW_RELEASES_SUCCESS
} from "./new-releases.actions";

export interface NewReleasesState {
  releases: any[];
  currentPage: number;
  limit: number;
  releasesCount: number;
  isFetching: boolean;
  filter: string | undefined;
}

export const initialState: NewReleasesState = {
  releases: [],
  currentPage: 1,
  limit: 10,
  releasesCount: 40,
  isFetching: false,
  filter: undefined
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
    case NEW_RELEASES_FILTER_ALBUMS:
      return {
        ...state,
        filter: "album"
      };
    case NEW_RELEASES_FILTER_SINGLES:
      return {
        ...state,
        filter: "single"
      };
    case NEW_RELEASES_FILTER_NONE:
      return {
        ...state,
        filter: undefined
      };
    default:
      return state;
  }
}

export const newReleasesReducers = reducer;
