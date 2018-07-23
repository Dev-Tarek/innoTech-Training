function sumMultiples(firstNum, secondNum, limit){
    let sum = 0;
    let i = 1, j = 1;
    while(firstNum*i <= limit) sum += firstNum * i++;
    while(secondNum*j <= limit) sum += secondNum * j++;
    return sum;
}