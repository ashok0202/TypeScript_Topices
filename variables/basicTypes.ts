// deno-lint-ignore-file

//string
let a:string="Ashok";
console.log(a);

//number
const num:number=1234;
console.log(num);

//boolean
const bool:boolean=true;
console.log(bool);

//array
const arr:number[]=[1,2,3,4,5,6];
const arr1:Array<Number>=[1,2,3,4,5,6];
console.log(arr);
console.log(arr1);

//tupe
const tple:[string,boolean,number]=["ashok",true,121];
console.log(tple);

//any
const name3:any="Ashok"; //string | Number | boolean ... any type accepted
console.log(name3);

//UnKnown
let val: unknown; 
console.log(val); 
val = true; 
console.log(val); 
val = 7; 
console.log(val); 
val = "Hello Ashok"; 
console.log(val); 
val = [1, 2, 3, 4]; 
console.log(val);

const ran=Math.random()*1000000000000;
const round=Math.floor(ran);
console.log(round);

