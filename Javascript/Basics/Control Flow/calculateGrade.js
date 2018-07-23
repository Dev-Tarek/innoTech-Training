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