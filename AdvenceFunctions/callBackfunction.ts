//Types of defining of callBack
//1.Inline Type.
//2.Type alise.
//3.Interface


//Inline type of callBack,

function getName(a:string,callBack:(result:string)=>void):void{
    const nameUpper=a.toUpperCase();;
    callBack(nameUpper);

}
getName("ashok",((result)=>{
    console.log(result);
}))


//Type alise
type callbackType=(add:number)=>void;

function addFun(a:number,b:number,callBack:callbackType):void{
    const sum=a+b;
    callBack(sum);
}

addFun(10,20,((result:number)=>{
    console.log(`Sum of two numbers: ${result}`)
}))

//Interface
interface successType{
    (message:string):void;
}

function getVoting(name:string,age:number,eligibile:successType,noteligibile:successType):void{
    if(age>=18){
        eligibile(`Yeah..! eligibility for Voting: ${name}`);
    }
    else{
        noteligibile("Not for voting because ur age is below 18");
    }
}
getVoting(
    "ashok",
    20,
    (success)=>console.log(success),
    (failure)=>console.log(failure)

);