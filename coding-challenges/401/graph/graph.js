'use strict';

class Graph {
  constructor(){
    this.adjacencyList = {}
  }
  addNode(key){
      this.adjacencyList[key] = [];
  }
  addEdge(node1, node2, weight){
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
}



let g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addEdge("A", "B", 9);
g.addEdge("A", "C", 12);
//console.log(g.adjacencyList.A)
//console.log(g.getNeighbors("C"));
//console.log(g.getNodes());
//console.log(g.size());
//console.log(g);


module.exports = Graph;