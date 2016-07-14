import { provideRouter, RouterConfig } from '@angular/router';

import { SearchComponent } from '../components/search/';
import { AboutComponent } from '../components/about/';
import { ArtistComponent } from '../components/artist/';
import { AlbumComponent } from '../components/album/';

export const routes: RouterConfig = [
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: '', redirectTo: '/search' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
