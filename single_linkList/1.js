class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}


class SingleLinkList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(val){
        let newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }
    
    pop(){
        if(!this.head) return undefined;
        var current=this.head;
        var newTail=current;
        while (current.next) {
            newTail=current;
            current=current.next;

        }
        //console.log(current.val);
        //console.log(newTail.val);
        this.tail=newTail;
        this.tail.next=null;
        this.length--;
        if (this.length === 0) {
            this.head=null;
            this.tail=null;
        }
        return current;
        
    }
    shift(){
        if (!this.head) return undefined;
        let currentHead=this.head;
        this.head=currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail=null;
        }

        return currentHead;
    }

    unshift(val){
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
      
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter=0;
        let current=this.head;
        while (counter !== index) {
            current=current.next;
            counter++;
        }
        return current;
    }

    set(index,val){
        let foundNode=this.get(index);
        if (foundNode) {
            foundNode.val=val;
            return true;
        }
        return false;
    }

    insert(index,val){
        if (index < 0 || index >= this.length) return false;  
        if (index === this.length) return this.push(val);
        if (index === 0) return this.unshift(val);
        let newNode=new Node(val);
        var prev=this.get(index-1);
        let temp=prev.next;
        prev.next=newNode;
        newNode.next=temp;
        this.length++;
        return true;
        
    }

    remove(index){
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length-1) {
            return this.pop();
        } 
        if (index === 0) {
            return this.shift();
        }

        var prevNode=this.get(index-1);
        var removed=prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;

  
    }

    reverse(){
        var node =this.head;
        this.head=this.tail;
        this.tail=node;
        var prev=null;
        var next;
        for (let i = 0; i < this.length; i++) {
            next=node.next;
            node.next=prev;
            prev=node;
            node=next;
            
        }

        return this;

    }


    print(){
        var arr=[];
        var current=this.head;
        while (current) {
            arr.push(current.val);
            current=current.next;
        }
        console.log(arr);
        
    }


}

let list=new SingleLinkList();

/* list.push("Hello");
list.push("hii");
list.pop();
list.shift();
list.unshift("How");
list.set(2,"ganesh");
//console.log(list);
 */

list.push(100);
list.push(200);
list.push(300);
list.push(500);

/* list.get(2);
list.insert(2,400);
list.get(2); */
//console.log(list);
//console.log(list.get(2));

//list.remove(2);
//console.log(list);

list.print();
list.reverse();
list.print();


