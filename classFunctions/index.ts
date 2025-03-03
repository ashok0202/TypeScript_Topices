// deno-lint-ignore-file
class Fun {
    par1: string;
    par2: string;

    constructor(par1: string, par2: string) {
        this.par1 = par1;
        this.par2 = par2;
    }
}

let obj = new Fun("121", "nani");
console.log(obj);