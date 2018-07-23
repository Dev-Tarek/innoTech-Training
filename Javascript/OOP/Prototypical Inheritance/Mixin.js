// Assigning properties to objects with more flexibility

function mixin(Obj, ...sources){
    return Object.assign(Obj, ...sources);
}

const canEat = {
    eat: function(){
        console.log('eating');
    }
}
const canWalk = {
    walk: function(){
        console.log('walking');
    }
}
const canSwim = {
    swim: function(){
        console.log('swimming');
    }
}

function Person(){
}

mixin(Person.prototype, canEat, canWalk);   // better way
const person = new Person();

const fish = mixin({}, canEat, canWalk);    // another way

console.log(person);
console.log(fish);