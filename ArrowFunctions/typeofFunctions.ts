//Normal function

function getName(n1:string,n2:string):string{
    return n1+n2;
}

//annonomus Function
const getName1=function(n1:string,n2:string):string{
    return n1+n2;
}

//Arrow Functions
const getName2=(n1:string,n2:string):string=>{
    return n1+n2;
}

console.log(`Normal function`,getName("Ashok","Kumar"));
console.log(`Annomus Function`,getName1("Nani","Teja"));
console.log(`Arrow functions :`,getName2("Gani","Bhai"));