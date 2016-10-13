import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inout',
  templateUrl: './inout.component.html',
  styleUrls: ['./inout.component.scss']
})
export class InoutComponent implements OnInit, OnChanges {
  @Input() myInput: string;
  @Output() myOutput = new EventEmitter();

  oState: boolean = true;
  constructor() { }

  toggleOutput() {
    this.oState = !this.oState;
    this.myOutput.emit(this.oState);
  }

  ngOnInit() {
    this.myOutput.emit(this.oState);
  }

  ngOnChanges(changes) {
    if (changes.myInput) {
      console.log('myInput has Changed:', this.myInput);
    }
  }
}
