/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DurationPipe } from './duration.pipe';

describe('Pipe: Duration', () => {
  it('create an instance', () => {
    let pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });
});
