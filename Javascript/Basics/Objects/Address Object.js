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
