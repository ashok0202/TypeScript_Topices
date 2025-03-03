
//for loop
function forloop(a:number,b:number):void{
    for(let i=a;i<=b;i++){
        console.log(i);
    }
}
forloop(1,20);

//nested for loop
for(let i=1;i<10;i++){
    for(let j=i;j<10;j++){
        console.log(j);
    }
    console.log();
}

//while loop
function sumOfDigits(n:number):number{
    let res:number=0;

    while(n!=0){
        const dig:number=n%10;
        res+=dig;
        n=Math.round(n/10);

    }
    return res;
}
console.log(`Sum of the Digits: `,sumOfDigits(1234));

//do-While loop
function doWilleloop(n:number):void{
    do{
        console.log(n);
        n=n+1;
    }
    while(n<10);
}
doWilleloop(1);
