let _radius = new WeakMap();
let _move = new WeakMap();

class Circle{
    constructor(radius){
        _radius.set(this, radius);
        
        /*  Getters and Setters before ES6
        Object.defineProperty(this, 'radius', {
            get: function(){
                return _radius.get(this);
            },
            set: function(radius){
                _radius.set(this, radius);
            }
        });
        */
    }

    // Getters and Setters in ES6

    get radius(){
        return _radius.get(this);
    }

    set radius(value){
        if(value<=0) throw new Error('invalid radius.');
        _radius.set(this, value);
    }
}

const c = new Circle(2);