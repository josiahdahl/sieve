import { createSelector, RootState, selectFeature } from '../reducers';
import { NewReleasesState } from './new-releases.reducers';

export const selectNewReleases = selectFeature<RootState>("newReleases");

export const selectReleasesForPage = createSelector(
  selectNewReleases,
  (state: NewReleasesState) => {
    const { currentPage, limit, releases } = state;
    return releases.slice((currentPage - 1) * limit, currentPage * limit);
  }
);
