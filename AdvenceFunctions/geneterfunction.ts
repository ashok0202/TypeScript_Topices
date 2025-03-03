

//Generater function
function* nextgenerator():IterableIterator<number>{
    yield 1;
    yield 2;
    yield 3;
}

const genrater=nextgenerator();

console.log(genrater.next().value);
console.log(genrater.next().value);
console.log(genrater.next().value);
console.log(genrater.next().value)// O/p -> Undefined 

//Interface Generater function
function* nextgenerator1():IterableIterator<number>{
    let val=1;
    while(true){
        yield val
        val++;
    }
}

const genrater1=nextgenerator1();
console.log(genrater1.next().value);
console.log(genrater1.next().value);
console.log(genrater1.next().value);
