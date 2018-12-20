import { StringMap } from "./index";

type SpotifyUrl = {
  spotify: string;
};

export type ExternalUrls = StringMap<string> & SpotifyUrl;

export type AlbumTypes = "album" | "single" | "compilation";

export interface SpotifyArtist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface SpotifyImage {
  height: number;
  url: string;
  width: number;
}

export interface SpotifyAlbum {
  album_type: AlbumTypes;
  artists: SpotifyArtist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}
