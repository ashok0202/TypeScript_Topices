// deno-lint-ignore-file

function getError(message:string):never{
    throw new Error(message);
}

class missmatchError extends Error{
    constructor(message:string){
        super(message);
        this.message=message;
    }
}
function handlerError(error:Error){
    if(error instanceof missmatchError){
        console.log(`Message: ${error.message}`);
        
    }
}
function getException(a:number,b:number):any{
    try {
        if(a!==b){
            console.log("Hey Ashok");
        }
        else{
           // throw  getError("Not get answer");
           throw new missmatchError("Missmatch Error.......");
        }
    } catch (error) {
        console.log(`the Error is`,error);  
    }
    finally{
        console.log(`Finally block Executed Only time`);
    }
}
getException(1,1);