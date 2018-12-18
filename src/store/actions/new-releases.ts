/*
 * Action setup inspired/copied from
 * https://github.com/redux-saga/redux-saga/blob/master/examples/real-world/actions/index.js
 */

import { RequestSaga } from "../sagas/types/request-saga";
import { ActionType } from "redux-saga/effects";
import { AnyAction } from "redux";

export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

function createRequestTypes(
  base: string
): { REQUEST: ActionType; SUCCESS: ActionType; FAILURE: ActionType } {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {REQUEST: '', SUCCESS: '', FAILURE: ''});
}

export const NEW_RELEASES = createRequestTypes("NEW_RELEASES");

export const LOAD_MORE_NEW_RELEASES = "LOAD_MORE_NEW_RELEASES";
export const RESET_ERROR_MESSAGE = "RESET_ERROR_MESSAGE";

function action(type, payload = {}): AnyAction {
  return { type, payload };
}

export class FetchNewReleases implements AnyAction {
  public readonly type = NEW_RELEASES[REQUEST];
  public readonly payload;
  constructor(page = 1, limit = 20) {
    this.payload = { page, limit };
  }
}

type NewReleasesSaga = RequestSaga<{ page: number; offset: number }, any, any>;

export const newReleases: NewReleasesSaga = {
  request: ({ page, limit }) => action(NEW_RELEASES[REQUEST], {page, limit}),
  success: ({ releases, page, limit }) =>
    action(NEW_RELEASES[SUCCESS], { releases, page, limit }),
  error: error => action(NEW_RELEASES[FAILURE], { error })
};

// export const loadUserProfile = (login, requiredFields = []) =>
//   action(LOAD_USER_PROFILE, { login, requiredFields });
export const loadMoreNewReleases = page =>
  action(LOAD_MORE_NEW_RELEASES, { page });

export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE);

export type Action = FetchNewReleases;
