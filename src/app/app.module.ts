import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ng2lalaRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { SpotifyService } from './shared';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { DurationPipe } from './shared/duration.pipe';
import { AlbumPreviewComponent } from './Components/album-preview/album-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    AboutComponent,
    ArtistComponent,
    AlbumComponent,
    DurationPipe,
    AlbumPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2lalaRoutingModule
  ],
  providers: [ SpotifyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
