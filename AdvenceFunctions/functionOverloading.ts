// Function overloads
function getName(fName: string, lName: string): string;
function getName(fName: string, lName: string, age: number): string;

// Implementation of the overloaded function
function getName(fName: string, lName: string, age?: number): string {
    if (age !== undefined) {
        return `Name: ${fName} ${lName}, Age: ${age}`;
    }
    return `Name: ${fName} ${lName}`;
}

console.log(getName("Ashok", "Gunji")); // Name: Ashok Gunji
console.log(getName("Ashok", "Gunji", 21)); // Name: Ashok Gunji, Age: 21
