class queue{
    constructor(){
        this.items = [];
    }
    enqueue(elems){
        this.items.push(elems);
        return this.items.length;
    }
    dequeue(){
        return this.items.shift()
    }
    front(){
        return this.items[0];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    clear(){
        this.items = []
        return this.items;
    }
    size(){
        return this.items.length;
    }
}