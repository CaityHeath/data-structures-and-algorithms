'use strict';

let Graph = require('../graph');

function depthFirst(graph, start){

let visited = {};
let result = [];

let list = graph.adjacencyList;

  let _walk = (vertex) => {
    if(!vertex){ return null }
    visited[vertex] = true;
    result.push(vertex);
    list[vertex].forEach( neighbor => {
      if(!visited[neighbor.vertex]){
        return _walk(neighbor.vertex);
      }
    });
  }
  _walk(start);
  return result;
}

let g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");
g.addEdge("A", "B", 0);
g.addEdge("A", "E", 0)
g.addEdge("B", 'C', 0);
g.addEdge('B', 'D', 0);
g.addEdge('E', 'F', 0);

console.log(depthFirst(g, "A"));