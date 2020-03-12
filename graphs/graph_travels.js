class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacencyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacencyVertex);
        }
        delete this.adjacencyList[vertex];
    }

    depthFirstRecursive(start){
        const result=[];
        const visited={};
        const adjacencyList=this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;

            visited[vertex]=true;
            result.push(vertex);

            //console.log(adjacencyList[vertex]);
            adjacencyList[vertex].forEach(neigh=>{
                if (!visited[neigh]){
                    return dfs(neigh);
                }
            }) ;  

        })(start);
    }    

}

const gr = new Graph();


gr.addVertex("A");
gr.addVertex("B");
gr.addVertex("C");
gr.addVertex("D");
gr.addVertex("E");
gr.addVertex("F");

gr.addEdge("A", "B");
gr.addEdge("A", "C");
gr.addEdge("B", "D");
gr.addEdge("C", "E");
gr.addEdge("D", "E");
gr.addEdge("D", "F");
gr.addEdge("E", "F");

//console.log(gr);

gr.depthFirstRecursive("A");