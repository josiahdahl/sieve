import { createSelector, RootState, selectFeature } from "../reducers";
import { NewReleasesState } from "./new-releases.reducers";
import { SpotifyAlbum } from "../../types/Spotify";

export const selectNewReleases = selectFeature<RootState>("newReleases");

export const selectReleasesForPage = createSelector(
  selectNewReleases,
  (state: NewReleasesState) => {
    const { offset, limit, releases, filter } = state;
    console.table({offset, limit});
    return releases
      .filter((release: SpotifyAlbum) => {
        if (typeof filter === "undefined") {
          return true;
        }
        return filter === release.album_type;
      })
      .slice(offset, offset + limit);
  }
);

export const selectLoadedReleaseCount = createSelector(
  selectNewReleases,
  (state: NewReleasesState) => state.releases.length
);
