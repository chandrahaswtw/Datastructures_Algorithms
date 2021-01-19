class NodeClass {
    value : string;
    parent: NodeClass | null;
    children : Array<NodeClass>;
    constructor(value : string, parent : NodeClass | null = null){
        this.value = value;
        this.parent = parent;
        this.children = []
    }

    addNode(value : string){
        var newChildNode = new NodeClass(value, this);
        this.children.push(newChildNode);
        return {n : newChildNode, i: this.children.length - 1};
    }

    removeNode(index : number){
        this.children.splice(index, 1);
    }

}

class RootNodeClass {
    root : NodeClass;
    constructor(value : string){
        this.root = new NodeClass(value)
    }
}


var rootNode = new RootNodeClass("/");
var moviesDirectory = rootNode.root.addNode("/Hollywood");
var songsDirectory = rootNode.root.addNode("/HeavyMetal");
moviesDirectory.n.addNode("Hateful 8");
songsDirectory.n.addNode("Metallica");

