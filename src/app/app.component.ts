import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { TopnavComponent } from './components/topnav/'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TopnavComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
}
