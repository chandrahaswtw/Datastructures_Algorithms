class TrieNode {
    value : any;
    children : TrieNode[];
    constructor(){
        this.value  = null;
        this.children = new Array(26);
    }
}

class Trie{
    root : TrieNode;

    constructor(){
        this.root = new TrieNode();
    }

    add(key: string, value : any){
        let node =  this.root;
        for(let i of key){
            let index = i.charCodeAt(0) - 97;
            if(node.children[index]){
                node = node.children[index];
            }
            else{
                let newNode =  new TrieNode();
                node.children[index] =  newNode;
                node = newNode
            }
        }
        node.value = value;
    }

    find(key: string){
        let node =  this.root;
        for(let i of key){
            let index = i.charCodeAt(0) - 97;
            if(node.children[index]){
                node = node.children[index];
            }
            else{
               throw new Error("No node")
            }
        }
        return node;
    }

    remove(key: string){
        var requiredNode = this.find(key);
        requiredNode.value = null;
    }
}

var myNode = new Trie();
myNode.add("age", 31);
console.log(myNode.find("age"));
myNode.remove("age");
console.log(myNode.find("age"));