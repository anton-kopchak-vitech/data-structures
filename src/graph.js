export default class Graph {
  constructor() {
    this.vertices = [];
    this.edges = new Map();
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges.set(vertex, []);
  }

  addEdge(vertex1, vertex2) {
    this.edges.get(vertex1).push(vertex2);
    this.edges.get(vertex2).push(vertex1);
  }

  removeVertex(vertex) {
    const index = this.vertices.indexOf(vertex);
    if (index !== -1) {
      this.vertices.splice(index, 1);
      const vertexEdges = this.edges.get(vertex);
      for (const neighbor of vertexEdges) {
        const neighborEdges = this.edges.get(neighbor);
        const neighborIndex = neighborEdges.indexOf(vertex);
        neighborEdges.splice(neighborIndex, 1);
      }
      this.edges.delete(vertex);
    }
  }

  getNeighbors(vertex) {
    return this.edges.get(vertex);
  }

  getLength() {
    return this.vertices.length;
  }

  printGraph() {
    for (const vertex of this.vertices) {
      const neighbors = this.edges.get(vertex).join(', ');
      console.log(`${vertex} -> ${neighbors}`);
    }
  }
}
