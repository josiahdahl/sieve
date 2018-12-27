import { createSelector, RootState, selectFeature } from "../reducers";
import { NewReleasesState } from "./new-releases.reducers";
import { SpotifyAlbum } from "../../types/Spotify";

export const selectNewReleases = selectFeature<RootState>("newReleases");

export const selectReleasesForPage = createSelector(
  selectNewReleases,
  (state: NewReleasesState) => {
    const { offset, limit, releases, filter } = state;
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
