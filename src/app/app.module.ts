import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ng2lalaRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { SpotifyService, DurationPipe, UserService } from './shared';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { TformComponent } from './components/tform/tform.component';
import { RformComponent } from './components/rform/rform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    AboutComponent,
    ArtistComponent,
    AlbumComponent,
    DurationPipe,
    TformComponent,
    RformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2lalaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ SpotifyService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
