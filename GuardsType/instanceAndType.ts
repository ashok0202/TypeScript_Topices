// deno-lint-ignore-file


//Type of 
//primitive data types like = (String,number,boolean,symbol,undefined,Object)

const name1:unknown="Hello";

if(typeof name1==="string"){  
    console.log(name1.toUpperCase());
}

//Instance of 
class Animal {}
class Dog extends Animal {}

let pet = new Dog();

console.log(pet instanceof Dog); // true
console.log(pet instanceof Animal); // true
