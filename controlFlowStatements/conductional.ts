
//if /Else conduction

function graterNumber(a:number,b:number):number{
    if(a>b){
        return a;
    }
    else{
    return b;
    }
}
console.log( `Greater Elements of Two Numbers: `,graterNumber(10,20));

//if/Else /Else_if conductions
function graterNumber1(a:number,b:number,c:number):number{
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
    return b;
    }
    else{
        return c;
    }
}
console.log( `Greater Elements of Three Numbers: `,graterNumber1(10,20,30));

//switch case
function getDay(n:number):void{
    switch(n){
        case 1:
            console.log(`Monday`);
            break;
        case 2:
            console.log(`Tuesday`);
            break;
        case 3:
            console.log(`Wedensday`);
            break;
        case 4:
            console.log(`Thuresday`);
            break;
        case 5:
            console.log(`Friday`);
            break;
        case 6:
            console.log(`Saturday`);
            break;
        case 7:
            console.log(`Sunday`);
            break;
        default:
            console.log(`Invalid Input Plz Check....`);

    }
}
getDay(3);

//Ternary Operator(?:)
function ternaryOPerator(a:number):string{
    return a>18?"Eligibilty Vote":"Not Eligibility Vote";
}
console.log(`The vale Eligibility : `,ternaryOPerator(10));