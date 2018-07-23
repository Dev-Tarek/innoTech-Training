let _radius = Symbol();
let _draw = Symbol();

class Circle{
    constructor(radius){
        // this.radius = radius; // Public member
        this[_radius] = radius; // Private (symbol) member
    }

    // Private (symbol) method
    [_draw](){
        console.log('draw');
    }
    move(){
        console.log('move');
    }
}

const c = new Circle(2);

//console.log(Object.getOwnPropertySymbols(c));
let key0 = Object.getOwnPropertySymbols(c)[0];
console.log('radius = ', c[key0]);