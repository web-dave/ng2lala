import { Component, OnInit } from '@angular/core';

import { UserService, IUser } from '../../shared';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.scss']
})
export class TformComponent implements OnInit {
  user: IUser;

  constructor(public us: UserService) {}

  ngOnInit() {
    this.user = this.us.getUser();
    console.log(this.user.name.last);

  }

}
