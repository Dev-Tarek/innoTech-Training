// Getters and Setters
const employee = {
    firstName: 'Abdo',
    lastName: 'Tarek',
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name){
        let parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

//console.log(employee.fullName);
employee.fullName = `Ahmed Tarek`;
//console.log(employee.fullName);