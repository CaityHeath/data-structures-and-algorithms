'use strict';

const shift = require('./array-shift.js');

let x = [2,4,6,8];
let z = 5;

describe('shift module', () => {
  it('can add a value to the center of an array', () => {
    expect(shift.insertShiftArray(x, z)).toEqual([ 2, 4, 5, 6, 8]);
  });
});