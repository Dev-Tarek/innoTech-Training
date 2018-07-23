// Get new array with excepted values
function except(array, exclude){
    for(let i=0; i<exclude.length; i++){
        let idx = array.indexOf(exclude[i]);
        if(idx>=0)
            array.splice(idx,1);
    }
    return array;
}
