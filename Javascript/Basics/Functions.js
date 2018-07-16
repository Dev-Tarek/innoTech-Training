// Functions declared with Function Declaration
// can be used before declaring them, unlike
// functions declared with Function Expression;
// because of "hoisting" which means JS engine
// parses all function declarations before executing.

//Fun();

// Function Declaration
function Fun(){
    console.log('Fun');
}

// Function Expression
/// Anonymous Expression
let FunA = function(){
    console.log('A');
};
/// Named Expression
let FunB = function funcB(){
    console.log('B');
};

// Functions in JS are objects, so they can be assigned by reference.
let Fun_ = Fun;
let Fun_A = FunA;
let Fun_B = FunB;

//Fun_();
//Fun_A();
//Fun_B();

// Arguments object
function displayArguments(){
    console.log(arguments.length, 'arguments.');
    for(let value of arguments)
        console.log(value);
}
// Using arguments object, we can pass
// any number different arguemnts and access them.

///displayArguments(1, 2, 'a', 'bc', {'a':1}, undefined, [1,2]);

// Better way: using 'rest' operator
function displayArgs(value, ...args){
    console.log('value is ', value);
    console.log('rest of args: ', args);
}

///displayArgs('hello', 1, 2, 'a', 'b');

function sum(...values){
    return values.reduce((total, value) => (total + value));
}

//console.log(sum(1, 2, 4));

// Getters and Setters
const employee = {
    firstName: 'Abdo',
    lastName: 'Tarek',
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name){
        let parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

//console.log(employee.fullName);
employee.fullName = `Ahmed Tarek`;
//console.log(employee.fullName);

// SCOPE
// var
    // funtion-scoped variable
    // attached to window object (window.varname)
    // can be re-declared
// let, const
    // block-scoped variable => better! (ES6)
    // not attached to window object
    // can't be re-declared

// using 'this'
const player = {
    name: 'Messi',
    age: 31,
    foot: 'L',
    leftFoot: 400,
    rightFoot: 100,
    get goals(){
        // Try playing with this function
        function sum(self) { return self.leftFoot + self.rightFoot; }
        return sum(this);
    }
}
//console.log(player.goals);

// Exercises

function calcSum(){
    let sum = 0;
    for(let value of arguments)
        if(Array.isArray(value))
            sum += value.reduce((a, x) => (a + x));
        else
            sum += value;
    return sum;
}
//console.log(calcSum(1,2,[3,4]));

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

// Error Handling - Throwing Exceptions
const numbers = [1,2,3,4,5];
try{
    const count = countOccur([1,2,1,1], 1);
    console.log(count);
}
catch(err){
    console.log(err);
}

function countOccur(array, searchItem){
    if(!Array.isArray(array))
        throw new Error('Invalid input');

    return array.reduce((count, item) => {
        const occur = (searchItem === item) ? 1 : 0;
        return count + occur;
    })
}