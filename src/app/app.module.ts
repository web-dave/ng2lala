import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routes';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { SpotifyService } from './shared';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { DurationPipe } from './shared/duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    AboutComponent,
    ArtistComponent,
    AlbumComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ appRoutingProviders, SpotifyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
