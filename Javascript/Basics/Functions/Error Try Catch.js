// Error Handling - Throwing Exceptions
const numbers = [1,2,3,4,5];
try{
    const count = countOccur([1,2,1,1], 1);
    console.log(count);
}
catch(err){
    console.log(err);
}
