// Divisible by 3 = Fizz, Divisible by 5 = Buzz, both = FizzBuzz
function fizzBuzz(n){
    if(typeof n != 'number') return NaN;
    let fizz = n%3;
    let buzz = n%5;
    if(!fizz && !buzz) return "FizzBuzz";
    if(!fizz) return "Fizz";
    if(!buzz) return "Buzz";
    return n;
}