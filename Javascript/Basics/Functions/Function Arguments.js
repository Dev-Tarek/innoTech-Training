// Arguments object
function displayArguments(){
    console.log(arguments.length, 'arguments.');
    for(let value of arguments)
        console.log(value);
}
// Using arguments object, we can pass
// any number different arguments and access them.

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