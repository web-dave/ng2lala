/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { Router } from '@angular/router';

import { SpotifyService, ISpotifyIResult } from '../../shared/spotify.service';

describe('Component: Search', () => {
  it('should create an instance', () => {
    let a: any;
    let b: any;
    let component = new SearchComponent(a, b);
    expect(component).toBeTruthy();
  });
});
