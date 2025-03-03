
interface Person {
    id: number;
    name: string;
    dept?: string;   // Optional Perpameter
    salary: number | bigint;  // salary can be either a number or a bigint
}

function getPerson(_id: number, _name: string, _dept: string, _salary: number | bigint): void {
    const per1: Person = {  
        id: _id,
        name: _name,
        dept: _dept,
        salary: _salary,   // This will accept both number and bigint
    };
    console.log(per1);
}

getPerson(1, "Alice", "Engineering", 50000); 
getPerson(2, "Bob", "HR", 10000000000n);   


//Optional Perameter
function getName(a:number,b?:number):number{
    return a+ (b||3);  //if b not present value taken value is 3;
}
console.log(`Optional Parameter : `,getName(1,5));
console.log(`Optional Parameter one value : `,getName(1));



//Default Parabeters
function getName1(a:number,b:number=10):number{
    return a+b;
}
console.log(`Default parameter : `,getName1(3));
console.log(`Default parameter two vales : `,getName1(3,5));


//Rest Parameters Array
const restParam=(...rest:number[]):number[]=>{
    return rest;
}
console.log(`Rest parameters Passing: `,restParam(3,4,5,1,2,8,9,0));


//In Array first two values declarey by variables and remaining values are Array represented by usying rest parameter
const restParam1=(a:number,b:number,...rest:number[]):void=>{
    console.log(`Addition of two values ${a} and ${b} => ${a+b}`);
    console.log(`reamaining values: `,rest);
}
const arr:number[]=[9,8,7,6,5,4,3,2];
const [a, b, ...rest] = arr;
restParam1(a,b,...rest);



