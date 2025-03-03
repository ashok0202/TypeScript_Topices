//A 'break','continue','return' statement can only be used within an enclosing iteration or switch statement.

//Break conduction
for(let i=1;i<10;i++){
    if(i===5){
        break
    }
    console.log(i);
}


//continue
for(let i=1;i<10;i++){
    if(i===5){
        continue //its works as a skip the condition flow
    }
    console.log(i);
}

//Return 
function sendMessage(a:number):string{
    for(let i=a;i<10;i++){
        if(i===5){
            return "Reached the value";  //break or return the looping statement
        }  
    }
    return "not Found"
}
console.log(sendMessage(1));


