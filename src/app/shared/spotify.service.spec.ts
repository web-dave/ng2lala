/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { SpotifyService } from './spotify.service';

describe('Service: Spotify', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [SpotifyService]
    });
  });

  it('should be init', inject([SpotifyService], (service: SpotifyService) => {
    expect(service).toBeTruthy();
  }));

  it('should have method searchArtists', inject([SpotifyService], (service: SpotifyService) => {
    expect(service.searchArtists('ll')).toBeTruthy();
  }));

  it('should have method getArtists', inject([SpotifyService], (service: SpotifyService) => {
    expect(service.getArtist('pijxgcpwigd087608976wzudgwodct08')).toBeTruthy();
  }));

  it('should have method getAlbums', inject([SpotifyService], (service: SpotifyService) => {
    expect(service.getAlbums('pijxgcpwigd087608976wzudgwodct08')).toBeTruthy();
  }));

  it('should have method getAlbum', inject([SpotifyService], (service: SpotifyService) => {
    expect(service.getAlbum('pijxgcpwigd087608976wzudgwodct08')).toBeTruthy();
  }));
});
