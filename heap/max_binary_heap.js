class MaxBinaryHeap{
    constructor(){
        this.value=[41,39,33,18,27,12,55];
    }

    insert(element){
        this.value.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        let index=this.value.length-1;
        const element=this.value[index];

        while (index > 0) {
            let parentInx=Math.floor((index-1)/2);
            let parent = this.value[parentInx];

            if (element <= parent) break;

            this.value[parentInx] = element;
            this.value[index] = parent;
            index = parentInx;
                
        }
    }

    extractMax(){
        const max=this.value[0];
        const end=this.value.pop();
        this.value[0]=end;
        this.sinkDown();
        return max;
    }

    sinkDown(){
        let inx=0;
        let length=this.value.length;
        const element=this.value[0];
        while (true) {
            let leftChildInx=2*inx+1;
            let rightChildInx=2*inx+2;
            let leftChild=this.value[leftChildInx];
            let rightChild=this.value[rightChildInx];

            let swap=null;
            if (leftChildInx < length){
                leftChild=this.value[leftChildInx];
                if (leftChild > element) {
                    swap=leftChildInx;
                }
            }

            if (rightChildInx < length) {
                rightChild = this.value[rightChildInx];
                if (
                    (swap === null && rightChild > element) ||
                     (swap !== null && rightChild > leftChild)
                    ) {
                    swap = rightChildInx;
                }
            }



            if(swap === null) break;
            this.value[inx]=this.value[swap];
            indx=swap;
        }

    }

}

let heap=new MaxBinaryHeap();
//heap.insert(55);

//console.log(heap);

//console.log(heap.extractMax());

console.log(heap.value);

