// adding properities
let obj = {};
obj.location = {x:1, y:1}

// deleting properties
delete obj.location;

// iterating over object properties with for-in
for(let key in obj){
    console.log(key);
}

// getting array of keys for an object
const keys = Object.keys(obj);

// check for key existence in object
if('location' in obj)
    console.log(true);

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


// Exercise

function Stopwatch(){
    let duration = 0;
    let started = false;
    let a = 0;
    let b = 0;
    this.start = function(){
        if(started) throw new Error('Already running.');
        a = new Date().getTime();
        started = true;
    }
    this.stop = function(){
        if(!started) throw new Error('Already stopped.');
        b = new Date().getTime();
        duration += (b - a)/1000;
        started = false;
    }
    this.reset = function(){
        a = 0;
        b = 0;
        started = 0;
        duration = 0;
    }
    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration;
        }
    })
}

let s = new Stopwatch();