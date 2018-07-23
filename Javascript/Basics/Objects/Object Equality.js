// Check address equality for Address objects
function areEqual(address1, address2){
    let equal = true;
    for(let key in address1){
        if(address1[key] !== address2[key]){
            equal = false;
            break;
        }
    }
    return equal;
}

// Check if two objects are the same exact object
function areSame(object1, object2){
    if(object1 === object2)
        return true;
    return false;
}