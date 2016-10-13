import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  oState: boolean;
  constructor() { }

  handleOState(event) {
    console.log('event:', event);
    this.oState = event;
  }
  ngOnInit() {
  }

}
