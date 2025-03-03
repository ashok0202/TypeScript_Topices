//Encapulastion

class Employee{
    private id: number;
    private name:string;
    private dept:string;

    public constructor(id:number,name:string,dept:string){
        this.id=id;
        this.name=name;
        this.dept=dept;
    }

    public setId(id:number):void{
        this.id=id;
    }
    public getId():number{
        return this.id;
    }
    public setName(name:string):void{
        this.name=name;
    }
    public getName():string{
        return this.name;
    }
    public setDept(dept:string):void{
        this.dept=dept;
    }
    public getDept():string{
        return this.dept;
    }

    public toString(){
        return `Employee: { id: ${this.id}, name: ${this.name}, dept:${this.dept}}`
    }
}

const emp1=new Employee(1,"Ashok","Developer");
console.log(emp1);
//geting the Employee
console.log(emp1.getDept());
//Changing or Set the Dept of Employee
emp1.setDept("Backend Developer");

//Total Emp details
console.log(emp1);