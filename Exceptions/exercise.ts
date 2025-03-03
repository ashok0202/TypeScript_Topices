import { Exception } from "./error.ts";


function getData(arr: Array<number>): void { 
    const index: number = 7; 
  
    try {
      if (arr[index]) { 
        console.log(arr); 
      } else {
        throw new Exception("Index Out of Bounds"); 
      }
  
    } catch (error) { 
      console.log(error); 
    }
  
  }
  
  const arr: Array<number> = [1, 2, 3, 4, 5];
  getData(arr);