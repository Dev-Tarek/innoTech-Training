// Get the maximum value in array
function getMaxInArray(array){
    let maxVal = 0;
    for(let value of array){
        if(maxVal < value)
            maxVal = value;
    }
    return maxVal;
}