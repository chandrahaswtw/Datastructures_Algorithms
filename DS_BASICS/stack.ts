class stack {
    myStack : Array<any>;
    constructor(){
        this.myStack = [];
    }

    push(val : any){
        this.myStack.push(val)
    }

    pop(){
        return this.myStack.pop()
    }

    getStack(){
        return this.myStack
    }
}

var st = new stack();
st.push(5);
st.push(100);
console.log(st.getStack());
st.pop();
console.log(st.getStack())