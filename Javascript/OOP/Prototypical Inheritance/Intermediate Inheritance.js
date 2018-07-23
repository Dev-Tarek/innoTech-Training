function Shape(color){
    this.color = color;
}

Shape.prototype.draw = function(){
    console.log('draw');
}

function Circle(radius, color){
    // Use .call to change reference of 'this' on calling Shape function
    Shape.call(this, color);
    this.radius = radius;
}

function extend(Child, Parent){
    // Set Parent as parent to Child
    Child.prototype = Object.create(Parent.prototype);
    // Fix overwriting of constructor function for Child
    Child.prototype.constructor = Circle;
}
extend(Circle, Shape);

let s = new Shape();
let c = new Circle(2,'red');

