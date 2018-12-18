import {
  Action,
  NEW_RELEASES,
  REQUEST,
  SUCCESS
} from "../actions/new-releases";

export interface NewReleasesState {
  releases: any[];
  currentPage: number;
  limit: number;
  isFetching: boolean;
}

const initialState: NewReleasesState = {
  releases: [],
  currentPage: 1,
  limit: 20,
  isFetching: false
};

function reducer(state = initialState, action: Action): NewReleasesState {
  switch (action.type) {
    case NEW_RELEASES[REQUEST]: {
      return {
        ...state,
        isFetching: true
      };
    }
    case NEW_RELEASES[SUCCESS]: {
      const { page, limit, releases } = action.payload;

      if (releases.length === 0 || page < 1) {
        return state;
      }

      return {
        ...state,
        isFetching: false,
        currentPage: page,
        limit: limit,
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

export default reducer;
