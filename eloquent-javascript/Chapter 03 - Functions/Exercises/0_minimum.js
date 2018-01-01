/*
    The previous chapter introduced the standard function 'Math.min' that returns
    its smallest argument. 
    
    We can do that ourselves now. Write a function 'min' that
    takes two arguments and returns their minimum.

    console.log(min(0, 10)); // -> 0
    console.log(min(0, -10)); // -> -10
*/

let min = (x, y) => x < y ? x : y;

console.log(min(5, 20));
console.log(min(0, -10));
console.log(min(-5, -100));
console.log(min(0, 1));
