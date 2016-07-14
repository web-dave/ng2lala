import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SpotifyService, IArtists, IAlbum } from '../../shared/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'app-artist',
  templateUrl: 'artist.component.html',
  providers: [SpotifyService]
})

export class ArtistComponent implements OnInit {
  id: string;
  artist: IArtists;
  albums: IAlbum;
  private sub: any;

  constructor(
    private _spotifyService: SpotifyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.id = params['id'];
        this._spotifyService.getArtist(this.id)
          .subscribe(res => {
            this.artist = res;
          });
        this._spotifyService.getAlbums(this.id)
          .subscribe(res => {
            this.albums = res;
          });

      });
  }

  selectAlbum(id: string) {
    this.router.navigate(['/album', id]);
  }


}
