function showAddress(address){
    for(let key in address)
        console.log(key, address[key]);
}

// Factory function
function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode,
    }
}

// Constructor function
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let addr1 = new Address('a','b','c');
let addr2 = new Address('1','2','3');

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

// Constructor function for Post object
function Post(title, author, body){
    this.title = title;
    this.author = author;
    this.body = body;
    this.comments = [];
    this.views = 0;
    this.isLive = false;
}
