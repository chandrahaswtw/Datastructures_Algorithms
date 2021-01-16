class queue {
    myQueue : Array<any>;
    constructor(){
        this.myQueue = [];
    }

    enQueue(val : any){
        this.myQueue.unshift(val)
    }

    deQueue(){
        return this.myQueue.pop()
    }

    getQueue(){
        return this.myQueue
    }
}

var st = new queue();
st.enQueue(5);
st.enQueue(100);
console.log(st.getQueue());
st.deQueue();
console.log(st.getQueue())