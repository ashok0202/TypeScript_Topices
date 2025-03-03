// deno-lint-ignore-file
function Loggerfun(){
    
function Logger(target:Function){
    console.log("Logging.....")
}
return Logger;
}

@Loggerfun()
class User{
    name:string="Ashok";
    age:number=21;

    constructor(){
        console.log("constructer is calling....");
    }
}

const user=new User();