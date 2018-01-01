/*
  You can get the Nth character, or letter, from a string by writing
  "string".charAt(N), similar to how you get its length with "s".length.

  The returned value will be a string containing only one character.

  Write a function 'countBs' that takes a string as its only argument and returns
  a number that indicates how many uppercase "B" characters are in the string.

  Next, write a function called countChar that behaves like countBs, except it
  takes a second argument that indicates the character that is to be counted.

  Rewrite 'countBs' to make use of this new function.
*/

const countBs = s => countChar(s, 'B');

// - SOLUTION 1 -
const countChar = (s, c) => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      count++;
    }
  }
  
  return count;
}
// - SOLUTION 2 -
let countC = (s, c) => s.split("").filter(ch => ch === c).length;

console.log(countBs('Hello my name is high low'));
console.log(countBs('BBC'));
console.log(countC('Hello my name is high low', 'B'));
console.log(countC('BBC', 'B'));
