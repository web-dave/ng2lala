import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  restRoot: string = 'https://api.spotify.com/v1/';


  constructor(private _http: Http) { }

  searchArtists(str: string) {
    let url = `${this.restRoot}search?offset=0&limit=20&type=artist&market=US&query=${str}`;
    return this._http.get(url)
      .map(res => res.json());
  }

  getArtist(id: string) {
    let url = `${this.restRoot}artists/${id}`;
    return this._http.get(url)
      .map(res => res.json());
  }

  getAlbums(id: string) {
    let url = `${this.restRoot}artists/${id}/albums`;
    return this._http.get(url)
      .map(res => res.json());
  }

  getAlbum(id: string) {
    let url = `${this.restRoot}albums/${id}`;
    return this._http.get(url)
      .map(res => res.json());
  }

}

// spotify typings
export interface ISpotifyIResult {
  href: string;
  items: IArtists[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}
export interface IArtists {
  external_urls: { spotify: string };
  followers: { href: any, total: number};
  genres: string[];
  href: string;
  id: string;
  images: IImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface IImage {
  height: number;
  url: string;
  width: number;
}

export interface IAlbum {
  album_type: string;
  artists: any;
  available_markets: string[];
  copyrights: [{text: string, type: string }];
  external_ids: {upc: string };
  external_urls: {spotify: string };
  genres: string[];
  href: string;
  id: string;
  images: IImage[];
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  tracks: ITrackList;
  type: string;
  uri: string;
}

export interface ITrackList {
  href: string;
  items: ITrack[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface ITrack {
  artists: IArtists[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: { spotify: string };
  href: string;
  id: string;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

