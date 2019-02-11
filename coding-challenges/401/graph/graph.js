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
module.exports = Graph;