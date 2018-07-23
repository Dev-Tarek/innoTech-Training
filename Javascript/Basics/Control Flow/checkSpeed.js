function checkSpeed(speed){
    let points = parseInt((speed-70)/5);
    return points < 1 ? "OK" : points < 12 ? points : "Expired";
}