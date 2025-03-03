// deno-lint-ignore-file
function gatherSticks(isStickFound:boolean):Promise<any>{
    return new Promise((resolve,reject)=>{
        if(isStickFound){
            resolve(`Sticks Gathered`)
        }
        else{
            reject(`Sticks Not found`);
        }
    })
}

function arrageSticks():Promise<any>{
    return new Promise((resolve)=>{
        resolve(`Stickes Arranged`);
    })
}

function lightCompfire(islighterFound:boolean):Promise<any>{
    return new Promise((reslove,reject)=>{
        if(islighterFound){
            reslove(`Compfired Lighted`);
        }
        else{
            reject(`Light Not Found`);
        }
    })
}
async function lightCompfireTask(isStickFound:boolean,islighterFound:boolean) {
    try {
        const getgatherSticks=await gatherSticks(isStickFound);
        console.log(getgatherSticks);

        const getarrageSticks=await arrageSticks();
        console.log(getarrageSticks);

        const getCompfired=await lightCompfire(islighterFound);
        console.log(getCompfired);
        
    } catch (error) {
        console.log(error);
        
    }
    
}
lightCompfireTask(false,true);
