interface objInterface {
    key: string,
    val: any
}

class HashTableOpenAddressing {
    bucket: Array<objInterface>;
    size: number;
    constructor() {
        this.bucket = new Array(100).fill(null)
        this.size = 100;
    }

    hashKey(key: string) {
        let hash = 0;
        for (let i of key) {
            hash += i.charCodeAt(0);
        }
        return hash % this.size;
    }

    set(key: string, value: any) {
        let hash = this.hashKey(key);
        if (!this.bucket[hash]) {
            this.bucket[hash] = {key, val : value};
        } else {
            if (this.bucket[hash].key !== key) {
                while (this.bucket[hash] !== null) {
                    hash++
                }
                this.bucket[hash] = {key, val : value}
            }
        }
    }

    get(key: string) {
        let hash = this.hashKey(key);

        if(this.bucket[hash] && this.bucket[hash].key === key)
        {
            return this.bucket[hash].val;
        }
        else{
            while (this.bucket[hash].key === key) {
                hash++;
            }
            return this.bucket[hash].val;
        }
        
    }

    fetchAll() {
        for (let i in this.bucket) {
            if (this.bucket[i]) {
                console.log(i, this.bucket[i])
            }
        }
    }
}

const myHashOpenAddressing = new HashTableOpenAddressing()

for(let i of "CHANDRAHAS"){
    myHashOpenAddressing.set(i, i)
}

//myHashOpenAddressing.fetchAll();
 console.log(myHashOpenAddressing.bucket);