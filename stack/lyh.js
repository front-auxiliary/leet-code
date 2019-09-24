class stack{
    constructor(){
        this.items = [];
    }
    push(elems){
        this.items.push(elems)
        return this.items.length;
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0;
    }
    clear(){
        this.items = [];

    }
    size(){
        return this.items.length
    }

}

function divideBy2(decNumber){
    var remStack = new stack(),
        rem,
        binaryString = '';
    while(decNumber>0){
        rem = Math.floor(decNumber%2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber/2);
    }
    while(!remStack.isEmpty()){
        binaryString+=remStack.pop().toString()
    }
    return binaryString;
}