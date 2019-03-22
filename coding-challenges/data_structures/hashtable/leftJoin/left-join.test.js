'use strict';
let HashTable = require('../hashtable/hashtable');
let leftJoin = require('./left-join');

describe("left-join", () => {
  it("should produce an array with a length", () => {
    let h1 = new HashTable();
    let h2 = new HashTable();

    h1.add("nice", "kind");
    h1.add("wrath", "anger");
    h1.add('fond', 'enamored');
    h1.add('happy', 'joyful');

    h2.add('nice', 'mean');
    h2.add('wrath', 'delight');
    h2.add('fond', 'averse');

   let arr = leftJoin(h1, h2).length;

   expect(arr).toBeTruthy();
  });

  it("should produce an array with null as a value of index 1 of the bucket array inside of index 0 of the container array when the first two keys of the hashtables don't match.", () => {
    let h1 = new HashTable();
    let h2 = new HashTable();

    h1.add("nice", "kind");
    h1.add("wrath", "anger");
    h1.add('fond', 'enamored');
    h1.add('happy', 'joyful');

    h2.add('evil', 'mean');
    h2.add('grouchy', 'delight');
    h2.add('anxious', 'averse');

   let arr = leftJoin(h1, h2);
    console.log(arr[0][1]);
   expect(arr[0][1]).toBeNull();
  });

  it("Returns an array of what we would expect.", () => {
    let h1 = new HashTable();
    let h2 = new HashTable();

    h1.add("nice", "kind");
    h1.add("wrath", "anger");
    h2.add('nice', 'mean');

   let arr = leftJoin(h1, h2);
   let result = [ [ { wrath: 'anger' }, null ], [ { nice: 'kind' }, null ] ]
    expect(arr).toBe(result);
  });
})