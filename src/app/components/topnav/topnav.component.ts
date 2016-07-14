import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'top-nav',
  templateUrl: 'topnav.component.html',
  styleUrls: ['topnav.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class TopnavComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
