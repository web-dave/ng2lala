/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { DurationPipe } from './duration.pipe';

describe('Pipe: Duration', () => {
  it('create an instance', () => {
    let pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform 253865 to 4:14', () => {
    let pipe = new DurationPipe();
    expect(pipe.transform(253865)).toEqual('4:14');
  });
});
