'use strict';

const shift = require('./array-shift.js');

let x = [2,4,6,8];
let z = 5;

describe('shift module', () => {
  it('can add a value to the center of an array', () => {
    expect(shift.insertShiftArray(x, z)).toEqual([ 2, 4, 5, 6, 8]);
  });

  it('checks if the arr parameter is an array', () =>{
    expect(shift.insertShiftArray(4,4)).toEqual(null);
  });

  it('if the input array is empty the only value is the parameter value', () => {
    expect(shift.insertShiftArray([], 5)).toEqual([5]);
  })
});