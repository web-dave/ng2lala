import { Component, OnInit } from '@angular/core';

import { UserService } from '../../shared';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  user = {};
  constructor(public us: UserService) { }

  ngOnInit() {
    this.user = this.us.getUser();
  }

}
