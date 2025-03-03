

//Custuem Type
type Person={
    id:number,
    name:string,
    dept:string
}

const pers1:Person={
    id:101,
    name:"Ashok",
    dept:"EEE"
}
console.log(pers1);


//. Discriminated Unions
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };
type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
  }
}

const findarea:Circle={
    kind:"circle",
    radius:12
}
console.log(getArea(findarea));



//Mapped Type 
type Person1 = { name: string; age: number };
type ReadonlyPerson = { readonly [K in keyof Person1]: Person1[K] };

const john: ReadonlyPerson = { name: "John", age: 30 };
console.log(john);
// john.age = 31; // Error: Cannot assign to 'age' because it is a read-only property
