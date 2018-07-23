// Return the maximum of 2 numbers
function getMax(firstNum, secondNum){
    return firstNum > secondNum ? firstNum : secondNum;
}

function isLandscape(width, height){
    return width > height;
}

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

function checkSpeed(speed){
    let points = parseInt((speed-70)/5);
    return points < 1 ? "OK" : points < 12 ? points : "Expired";
}

function displayEvenOdd(limit){
    for(let i=0; i<=limit; i++)
        i%2? console.log(i,"odd") : console.log(i,"even");
}

function countTruthy(myArray){
    let count = 0;
    for(let i=0; i<myArray.length; i++)
        if(myArray[i])
            count++;
    
    return count;
}

function showObjectProperties(obj){
    for (let key in obj)
        if(typeof obj[key] == 'string')
            console.log(key, obj[key]);
}

function sumMultiples(firstNum, secondNum, limit){
    let sum = 0;
    let i = 1, j = 1;
    while(firstNum*i <= limit) sum += firstNum * i++;
    while(secondNum*j <= limit) sum += secondNum * j++;
    return sum;
}

function calcGrade(marks){
    let sum = 0;
    for(let i = 0; i<marks.length; i++)
        sum+=marks[i];
    
    let average = sum/marks.length;
    
	if(average < 60) return 'F';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    if(average < 90) return 'B';
    return 'A';
}

function displayStars(rows){
    let row = 0;
    let stars = '*';
    while(row++ < rows){
        console.log(stars);
        stars += '*';
    }
}

function getPrimes(limit){
    for(let i=2; i<=limit; i++){
        let prime = true;
        
        for(let j=2; j<i && prime; j++)
            if(i % j == 0) prime = false;
        
        if(prime) console.log(i);
    }
}