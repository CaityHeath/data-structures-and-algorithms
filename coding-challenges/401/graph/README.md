
# Adjacency List Graph

### Author: Caity Heath

A graph data-structure consists of a finite set of vertices and connections between them. 


## Approach & Efficiency
My adjacency list graph is comprised of an object containing keys and value pairs. The value at each key is an array which serves as a list of the node's neighbors. 


### Big O of an Adjacency List
* Adding a vertex -> O(1)
* Adding an edge -> O(1)
* Query -> O(1)
* Storage -> O( |vertices| + |edges| )


## API

* `addNode(key)`
  * Accepts a vertex as a parameter adds it to a graph. 
* `addEdge(node1, node2, weight)`
  * Accepts two vertices and a weight as parameters. This method connects the two vertices and gives assigns the edge the given weight. 
* `getNodes()`
  * Returns all of the nodes in an array
* `getNeighbors(node)`
  * Accepts a vertex as a parameter and returns each neighbor and the edge weight. 
* `size()`
  * Returns the size of the graph.

