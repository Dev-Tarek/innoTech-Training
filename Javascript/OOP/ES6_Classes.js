
// ES6

// Class Declaration
class Circle{
    constructor(radius){
        this.radius = radius;
        // function declared as a member
        this.move(){
            console.log('move');
        }
    }
    // functions declared in the prototype of this object
    draw(){

    }
    // static functions are not assigend to objects
    // but can be used directly from the class
    static parse(str){
        // call this function with Circle.parse(string);
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

// Class Expression
const Square = class{

}

// Hoisting doesn't work for classes neither expression nor declaration