// deno-lint-ignore-file

interface Quize{
    name:string,
    type:string
}

interface Cource{
    name:string,
    auther:string,
    subject:string
}

class sellable<T>{
    public cart:T[]=[];

    addCart(product:T){
        this.cart.push(product);
    }
}


// class level Generic

interface Emp{
    id:number,
    name:string,
    dept:string
}
class Employee<T,T1>{
    private value:number;

    constructor(value:number){
        this.value=value;
    }

    public getValue():number{
        return this.value;
    }

    public setValue(val:number):void{
        this.value=val;
    }
}

const emp1=new Employee<number,number>(10);
console.log(emp1.getValue());



// Getting the Emp interface
class Employee1<T>{
    private obj:T

    constructor(data:T){
        this.obj=data;
    }
    public getEmp():T{
        return this.obj
    }
}

const obj:Emp={
    id:101,
    name:"Ashok",
    dept:"EEE",
}

const em2=new Employee1<Object>(obj);
console.log(em2.getEmp());


function getName<T>(a:any):T{
    return a;
}

type name1=ReturnType<typeof getName>;
const nam:name1=getName<string>("Ashok");
console.log(nam);


