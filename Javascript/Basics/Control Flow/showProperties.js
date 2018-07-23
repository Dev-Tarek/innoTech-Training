function showObjectProperties(obj){
    for (let key in obj)
        if(typeof obj[key] == 'string')
            console.log(key, obj[key]);
}