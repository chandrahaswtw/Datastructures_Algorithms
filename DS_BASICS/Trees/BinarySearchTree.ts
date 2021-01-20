class BSNode {
    value: any;
    left: BSNode | null;
    right: BSNode | null;
    parent: BSNode | null;

    constructor(value: any) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }

    addNode(value: any) {
        if (!this.value) {
            this.value = value;
            return;
        }

        if (value < this.value) {
            if (this.left) {
                this.left.addNode(value);
                return;
            }
            const newNode = new BSNode(value);
            newNode.parent = this;
            this.left = newNode;
        }
        else {
            if (this.right) {
                this.right.addNode(value);
                return;
            }
            const newNode = new BSNode(value);
            newNode.parent = this;
            this.right = newNode;
        }
    }

    findNode(value: any): BSNode {

        // EXIT CONDITION
        if (this.value === value) {
            return this;
        }

        if (value < this.value && this.left) {
            return this.left.findNode(value)
        }
        else if (value > this.value && this.right) {
            return this.right.findNode(value)
        }
        else {
            throw new Error("NODE NOT FOUND");
        }
    }

    removeNode(value: any) {
        var identifiedNode = this.findNode(value);


        // If it's a leaf node
        if (!identifiedNode.left && !identifiedNode.right) {
            const identifiedParent = identifiedNode!.parent;
            identifiedParent!.removeChild(identifiedNode);
            return;
        }

        // Removing node with both left and right child
        if (identifiedNode.left && identifiedNode.right) {

            // This is nest bigger node!
            const nextBiggerNode = identifiedNode!.right!.findNext();

            // If the nextBiggerNode is the immediate right node
            // We are just swapping.
            if (nextBiggerNode!.value === identifiedNode!.right!.value) {
                identifiedNode!.value = nextBiggerNode!.value;
                identifiedNode!.right = nextBiggerNode!.right;
            }
            else {
                // If the nextBiggerNode somewhere in the left of right node,
                // We are removing the node. (Just detatching not deleting)
                // Just swap the values. (Left and right will not change on identified node)
                this.removeNode(nextBiggerNode!.value);
                identifiedNode!.value = nextBiggerNode!.value;
            }
        }
        else {
            // Removing node with one left or right child
            const childNode = identifiedNode!.left || identifiedNode!.right;
            identifiedNode.left = childNode!.left;
            identifiedNode.right = childNode!.right;
            identifiedNode.value = childNode!.value;
        }
    }

    // Helper function to find the deep left node.
    findNext() {

        if (!this.left) {
            return this;
        }

        this.left!.findNext();
    }

    removeChild(node: BSNode) {
        // To be removed node =  left node.
        if (this.left && node.value === this.left.value) {
            this.left = null;
        }
        // To be removed node =  right node.
        else if (this.right && node.value === this.right.value) {
            this.right = null
        }
    }

}


class BSTree {
    root: BSNode;
    constructor() {
        this.root = new BSNode(null);
    }

    addNode(value: any) {
        this.root.addNode(value);
    }

    findNode(value: any): BSNode {
        return this.root.findNode(value)
    }

    removeNode(value: any) {
        this.root.removeNode(value);
    }

}

const BST = new BSTree();
BST.addNode(12);
BST.addNode(4);
BST.addNode(20);
BST.addNode(1);
BST.addNode(5);
BST.addNode(30);


BST.removeNode(12);
console.log(BST);