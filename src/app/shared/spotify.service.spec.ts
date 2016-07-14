/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { SpotifyService } from './spotify.service';

let id = 'test';

describe('Spotify Service', () => {
  beforeEachProviders(() => [SpotifyService]);

  it('should be instatiated',
      inject([SpotifyService], (service: SpotifyService) => {

    expect(service).toBeTruthy();
  }));

  it('should have methode searchArtists()',
      inject([SpotifyService], (service: SpotifyService) => {
    expect(service.searchArtists(id)).toBeTruthy();
  }));

  it('should have methode getArtist().',
      inject([SpotifyService], (service: SpotifyService) => {
    expect(service.getArtist(id)).toBeTruthy();
  }));

  it('should have methode getAlbums().',
      inject([SpotifyService], (service: SpotifyService) => {
    expect(service.getAlbums(id)).toBeTruthy();
  }));

  it('should have methode getAlbum().',
      inject([SpotifyService], (service: SpotifyService) => {
    expect(service.getAlbum(id)).toBeTruthy();
  }));
});
