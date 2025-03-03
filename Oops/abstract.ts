
//Abstraction 
abstract class Person{
    abstract  getName():void;
    abstract getId():void;
}

class Emp extends Person{
  override getName(): void {
    console.log("My name is Ashok");
  }
  override getId(): void {
    console.log("My id is : 101");
  }  
}

const emp=new Emp();
emp.getId();
emp.getName();