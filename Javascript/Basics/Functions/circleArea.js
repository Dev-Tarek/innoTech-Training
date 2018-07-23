// Area of circle object using 2 methods

function Circle(radius){
    this.radius = radius;
    this.area = (area => this.radius*this.radius*Math.PI);
}

const circle1 = new Circle(2);

const circle2 = {
    radius: 2,
    get area() {
        return this.radius*this.radius*Math.PI;
    }
}

//console.log(circle1.area());
//console.log(circle2.area);
