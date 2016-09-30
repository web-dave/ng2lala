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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    AboutComponent
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
