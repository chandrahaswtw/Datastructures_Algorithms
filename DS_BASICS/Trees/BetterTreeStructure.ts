class NodeBetterClass {
    value: string;
    parent: NodeBetterClass | null;
    children: Array<NodeBetterClass>;
    constructor(value: string, parent: NodeBetterClass | null = null) {
        this.value = value;
        this.parent = parent;
        this.children = []
    }

    addNode(value: string) {
        var splitted = value.split("/");
        if (splitted.length === 1) {
            var selectedNode = this.children.find(el => el.value === splitted[0]);
            if (!selectedNode) {
                var node = new NodeBetterClass(splitted[0], this);
                this.children.push(node);
            }
        }
        else if (splitted.length > 1) {
            var selectedNode = this.children.find(el => el.value === splitted[0]);
            if (!selectedNode) {
                var node = new NodeBetterClass(splitted[0], this);
                this.children.push(node);
                node.addNode(splitted.slice(1, splitted.length).join("/"));
            }
            else {
                selectedNode.addNode(splitted.slice(1, splitted.length).join("/"));
            }
        }
    }

    removeNode(value: string) {
        var splitted = value.split("/");
        if (splitted.length === 1) {
            var selectedIndex = this.children.findIndex(el => el.value === splitted[0]);
            if (selectedIndex > -1) {
                this.children.splice(selectedIndex, 1);
            }
            else {
                console.log("Path doesn't exist");
                return;
            }
        }
        else if (splitted.length > 1) {
            var selectedIndex = this.children.findIndex(el => el.value === splitted[0]);
            if (selectedIndex > -1) {
                var selectedNode = this.children[selectedIndex];
                selectedNode.removeNode(splitted.slice(1, splitted.length).join("/"));
            }
            else {
                console.log("Path doesn't exist");
                return;
            }
        }
    }

    searchByDFS(val: string) : NodeBetterClass | undefined {
        for (let n of this.children) {
            console.log(n.value);
            if (n.value === val) {
                return n;
            }
            var requiredNode = n.searchByDFS(val);
            if (requiredNode) {
                return requiredNode;
            }
        }
    }

    searchByBFS(val: string) : NodeBetterClass | undefined {
        for (let n of this.children) {
            console.log(n.value);
            if (n.value === val) {
                return this;
            }
        }
        for (let n of this.children) {
            var requiredNode = n.searchByBFS(val)
            if (requiredNode) {
                return requiredNode;
            }
        }
    }
}

class RootNodeBetterClass {
    root: NodeBetterClass;
    constructor(value: string) {
        this.root = new NodeBetterClass(value)
    }

    addNode(val: string) {
        this.root.addNode(val);
    }

    removeNode(val: string) {
        this.root.removeNode(val);
    }

    searchByDFS(val: string) {
       return this.root.searchByDFS(val);
    }

    searchByBFS(val: string) {
        return this.root.searchByBFS(val);
    }
}


var rootNode = new RootNodeBetterClass("/");
rootNode.addNode("Hollywood/BreakingBad/Season1");
rootNode.addNode("Hollywood/GOT/Finale");
console.log(rootNode.searchByBFS("Finale"));
