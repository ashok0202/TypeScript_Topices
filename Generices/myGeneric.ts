// deno-lint-ignore-file

//Declaration as number<Array>
const scroes:Array<number>=[];
console.log(scroes);


//Declation as string<Array>
const names:Array<string>=[];
console.log(names);


//without generice :input as number type and Output as number type
function identityOne(val:number):number{
    return val
}
console.log(identityOne(10))


//without generice :input as any type and Output as ony type
function identityTwo(val:any):any{
    return val;
}
console.log(identityTwo("Ashok"));

//Input as Array and Output as Array
function identityThree<Type>(val:Type):Type{
    return val;
}
console.log(identityThree([1,2,3,4,5,6]));


//Input as any Type Output as String
const identityFour=<T>(val:T):string=>{
    return val+"";
}
identityFour(4);


//Declaration of Object
interface Person{
    id:number,
    name:string,
    dept:string
}
const Obj=identityThree<Person>({
    id:101,
    name:"ashok",
    dept:"EEE"
})
console.log(Obj);

//normal function 
function getProduct<T>(products:T[]):T{
    const index=3;
    return products[index];
}
const arrProduct:Array<number>=[3,2,1,5,6,8,9];
console.log(getProduct(arrProduct));


//Arrow function 
const arrowgetProduct=<T>(products:T[]):T=>{
    const index=6;
    return products[index];
}
console.log(arrowgetProduct(arrProduct));

