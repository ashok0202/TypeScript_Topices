// deno-lint-ignore-file


//Public members are accessible from anywhere, both inside and outside the class. This is the default 
// visibility for class members if no access modifier is specified.

class Person{
    public id:number;
    public name:string;
    public dept:string;

    public constructor(id:number,name:string,dept:string){
        this.id=id;
        this.name=name;
        this.dept=dept;
    }

    public getDetails():void{
        console.log(`person id => `,this.id);
        console.log(`person name => `,this.name);
        console.log(`person dept =>`,this.dept);

    }
}
const per1=new Person(1,"Ashok","EEE");
console.log(per1);
console.log(per1.id)   //Access allow
console.log(per1.name) //Access allow
console.log(per1.dept) //Access allow
per1.getDetails();


//Private members are only accessible within the class that defines them. 
// They cannot be accessed directly from outside the class or by any subclasses (derived classes).

class Person1{
    private id:number;
    private name:string;
    private dept:string;

    public constructor(id:number,name:string,dept:string){
        this.id=id;
        this.name=name;
        this.dept=dept;
    }

    public getDetails():void{
        console.log(`person id => `,this.id);
        console.log(`person name => `,this.name);
        console.log(`person dept =>`,this.dept);

    }
}
const per2=new Person1(1,"Ashok","EEE");
console.log(per2);
//Property 'id','name','dept' is private 
//console.log(per2.id)   //Not Access allow
//console.log(per2.name) //Not Access allow
//console.log(per2.dept) //Not Access allow
per1.getDetails(); //beacause it is public memeber



//Protected members are similar to private members but with the additional difference that they can be 
// accessed in subclasses (derived classes). However, they are still not accessible from outside the class.

class Employee {
    protected name: string;
    protected position: string;

    constructor(name: string, position: string) {
        this.name = name;
        this.position = position;
    }

    protected displayPosition() {
        console.log(`Position: ${this.position}`);
    }

    public greet() {
        console.log(`Hello, I am ${this.name}`);
        this.displayPosition();  // Accessible within the class
    }
}

class Manager extends Employee {
    constructor(name: string, position: string) {
        super(name, position);
    }

    public greetManager() {
        console.log(`I am a Manager: ${this.name}`);
        this.displayPosition();  // Accessible in subclass
    }
}

const manager = new Manager("Bob", "Manager");
manager.greetManager();           // Works fine, as displayPosition is protected and called in subclass
// manager.displayPosition();     // Error: Property 'displayPosition' is protected and only accessible
                                  // within class 'Employee' and its subclasses



//ReadOnly Property
class Person3{
    readonly id:number;
    name:string;
    dept:string;

    public constructor(id:number,name:string,dept:string){
        this.id=id;
        this.name=name;
        this.dept=dept;
    }

    public getDetails():void{
        console.log(`person id => `,this.id);
        console.log(`person name => `,this.name);
        console.log(`person dept =>`,this.dept);

    }
}
const per3=new Person3(1,"Ashok","EEE");
//console.log(per3.id=212)       //Cannot assign to 'id' because it is a read-only property.


