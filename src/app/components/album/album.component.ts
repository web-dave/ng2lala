import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService,  IArtists, IAlbum } from '../../shared/spotify.service';
// import { DurationPipe } from '../../shared/duration.pipe';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  id: string;
  artist: IArtists;
  albums: IAlbum[];
  album: IAlbum;
  private sub: any;

  constructor(private _spotifyService: SpotifyService, private route: ActivatedRoute) {}

  ngOnInit() {
      this.sub = this.route
        .params
        .subscribe(params => {
          this.id = params['id'];
          this._spotifyService.getAlbum(this.id)
            .subscribe(res => {

              this.album = res;
              console.log('Album:', this.album);
            });

        });
  }

}
