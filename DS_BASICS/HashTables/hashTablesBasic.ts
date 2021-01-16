class HashTable {
    bucket : Array<any>;
    size : number;
    constructor(){
        this.bucket = new Array(100).fill(null)
        this.size = 100;
    }

    hashKey(key : string){
        let hash = 0;
        for(let i of key){
            hash += i.charCodeAt(0);
        }
        return hash % this.size;
    }

    set(key : string, value :any){
        let hash = this.hashKey(key);
        this.bucket[hash] = value
    }

    get(key : string){
        let hash = this.hashKey(key);
        return this.bucket[hash]
    }
}

const repeatedChar = (myName : string) => {
    let repeatedName = new HashTable();
    for (let i of myName) {
        if(repeatedName.get(i))
        {
            return i
        }
        repeatedName.set(i,i)
    }
}

console.log(repeatedChar("CHANDRAHAS"));