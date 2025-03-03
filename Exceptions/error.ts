// deno-lint-ignore-file


export class Exception extends Error{
    constructor(message:string){
        super(message);
    }
}