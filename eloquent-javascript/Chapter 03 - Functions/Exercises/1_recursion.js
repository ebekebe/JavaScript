/*
  We've seen that the % operator can be used to test whether a number is odd
  or even by using % 2 to check whether it's divisible by two.

  Here's another way to define whether a positive whole number is even or odd:
  - Zero is even
  - One is odd
  - For any other number N, its evenness is the same as N - 2

  Define a recursive function 'isEven' coresponding to this description.
*/

// I decided to take advantage of the truthy / falsy nature of numbers,
// 0 = false and > 0 = true. 

// So on numbers less than 2 (0, 1) we just invert their boolean equivalents to determine their evenness
let isEven = n =>
  n < 2 ? !n : isEven(n - 2);

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));