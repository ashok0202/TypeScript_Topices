// deno-lint-ignore-file
//Union
type vale1=number|string
const name1:vale1="ashok";
console.log(name1);

//IntersectionType

interface person{
    id:number,
    name:string   //name?:string  it's also declared 
}
interface work{
    place:string
}
type emp=person & work; //Intersection of the Two Obj

const Employee:emp={
    id:212,
    name:"nanai",
    place:"Hyd"
}
console.log(Employee);

//Literal Type;
let vale2:"Yes"|"NO";
vale2="Yes";
//vale2="Hey"  //Literal meance of Only Declared vales are Assined values onother vales Show an error;
console.log(vale2);

//Type Aliases
type vale3=string|number;

const name2:vale3=121;
const name4:vale3="Ashok";
//let booleVal:vale3=true // It's means Only assining the String or number then declaring the values otherthen datatype vales show an Error
console.log(name2);
console.log(name4);

//Type Assertions
const vale4:any="Ashok";
const stringlength:number=(<string>vale4).length;
const stringlength1:number=(vale4 as string).length;

console.log(stringlength);
console.log(stringlength);

//Optional(?:)
interface Person{
    id:number,
    name?:string  //Declearing (?: ) this its value is Optional 
}
const person1:Person={ id:101 }
const person2:Person={id:102,name:"Ashok"}

console.log(person1);
console.log(person2);


//ReadOnly 
interface Car{
    readonly cartype:string,
    fuelType:string
}
const car1:Car={cartype:"Maruthi",fuelType:"Pertol"};
//car1.cartype="Nano";    //Cannot assign to 'cartype' because it is a read-only property.
console.log(car1);


//Nullable Type
type name5=string|null;
const vale5:name5="Ashok";
let vale6:undefined=undefined;

let vale7:null=null;
console.log(vale7)


//Non-null Operation
let value: string | null = "Hello";
let length: number = value!.length; // TypeScript assumes 'value' is not null here
console.log(length);

//Destructuring Types
interface Student{
    id:number,
    name:string,
    branch:string
}
const stud1:Student={id:101,name:"Ashok",branch:"EEE"};
const{id,name,branch}=stud1;
console.log(`Student1 Details :`, stud1);
console.log(`id of stud1 :`,id);
console.log(`name of stud1 :`,name);
console.log(`Branch of stud1 :`,branch);

