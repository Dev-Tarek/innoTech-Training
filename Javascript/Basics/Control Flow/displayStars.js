function displayStars(rows){
    let row = 0;
    let stars = '*';
    while(row++ < rows){
        console.log(stars);
        stars += '*';
    }
}