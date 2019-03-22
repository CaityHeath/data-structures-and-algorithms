'use strict';

class Graph {
  constructor(){
    this.adjacencyList = {}
  }
  addNode(key){
      this.adjacencyList[key] = [];
  }
  addEdge(node1, node2, weight = 0){
    this.adjacencyList[node1].push({vertex: node2, weight});
    this.adjacencyList[node2].push({vertex: node1, weight});
  }
  getNodes(){
  let nodes = [];
  for(let keys in this.adjacencyList){
    nodes.push(keys);
  }
  return nodes;
  }
  getNeighbors(key){
    return this.adjacencyList[key];
  }
  size(){
    let length = 0;
    for(let keys in this.adjacencyList){
      length++;
    }
    return length;
  }

  breadthFirst(start){
    if(!start){throw error}
    const store = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let current;
    let neighbors;


    while(store.length){
      current = store.shift();
      neighbors = this.getNeighbors(current);
      result.push(current);

      for(let i = 0; i < neighbors.length; i++){

        if(!visited[neighbors[i].vertex]){
          visited[neighbors[i].vertex] = true;
          store.push(neighbors[i].vertex);
        }
      
      }
    }

    return result;
  }

}
module.exports = Graph;

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

//console.log(g.breadthFirst('A'));
console.log(g);