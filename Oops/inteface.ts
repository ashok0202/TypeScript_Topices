

interface Person {
    getName(): void; // No need for 'public' as it's implied
}

// Implementing the interface
class Employee implements Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): void {
        console.log(`Name: ${this.name}`);
    }
}
const employee = new Employee("Ashok");
employee.getName(); // Output: Name: John Doe
