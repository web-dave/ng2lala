import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: '**', redirectTo: '/search' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2lalaRoutingModule { }
