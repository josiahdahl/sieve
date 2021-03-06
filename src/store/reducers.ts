import { combineReducers } from 'redux';
import { newReleasesReducers, NewReleasesState } from './new-releases/new-releases.reducers';

export interface RootState {
  newReleases: NewReleasesState;
}

export function selectFeature<T>(feature: keyof T) {
  return (state: T) => state[feature];
}

export function createSelector(...args: Function[]) {
  return state => {
    const [featureSelector, ...selectors] = args;
    return selectors
      .reduce(
        (prevVal, fn) => {
          const nextVal = fn.apply(null, prevVal);
          return [...prevVal, nextVal];
        },
        [featureSelector.call(null, state)]
      )
      .pop();
  };
}

export default combineReducers({ newReleases: newReleasesReducers });
