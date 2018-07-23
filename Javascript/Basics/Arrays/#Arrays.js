// Create array filled with a range
function arrayFromRange(min, max){
    let array = [];
    for(let i= min; i <= max; i++)
        array.push(i);
    return array;
}

// Check if a value is in array
function includes(array, val){
    let found = false;
    for(let i=0; i<array.length && !found; i++)
        if(array[i]==val)
            found = true;

    return found;
}

// Get new array with excepted values
function except(array, exclude){
    for(let i=0; i<exclude.length; i++){
        let idx = array.indexOf(exclude[i]);
        if(idx>=0)
            array.splice(idx,1);
    }
    return array;
}

// Count occurrences of an item in array
function countOccur(array, val){
	return array.reduce((sum, current) => {
        let occur = (current == val) ? 1 : 0;
        return sum + occur;
    });
	/*
	let count = 0;
    for(let i=0; i<array.length; i++)
        if(array[i]==val)
            count++;
		
    return count;
	*/
}

// Get the maximum value in array
function getMaxInArray(array){
    let maxVal = 0;
    for(let value of array){
        if(maxVal < value)
            maxVal = value;
    }
    return maxVal;
}