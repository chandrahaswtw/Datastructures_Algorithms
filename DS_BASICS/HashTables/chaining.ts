interface objInterface {
    key : string,
    val : any
}

class HashTableChaining {
    bucket : Array<Array<objInterface>>;
    size : number;
    constructor(){
        this.bucket = new Array(5).fill(null).map(()=> []);
        this.size = 5;
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
        const storedElement = this.bucket[hash].find(el => el.key === key); 
        if(storedElement){
            storedElement.val = value
        }
        else {
            this.bucket[hash].push({key : key, val : value})
        }
    }

    get(key : string){
        let hash = this.hashKey(key);
        const storedElement = this.bucket[hash].find(el => el.key === key); 
        if(storedElement)
        {
            return storedElement.val;
        }
        return;
    }

    fetchAll(){
        for(let i in this.bucket){
            console.log(i, this.bucket[i])
        }
    }
}


const myHash = new HashTableChaining()

for(let i of "CHANDRAHAS"){
    myHash.set(i, i)
}

myHash.fetchAll();