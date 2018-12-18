import { combineReducers } from "redux";
import newReleases, { NewReleasesState } from "./new-releases";

export interface State {
  newReleases: NewReleasesState;
}

export default combineReducers({ newReleases });
