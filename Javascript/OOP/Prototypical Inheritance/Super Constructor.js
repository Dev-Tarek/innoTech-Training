function Shape(color){
    this.color = color;
}

function Circle(radius, color){
    // Use .call to change reference of 'this'
	// to refer to Circle on calling Shape function.
	
    Shape.call(this, color);
    this.radius = radius;
}

let s = new Shape('blue');
let c = new Circle(2,'red');
//Object.setPrototypeOf(Circle, Shape);