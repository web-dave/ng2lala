import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UserService } from '../../shared';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.scss']
})
export class RformComponent implements OnInit {
  form: FormGroup;

  constructor(public fb: FormBuilder, public us: UserService) {

    this.form = this.fb.group({
      name: this.fb.group({
        first: '',
        last: '',
      }),
      address: this.fb.group({
        street: '',
        town: ''
      }),
      social: this.fb.group({
        twitter: '',
        github: ''
      })
    });

  }
  ngOnInit() {
    this.form.patchValue(this.us.getUser());
  }



}
