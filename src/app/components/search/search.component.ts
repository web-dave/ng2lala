import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SpotifyService, ISpotifyIResult } from '../../shared/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  providers: [SpotifyService]
})
export class SearchComponent implements OnInit {
  searchStr: string;
  searchResult: ISpotifyIResult;
  title = 'Search for Artists.';

  constructor(private _spotify: SpotifyService, private router: Router) {}

  ngOnInit() {
  }

  searchMusic() {
    if (this.searchStr.length !== 0) {
      this._spotify.searchArtists(this.searchStr)
        .subscribe(res => {
          console.log(res);
          this.searchResult = res.artists;
        });
    } else {
      this.searchResult = null;
    }
  }

  selectArtist(id: string) {
    console.log('navigate id:', id);
    this.router.navigate(['/artist', id]);
  }

}
