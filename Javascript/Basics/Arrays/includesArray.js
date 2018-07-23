// Check if a value is in array
function includes(array, val){
    let found = false;
    for(let i=0; i<array.length && !found; i++)
        if(array[i]==val)
            found = true;

    return found;
}
