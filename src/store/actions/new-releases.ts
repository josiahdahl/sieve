import { SpotifyAlbum } from "../../types/Spotify";

export const NEW_RELEASES_REQUEST = "NEW_RELEASES_REQUEST";

export class NewReleasesRequest {
  readonly type = NEW_RELEASES_REQUEST;
  readonly payload: { page: number };

  constructor(public page: number) {
    this.payload = { page };
  }
}

export const NEW_RELEASES_SUCCESS = "NEW_RELEASES_SUCCESS";

export class NewReleasesSuccess {
  readonly type = NEW_RELEASES_SUCCESS;
  readonly payload: { releases: SpotifyAlbum[]; page: number };

  constructor(
    public releases: SpotifyAlbum[],
    public page: number,
  ) {
    this.payload = { releases, page };
  }
}

export const NEW_RELEASES_FAILURE = "NEW_RELEASES_FAILURE";

export type Actions = NewReleasesRequest | NewReleasesSuccess;
