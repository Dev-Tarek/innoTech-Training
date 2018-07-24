const _items = new WeakMap();
class Stack{
    constructor(){
        _items.set(this, []);
    }
    get count(){
        return _items.get(this).length;
    }
    push(item){
        _items.get(this).push(item);
    }
    pop(){
        if(!this.count)
            throw new Error('Stack is empty.');
        return _items.get(this).splice(this.count-1,1)[0];
    }
    peek(){
        if(!this.count)
            throw new Error('Stack is empty.');
        return _items.get(this)[this.count-1];
    }
}

module.exports = Stack;