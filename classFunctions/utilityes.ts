// deno-lint-ignore-file
interface User{
    id:number,
    name:string,
    age:number
}

//Partial
const parctialUser:Partial<User>={
    id:212,
    name:"Ashok"
}
console.log(parctialUser);

//Required
const requestUser:Required<User>={
    id:212,
    name:"Yashu",
    age:20
}
console.log(requestUser);


//Omit
const omitUser:Omit<User,'age'>={
    id:221,
    name:"nani"

}
console.log(omitUser);

//Pick
const pickUser:Pick<User,'name'>={
    name:"Phani"
}
console.log(pickUser);

//Record
const recordStu:Record<string,any>={
    id:21,
    name:"gani",
    branch:"EEE"

}
console.log(recordStu);

//Readonly
const userReadOnly: Readonly<User>={
    id:101,
    name:"nani",
    age:44
};
console.log(userReadOnly);
///console.log(userReadOnly.id=108); //Because It is a ReadOnly Property Don't re assining the values 


//Return Type
const add = (a: number, b: number): number => a + b;

// Extract the return type
type AddReturnType = ReturnType<typeof add>;

// AddReturnType is inferred as number
const sum: AddReturnType = add(1, 2);
console.log(sum);

//UperCase<T>
const val="ashok";
var get:Uppercase<typeof val>

console.log(val)

//never
function getError(): never {
    throw new Error("Something Wrong");
  }
function getnum(num:number):any {
    if(num===10){
        getError();
    }
    else{
        console.log("Yes")
    }
}
getnum(100)

//ReturnType
function getName(name:string):string{
    return name;
}
const returnType:ReturnType<typeof getName>=getName("Ashok");
console.log(returnType);

//Upercase
function getUpperCase(name1: string): string {
    return name1.toUpperCase();
} 
console.log(getUpperCase("ashok"));  
  
//ParameterType
function getparameter(name:string,age:number):void{
    console.log(name+"  "+age);
}
type parameterType=Parameters<typeof getparameter>;
const getDetails:parameterType=["ashok",21];
console.log(getDetails);

const a:number=10
var b:number
let c:number

var k:number;
function get1():void{
    k=10
    c=20;
    console.log(c);
    console.log(k)

}

get1()



type ty="User"|"admin"|"gust";

type Noacces=Exclude<ty,'admin'>

type acces=Extract<ty,"User"|"guest">

function greate(res:Noacces):void{
    if(res){
        console.log("SuccessFull Access....");
    }
    else{
        console.log("Failed Login...");
    }
}
function greate1(res:acces):void{
    console.log("Access Granted");
}

greate('gust');
greate1("User");


    
