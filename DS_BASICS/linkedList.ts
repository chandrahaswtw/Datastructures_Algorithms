type NodeType = {
    value: any;
    next: NodeType | null
} | null;

class LinkedList {

    head: NodeType;
    tail: NodeType;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    generateNode(val: any): NodeType {
        return {
            value: val,
            next: null
        }
    }

    append(val: any) {

        const newNode = this.generateNode(val);

        if (!this.head) {
            this.head = newNode
        }

        if (!this.tail) {
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
        }
    }

    traverse() {

        if (!this.head) {
            console.log("NO NODES ARE PRESENT !!");
            return;
        }

        let currentNode: NodeType = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }

    }

    prepend(val: any) {
        if (!this.head) {
            this.append(val);
            return;
        }

        const newNode = this.generateNode(val);

        if (newNode) {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    delete(val: any) {
        if (!this.head) {
            console.log("NO NODES ARE PRESENT !!");
        }

        else if (this.head.value === val) {
            this.head = this.head.next;
            return;
        }
        else {
            let currentNode = this.head;
            while (currentNode.next) {
                if (currentNode.next.value === val) {
                    currentNode.next = currentNode.next.next;
                    break;
                }
            }
        }
    }

    insertAfter(val: any, nodeVal : any) {

        const newNode = this.generateNode(nodeVal);

        if (!this.head) {
            console.log("NO NODES ARE PRESENT !!");
        }
         
        else {
            let currentNode = this.head as NodeType;
            while (currentNode) {
                if (currentNode.value === val) {
                    newNode!.next = currentNode!.next;
                    currentNode!.next = newNode
                    break;
                }
                currentNode = currentNode.next;
            }
        }
    }


}

const LinkedListNode = new LinkedList();
LinkedListNode.append("ONE");
LinkedListNode.append("TWO");
LinkedListNode.insertAfter("TWO", "TEN");
LinkedListNode.traverse();