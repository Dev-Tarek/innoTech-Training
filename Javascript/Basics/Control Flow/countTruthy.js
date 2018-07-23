function countTruthy(myArray){
    let count = 0;
    for(let i=0; i<myArray.length; i++)
        if(myArray[i])
            count++;
    
    return count;
}