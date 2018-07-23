let _radius = new WeakMap();
let _move = new WeakMap();

class Circle{
    constructor(radius){
        _radius.set(this, radius);
        
        _move.set(this, ()=>{
            console.log('move', this);
            // arrow function inheirt 'this'
            // from the containing function.
        });

        /*
        _move.set(this, function(){
            console.log('move', this);
            // problem: 'this' doesn't refer to the object
        });
        */
    }

    getRadius(){
        return _radius.get(this);
    }
    move(){
        _move.get(this)(); // calling the function.
    }
}

const c = new Circle(2);