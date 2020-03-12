class Graph{
    constructor(){
        this.adjacencyList={};
    }
    addVertex(vertex){
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];    
    }   

    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2 
        );

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex){
        while (this.adjacencyList[vertex].length) {
            const adjacencyVertex=this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacencyVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

const gr=new Graph();
gr.addVertex("Dollas");
gr.addVertex("tokyo");
gr.addVertex("aspen");
gr.addVertex("Los Angeles");
gr.addVertex("Hong Kong");

gr.addEdge("Dollas","tokyo");
gr.addEdge("Dollas", "aspen");
gr.addEdge("Hong Kong", "tokyo");
gr.addEdge("Hong Kong", "Dollas");
gr.addEdge("Los Angeles", "Hong Kong");
gr.addEdge("Los Angeles", "aspen");


//console.log(gr);

//gr.removeEdge("Dollas", "aspen");

console.log(gr);

gr.removeVertex("Hong Kong");

console.log(gr);