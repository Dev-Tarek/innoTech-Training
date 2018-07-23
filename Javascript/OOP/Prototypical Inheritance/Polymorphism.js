function Shape(color){
    this.color = color;
}

Shape.prototype.draw = function(){
    console.log('draw shape');
}

function Circle(radius, color){
    Shape.call(this, color);
    this.radius = radius;
}

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Circle;
}
extend(Circle, Shape);

Circle.prototype.draw = function(){
    console.log('draw circle');
}

// Polymorphism means we have a function with same name in multiple forms
let shapes = [new Shape('red'), new Circle(1, 'blue')];
for(let shape of shapes){
    shape.draw();
}

