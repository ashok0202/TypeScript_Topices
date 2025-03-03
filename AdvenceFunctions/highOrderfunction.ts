
//High Order Functions

function applyOperation<T>(arr: T[], operation: (item: T) => T): T[] {
    return arr.map(operation);
}

const numbers = [1, 2, 3, 4];
const doubled = applyOperation(numbers, (num) => num * 2);

console.log(doubled); 


//High Order with return type
function createMultiplier(factor: number): (value: number) => number {
    return (value: number) => value * factor;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); 
console.log(triple(5)); 
