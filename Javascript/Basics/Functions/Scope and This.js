// SCOPE
// var
    // function-scoped variable
    // attached to window object (window.varname)
    // can be re-declared
// let, const
    // block-scoped variable => better! (ES6)
    // not attached to window object
    // can't be re-declared

// using 'this'
const player = {
    name: 'Messi',
    age: 31,
    foot: 'L',
    leftFoot: 400,
    rightFoot: 100,
    get goals(){
        // Try playing with this function
        function sum(self) { return self.leftFoot + self.rightFoot; }
        return sum(this);
    }
}
//console.log(player.goals);
