// LINKED LIST APPROACH

class priorityNode {
    next : null | priorityNode;
    constructor(public value : any, public priority : number){
        this.value = value;
        this.priority =  priority;
        this.next = null;
    }
}

class priorityQueue {
    root : priorityNode | null;
    constructor(){
        this.root = null;
    }

    insert(value : any, priority : number){

        var newNode = new priorityNode(value, priority);

        if(!this.root || this.root.priority < priority){
            newNode.next =  this.root;
            this.root = newNode;
            return;
        }

        let currentNode = this.root;

        while(currentNode.next && currentNode.next.priority > priority){
            currentNode = currentNode.next;
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    process(){
        let root = this.root;
        this.root = this.root!.next;
        return root;
    }
}

const myQueue = new priorityQueue();
myQueue.insert("a", 100);
myQueue.insert("b", 200);
myQueue.insert("c", 150);
console.log(myQueue.process());
console.log(myQueue);