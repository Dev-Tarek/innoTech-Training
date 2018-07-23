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

