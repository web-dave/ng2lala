/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpotifyService } from './spotify.service';

describe('Service: Spotify', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyService]
    });
  });

  it('should ...', inject([SpotifyService], (service: SpotifyService) => {
    expect(service).toBeTruthy();
  }));
});
