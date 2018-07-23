function getPrimes(limit){
    for(let i=2; i<=limit; i++){
        let prime = true;
        
        for(let j=2; j<i && prime; j++)
            if(i % j == 0) prime = false;
        
        if(prime) console.log(i);
    }
}