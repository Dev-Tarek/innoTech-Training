// adding properities
let obj = {};
obj.location = {x:1, y:1}

// deleting properties
delete obj.location;

// iterating over object properties with for-in
for(let key in obj){
    console.log(key);
}

// getting array of keys for an object
const keys = Object.keys(obj);

// check for key existence in object
if('location' in obj)
    console.log(true);
