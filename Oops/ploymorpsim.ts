// deno-lint-ignore-file
//MethodOverloading

class calculation{
    public static add(num1:number,num2:number):number;

    public static add(num1:number,num2:number,num3:number):number;


    public static add(num1:number,num2:number,num3?:number):number{
        if(num3!==undefined){
            return num1+num2+num3;
        }
        return num1+num2;
    }
}
console.log(calculation.add(2,4));
console.log(calculation.add(2,4,5));

//methodOverriden

class Person{
    private id:number;
    private name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    public getDetails():void{
        console.log(`The Employee Details is {id: ${this.id} ,name:${this.name}}`)
    }
}

class Emp1 extends Person{

    constructor(id:number,name:string){
        super(id,name);
    }
   

    public override getDetails(): void {
        console.log(`The is the Employee Details 1---`);
      
    }
}

const emp1=new Person(1,"ashok")
emp1.getDetails();

const emp2=new Emp1(2,"Nani");
emp2.getDetails();