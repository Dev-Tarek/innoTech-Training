// Count occurrences of an item in array

function countOccur(array, val){
	return array.reduce((sum, current) => {
        let occur = (current == val) ? 1 : 0;
        return sum + occur;
    });
}

function countOccur2(array, val){
	let count = 0;
    for(let i=0; i<array.length; i++)
        if(array[i]==val)
            count++;
		
    return count;
}