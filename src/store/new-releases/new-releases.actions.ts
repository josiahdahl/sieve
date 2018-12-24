import { SpotifyAlbum } from "../../types/Spotify";

export const NEW_RELEASES_REQUEST = "NEW_RELEASES_REQUEST";

export class NewReleasesRequest {
  readonly type = NEW_RELEASES_REQUEST;

  constructor(public readonly payload: { page: number }) {}
}

export const NEW_RELEASES_SUCCESS = "NEW_RELEASES_SUCCESS";

export class NewReleasesSuccess {
  readonly type = NEW_RELEASES_SUCCESS;

  constructor(
    public readonly payload: { releases: SpotifyAlbum[]; page: number }
  ) {}
}

export const NEW_RELEASES_FILTER_ALBUMS = "NEW_RELEASES_FILTER_ALBUMS";

export class NewReleasesFilterAlbums {
  readonly type = NEW_RELEASES_FILTER_ALBUMS;
}

export const NEW_RELEASES_FILTER_SINGLES = "NEW_RELEASES_FILTER_SINGLES";

export class NewReleasesFilterSingles {
  readonly type = NEW_RELEASES_FILTER_SINGLES;
}

export const NEW_RELEASES_FILTER_NONE = "NEW_RELEASES_FILTER_NONE";

export class NewReleasesFilterNone {
  readonly type = NEW_RELEASES_FILTER_NONE;
}

export type Actions =
  | NewReleasesRequest
  | NewReleasesSuccess
  | NewReleasesFilterAlbums
  | NewReleasesFilterSingles
  | NewReleasesFilterNone;
