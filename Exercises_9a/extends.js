//EXERCISE 1 - 3 / SLIDE 24 / PAGE 1 - 20
//EXERCISE 1
class Person{

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}

let person1 = new Person('Bryan','Yan');
console.log(person1.getFullName());

//EXERCISE 2
class Employee extends Person{

    constructor(firstName, lastName, id, jobTitle, payRate){
        super(firstName, lastName);
        
        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}

console.log('------------------')

employee1 = new Employee('Kris', 'Tales', 1, 'Crystal Manager', 59.19);
employee3 = new Employee('Bryan', 'Yan', 3, 'Psuedo Manager', 999.03);
console.log(`Id: ${employee1.id} | NAME: ${employee1.getFullName()} | POSITION: ${employee1.jobTitle} | PAY: ${employee1.payRate}`);
console.log(`Id: ${employee3.id} | NAME: ${employee3.getFullName()} | POSITION: ${employee3.jobTitle} | PAY: ${employee3.payRate}`);