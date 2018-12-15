import {
  Action,
  NEW_RELEASES,
  REQUEST,
  SUCCESS
} from "../actions/new-releases";

const initialState = {
  releases: [],
  currentPage: 1,
  limit: 20,
  isFetching: false
};

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case NEW_RELEASES[REQUEST]: {
      return {
        ...state,
        isFetching: true
      };
    }
    case NEW_RELEASES[SUCCESS]: {
      const { page, limit, data } = action.payload;
      return {
        ...state,
        isFetching: false,
        currentPage: page,
        limit: limit,
        releases: [
          ...state.releases.slice(0, limit * page),
          ...data,
          ...state.releases.slice(limit * page)
        ]
      };
    }
    default:
      return state;
  }
}

export default reducer;
