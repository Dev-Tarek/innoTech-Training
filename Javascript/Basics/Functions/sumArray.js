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