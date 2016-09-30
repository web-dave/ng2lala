import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/search' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2lalaRoutingModule { }
