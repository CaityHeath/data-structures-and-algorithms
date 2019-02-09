'use strict';

let HashTable = require('./hashtable');

describe("Get hash method", () => {
  it("should give us the expected index value of ___ when we has the string cow", () => {
    let ht = new HashTable();
    expect(ht.getHash('cow')).toBe(28);
  });

  it("should not be able to hash any other input but a string input", () => {
    let ht = new HashTable();
    expect(() => {
      ht.getHash(9);
    }).toThrow();
  });

  it("will produce a hash value when given a string", () => {
    let ht = new HashTable();
    expect(ht.getHash('happy')).toBeTruthy();
  });
});

describe("Add method", () => {
  it("can add a key to the hashmap",() => {
    let ht = new HashTable();
    ht.add('lake', 'washington');
    expect(ht.keyMap[47]).toBeTruthy();
  });

  it("will throw an error if the key is not a string", () => {
    let ht = new HashTable();
    expect(() => {
      ht.add(8, "late")
    }).toThrow();
  });

  it("will add the key value pair to the expected index", ()=> {
    let ht = new HashTable();
    ht.add('cow','cat');
    expect(ht.keyMap[28].head.value).toEqual({cow: 'cat'});
  });
});

describe("get method", () => {
  it("can retrieve a key value pair", () => {
    let ht = new HashTable();
    ht.add('hat', 'cat');
    ht.add('taco', 'bell');
    ht.add('fruit', 'punch');
    console.log(ht.get('taco'));
    expect(ht.get('taco')).toBeTruthy();
  });

  it("will get the expected key value pair", () => {
    let ht = new HashTable();
    ht.add('hat', 'cat');
    ht.add('taco', 'bell');
    ht.add('fruit', 'punch');
    expect(ht.get('taco')).toEqual({taco:"bell"});
  });

  it("will return No key found if the key doesn't exist in the hash table", () => {
    let ht = new HashTable();
    expect(ht.get('taco')).toEqual('No key found');
  })
});

describe('contains method', () => {
  it("will throw an error if !string is passed as an parameter", () => {
    let ht = new HashTable();
    ht.add('cow', 'pusher');
    expect(() => {
      ht.contains(1)
    }).toThrow();
  });

  it("will return false if the key doesn't exist in the hashmap", () => {
    let ht = new HashTable();
    ht.add('hat', 'cat');
    ht.add('taco', 'bell');
    ht.add('fruit', 'punch');
    expect(ht.contains('dog')).toEqual(false);
  });

  it("will return true if the key does exist in the hashmap", () => {
    let ht = new HashTable();
    ht.add('hat', 'cat');
    ht.add('taco', 'bell');
    ht.add('fruit', 'punch');
    expect(ht.contains('taco')).toEqual(true);
  });
})