class Node{
     constructor(val){
         this.value=val;
         this.left=null;
         this.right=null;
     }   
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    insert(val){
        let newNode=new Node(val);
        if (this.root === null) {
            this.root=newNode;    
            return this;
        }else{
            let current=this.root;
            while (true) {
                if(current.value === val) return undefined;
                if (val < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                    
                } else if (val > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                    
                }
            }
        }
    }

    find(val){
        if (this.root === null)  return undefined;
        let current=this.root,found=false;
        while (current && !found) {
            if (val < current.value) {
                current=current.left;
            }else if(val > current.value){
                current=current.right;
            }else{
                found=true;
            }
        }
        if(!found) return `Not found`;
        return current;
    
    }

    breathFirstSearch(){
        let node=this.root,
            data=[],
            queue=[];
        
        queue.push(node);

        while (queue.length) {
            node=queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder(){
        let data=[];
        
        function traverse(node){
            data.push(node.value);

            if(node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }   

        traverse(this.root);
        return data;
    }

    DFSPostOrder(){
         let data=[];
        function traverse(node) {
             if(node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
         }
        traverse(this.root);

         return data;
    }


}

//      10
//  5       13
//2 7   11  16


const tree=new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
//tree.insert(13);
tree.insert(3);
tree.insert(8);
tree.insert(20);
//console.log(tree);

//console.log(tree.find(13));

//console.log(tree.breathFirstSearch());
//console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());







