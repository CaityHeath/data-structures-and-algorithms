'use strict';

let getEdge = require('./get-edge');
let Graph = require('../graph');

describe("getEdge function", () => {
  it("returns true and the cost of flight from one city to another if there is a direct flight", () => {
    let city = new Graph();

  city.addNode('sf');
  city.addNode('nyc');
  city.addNode('sea');
  city.addNode('atx');
  city.addNode('la');
  city.addEdge('sf', 'nyc', 200);
  city.addEdge('atx', 'nyc', 160);
  city.addEdge('la', 'atx', 78);
  city.addEdge('sea', 'nyc', 190);
  expect(getEdge(['sea', 'nyc'], city)).toEqual([ true, 190 ]);
  });

  it("will return [false, 0] if there aren't any direct flight available", () => {
    let city = new Graph();

    city.addNode('sf');
    city.addNode('nyc');
    city.addNode('sea');
    city.addNode('atx');
    city.addNode('la');
    city.addEdge('sf', 'nyc', 200);
    city.addEdge('atx', 'nyc', 160);
    city.addEdge('la', 'atx', 78);
    expect(getEdge(['atx', 'sf'], city)).toEqual([ false, 0 ]);
  });

  it("will return [false, 0] if there aren't any values in the input array", () => {
    let city = new Graph();
    city.addNode('sf');
    city.addNode('nyc');
    city.addNode('sea');
    city.addNode('atx');
    city.addNode('la');
    city.addEdge('sf', 'nyc', 200);
    city.addEdge('atx', 'nyc', 160);
    city.addEdge('la', 'atx', 78);
    expect(getEdge([],city)).toEqual([false, 0]);
  })
});