'use strict';

let Graph = require('../graph');

function getEdge(arr, g){
  let cost = 0;
  let bool = false;

  for(let i = 0; i < arr.length - 1; i++){
    let neighbors = g.adjacencyList[arr[i]];

    for(let j = 0; j < neighbors.length; j++){
      let n = g.adjacencyList[arr[i]][j].vertex;

      if(n.includes(arr[i+1])){
        bool = true;
        cost = cost + g.adjacencyList[arr[i]][j].weight;
      }
    }
  }
  return [bool, cost];
}

module.exports = getEdge; 

let city = new Graph();

city.addNode('sf');
city.addNode('nyc');
city.addNode('sea');
city.addNode('atx');
city.addNode('la');

city.addEdge('sf', 'nyc', 200);
city.addEdge('atx', 'nyc', 160);
city.addEdge('la', 'atx', 78);

//console.log(getEdge(['sf', 'nyc', 'atx'], city));