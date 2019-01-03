import { SpotifyAlbum } from "../../types/Spotify";

export const NEW_RELEASES_REQUEST = "NEW_RELEASES_REQUEST";

export class NewReleasesRequest {
  readonly type = NEW_RELEASES_REQUEST;

  constructor(public readonly payload: { offset: number } = { offset: 0 }) {}
}

export const NEW_RELEASES_SUCCESS = "NEW_RELEASES_SUCCESS";

export class NewReleasesSuccess {
  readonly type = NEW_RELEASES_SUCCESS;

  constructor(
    public readonly payload: {
      releases: SpotifyAlbum[];
      offset: number;
    }
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

export const NEW_RELEASES_NEXT_PAGE = "NEW_RELEASES_NEXT_PAGE";

export class NewReleasesNextPage {
  readonly type = NEW_RELEASES_NEXT_PAGE;
}

export const NEW_RELEASES_PREV_PAGE = "NEW_RELEASES_PREV_PAGE";

export class NewReleasesPrevPage {
  readonly type = NEW_RELEASES_PREV_PAGE;
}

export const NEW_RELEASES_CHANGE_PAGE = "NEW_RELEASES_CHANGE_PAGE";

export class NewReleasesChangePage {
  readonly type = NEW_RELEASES_CHANGE_PAGE;
  constructor(public readonly payload: { page: number }) {}
}

export const NEW_RELEASES_UPDATE_OFFSET = "NEW_RELEASES_UPDATE_OFFSET";

export class NewReleasesUpdateOffset {
  readonly type = NEW_RELEASES_UPDATE_OFFSET;
  constructor(public readonly payload: { offset: number }) {}
}

export type Actions =
  | NewReleasesRequest
  | NewReleasesSuccess
  | NewReleasesFilterAlbums
  | NewReleasesFilterSingles
  | NewReleasesFilterNone
  | NewReleasesNextPage
  | NewReleasesPrevPage
  | NewReleasesChangePage
  | NewReleasesUpdateOffset;
