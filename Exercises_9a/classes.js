//EXERCISE 1 - 3 / SLIDE 19 / PAGE 1-15

class Employee {

    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    //EXERCISE 2
    promote(a, b) {
        this.jobTitle = a;
        this.payRate = b;
    }

    //EXERCISE 3
    getIntro() {
        return "Hi! I'm " + this.firstName + " " + this.lastName +
            " and I am a " + this.jobTitle;
    }
}

//EXERCISE 1 TEST
let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);

console.log(`Employee ${employee1.firstName} created`);

console.log(`Employee ${employee1.getFullName()} created`);
console.log(`Job Title is ${employee1.jobTitle}`);
console.log(`Pay rate is ${employee1.payRate}`);

console.log('---------');

let employee2 = new Employee(2, 'Kris', 'Wrangler', 'Phone Operator', 50.23);
console.log(`Employee ${employee2.getFullName()} created`);
console.log(`Job Title is ${employee2.jobTitle}`);
console.log(`Pay rate is ${employee2.payRate}`);

//EXERCISE 2 TEST
console.log('---------');
employee1.promote("Sr. Graphic Artist", 46.75);

console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

//EXERCISE 3 TEST
console.log('---------');
let intro = employee1.getIntro();
console.log(intro);

//TEST
console.log('---------');
console.log('---------');

employee2.promote('Computer Power Specialist', 55.73);
console.log(employee2.getIntro());
console.log(`Job Title: ${employee2.jobTitle} `);
console.log(`Pay rate: ${employee2.payRate}`);
