const arr:number[] =[1,2,3,4,5,6];
console.log(arr);

//map function
const mapArr:number[]=arr.map((n)=>n*2)
console.log(`map function :> `,mapArr);

//reduce function
const reduceFun:number=arr.reduce((a,b)=>a+b);
console.log("reduce Fun => "+reduceFun);

//Filter
const filter:Array<number>=arr.filter((n)=>n%2===0);
console.log(`Even Elements in array => `,filter);


function get(n:number):boolean{
    return n>4;
}
//every
const everyfun=arr.every((n)=>get(n))
console.log(`Every Fun => `,everyfun);

//some
const someFun=arr.some((n)=>get(n));
console.log(`Some function => `,someFun);

//ForEach
const forEachFun=arr.forEach((n)=>console.log(n))
console.log(`Print the Elemnts in arr`,forEachFun);


