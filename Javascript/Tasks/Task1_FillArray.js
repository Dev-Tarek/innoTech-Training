function fillArray(start, end, step){
    let array = [];
    for(let i=start; i<=end; i+=step)
        array.push(i);
    return array;
}

function createFilledArray(start, end, parity = 'all'){
    let array = [];
    if(parity == 'all')
        return fillArray(start, end, 1);
    if(parity == 'even'){
        if(start % 2) start++;  // USER CHOSE EVEN BUT STARTED WITH ODD VALUE
        return fillArray(start, end, 2);
    }   
    if(parity == 'odd'){
        if(!(start % 2)) start++;   // USER CHOSE ODD BUT STARTED WITH EVEN VALUE
        return fillArray(start, end, 2);
    }
    throw new Error('Wrong parity!');
}

function sumArray(array){
    let sum = 0;
    return array.reduce((sum, item) => (sum + item));
}

try{
    let myArray = createFilledArray(1,5,'all');
    console.log(myArray);
    let sumOfMyArray = sumArray(myArray);
    console.log(sumOfMyArray);
}
catch(err){
    console.log(err);
}