// Base class

//single-level Inheritence
class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public greet(): void {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

// Derived class
class Employee extends Person {
    private employeeId: number;

    constructor(name: string, employeeId: number) {
        super(name); // Call the base class constructor
        this.employeeId = employeeId;
    }

    public displayEmployeeInfo(): void {
        console.log(`Employee Name: ${this.name}, ID: ${this.employeeId}`);
    }
}


const employee = new Employee("Ashok", 101);
employee.greet(); // Output: Hello, my name is Ashok
employee.displayEmployeeInfo(); // Output: Employee Name: Ashok, ID: 101


class Manager extends Employee {
    constructor(name: string, employeeId: number) {
        super(name, employeeId);
    }
    
    public override greet(): void {
        console.log(`Hello, I am Manager ${this.name}.`);
    }
}


const manager = new Manager("Yashu", 202);
manager.greet(); // Output: Hello, I am Manager Yashu.
manager.displayEmployeeInfo(); // Output: Employee Name: yashu, ID: 202


