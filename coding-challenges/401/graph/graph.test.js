'use strict';

let Graph = require('./graph');

describe('addNode method', () => {
  it('can add a node', () => {
    let g = new Graph();
    g.addNode("A");
    //console.log(g);
    expect(g).toEqual({ adjacencyList: { A: [] } });
  });
 
  it('can add a node with a numerical key', () => {
    let g = new Graph();
    g.addNode(8);
    //console.log(g);
    expect(g).toEqual({ adjacencyList: { 8: [] } });
  });

  it('returns undefined when the key is empty', ()=> {
    let g = new Graph();
    g.addNode();
    expect(g.adjacencyList[0]).toBeUndefined();
  });

});

describe("addEdge method", () => {
  it('adds an edge between the two nodes passed as parameters', ()=>{
    let g = new Graph();
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    g.addEdge("A", "B", 7);
    //console.log(g);
    //console.log(g.adjacencyList['A'])
    expect(g.adjacencyList['A']).toEqual([ { vertex: 'B', weight: 7 } ]);
  });

  it('adds weight to the edge', () => {
    let g = new Graph();
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    g.addEdge("A", "B", 7);
    expect(g.adjacencyList['A'][0].weight).toEqual(7);
  });

  it('defaults weight to 0 if it isnt given', () => {
    let g = new Graph();
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    g.addEdge("A", "B");
    expect(g.adjacencyList['A'][0].weight).toEqual(0);
  });
});

describe('getNodes', () => {
  it('gets all of the expected nodes in graph', () => {
    let g = new Graph();
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    expect(g.getNodes()).toEqual(['A', 'B', 'C']);
  });

  it('returns an array with a length same as the number of nodes in the graph', ()=> {
    let g = new Graph();
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    let nodesArr = g.getNodes();

    expect(nodesArr.length).toEqual(3);
  });

  it('returns an empty array if there are no nodes in the graph', ()=> {
    let g = new Graph();
    expect(g.getNodes()).toEqual([]);
  });
});

describe('getNeighbors', () => {
  it('returns the expected formatted list of neighbors to a node', () => {
    let g = new Graph();
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    g.addNode("E");

    g.addEdge("A", "B", 0);
    g.addEdge("A", "E", 0)
    g.addEdge("B", 'C', 0);
    expect(g.getNeighbors("C")).toEqual([ { vertex: 'B', weight: 0 } ]);
  });

  it('if a node has multiple neighbors it gets the info for all', () => {
    let g = new Graph();
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    g.addNode("E");
    g.addEdge("A", "B", 0);
    g.addEdge("A", "E", 0);
    g.addEdge("A", 'C', 0);
    expect(g.getNeighbors("A").length).toEqual(3);
  });

  it('if it is not given a key that doesnt have neighbors, then it will return undefined', () => {
    let g = new Graph();
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    g.addNode("E");
    expect(g.getNeighbors()).toBeUndefined();
  });
});

describe('size()', () => {
  it('if the graph doesnt have any nodes then size will return 0', () => {
    let g = new Graph();
    expect(g.size()).toEqual(0);
  });

  it('it returns the expected size of a given graph', () => {
    let g = new Graph();
    g.addNode(0);
    g.addNode(1);
    g.addNode(2);
    g.addNode(3);
    expect(g.size()).toEqual(4);
  });
});

describe('breadthFirst()', () => {
  it('returns the expected traversal', () => {
    let g = new Graph();
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    g.addNode("D");
    g.addNode("E");
    g.addNode("F")
    
    g.addEdge("A", "B", 0);
    g.addEdge("A", "E", 0)
    g.addEdge("B", 'C', 0);
    g.addEdge('B', 'D', 0);
    g.addEdge('E', 'F', 0);
    g.addEdge('E', 'D', 0);
    expect(g.breadthFirst('A')).toEqual([ 'A', 'B', 'E', 'C', 'D', 'F' ]);
  });

  it('throws an error if a starting node isnt passed as a parameter', () => {
    let g = new Graph();
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    g.addNode("D");
    g.addNode("E");
    g.addNode("F");
    g.addEdge("A", "B", 0);
    g.addEdge("A", "E", 0);
    g.addEdge("B", 'C', 0);

    expect(() => {
      g.breadthFirst().toThrow(error);
    });
  });

  it('returns an array with the length of each node in the list and no repeating node values', () => {
    let g = new Graph();
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    g.addNode("D");
    g.addNode("E");
    g.addNode("F")
    
    g.addEdge("A", "B", 0);
    g.addEdge("A", "E", 0)
    g.addEdge("B", 'C', 0);
    g.addEdge('B', 'D', 0);
    g.addEdge('E', 'F', 0);
    g.addEdge('E', 'D', 0);
    expect(g.breadthFirst('A').length).toEqual(g.size());
  });
});

