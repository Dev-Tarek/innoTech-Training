class Shape{
    constructor(color){
        this.color = color;
    }
    move(){
        console.log('move');
    }
}

class Circle extends Shape{
    constructor(color, radius){
        super(color);   // We must call the parent's constructor first.
        this.radius = radius;
    }
    draw(){
        console.log('draw');
    }

    // Method Overridng
    move(){
        //calling the parent's method
        super.move();   // optional
        console.log('circle move');
    }
}

const c = new Circle('blue', 10);