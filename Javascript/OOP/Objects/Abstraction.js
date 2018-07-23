// hiding properties - abstraction
function Circle(radius){
    this.radius = radius;
    let calculateLocation = function(){
        // this is a private member declared as a variable
    }
    let defaultLocation = {
        x: 1,
        y: 1
    }
    this.draw = function(){
        calculateLocation();  
        // using local variables inside a member
        // function will keep them in memory..
    }
    // creating a getter function to get vaue
    // of local variable as read-only, and
    // a setter to set a new value for it
    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            // do some error handling here..
            defaultLocation = value;
        }
    })
}
let circle = new Circle();
console.log(circle.defaultLocation); // returns defaultLocation object
